import { MyMap } from "../src/map-example/mymap";

describe("MyMap tests", () => {

    it('MyMap should get a value based on a stored key', async () => {

        const map: MyMap<number, string> = new MyMap();

        map.set(1, "First");
        map.set(2, "Second");
        map.set(3, "Third");

        expect(map.get(2)).toBe("Second");
        
    });

    it('MyMap should return null getting a value with an unknown key', async () => {

        const map: MyMap<number, string> = new MyMap();

        map.set(1, "First");
        map.set(2, "Second");
        map.set(3, "Third");

        expect(map.get(9999)).toBe(null);
        
    });

    it('MyMap should add a new key and value', async () => {

        const map: MyMap<number, string> = new MyMap();

        expect(map.get(1)).toBe(null);

        map.set(1, "First");

        expect(map.get(1)).toBe("First");
        
    });

    it('MyMap should be able to change a value based on a registered key', async () => {

        const map: MyMap<number, string> = new MyMap(1, "First");

        map.set(1, "First");
        map.set(1, "NewFirst");

        expect(map.get(1)).toBe("NewFirst");

    });

    it('MyMap should be able to merge with another different MyMap', async () => {

        const map: MyMap<number, string> = new MyMap(1, "First");
        const map2: MyMap<string, boolean> = new MyMap("First", true);

        map.set(2, "Second");
        map.set(3, "Third");

        map2.set("Second", false);
        map2.set("Third", true);

        const result : MyMap<number | string, string | boolean> = map.merge(map2);

        expect(result.get(1)).toBe("First");
        expect(result.get(2)).toBe("Second");
        expect(result.get(3)).toBe("Third");
        expect(result.get("First")).toBe(true);
        expect(result.get("Second")).toBe(false);
        expect(result.get("Third")).toBe(true);

    });
    
});