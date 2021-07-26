// Types for positions
export type Letter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

// A set of coordinates for a piece
export class Position {
    constructor(
        private letter: Letter,
        private rank: Rank
    ) { }

    getLetter(): Letter {
        return this.letter;
    }

    getRank(): Rank {
        return this.rank;
    }

    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            letter: Math.abs(position.letter.charCodeAt(0) - this.letter.charCodeAt(0))
        }
    }
}