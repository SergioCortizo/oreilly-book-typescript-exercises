import { Position } from "../position"
import { Piece } from "./piece"

export class Rook extends Piece {
    printPiece(): string {
        return "R";
    }

    canMoveTo(position: Position): boolean {
        let distance = this.position.distanceFrom(position)
        return distance.rank === 0 || distance.letter === 0
    }
}