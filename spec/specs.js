describe('primeSifter', function()  {
  it("will return an array of all the primes less than a small non-prime", function(){
    expect(primeSifter(6)).to.eql([2, 3, 5]);
  });
  it("will return an array of all the primes less than a double-digit non-prime", function(){
    expect(primeSifter(12)).to.eql([2, 3, 5, 7, 11]);
  });
  it("will return an array of all the primes less than a triple-digit non-prime", function(){
    expect(primeSifter(100)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });
});
