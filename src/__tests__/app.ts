import { game } from '../app';

describe('game', () => {
    it('first test', async () => {
        const response = await game()
        expect(response).toBeNull();
    })
})