import express from 'express';
const router = express.Router();
let users = [
    {
        id: 1,
        name: 'ha',
        age:20,
        isAdmin:false,
        active:true,
    },
    {
        id: 2,
        name: 'ha',
        age:20,
        isAdmin:true,
        active:true,
    }
]
function removeVietnameseAccent(str) {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D");
}
router.get('/', (req, res) => {
    if (req.query.id) {
        let result = users.find(user => user.id == req.query.id);
        if (result) {
            return res.status(200).json({
                message: "OK! get user have id: " + req.query.id,
                data: result
            })
        } else {
            return res.status(200).json({
                message: "Get failed, không có user nào tương ứng id: " + req.query.id,
            })
        }

    }

    if (req.query.search) {
        let result = [];

        users.map(user => {
            if (removeVietnameseAccent(user.name).toLowerCase().includes(removeVietnameseAccent(req.query.search).toLowerCase())) {
                result.push(user);
            }
        })

        return res.status(200).json({
            message: "OK! Result",
            data: result
        })
    }

    return res.status(200).json({
        message: "OK! get all users",
        data: users
    })
})
router.post('/', (req, res) => {
    // console.log('req.body',req.body);
    if (req.body) {
        users.push(req.body);
        res.status(200).json({
            message: "hjh",
            data: users
        })
    }
})
router.delete('/:userId',(req,res)=>{
   // console.log("req.params",req.params.userId);
   if (req.params.userId) {
    users=users.filter(user=>user.id!=req.params.userId);
    return res.status(200).json({
        message:"xoa thanh cong users co id la ;"+req.params.userId,
        data:users
    })
   }
   res.status(500).json({
    message:"vui long truyen param userId"
   })
})
module.exports = router;