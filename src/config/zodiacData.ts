const zodiacData: Record<string, { luckyNumbers: number[]; luckyColors: string[] }> = {
  Aries: { luckyNumbers: [1, 7, 9], luckyColors: ['Red', 'White'] },
  Taurus: { luckyNumbers: [2, 6, 8], luckyColors: ['Green', 'Pink'] },
  Gemini: { luckyNumbers: [3, 5, 7], luckyColors: ['Yellow', 'Blue'] },
  Cancer: { luckyNumbers: [2, 7, 9], luckyColors: ['White', 'Silver'] },
  Leo: { luckyNumbers: [1, 4, 9], luckyColors: ['Gold', 'Orange'] },
  Virgo: { luckyNumbers: [5, 6, 9], luckyColors: ['Green', 'Brown'] },
  Libra: { luckyNumbers: [2, 6, 7], luckyColors: ['Pink', 'Blue'] },
  Scorpio: { luckyNumbers: [4, 8, 9], luckyColors: ['Red', 'Black'] },
  Sagittarius: { luckyNumbers: [3, 7, 9], luckyColors: ['Purple', 'Blue'] },
  Capricorn: { luckyNumbers: [4, 8, 9], luckyColors: ['Brown', 'Grey'] },
  Aquarius: { luckyNumbers: [4, 7, 8], luckyColors: ['Blue', 'Silver'] },
  Pisces: { luckyNumbers: [3, 7, 9], luckyColors: ['Sea Green', 'Purple'] },
};

export default zodiacData;
