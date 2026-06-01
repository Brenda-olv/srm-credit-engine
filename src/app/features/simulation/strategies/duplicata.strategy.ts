import { ReceivableStrategy } from "./receivable-strategy.interface";

export class DuplicataStrategy implements ReceivableStrategy {

    getSpread(): number {
        return 0.015;
    }

}