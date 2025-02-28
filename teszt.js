import { masodfoku } from "./main.js"
export function masodfokuTeszt() {
    const TESZTESETEKLISTA =[
        {
            a:1,
            b:2,
            c:1,
            vart:[-1, -1],
            nev:"Pontosan 1 gyöke van",
        },
        {
            a: 1,
            b: 2,
            c: 5,
            vart: ["Nincs megoldás","Nincs megoldás"],
            nev:"Diszkrimuináns negatív, nincs megoldás",
        },
        {
            a: 3,
            b: -9,
            c: 0,
            vart: [3, 0],
            nev:"2 gyöke van",
        },
        {
            a: 2,
            b: 5,
            c: 2,
            vart: [-0.5, -2],
            nev:"2 negatív gyöke van",
        },
        {
            a: 10,
            b: 100,
            c: 1,
            vart: [-0.010010020050140156, -9.98998997994986],
            nev:"2 negatív tört gyöke van",
        },
        {
            a: 1,
            b: 0,
            c: 0,
            vart: [0, 0],
            nev:"b és a c nulla",
        },
        {
            a: 0,
            b: 1,
            c: 0,
            vart: [NaN, -Infinity],
            nev:"a és a c 0",
        },
        {
            a: 0,
            b: 0,
            c: 1,
            vart: [NaN, NaN],
            nev:"a és a b 0",
        },
        {
            a: 0,
            b: 0,
            c: 0,
            vart: [NaN, NaN],
            nev:"mind 0",
        },
    ]
    let a;
    let b;
    let c;
    let vart;
    let nev; 
    for (let index = 0; index < TESZTESETEKLISTA.length; index++){
        a = TESZTESETEKLISTA[index].a;
        b = TESZTESETEKLISTA[index].b;
        c = TESZTESETEKLISTA[index].c
        vart = TESZTESETEKLISTA[index].vart
        nev = TESZTESETEKLISTA[index].nev
        let kapott = masodfoku(a,b,c)
        //console.log(`a: ${a}, b: ${b}, c: ${c} várt: ${vart} kapott: ${kapott} jó? ${vart===kapott}`);
        console.assert(
            vart[0] === kapott[0] && vart[1] === kapott[1],
            ` ${TESZTESETEKLISTA[index].nev} a: ${a}, b: ${b}, c: ${c} várt: ${vart} kapott: ${kapott} jó? ${vart===kapott}`
        );
    }
}