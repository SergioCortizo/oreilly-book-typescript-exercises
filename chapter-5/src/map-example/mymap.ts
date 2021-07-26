import { MapInterface } from "./map_interface";

export class MyMap<K, V> implements MapInterface<K, V> {
    private data : [K, V][] = [];

    constructor(initialKeyOrInitialLines?: K, initialValue?: V) { 
        if (initialKeyOrInitialLines && initialValue) 
            this.data.push([initialKeyOrInitialLines, initialValue]);
    }

    get (key: K) : V | null {
        const registry : [K, V] | undefined = this.data.find(registry => registry[0] === key);

        return registry ? registry[1] : null;
    }

    set (key: K, value: V) : void {

        const index: number = this.data.findIndex(registry => registry[0] === key);

        if (index > -1)  this.data[index] = [key, value];
        else this.data.push([key, value])
    }

    merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {

        const mergedMap: MyMap<K | K1, V | V1> = new MyMap<K | K1, V | V1>();

        mergedMap.data = mergedMap.data.concat(this.data).concat(map.data);

        return mergedMap;
    }
}