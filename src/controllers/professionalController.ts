import { Request, Response } from "express";
import { ProfessionalService } from "../services/professionalService";

export async function uploadProfessionalController(req: Request, res: Response) {
   try {



      const file = req.file as Express.Multer.File;
      // if (!file) {
      //    res.status(400).json({ message: 'File is required', status: 'fail' });
      //    return;
      // }
      let fileUrl = "";
      if (req.body.floorPlan == 'true') {
         if (!file) {
            res.status(400).json({ message: "File is required" });
         }
         fileUrl = file.path;
      }

      const professional = await ProfessionalService.uploadProfessional(req.body, fileUrl);


      if (professional) {
         res.status(200).json({
            status: true,
            message: "Professional file uploaded and payment order created",
            data: professional,
            statusCode: 200,
         });
      } else {
         res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: professional });
      }

   } catch (error) {
      res.status(500).json({ status: true, message: "Error uploading product", data: error, statusCode: 500 });
   }
};

export async function getProfessionalsController(_req: Request, res: Response) {


   try {
      const professionals = await ProfessionalService.listProfessionals();
      if (professionals) {
         res.status(200).json({ message: 'Find successful', data: professionals, status: "success", statusCode: 200 });
      } else {
         res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: professionals });
      }
   } catch (error) {
      res.status(400).json({ message: 'Error fetching professionals', status: "fail", statusCode: 400, data: error });
   }
};


export async function updateProfessionalsController(req: Request, res: Response) {
   try {
      let id = req.params;
      const professionals = await ProfessionalService.updateProfessionals(id, req.body);
      if (professionals) {
         res.status(200).json({ message: 'Update successful', data: professionals, status: "success", statusCode: 200 });
      } else {
         res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: professionals });
      }
   } catch (error) {
      res.status(400).json({ message: 'Error fetching professionals', status: "fail", statusCode: 400, data: error });
   }
};
export async function getProfessionalsByUserId(req: Request, res: Response) {
   try {
      let userId = req.params;

      const professionals = await ProfessionalService.getProfessionalsByUserId(userId);
      if (professionals) {
         res.status(200).json({ message: 'Find successful', data: professionals, status: "success", statusCode: 200 });
      } else {
         res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: professionals });
      }
   } catch (error) {
      res.status(400).json({ message: 'Error fetching professionals', status: "fail", statusCode: 400, data: error });

   }



};

export async function getProfessionalsById(req: Request, res: Response) {
   try {
      let id = req.params;
      const professionals = await ProfessionalService.getProfessionalsById(id);
      if (professionals) {
         res.status(200).json({ message: 'Find successful', data: professionals, status: "success", statusCode: 200 });
      } else {
         res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: professionals });
      }
   } catch (error) {
      res.status(400).json({ message: 'Error fetching professionals', status: "fail", statusCode: 400, data: error });
   }
};





export async function deleteProfessionalsById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const askQuestion = await ProfessionalService.deleteProfessionalsById(id);
        if (askQuestion) {
            res.status(200).json({ message: 'Delete successful', data: askQuestion, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
        }
    } catch (error) {
        res.status(400).json({ message: 'Professional not found', status: "fail", statusCode: 400, data: error });
    }
}
