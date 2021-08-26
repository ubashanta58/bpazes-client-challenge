import initDB from '../../helpers/initDB'
import User from '../../models/User'
import bcrypt from 'bcryptjs'

initDB()


export default async (req,res)=>{
     const {name,email,password,confirmPassword} = req.body
     try{
        if(!name || !email || !password || !confirmPassword){
          return res.status(422).json({error:"please add all the fields"})
        }
        const pwd = await User.findOne({password})
        if(password != confirmPassword){
            return res.status(422).json({error:"passwords didn't match."})
        }
      const user = await User.findOne({email})
      if(user){
          return res.status(422).json({error:"user already exists with that email"})
      }
     const hashedPassword = await bcrypt.hash(password,12)
     const newUser =  await new User({
         name,
         email,
         password:hashedPassword
     }).save()
     console.log(newUser)
        res.status(201).json({message:"register success"})
    //  await new Cart({user:newUser._id}).save()
    //     res.status(201).json({message:"register success"})
     }catch(err){
         console.log(err)
     }
}

export const config = {
    api: {
        externalResolver: true
    }
}