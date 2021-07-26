import { Game } from "./game";
import { Letter } from "./position";
const prompts = require('prompts');

const game: Game = new Game();
const files: Letter[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const play = async () => {

    do {
        printTable();

        console.log("Turn " + game.getTurn());
        console.log("Turn for player " + game.getPlayer());

        const response = await prompts(inputs);

        let result: boolean = game.doMove(response.fromLetter, response.fromRank, response.toLetter, response.toRank);

        while (!result) {
            console.log("Wrong move");
            const response = await prompts(inputs);
            result = game.doMove(response.fromLetter, response.fromRank, response.toLetter, response.toRank);
        }
    } while (!game.checkmate());

    console.log("JAQUE MATE CON TOMATE!!!!!! (y un cate de aguacate)");
}

const printTitle = () => {
    console.log("\n##################");
    console.log("### CHESS GAME ###");
    console.log("##################\n");
}

const printTable = () => {
    for (let rank = 8; rank > 0; rank--) {

        let squares: string = "";

        for (let letter of files) {

            let piece = game.findPiece(letter, rank);

            squares = squares + "[" + piece + "]";
        }

        console.log(rank + " " + squares);
    }

    let letters = "  ";

    for (let letter of files)
        letters = letters + " " + letter + "  ";

    console.log("");
    console.log(letters);

    console.log("");
    console.log("--Pieces--");
    console.log("Bishop -> B");
    console.log("King -> K");
    console.log("Knight -> H");
    console.log("Pawn -> P");
    console.log("Queen -> Q");
    console.log("Rook -> R");

    console.log("");
    console.log("--Colors--");
    console.log("Black -> B");
    console.log("White -> W");
}

const inputs = [
    {
        type: 'text',
        name: 'fromLetter',
        message: "From letter",
        validate: (fromLetter: string) =>
            !files.find(letter => letter == fromLetter) ? "Wrong letter" : true
    },
    {
        type: 'number',
        name: 'fromRank',
        message: 'From rank',
        validate: (fromRank: number) =>
            fromRank >= 1 && fromRank <= 8 ? true : "Wrong rank"
    },
    {
        type: 'text',
        name: 'toLetter',
        message: 'To letter',
        validate: (toLetter: string) =>
            !files.find(letter => letter == toLetter) ? "Wrong letter" : true
    },
    {
        type: 'number',
        name: 'toRank',
        message: 'To rank',
        validate: (toRank: number) =>
            toRank >= 1 && toRank <= 8 ? true : "Wrong rank"
    },
];

printTitle();

play();
