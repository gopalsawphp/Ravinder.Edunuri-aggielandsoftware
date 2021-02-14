
import User from '../database/model/User.model';
export const userAdd = async(req,res)  => {

         try{
                const UserObj = new User({
        
                        name: req.body.name,
                       designation:req.body.designation,
                       email:req.body.email,
                      phoneNumber:req.body.phoneNumber
                
                });
        
                   const resultSet = await UserObj.save();
                   if(resultSet)
                      res.json({status:true,message:'Added'});
                      else
                      res.json({status:false,message:'Not Added'});
         }catch(err){
           console.log(err.message);
         }
       

}



export const userGetData = async(req,res)  => {
        try{
        
        
                   const resultSet = await User.find();
                   if(resultSet)
                      res.json({status:true,data:resultSet});
                      else
                      res.json({status:false,message:'Not data present in Collection'});
         }catch(err){
           console.log(err.message);
         }
          
}


