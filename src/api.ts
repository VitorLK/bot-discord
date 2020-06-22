import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (request: Request, response:Response) => {
    response.send({
        server: "online"
    })
})

app.listen(3333);