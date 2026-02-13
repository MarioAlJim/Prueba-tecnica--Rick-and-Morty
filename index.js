async function getApiData() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data) {
            throw new Error('Data format error: results property is missing');
        }
        return data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function filterCharactersByStatus(status) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?status=${status}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function main() {
    try {
        const characters = await getApiData();
        const aliveCharacters = characters.filter(character => character.status === 'Alive');
        aliveCharacters.forEach(character => {
            console.log(`id: ${character.id}, Name: ${character.name}, Status: ${character.status}, gender: ${character.gender}`);
        });
    } catch (error) {
        console.error('Error in main function:', error);
    }
}
