import { BitcoreLib, BitcoreLibGhost } from 'crypto-wallet-core';
import _ from 'lodash';
import { IChain } from '..';
import { BtcChain } from '../btc';

const Errors = require('../../errors/errordefinitions');

export class GhostChain extends BtcChain implements IChain {
  constructor() {
    super(BitcoreLibGhost);
  }
}
