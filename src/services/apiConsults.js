/**
  * Fetches character data from the Rick and Morty API
 */
export async function fetchCharacters() {
    const apiUrl = 'https://rickandmortyapi.com/api/character';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

/**
 * Fetches all character data from the Rick and Morty API by iterating through all available pages
 * I cant put the 42 pages
 */
export async function fetchAllCharacters() {
    const characters = [];
    let actualPage = 1;
    let apiUrl = `https://rickandmortyapi.com/api/character`;
    try {
        while (actualPage <= 20) { 
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            characters.push(...data.results);
            apiUrl = data.info.next;
            actualPage++;
        }
        return characters;
    } catch (error) {
        console.error('Error fetching all characters:', error);
        throw error;
    }
}

/**
 * Fetches character data for a specific page from the Rick and Morty API.
 */
export async function fetchCharactersByPage(page) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`); 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}