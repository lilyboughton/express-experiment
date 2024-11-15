import express from 'express';
import { getAnotherTest, getTest, apiSpec } from './controller'


export const router = express.Router();


router.get('/test', getTest);
router.get('/another-test', getAnotherTest);
router.get('/api-docs', apiSpec)