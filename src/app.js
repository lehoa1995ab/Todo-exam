/* Kích hoạt .env */
import dotenv from 'dotenv';
dotenv.config();

import express from 'express'; // gọi thư viện express
const app = express(); // dùng thư viện express tạo ra server

//cau hinh cors cho phep moi nguon call api
// import cors from 'cors';
// app.use(cors());

//cau hinh res.body
import bodyParser  from 'body-parser';
app.use(bodyParser.json())

//goi cau hinh router
import routerConfig from './routes'
app.use('/api',routerConfig)

//goi cau hinh views
import viewConfig from './views'
app.use(viewConfig)


  
app.listen(process.env.PORT,()=>{
    console.log("Hello world",process.env.PORT);
})
