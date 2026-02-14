import { consultAllCharacters, consultCharacters, consultCharactersByPage } from "../services/charactersService.js";  

/**
 * Controller function that handles the request to get characters data
*/
export async function getMinimumCharacters(req, res) {
    try {
        const characters = await consultCharacters();
        if (!characters) {
            return res.status(404).json({ error: 'No characters found.' });
        }
        res.status(200).json(characters);
    } catch (error) {
        console.error('Error in controller:', error);
        res.status(500).json({ error: 'An error occurred while fetching characters data.' });
    }
}


/**
 * Controller function that handles the request to get all characters data 
 */
export async function getAllCharacters(req, res) {
    try {
        const characters = await consultAllCharacters();
        if (!characters) {
            return res.status(404).json({ error: 'No characters found.' });
        }
        res.status(200).json(characters);
    } catch (error) {
        console.error('Error in controller:', error);
        res.status(500).json({ error: 'An error occurred while fetching characters data.' });
    }
}


/**
 * Controller function that handles the request to get characters data by page
 */
export async function getCharactersByPage(req, res) {
    const page = req.params.page;
    try {
        const characters = await consultCharactersByPage(page);
        if (!characters) {
            return res.status(404).json({ error: 'No characters found.' });
        }          
        res.status(200).json(characters);
    } catch (error) {
        console.error('Error in controller:', error);
        res.status(500).json({ error: 'An error occurred while fetching characters data.' });
    }
}
