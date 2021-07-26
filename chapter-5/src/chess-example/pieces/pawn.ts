import {Position} from "../position";
import { Piece } from "./piece";

export class Pawn extends Piece {
    printPiece(): string {
        return "P";
    }

    canMoveTo(position: Position): boolean {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.letter === 0
    }
}
