import { Bishop } from "./pieces/bishop";
import { King } from "./pieces/king";
import { Knight } from "./pieces/knight";
import { Pawn } from "./pieces/pawn";
import { Color, Piece } from "./pieces/piece";
import { Queen } from "./pieces/queen";
import { Rook } from "./pieces/rook";
import { Letter, Position, Rank } from "./position";

// Represents a chess game
export class Game {
    private pieces = Game.makePieces();
    private turn = 1;
    private player: Color = "White";

    public getPieces(): Piece[] {
        return this.pieces;
    }

    public getTurn() {
        return this.turn;
    }

    public getPlayer() {
        return this.player;
    }

    public findPiece(letter: Letter, rank: number): string {
        let piece = this.pieces.find(piece =>
            (piece.getPosition().getRank() == rank) && (piece.getPosition().getLetter() == letter));

        if (piece)
            return piece.printPiece() + piece.printColor();
        else
            return "  ";
    }

    public doMove(fromLetter: Letter, fromRank: Rank, toLetter: Letter, toRank: Rank): boolean {

        if (fromLetter === toLetter && fromRank === toRank) 
            return false;

        let from = this.pieces.find(
            piece =>
                piece.getPosition().getLetter() == fromLetter
                && piece.getPosition().getRank() == fromRank);
        
        const toPosition = new Position(toLetter, toRank);
        
        if (!from || !from.canMoveTo(toPosition) || from.getColor() !== this.player)
            return false;

        let to = this.pieces.find(
            piece =>
                piece.getPosition().getLetter() == toLetter
                && piece.getPosition().getRank() == toRank);

        if (to && from.printColor() === to.printColor()) 
            return false;

        if (to) this.pieces.filter(piece => piece === to);

        from.moveTo(toPosition);
        this.turn = this.turn + 1;
        this.player = this.player === "White" ? "Black" : "White";

        return true;
    }

    public checkmate() {
        return this.pieces.filter(piece => piece.constructor['name'] === King.name).length < 2;
    }

    private static makePieces(): Piece[] {
        return [

            //Kings
            new King('White', 'E', 1),
            new King('Black', 'E', 8),

            //Queens
            new Queen('White', 'D', 1),
            new Queen('Black', 'D', 8),

            //Bishops
            new Bishop('White', 'C', 1),
            new Bishop('White', 'F', 1),
            new Bishop('Black', 'C', 8),
            new Bishop('Black', 'F', 8),

            //Knights
            new Knight('White', 'B', 1),
            new Knight('White', 'G', 1),
            new Knight('Black', 'B', 8),
            new Knight('Black', 'G', 8),

            //Rooks
            new Rook('White', 'A', 1),
            new Rook('White', 'H', 1),
            new Rook('Black', 'A', 8),
            new Rook('Black', 'H', 8),

            //Pawns
            new Pawn('White', 'A', 2),
            new Pawn('White', 'B', 2),
            new Pawn('White', 'C', 2),
            new Pawn('White', 'D', 2),
            new Pawn('White', 'E', 2),
            new Pawn('White', 'F', 2),
            new Pawn('White', 'G', 2),
            new Pawn('White', 'H', 2),
            new Pawn('Black', 'A', 7),
            new Pawn('Black', 'B', 7),
            new Pawn('Black', 'C', 7),
            new Pawn('Black', 'D', 7),
            new Pawn('Black', 'E', 7),
            new Pawn('Black', 'F', 7),
            new Pawn('Black', 'G', 7),
            new Pawn('Black', 'H', 7),
        ]
    }
}