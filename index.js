/**
 * Fetches character data from the Rick and Morty API and filters characters based on their status.
 */
export async function getApiData() {
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
export function filterByStatus(characters, status) {
    let filteredCharacters = characters.filter(character => character.status === status);
    filteredCharacters = filteredCharacters.map(character => 
        ({ id: character.id, name: character.name, status: character.status })
    );
    return filteredCharacters;
}

/**
 * Replaces spaces with underscores in the names of the characters and 
 * returns an array of objects containing the id, name, and status of each character.
 */
export function spaceInNameReplacer(characters) {
    const updatedCharacters = characters.map(character => ({
            ...character,
            name: character.name.replace(/ /g, '_')
        }));
    return updatedCharacters;
}

/**
 * Main function to execute the character filtering and name replacement, and log the results to the console.
 */
async function main() {
    const result = [];
    try {
        const baseData = await getApiData();
        const characters = filterByStatus(baseData, 'Alive');
        const updateNames = spaceInNameReplacer(characters);
        result.push(...updateNames);
    } catch (error) {
        console.error('Error in main function:', error);
    }
    console.log(result);
    return JSON.stringify(result);
}

main();