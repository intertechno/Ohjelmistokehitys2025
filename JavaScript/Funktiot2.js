function testiFunktio(a, b, c)
{
    console.log(`Syötteet: "${a}", "${b}", "${c}".`);
    return a + b + c;
}

const luvut = [1, 2, 3, 4, 5];
testiFunktio(...luvut);
// testiFunktio(luvut[0], luvut[1], luvut[2]);

console.log("----------------");
testiFunktio(1, 2);

console.log("----------------");
testiFunktio(1, 2, 3, 4);

console.log("----------------");
testiFunktio(true, [1, 2], "ABC", null);
