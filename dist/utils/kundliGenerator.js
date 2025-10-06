"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKundli = generateKundli;
const astronomy_engine_1 = require("astronomy-engine");
/** Normalize degrees into [0, 360) */
function normDeg(d) {
    return ((d % 360) + 360) % 360;
}
/** Convert local time → UTC using timezone string like "+05:30" or "-04:00"
 *  (If you need IANA time zone strings such as "Asia/Kolkata", say so and I can add that handling.)
 */
function toUTC(date, timezone) {
    if (/^[+-]\d{2}:\d{2}$/.test(timezone)) {
        const sign = timezone[0] === "-" ? -1 : 1;
        const [h, m] = timezone.slice(1).split(":").map(Number);
        const offsetMin = sign * (h * 60 + m);
        return new Date(date.getTime() - offsetMin * 60000);
    }
    // Fallback: if timezone not in ±HH:MM format, return the input date (caller should pass UTC or ±HH:MM)
    return date;
}
function getZodiac(longitude) {
    const signs = [
        "Aries", "Taurus", "Gemini", "Cancer",
        "Leo", "Virgo", "Libra", "Scorpio",
        "Sagittarius", "Capricorn", "Aquarius", "Pisces"
    ];
    const lon = normDeg(longitude);
    return signs[Math.floor(lon / 30) % 12];
}
function generateKundli(birthDateTime, latitude, longitude, timezone // e.g. "+05:30"
) {
    // 1) Convert to UTC (astronomy-engine expects an absolute time)
    const birthUTC = toUTC(birthDateTime, timezone);
    const time = new astronomy_engine_1.AstroTime(birthUTC);
    // 2) Observer
    const observer = new astronomy_engine_1.Observer(latitude, longitude, 0); // elevation 0 m
    // 3) Planets: compute ecliptic longitude for each body
    const bodies = [
        astronomy_engine_1.Body.Sun, astronomy_engine_1.Body.Moon, astronomy_engine_1.Body.Mercury,
        astronomy_engine_1.Body.Venus, astronomy_engine_1.Body.Mars, astronomy_engine_1.Body.Jupiter, astronomy_engine_1.Body.Saturn
    ];
    const planets = {};
    for (const b of bodies) {
        // Equatorial coords (topocentric): Equator(body, time, observer, ofdate, aberrationCorrect)
        const equ = (0, astronomy_engine_1.Equator)(b, time, observer, true, true);
        // Convert equatorial vector -> ecliptic coordinates
        const ecl = (0, astronomy_engine_1.Ecliptic)(equ.vec);
        const lon = normDeg(ecl.elon);
        planets[String(b)] = { longitude: lon, sign: getZodiac(lon) };
    }
    // 4) Ascendant (Lagna):
    // Build a horizon spherical point at azimuth = 90° (east), altitude = 0° (on horizon).
    // NOTE: astronomy-engine expects azimuth measured clockwise from NORTH.
    const horizonSphere = { lat: 0 /* altitude */, lon: 90 /* az clockwise from north */, dist: 1 };
    // a) horizontal vector (x=north, y=west, z=zenith/up)
    const horVec = (0, astronomy_engine_1.VectorFromHorizon)(horizonSphere, time, "normal"); // "normal" refraction recommended
    // b) rotation matrix to convert HOR -> EQD (horizontal -> equatorial of-date)
    const rot = (0, astronomy_engine_1.Rotation_HOR_EQD)(time, observer);
    // c) equatorial vector
    const eqVec = (0, astronomy_engine_1.RotateVector)(rot, horVec);
    // d) convert equatorial vector -> ecliptic coordinates -> take ecliptic longitude
    const ascEcl = (0, astronomy_engine_1.Ecliptic)(eqVec);
    const ascLon = normDeg(ascEcl.elon);
    const ascendantSign = getZodiac(ascLon);
    return {
        ascendant: {
            longitude: ascLon,
            sign: ascendantSign
        },
        sunSign: planets[String(astronomy_engine_1.Body.Sun)].sign,
        moonSign: planets[String(astronomy_engine_1.Body.Moon)].sign,
        planets
    };
}
