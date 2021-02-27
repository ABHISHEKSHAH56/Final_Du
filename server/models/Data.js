import mongoose from 'mongoose';
const RankingSchema= new mongoose.Schema({
       nirf:String,
       naccs:String,
       date:{
        type:Date,
        default:Date.now
}


});
const collegeSchema= new mongoose.Schema({
        name:String,
        description:String,
        logo:String,
        website:String,
        campus:String,
        address:String,
        established:Number,
        ranking:[RankingSchema],
        alsoknownas:String,
        affilated:{
                type:String,
                default:"Du"
        },
        college_id:{
                type:String,
                unique:true
        },
        date:{
                type:Date,
                default:Date.now
        }



});


const courseSchema= new mongoose.Schema({
        college_id:{
                type:String,
               
        },
        type:String,
        course:String,
        duration:{
                type:Number,
                default:3
        },
        year:Number
        
        



});
const feesSchema= new mongoose.Schema({
        college_id:{
                type:String,
                
        },
        type:String,
        course:String,
        amount:{
                type:Number,
        },
        year:Number
        
        



});
const cutoffSchema= new mongoose.Schema({
        college_id:{
                type:String,
              
        },
        course:String,
        cutoff:Number,
        cate:String,
        round:Number,        
        year:Number,
        type:String
        



});







const  College = mongoose.model('college',collegeSchema);
const  Course = mongoose.model('course',courseSchema);
const  Fees = mongoose.model('fees',feesSchema);
const  Cutoff = mongoose.model('cutoff',cutoffSchema);



export {
        College,
        Course,
        Fees,
        Cutoff

} 
