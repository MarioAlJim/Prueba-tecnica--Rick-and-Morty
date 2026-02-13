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

// async function filterCharactersByStatus(status) {
//     try {
//         const response = await fetch(`https://rickandmortyapi.com/api/character/?status=${status}`);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

export async function filterCharactersByStatus(status) {
    try {
        const characters = await getApiData();
        let filteredCharacters = characters.filter(character => character.status === status);
        filteredCharacters = filteredCharacters.map(character => ({ id: character.id, name: character.name, status: character.status }));
        return filteredCharacters;
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

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
