import express from 'express';
const router=express.Router();

import userModule from './modules/user.module'
router.use('/users',userModule)
// let users=[
//     {
//         i:1,
//         name:'ha'
//     },
//     {
//         i:1,
//         name:'ha'
//     }
// ]
// router.use('/users',(req,res)=>{
//     res.status(200).json({
//         message:"hjh",
//         data:users
//     })
// })
module.exports=router;