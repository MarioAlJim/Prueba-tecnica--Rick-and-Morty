import express from 'express';
import { getMinimumCharacters, getCharactersByPage, getAllCharacters } from '../controllers/charactersController.js';

const router = express.Router();

router.get('/', getMinimumCharacters);
router.get('/all', getAllCharacters);
router.get('/:page', getCharactersByPage);


export default router;