import {consultCharacters, consultAllCharacters, consultCharactersByPage } from '../services/charactersService.js';

import test from 'node:test';
import assert from 'node:assert';

test('consultCharacters should return an array of characters', async () => {
    const characters = await consultCharacters();
    assert(Array.isArray(characters), 'Expected an array of characters');
    assert(characters.length > 0, 'Expected at least one character');
});

test('consultAllCharacters should return an array of all characters', async () => {
    const allCharacters = await consultAllCharacters();
    assert(Array.isArray(allCharacters), 'Expected an array of characters');
    assert(allCharacters.length > 0, 'Expected at least one character');
});

test('consultCharactersByPage should return an array of characters for a given page', async () => {
    const page = 1;
    const charactersByPage = await consultCharactersByPage(page);
    assert(Array.isArray(charactersByPage), 'Expected an array of characters');
    assert(charactersByPage.length > 0, 'Expected at least one character');
});