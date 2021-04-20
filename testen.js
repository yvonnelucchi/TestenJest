const add = require("../helpers").add;


test ("add() telt twee nummers op", () => {

    // ARRANGE
    const num1 =20;
    const num2 =40;

    // ACT
    const result = add(num1, num2);

    // ASSERT
    expect(result.toEqual(60);

})