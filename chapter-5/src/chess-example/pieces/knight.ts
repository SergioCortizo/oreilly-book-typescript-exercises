import {Position} from "../position";
import { Piece } from "./piece";

export class Knight extends Piece {
    printPiece(): string {
        return "H";
    }

    canMoveTo(position: Position): boolean {
        let distance = this.position.distanceFrom(position)
        return (distance.rank < 2 && distance.letter < 3) || 
            (distance.rank < 3 && distance.letter < 2)
    }
}