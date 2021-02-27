import * as data from '../models/Data.js'

 const College= async(req,res)=>{
         const vale=req.body;
         const newcollege =new data.College(vale);
        try {
                await newcollege.save()
                res.status(201).json(newcollege);
                
                
        } catch (error) {
                res.status(409).json({
                        message:error.message
                });
                
        }

}


//

const Course= async(req,res)=>{
        const vale=req.body;
        const newcollege =new data.Course(vale);
       try {
               await newcollege.save()
               res.status(201).json(newcollege);
               
               
       } catch (error) {
               res.status(409).json({
                       message:error.message
               });
               
       }

}
//

const Fess= async(req,res)=>{
        const vale=req.body;
        const newcollege =new data.Fees(vale);
       try {
               await newcollege.save()
               res.status(201).json(newcollege);
               
               
       } catch (error) {
               res.status(409).json({
                       message:error.message,
                       bhai:"kuch to garvar hai"
               });
               
       }

}
//
const Cutoff= async(req,res)=>{
        const vale=req.body;
        const newcollege =new data.Cutoff(vale);
       try {
               await newcollege.save()
               res.status(201).json(newcollege);
               
               
       } catch (error) {
               res.status(409).json({
                       message:error.message
               });
               
       }

}
export {
        College,Course,
        Fess,Cutoff
}