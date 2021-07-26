import {Position, Letter, Rank} from "../position";

// Types for positions
export type Color = 'Black' | 'White'

// A chess piece
export abstract class Piece {
    protected position: Position

    constructor(
        private readonly color: Color,
        letter: Letter,
        rank: Rank
    ) {
        this.position = new Position(letter, rank)
    }

    getPosition(): Position {
        return this.position;
    }

    moveTo(position: Position) {
        this.position = position
    }

    printColor() {
        return this.color === "White" ? "W" : "B";
    }

    getColor() {
        return this.color;
    }

    abstract canMoveTo(position: Position): boolean

    abstract printPiece() : string
}