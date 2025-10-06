
import { MatchRepository } from '../repo/matchRepository';
import { generateKundli } from '../utils/kundliGenerator';
function calculateCompatibility(boyChart: any, girlChart: any): number {
  let score = 0;

  // ✅ Example rules (simplified Gun Milan)
  if (boyChart.moonSign === girlChart.moonSign) score += 5;
  if (boyChart.ascendant === girlChart.ascendant) score += 5;
  if (boyChart.zodiacSign === girlChart.zodiacSign) score += 5;

  if (boyChart.planets.Venus.sign === girlChart.planets.Mars.sign) score += 3;
  if (boyChart.planets.Mars.sign === girlChart.planets.Venus.sign) score += 3;

  return score;
}
export class MatchService {
    static async createMatch(data: any): Promise<any> {
    try {
      const { boy, girl } = data;

      // ✅ Generate Kundlis
      const boyChart = generateKundli(
        new Date(`${boy.dob}T${boy.birthTime}`),
        boy.latitude ?? 28.61,
        boy.longitude ?? 77.23,
        "+05:30"
      );

      const girlChart = generateKundli(
        new Date(`${girl.dob}T${girl.birthTime}`),
        girl.latitude ?? 19.07,
        girl.longitude ?? 72.87,
        "+05:30"
      );

      // ✅ Compatibility Score
      const compatibilityScore = calculateCompatibility(boyChart, girlChart);

      // ✅ Save in DB
      const create = await MatchRepository.createMatch({
        boy,
        girl,
        compatibilityScore,
      });

      return {
        ...create.toObject(),
        boyChart,
        girlChart,
        compatibilityScore,
      };
    } catch (error) {
      throw new Error("Could not create match");
    }
  }


    static async getByIdMatch(id: string): Promise<any> {
        try {
            return await MatchRepository.findById(id);
        } catch (error) {
            throw new Error('Could not get match');
        }
    }

   
    static async updateMatch(id: string, data: any): Promise<any> {
        try {
            return await MatchRepository.updateById(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteMatch(id: string): Promise<any> {
        try {
            return await MatchRepository.deleteById(id);
        } catch (error) {
            throw new Error('Could not delete match');
        }
    }

    static async getAllMatch(): Promise<any> {
        try {
            return await MatchRepository.findAll();
        } catch (error) {
            throw new Error('Could not get match');
        }
    }



}
