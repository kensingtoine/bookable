import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '*'
        })
      ),
      state(
        'closed',
        style({
          height: '0px'
        })
      ),
      transition('open => closed', [animate('.15s')]),
      transition('closed => open', [animate('0.15s')])
    ])
  ]
})
export class VendorComponent {
  @Input()
  public vendor: Vendor;

  public hovered = false;
}

export interface Vendor {
  id: number;
  name: string;
  category: VendorCategory;
  bookingsTotal?: number;
  description?: MultiLingualDescription;
  profileImageSrc?: string;
}

export enum VendorCategory {
  band = 0,
  photographer = 1,
  soloist = 2,
  speaker = 3,
  storyteller = 4
}

export namespace VendorCategory {
  export function values() {
    return Object.keys(VendorCategory).filter(
      type => isNaN(<any>type) && type !== 'values'
    );
  }

  export function keys(): number[] {
    return Object.keys(VendorCategory)
      .filter(type => !isNaN(<any>type) && type !== 'values')
      .map(type => parseInt(type, 10));
  }
}

export interface MultiLingualDescription {
  english?: string;
  danish?: string;
}
