import { IValidation } from '..';
const BitcoreGhost = require('bitcore-lib-ghost');

export class GhostValidation implements IValidation {
  validateAddress(network: string, address: string): boolean {
    const AddressGhost = BitcoreGhost.Address;
    // Regular Address: try Ghost
    return AddressGhost.isValid(address, network);
  }

  validateUri(addressUri: string): boolean {
    // Check if the input is a valid uri or address
    const URIGhost = BitcoreGhost.URI;
    return URIGhost.isValid(addressUri);
  }
}
