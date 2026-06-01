import { ReceivableStrategy } from './receivable-strategy.interface';

export class ChequeStrategy implements ReceivableStrategy {

    getSpread(): number {
        return 0.025;
    }

}