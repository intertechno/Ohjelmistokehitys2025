const fruits = ["omena", "banaani", "appelsiini"];
const vegetables = ["pinaatti", "porkkana", "peruna"];

const ruoka = [...fruits, ...vegetables];

/*
const ruoka = [];
for (const fruit of fruits) {
    ruoka.push(fruit);
}
for (const vegetable of vegetables) {
    ruoka.push(vegetable);
}
*/

console.log(ruoka);