import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit {

  @Input()
  id: string;

  constructor() { }

  ngOnInit() {
  }

}
