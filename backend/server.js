import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from './db/connectToMongoDB.js';

import {app, server} from './socket/socket.js';

const PORT = process.env.PORT || 3000;

const __dirname = path.resolve()

dotenv.config();
// const app = express();
app.use(express.json()); //to parse incoming requests with json payloads
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is up and running on port: ${PORT}`);
})
