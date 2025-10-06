import {
  AstroTime,
  Observer,
  Body,
  Equator,
  Ecliptic,
  VectorFromHorizon,
  Rotation_HOR_EQD,
  RotateVector
} from "astronomy-engine";

/** Normalize degrees into [0, 360) */
function normDeg(d: number) {
  return ((d % 360) + 360) % 360;
}

/** Convert local time → UTC using timezone string like "+05:30" or "-04:00"
 *  (If you need IANA time zone strings such as "Asia/Kolkata", say so and I can add that handling.)
 */
function toUTC(date: Date, timezone: string): Date {
  if (/^[+-]\d{2}:\d{2}$/.test(timezone)) {
    const sign = timezone[0] === "-" ? -1 : 1;
    const [h, m] = timezone.slice(1).split(":").map(Number);
    const offsetMin = sign * (h * 60 + m);
    return new Date(date.getTime() - offsetMin * 60000);
  }
  // Fallback: if timezone not in ±HH:MM format, return the input date (caller should pass UTC or ±HH:MM)
  return date;
}

function getZodiac(longitude: number): string {
  const signs = [
    "Aries", "Taurus", "Gemini", "Cancer",
    "Leo", "Virgo", "Libra", "Scorpio",
    "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];
  const lon = normDeg(longitude);
  return signs[Math.floor(lon / 30) % 12];
}

export function generateKundli(
  birthDateTime: Date,
  latitude: number,
  longitude: number,
  timezone: string // e.g. "+05:30"
) {
  // 1) Convert to UTC (astronomy-engine expects an absolute time)
  const birthUTC = toUTC(birthDateTime, timezone);
  const time = new AstroTime(birthUTC);

  // 2) Observer
  const observer = new Observer(latitude, longitude, 0); // elevation 0 m

  // 3) Planets: compute ecliptic longitude for each body
  const bodies: Body[] = [
    Body.Sun, Body.Moon, Body.Mercury,
    Body.Venus, Body.Mars, Body.Jupiter, Body.Saturn
  ];

  const planets: Record<string, { longitude: number; sign: string }> = {};

  for (const b of bodies) {
    // Equatorial coords (topocentric): Equator(body, time, observer, ofdate, aberrationCorrect)
    const equ = Equator(b, time, observer, true, true);
    // Convert equatorial vector -> ecliptic coordinates
    const ecl = Ecliptic(equ.vec);
    const lon = normDeg(ecl.elon);
    planets[String(b)] = { longitude: lon, sign: getZodiac(lon) };
  }

  // 4) Ascendant (Lagna):
  // Build a horizon spherical point at azimuth = 90° (east), altitude = 0° (on horizon).
  // NOTE: astronomy-engine expects azimuth measured clockwise from NORTH.
  const horizonSphere = { lat: 0 /* altitude */, lon: 90 /* az clockwise from north */, dist: 1 };

  // a) horizontal vector (x=north, y=west, z=zenith/up)
  const horVec = VectorFromHorizon(horizonSphere, time, "normal"); // "normal" refraction recommended

  // b) rotation matrix to convert HOR -> EQD (horizontal -> equatorial of-date)
  const rot = Rotation_HOR_EQD(time, observer);

  // c) equatorial vector
  const eqVec = RotateVector(rot, horVec);

  // d) convert equatorial vector -> ecliptic coordinates -> take ecliptic longitude
  const ascEcl = Ecliptic(eqVec);
  const ascLon = normDeg(ascEcl.elon);
  const ascendantSign = getZodiac(ascLon);

  return {
    ascendant: {
      longitude: ascLon,
      sign: ascendantSign
    },
    sunSign: planets[String(Body.Sun)].sign,
    moonSign: planets[String(Body.Moon)].sign,
    planets
  };
}
