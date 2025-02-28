import { masodfokuTeszt } from "./teszt.js"

export function masodfoku(a,b,c){
    let d = b*b-4*a*c
    if (a=0){
        return [-b/c]
    }
    if (d<0){
        return ["Nincs megoldás","Nincs megoldás"]
    }
    let x1 = (-b+Math.sqrt(b*b-4*a*c))/(2*a)
    let x2 = (-b-Math.sqrt(b*b-4*a*c))/(2*a)
    return [x1, x2]
}

masodfoku(1,2,1)
masodfokuTeszt()