import { Request, Response } from "express";
import { VastuTipService } from "../services/vastuTipService";

export async function  uploadVastuTipController(req: Request, res: Response){
  try {
    const { title, description } = req.body;

    const files = req.files as {
      [fieldname: string]: Express.Multer.File[];
    };
    const file = files?.file?.[0];
     if (!file) {
       res.status(400).json({ message: "File is required" });
    }
     const fileUrl = file.path;  // image or main file URL
    const audio = files?.audio?.[0];
    if (!audio) {
        res.status(400).json({ message: "Aduio file is required" });
     }
     const audioUrl = audio.path; // audio file URL
    const product = await VastuTipService.uploadProduct({  title,description, fileUrl, audioUrl });
     if (product) {
      res.status(200).json({ message: 'file uploaded successful', data: product, status: "success", statusCode: 200 });
  } else {
      res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: product });
  }
  } catch (error) {
     res.status(400).json({ message: 'Error uploading product', status: "fail", statusCode: 400, data: error });

  }
};

export async function  getVastuTipsController(_req: Request, res: Response) {
try {
   const products = await VastuTipService.listProducts();
   if (products) {
       res.status(200).json({ message: 'Find successful', data: products, status: "success", statusCode: 200 });
   } else {
       res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: products });
   }

} catch (error) {
   res.status(400).json({ message: 'Error fetching products', status: "fail", statusCode: 400, data: error });
}
};


export async function  updateVastuTipsController(req: Request, res: Response) {
  

   try {
      const { id } = req.params;
      const products = await VastuTipService.updateProducts(id, req.body);
      if (products) {
          res.status(200).json({ message: 'Update successful', data: products, status: "success", statusCode: 200 });
      } else {
          res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: products });
      }

  } catch (error) {
      res.status(400).json({ message: 'Error fetching products', status: "fail", statusCode: 400, data: error });
  }
 };


 export async function getVastuTipsControllerById(req: Request, res: Response): Promise<void> {
     try {
         const { id } = req.params;
         const vastuAstrologer = await VastuTipService.getVastuTipsControllerById(id);
         if (vastuAstrologer) {
             res.status(200).json({ message: 'Find successful', data: vastuAstrologer, status: "success", statusCode: 200 });
         } else {
             res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: vastuAstrologer });
         }
 
     } catch (error) {
         res.status(400).json({ message: 'Vastuztips not found', status: "fail", statusCode: 400, data: error });
 
     }
 }


 export async function deleteVastuTipsController(req: Request, res: Response): Promise<void> {
     try {
         const { id } = req.params;
         const support = await VastuTipService.deleteVastuTipsController(id);
         if (support) {
             res.status(200).json({ message: 'Delete successful', data: support, status: "success", statusCode: 200 });
         } else {
             res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: support });
         }
     } catch (error) {
         res.status(400).json({ message: 'Support not found', status: "fail", statusCode: 400, data: error });
     }
 }
