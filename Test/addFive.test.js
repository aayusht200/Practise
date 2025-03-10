const addFive=require('./addFive');

test('return the number plus 5',()=>{
    expect(addFive(0)).toBe(5);
})