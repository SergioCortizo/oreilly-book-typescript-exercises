export interface MapInterface<K, V> {
    get(key: K): V | null 
    set(key: K, value: V): void
}