import { BalletFlat } from "../src/shoe-example/ballet_flat";
import { Boot } from "../src/shoe-example/boot";
import { ShoeFactory } from "../src/shoe-example/shoe";
import { Sneaker } from "../src/shoe-example/sneaker";

describe("ShoeFactory tests", () => {

    it('ShoeFactory should return a BalletFlat', async () => {
       let factory: ShoeFactory = new ShoeFactory;
       expect(factory.create('balletFlat') instanceof BalletFlat).toBe(true);
    })
    
    it('ShoeFactory should return a Boot', async () => {
        let factory: ShoeFactory = new ShoeFactory;
       expect(factory.create('boot') instanceof Boot).toBe(true);
    })
    
    it('ShoeFactory should return a Sneaker', async () => {
        let factory: ShoeFactory = new ShoeFactory;
       expect(factory.create('sneaker') instanceof Sneaker).toBe(true);
    })
    
});
