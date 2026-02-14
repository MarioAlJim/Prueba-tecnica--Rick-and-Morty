/**
 * Filters characters based on their status and returns an array of objects containing the id, name, and status of each character.
 */
export function filterByStatus(characters, status) {
    let filteredCharacters = characters.filter(character => character.status === status);
    filteredCharacters = filteredCharacters.map(character => ({ id: character.id, name: character.name, status: character.status, gender : character.gender}));
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