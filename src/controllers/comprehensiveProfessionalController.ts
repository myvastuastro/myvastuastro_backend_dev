import { Request, Response } from "express";
import { ComprehensiveProfessionalService } from "../services/comprehensiveProfessionalService";

export async function uploadComprehensiveProfessionalController(req: Request, res: Response) {
   try {
      const file = req.file as Express.Multer.File;
      let fileUrl = "";
      if (req.body.floorPlan == 'true') {
         if (!file) {
            res.status(400).json({ message: "File is required" });
         }
         fileUrl =  file.path;
      }
      const comprehensiveProfessional = await ComprehensiveProfessionalService.uploadComprehensiveProfessional(req.body, fileUrl);
      if (comprehensiveProfessional) {
         res.status(200).json({
            status: true,
            message: "ComprehensiveProfessional file uploaded and payment order created",
            data: comprehensiveProfessional,
            statusCode: 200,
         });     } else {
         res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensiveProfessional });
     }

   } catch (error) {
      res.status(500).json({ status: true, message: "Error uploading product", data:error, statusCode: 500 });
   }
};

export async function getComprehensiveProfessionalsController(_req: Request, res: Response) {
  

   try {
      const comprehensiveProfessional = await ComprehensiveProfessionalService.listComprehensiveProfessionals();
      if (comprehensiveProfessional) {
         res.status(200).json({ message: 'Find successful', data: comprehensiveProfessional, status: "success", statusCode: 200 });
     } else {
         res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensiveProfessional });
     }
   } catch (error) {
      res.status(400).json({ message: 'Error fetching Comprehensive Professionals', status: "fail", statusCode: 400, data: error });
   }
};


export async function updateComprehensiveProfessionalsController(req: Request, res: Response) {
   try {
      let id = req.params;
      const comprehensiveProfessional = await ComprehensiveProfessionalService.updateComprehensiveProfessionals(id, req.body);
      if (comprehensiveProfessional) {
         res.status(200).json({ message: 'Update successful', data: comprehensiveProfessional, status: "success", statusCode: 200 });
     } else {
         res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensiveProfessional });
     }
   } catch (error) {
      res.status(400).json({ message: 'Error fetching Comprehensive Professionals', status: "fail", statusCode: 400, data: error });
   }
};
export async function getComprehensiveProfessionalsByUserId(req: Request, res: Response) {
   try {
      let userId = req.params;

      const comprehensiveProfessional = await ComprehensiveProfessionalService.getComprehensiveProfessionalsByUserId(userId);
      if (comprehensiveProfessional) {
         res.status(200).json({ message: 'Find successful', data: comprehensiveProfessional, status: "success", statusCode: 200 });
     } else {
         res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: comprehensiveProfessional });
     }
   } catch (error) {
      res.status(400).json({ message: 'Error fetching Comprehensive Professionals', status: "fail", statusCode: 400, data: error });

   }
};



export async function getComprehensiveProfessionalsById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const askQuestion = await ComprehensiveProfessionalService.getComprehensiveProfessionalsById(id);
        if (askQuestion) {
            res.status(200).json({ message: 'Find successful', data: askQuestion, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
        }

    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });

    }
}


