import { masodfoku } from "./main.js";

export function masodfokuTeszt() {
    const TESZTESETEKLISTA = [
        {
            a: 1,
            b: 2,
            c: 1,
            vart: [-1, -1],
            nev: "Pontosan 1 gyöke van",
        },
        {
            a: 1,
            b: 2,
            c: 5,
            vart: ["Nincs megoldás", "Nincs megoldás"],
            nev: "Diszkrimináns negatív, nincs megoldás",
        },
        {
            a: 3,
            b: -9,
            c: 0,
            vart: [3, 0],
            nev: "2 gyöke van",
        },
        {
            a: 2,
            b: 5,
            c: 2,
            vart: [-0.5, -2],
            nev: "2 negatív gyöke van",
        },
        {
            a: 10,
            b: 100,
            c: 1,
            vart: [-0.010010020050140156, -9.98998997994986],
            nev: "2 negatív tört gyöke van",
        },
        {
            a: 1,
            b: 0,
            c: 0,
            vart: [0, 0],
            nev: "b és c nulla",
        },
        {
            a: 0,
            b: 1,
            c: 0,
            vart: [0],
            nev: "Lineáris egyenlet, b = 1, c = 0",
        },
        {
            a: 0,
            b: 0,
            c: 1,
            vart: [NaN, NaN],
            nev: "Lineáris egyenlet, b = 0, c = 1",
        },
        {
            a: 0,
            b: 0,
            c: 0,
            vart: [NaN, NaN],
            nev: "Lineáris egyenlet, b = 0, c = 0",
        },
    ];

    for (let index = 0; index < TESZTESETEKLISTA.length; index++) {
        const { a, b, c, vart, nev } = TESZTESETEKLISTA[index];
        const kapott = masodfoku(a, b, c);
        const areNaN = (val1, val2) => isNaN(val1) && isNaN(val2);
        console.assert(
            (areNaN(vart[0], kapott[0]) && areNaN(vart[1], kapott[1])) ||
            (vart[0] === kapott[0] && vart[1] === kapott[1]),
            `${nev} a: ${a}, b: ${b}, c: ${c} várt: ${vart} kapott: ${kapott}`
        );
    }
}
