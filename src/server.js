/* Kích hoạt .env */
import dotenv from 'dotenv';
dotenv.config();

import express from 'express'; // gọi thư viện express
const server = express(); // dùng thư viện express tạo ra server

//cau hinh cors cho phep moi nguon call api
import cors from 'cors';
server.use(cors());

//cau hinh res.body
import bodyParser  from 'body-parser';
server.use(bodyParser.json())

//goi cau hinh router
import routerConfig from './routes'
server.use('/api',routerConfig)



/* Yêu cầu server lắng nghe tại cổng 3000 trên máy */
server.listen(process.env.PORT, () => {
    console.log("Server đã chạy tại port", process.env.PORT)
})