import { GHOSTxProvider } from '../btc';

export class GHOSTxProvider extends BTCTxProvider {
  lib = require('bitcore-lib-ghost');
}
