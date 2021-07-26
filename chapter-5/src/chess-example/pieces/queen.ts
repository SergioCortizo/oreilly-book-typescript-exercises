import { Position } from "../position"
import { Piece } from "./piece"

export class Queen extends Piece {
    printPiece(): string {
        return "Q";
    }

    canMoveTo(position: Position): boolean {
        let distance = this.position.distanceFrom(position)
        return (distance.rank === 0 && distance.letter > 0) || // Horizontal move
            (distance.rank > 0 && distance.letter === 0) || // Vertical move
            (distance.rank === distance.letter) // Diagonal move
    }
}