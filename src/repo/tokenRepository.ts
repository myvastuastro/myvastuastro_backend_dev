import TokenModel from '../models/userToken';

export class TokenRepository {
  static async createToken(data: any) {
    const { userId, deviceToken, jwtToken, platform } = data;

    const updatedToken = await TokenModel.findOneAndUpdate(
      { userId }, // Filter
      {
        $set: {
          deviceToken,
          jwtToken,
          platform,
          updatedAt: new Date(),
        },
      },
      {
        new: true,       // Return the updated document
        upsert: true,    // Create if it doesn't exist
      }
    );
    return updatedToken;

  }

  static async getTokenById(id: string) {
    return await TokenModel.findOne({ id });
  }

  static async updateToken(id: string, data: any) {
    try {
        return await TokenModel.findByIdAndUpdate(
          id,
          { $set: { ...data } },
          { new: true }
        );
      } catch (error) {
        console.error('Error updating vastu AskQuestion:', error);
        throw error;
      }
  }
  static async deleteToken(id: string): Promise<any> {
    return await TokenModel.deleteOne({ _id: id });
}

  static async getAllTokens() {
    return await TokenModel.find();
  }
}

