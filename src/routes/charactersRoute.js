import express from 'express';
import { getCharacters } from '../controllers/charactersController.js';

const router = express.Router();

router.get('/', getCharacters);

export default router;