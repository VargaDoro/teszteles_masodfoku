import { masodfokuTeszt } from "./teszt.js"

export function masodfoku(a,b,c){
    let d = b*b-4*a*c
    if (a === 0) {  // Ha a = 0, akkor lineáris egyenlet
        if (b === 0) {
            return [NaN,NaN]; // Lineáris megoldás
        }
        return [-c/b];
    }
    if (d<0){
        return ["Nincs megoldás","Nincs megoldás"]
    }
    let x1 = (-b+Math.sqrt(b*b-4*a*c))/(2*a)
    let x2 = (-b-Math.sqrt(b*b-4*a*c))/(2*a)
    if (d === 0) {
        return [x1, x1];  // Ha D = 0, egy gyök van
    }
    return [x1, x2];  // Ha D > 0, két gyök van
}

masodfoku(1,2,1)
masodfokuTeszt()