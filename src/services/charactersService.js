import { filterByStatus, spaceInNameReplacer } from './filters.js';
import { fetchAllCharacters, fetchCharacters, fetchCharactersByPage } from './apiConsults.js';

/**
 * Fetches character data, filters characters based on their status, and replaces spaces with underscores in their names
 */
export async function consultCharacters() {
    return fetchCharacters()
        .then(characters => filterByStatus(characters, 'Alive'))
        .then(filteredCharacters => spaceInNameReplacer(filteredCharacters))
        .catch(error => console.error('Error processing characters:', error));
}

/**
 * Fetches al charcters, filters characters based on their status, and replaces spaces with underscores in their names
 */
export async function consultAllCharacters() {
    return fetchAllCharacters()
        .then(characters => filterByStatus(characters, 'Alive'))
        .then(filteredCharacters => spaceInNameReplacer(filteredCharacters))
        .catch(error => console.error('Error processing characters:', error));
}

/**
 * Fetches character data by page, filters characters based on their status, and replaces spaces with underscores in their names
 */
export async function consultCharactersByPage(page) {
    return fetchCharactersByPage(page)
        .then(characters => filterByStatus(characters, 'Alive'))
        .then(filteredCharacters => spaceInNameReplacer(filteredCharacters))
        .catch(error => console.error('Error processing characters:', error));
}

