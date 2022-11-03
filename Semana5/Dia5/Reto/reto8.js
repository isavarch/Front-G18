const frutas = [
    { name: 'piña' },
    { name: 'manzana' },
    { name: 'uva' }
]

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i].name)
}

let count = 0;

while (count < frutas.length) {
    console.log(frutas[count].name)
    count++
}

frutas.forEach( (fruta) => console.log(fruta.name));

frutas.map( (fruta) => console.log(fruta.name));

