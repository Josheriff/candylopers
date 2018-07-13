// RECUERDA EL GIVEN WHEN THEN

describe('two plus two is four', () => {
  it('first case:', () =>{
    expect(2 + 2).toBe(4);
  });
  it('second case:',() =>{
    expect(1 + 3).toBe(4);
  });
  
});

describe('object assignment', () => {
  const data = {one: 1};
  data.two = 2;
  
  expect(data).toEqual({one: 1, two: 2});
});
