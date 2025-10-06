import { TalkToAstrologerRepository } from "../repo/talkToAstrologerRepository";

export class TalkToAstrologerService {
    static async createTalkToAstrologer(data: any): Promise<any> {
        try {
            const {
                name,
                bio,
                expertise,
                languages,
                experienceYears,
                feePerMinChat,
                feePerMinCall,
                feePerMinVideo,
                file,
                schedule,
                mobile,
                email,
                astrologerId
            } = data;

            let fileUrl: string | undefined;
            if (file) {
                fileUrl = file.path;
            }

            const astrologer = await TalkToAstrologerRepository.createTalkToAstrologer({
                name,
                bio,
                file: fileUrl,
                expertise,
                languages,
                experienceYears,
                feePerMinChat,
                feePerMinCall,
                feePerMinVideo,
                schedule,
                mobile,
                email,
                astrologerId
            });

            return astrologer;
        } catch (error) {
            throw new Error("Could not create astrologer");
        }
    }

    static async getTalkToAstrologerById(id: string): Promise<any> {
        try {
            return await TalkToAstrologerRepository.getTalkToAstrologerById(id);
        } catch (error) {
            throw new Error("Could not get astrologer");
        }
    }

    static async getAllTalkToAstrologers(): Promise<any> {
        try {
            return await TalkToAstrologerRepository.getAllTalkToAstrologer();
        } catch (error) {
            throw new Error("Could not get astrologers");
        }
    }

    static async updateTalkToAstrologer(id: string, data: any): Promise<any> {
        try {
            return await TalkToAstrologerRepository.updateTalkToAstrologer(id, data);
        } catch (error) {
            throw new Error("Could not update astrologer");
        }
    }

    static async deleteTalkToAstrologer(id: string): Promise<any> {
        try {
            return await TalkToAstrologerRepository.deleteTalkToAstrologer(id);
        } catch (error) {
            throw new Error("Could not delete astrologer");
        }
    }

    static async toggleService(
        astrologerId: string,
        serviceKey: "chat" | "audio" | "video" | "report",
        isEnabled: boolean
    ): Promise<any> {
        try {
            return await TalkToAstrologerRepository.toggleService(
                astrologerId,
                serviceKey,
                isEnabled
            );
        } catch (error) {
            throw new Error("Could not toggle service");
        }
    }

    static async setOnlineStatus(
        astrologerId: string,
        isOnline: boolean
    ): Promise<any> {
        try {
            return await TalkToAstrologerRepository.setOnlineStatus(astrologerId, isOnline);
        } catch (error) {
            throw new Error("Could not update online status");
        }
    }

    static async updateSchedule(astrologerId: string, schedule: any): Promise<any> {

        try {
            return await TalkToAstrologerRepository.updateSchedule(astrologerId, schedule);
        } catch (error) {
            throw new Error("Could not update schedule time");
        }
    }



    static async addReview(astrologerId: any, reviewData: any): Promise<any> {
        try {
            const astrologer = await TalkToAstrologerRepository.findById(astrologerId);
            if (!astrologer) throw new Error("Astrologer not found");
            // Push new review
            astrologer.reviews.push(reviewData);
            // Update reviews count
            astrologer.reviewsCount = astrologer.reviews.length;
            // Recalculate average rating
            const totalRating = astrologer.reviews.reduce((acc: any, r: any) => acc + r.rating, 0);
            astrologer.rating = totalRating / astrologer.reviewsCount;
            return await TalkToAstrologerRepository.save(astrologer);
        } catch (error) {
            throw new Error("Could not create astrologer");
        }
    }



   static async getReviews(astrologerId: any) {
        const astrologer = await TalkToAstrologerRepository.findById(astrologerId);
        if (!astrologer) throw new Error("Astrologer not found");
        return astrologer.reviews;
    }
}
