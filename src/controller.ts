import { Request, Response } from 'express';
import * as apiJson from './apiSpec/openapi';


export const getTest = (req: Request, res: Response) => {
    res.json({
        message: 'Hello World',
    });
};

export const getAnotherTest = (req: Request, res: Response) => {
    res.json({
        message: 'Another test route',
    });
};

export const apiSpec = (req: Request, res: Response) => {
    res.json(apiJson.apiJson)
};