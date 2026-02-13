import test from 'node:test';
import assert from 'node:assert';
import { getApiData, filterByStatus, spaceInNameReplacer } from './index.js';

test ('main function should log alive characters only for page 1', async () => {
    const baseData = await getApiData();
    const result = filterByStatus(baseData, 'Alive');
    assert(result.length > 0, 'No characters were returned');
    const aliveCharacters = result.filter(character => character.status === 'Alive');
    assert(aliveCharacters.length === 8, 'No alive characters were returned');
});

test ('main function should log dead characters only for page 1', async () => {
    const baseData = await getApiData();
    const result = filterByStatus(baseData, 'Dead');
    assert(result.length > 0, 'No characters were returned');
    const deadCharacters = result.filter(character => character.status === 'Dead');
    assert(deadCharacters.length === 6, 'No dead characters were returned');
});

test ('main function should log unknown characters only for page 1', async () => {
    const baseData = await getApiData();
    const result = filterByStatus(baseData, 'unknown');
    assert(result.length > 0, 'No characters were returned');
    const unknownCharacters = result.filter(character => character.status === 'unknown');
    assert(unknownCharacters.length === 6, 'No unknown characters were returned');
});

test('should replace spaces with underscores in character names, alive', async () => {
    const baseData = await getApiData();
    const characters = filterByStatus(baseData, 'Alive');
    const result = spaceInNameReplacer(characters);
    result.forEach((character, index) => {
        const expectedName = characters[index].name.replace(/ /g, '_');
        assert.strictEqual(character.name, expectedName);
    });
});

test('should replace spaces with underscores in character names, dead', async () => {
    const baseData = await getApiData();
    const characters = filterByStatus(baseData, 'Dead');
    const result = spaceInNameReplacer(characters);
    result.forEach((character, index) => {
        const expectedName = characters[index].name.replace(/ /g, '_');
        assert.strictEqual(character.name, expectedName);
    });
});



