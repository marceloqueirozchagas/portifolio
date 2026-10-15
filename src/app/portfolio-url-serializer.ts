import { Injectable } from '@angular/core';
import { DefaultUrlSerializer, UrlTree } from '@angular/router';

// Match static directory URLs so hydration does not strip the language slash.
@Injectable()
export class PortfolioUrlSerializer extends DefaultUrlSerializer {
  override serialize(tree: UrlTree): string {
    return super.serialize(tree).replace(/^\/en(?=[?#]|$)/, '/en/');
  }
}
