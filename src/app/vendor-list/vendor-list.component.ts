import { Component, Input, OnInit } from '@angular/core';
import { Vendor } from '../vendor/vendor.component';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  @Input()
  public vendors: Vendor[];

  constructor() { }

  ngOnInit() {
  }

}
