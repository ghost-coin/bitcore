import { BTCStateProvider } from '../btc/btc';

export class BCHStateProvider extends BTCStateProvider {
  constructor(chain: string = 'GHOST') {
    super(chain);
  }

}
