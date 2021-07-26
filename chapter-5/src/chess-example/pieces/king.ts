import {Position} from "../position";
import { Piece } from "./piece";

export class King extends Piece {
    printPiece(): string {
        return "K";
    }

    canMoveTo(position: Position): boolean {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.letter < 2
    }
}