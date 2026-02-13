import test from 'node:test';
import assert from 'node:assert';
import { filterCharacters, replaceSpaces } from './index.js';

test ('main function should log alive characters only for page 1', async () => {
    const result = await filterCharacters('Alive');
    assert(result.length > 0, 'No characters were returned');
    const aliveCharacters = result.filter(character => character.status === 'Alive');
    assert(aliveCharacters.length === 8, 'No alive characters were returned');
    // aliveCharacters.forEach(character => {
    //   console.log(`"id": ${character.id}, Name: ${character.name}, Status: ${character.status}, gender: ${character.gender}`);
    // });
});

test ('main function should log dead characters only for page 1', async () => {
    const result = await filterCharacters('Dead');
    assert(result.length > 0, 'No characters were returned');
    const deadCharacters = result.filter(character => character.status === 'Dead');
    assert(deadCharacters.length === 6, 'No dead characters were returned');
    // deadCharacters.forEach(character => {
    //   console.log(`"id": ${character.id}, Name: ${character.name}, Status: ${character.status}, gender: ${character.gender}`);
    // });
});

test ('main function should log unknown characters only for page 1', async () => {
    const result = await filterCharacters('unknown');
    assert(result.length > 0, 'No characters were returned');
    const unknownCharacters = result.filter(character => character.status === 'unknown');
    assert(unknownCharacters.length === 6, 'No unknown characters were returned');
    // unknownCharacters.forEach(character => {
    //   console.log(`"id": ${character.id}, Name: ${character.name}, Status: ${character.status}, gender: ${character.gender}`);
    // });
});


test('should replace spaces with underscores in character names, alive', async () => {
    const characters = await filterCharacters('Alive');
    const result = await replaceSpaces(characters);
    result.forEach((character, index) => {
        const expectedName = characters[index].name.replace(/ /g, '_');
        assert.strictEqual(character.name, expectedName);
    });
});

test('should replace spaces with underscores in character names, dead', async () => {
    const characters = await filterCharacters('Dead');
    const result = await replaceSpaces(characters);
    result.forEach((character, index) => {
        const expectedName = characters[index].name.replace(/ /g, '_');
        assert.strictEqual(character.name, expectedName);
    });
});



