let expect= require('chai').expect;
let should= require('chai').should();
let assert= require('chai').assert;
 

let index= require('../index')
describe ('hear we test captalize function ',function(){

    it('Should return  string ',function(){
        expect(typeof index.capitalizeText).equal(typeof String)
    })

    it('Should takes a string and return it after capitalize it' , function(){
        expect(index.capitalizeText('mai')).to.be.equal('MAI')
    })
    
    it (' if argument are not string,  throw type error ', function(){
        expect(function(){
            index.capitalizeText(34)
        }).to.throw(TypeError,"Please enter only string")
    })
})
/////////// problem 2
const createArray = (number) => {
  if (typeof number !== 'number') {
    throw new TypeError('parameter should be a number');
  }

  const myArray = Array.from(Array(number).keys());
  return myArray;
};

describe('createArray', () => {
  it('returns an array', () => {
    const input = 5;
    const output = createArray(input);
    assert.deepStrictEqual(Array.isArray(output), true);
  });

  it('returns an array of length equal to the input number', () => {
    const input = 3;
    const output = createArray(input);
    assert.deepStrictEqual(output.length, input);
  });

  it('returns an empty array when input number is zero', () => {
    const input = 0;
    const output = createArray(input);
    assert.deepStrictEqual(output, []);
  });

  it('throws an error when input is not a number', () => {
    assert.throws(() => createArray('not a number'), TypeError);
    assert.throws(() => createArray(true), TypeError);
  });

  it('returns an array of unique numbers', () => {
    const input = 5;
    const output = createArray(input);
    const unique = output.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    assert.deepStrictEqual(unique.length, input);
  })
});