import { Position } from "../position";
import { Piece } from "./piece";

export class Bishop extends Piece {
    printPiece(): string {
        return "B";
    }

    canMoveTo(position: Position): boolean {
        let distance = this.position.distanceFrom(position)
        return distance.rank === distance.letter // Diagonal move
    }
}