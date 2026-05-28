import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-agregarproduct',
  imports: [],
  templateUrl: './agregarproduct.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Agregarproduct {}
