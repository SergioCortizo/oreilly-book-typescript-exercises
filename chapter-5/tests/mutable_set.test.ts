import {MutableSet} from '../src/set-example/mutable_set';

describe("Mutable set tests", () => {

    test('Mutable set should delete an specified value when this value is found', async () => {

        let set: MutableSet = new MutableSet();
    
        set.add(1).add(2).add(3);
    
        expect(set.delete(2)).toBe(true);
        expect(set.has(2)).toBe(false);
    });
    
    test('Mutable set should return false when trying to delete an unknown value', async () => {
    
        let set: MutableSet = new MutableSet();
    
        set.add(1).add(2).add(3);
    
        expect(set.delete(4)).toBe(false);
    });

});


