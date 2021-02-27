import * as data from '../models/Data.js'

 const Second= async(req,res)=>{
        try {
                const postdata= await data.College.find({},{"name":1,"logo":1,"college_id":1}).sort({
                        "name":1
                });
                res.status(200).json(postdata);
                
        } catch (error) {
                res.status(404).json({
                        message:error.message
                })
                
        }
        //just 

}

/*
third page */
const OverView =async (req,res)=>{
        const id=req.params.id;
        console.log(`Overview ${id}`);
 
        try {
               const postdata= [await data.College.findOne({college_id:id})];
               res.status(200).json(postdata);
                
        } catch (error) {
                res.status(404).json({
                        message:error.message
                })
                
        }
}


const Fees =async (req,res)=>{
        const id=req.params.id;
        console.log(`Fees ${id}`);
 
        try {
               const postdata= await data.Fees.find({college_id:id}).sort({
                       "amount":1,


               });
               res.status(200).json(postdata);
                
        } catch (error) {
                res.status(404).json({
                        message:error.message
                })
                
        }
}


const Course =async (req,res)=>{
        const id=req.params.id;
        console.log(`Course ${id}`);
 
        try {
               const postdata= await data.Course.find({college_id:id}).sort({
                       'name':1,
                       'type':1
               });
               res.status(200).json(postdata);
                
        } catch (error) {
                res.status(404).json({
                        message:error.message
                })
                
        }
}


const Cutoff =async (req,res)=>{
        const id=req.params.id;
        const year=req.params.year;
        const cate=req.params.cate;
        console.log(`Cutoff ${id,year,cate}`);
 
        try {
               const postdata= await data.Cutoff.find({college_id:id,year:year,cate:cate}).sort({
                       'course':1
                   });
               res.status(200).json(postdata);
                
        } catch (error) {
                res.status(404).json({
                        message:error.message
                })
                
        }
}
export {
        Second,
        OverView,
        Course,
        Fees,
        Cutoff
}