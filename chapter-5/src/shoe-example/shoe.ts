import { BalletFlat } from "./ballet_flat"
import { Boot } from "./boot"
import { Sneaker } from "./sneaker"

export type Shoe = {
    purpose: string
}

export class ShoeFactory {

    create(type: 'balletFlat'): BalletFlat
    create(type: 'boot'): Boot
    create(type: 'sneaker'): Sneaker
    create(type: string) {
        switch (type) {
            case 'balletFlat': return new BalletFlat
            case 'boot': return new Boot
            case 'sneaker': return new Sneaker
        }
    }

}