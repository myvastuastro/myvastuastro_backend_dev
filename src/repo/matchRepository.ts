import Match from "../models/matchMaking";

export class MatchRepository {
 static async createMatch(matchData: Partial<any>): Promise<any> {
    return await Match.create(matchData);
  }

static async findAll(): Promise<any[]> {
    return await Match.find();
}

static async findById(id: string): Promise<any | null> {
    return await Match.findById(id);
}

static async updateById(id: string, data: Partial<any>): Promise<any | null> {
    return await Match.findByIdAndUpdate(id, data, { new: true });
}

static async deleteById(id: string): Promise<any | null> {
    return await Match.findByIdAndDelete(id);
}
}

export default new MatchRepository();
