import consultCharacters from "../services/charactersService.js";  

/**
 * Controller function that handles the request to get characters data, processes it, and sends the response.
 * @export
 * @param {*} req - The request object.
 * @param {*} res - The response object.
 * @return {*} A JSON response containing the processed characters data or an error message.
 * 
*/
export async function getCharacters(req, res) {
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
