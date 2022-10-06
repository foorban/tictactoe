export interface Game {
    next_player: number;
    players_number: number;
    winning_sequence_length: number;
    board: {
        size: {
            width: number;
            height: number;
        };
        status: number[][];
    };
};

export interface GameStatus {
    status: 'ongoing' | 'invalid' | 'tie' | 'won';
    winningPlayer: null | number;
}