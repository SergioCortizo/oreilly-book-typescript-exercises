import {Set} from '../src/set-example/set';

describe("Set tests", () => {

    it('Set should return true when it has a specified value', async () => {
        let set: Set = new Set();
    
        set.add(1);
    
        expect(set.has(1)).toBe(true);
    })
    
    it('Set should return false when it hasn\'t a specified value', async () => {
        let set: Set = new Set();
    
        expect(set.has(1)).toBe(false);
    })
    
    it('Set should allow to add multiple values at the same time', async () => {
        let set: Set = new Set();
    
        set.add(1).add(2).add(3);
    
        expect(set.has(1)).toBe(true);
        expect(set.has(2)).toBe(true);
        expect(set.has(3)).toBe(true);
    })
    
});

