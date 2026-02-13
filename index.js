/**
 * Fetches character data from the Rick and Morty API and filters characters based on their status.
 */
async function getApiData() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

/**
 * Filters characters based on their status and returns an array of objects containing the id, name, and status of each character.
 */
export async function filterCharacters(status) {
    try {
        const characters = await getApiData();
        let filteredCharacters = characters.filter(character => character.status === status);
        filteredCharacters = filteredCharacters.map(character => ({ id: character.id, name: character.name, status: character.status }));
        return filteredCharacters;
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

/**
 * Replaces spaces with underscores in the names of the characters and 
 * returns an array of objects containing the id, name, and status of each character.
 */
export async function replaceSpaces(characters) {
    try {
        const updatedCharacters = characters.map(character => ({
                ...character,
                name: character.name.replace(/ /g, '_')
            }));
        return updatedCharacters;
    } catch (error) {
        console.error('Error in replaceSpaces function:', error);
    }
}

/**
 * Main function to execute the character filtering and name replacement, and log the results to the console.
 */
async function main() {
    const characters = await filterCharacters('Alive');
    const updateNames= await replaceSpaces(characters);
    const result  = JSON.stringify(updateNames, null, 2);
    console.log(result);
}

main();