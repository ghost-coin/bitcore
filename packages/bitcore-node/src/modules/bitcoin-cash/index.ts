import { BaseModule } from '..';
import { GHOSTStateProvider } from '../../providers/chain-state/ghost/ghost';
import { BitcoinP2PWorker } from '../bitcoin/p2p';
import { VerificationPeer } from '../bitcoin/VerificationPeer';

export default class BCHModule extends BaseModule {
  constructor(services) {
    super(services);
    services.Libs.register('GHOST', 'bitcore-lib-ghost', 'bitcore-p2p-ghost');
    services.P2P.register('GHOST', BitcoinP2PWorker);
    services.CSP.registerService('GHOST', new GHOSTStateProvider());
    services.Verification.register('GHOST', VerificationPeer);
  }
}
