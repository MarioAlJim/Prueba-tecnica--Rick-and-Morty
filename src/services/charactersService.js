/**
 * Fetches character data from the Rick and Morty API and filters characters based on their status.
 */
async function getCharactersData() {
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
function filterByStatus(characters, status) {
    let filteredCharacters = characters.filter(character => character.status === status);
    filteredCharacters = filteredCharacters.map(character => ({ id: character.id, name: character.name, status: character.status }));
    return filteredCharacters;
}

/**
 * Replaces spaces with underscores in the names of the characters and 
 * returns an array of objects containing the id, name, and status of each character.
 */
function spaceInNameReplacer(characters) {
    const updatedCharacters = characters.map(character => ({
            ...character,
            name: character.name.replace(/ /g, '_')
        }));
    return updatedCharacters;
}

/**
 *
 * Fetches character data, filters characters based on their status, and replaces spaces with underscores in their names.
 * @export
 * @return {*} a promise that resolves to an array of objects containing the id, name, and status of each character with spaces replaced by underscores in their names.
 */
export function getCharacters() {
    return getCharactersData()
        .then(characters => filterByStatus(characters, 'Alive'))
        .then(filteredCharacters => spaceInNameReplacer(filteredCharacters))
        .catch(error => console.error('Error processing characters:', error));
}
