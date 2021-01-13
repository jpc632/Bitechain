const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
    it('generates SHA256 hashed output', () => {
        expect(cryptoHash('test'))
            .toEqual('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08');
    });

    it('produces same hash with input in any order', () => {
        expect(cryptoHash('one', 'two')).toEqual(cryptoHash('two', 'one'));
    });
});