import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material';

import { VendorService } from './vendor.service';
import { Vendor, VendorCategory } from './vendor/vendor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public vendorCategories = VendorCategory;

  @ViewChild('categories')
  public categoriesList: MatSelectionList;

  public allVendors: Vendor[];

  public displayedVendors: Vendor[];

  constructor(private vendorService: VendorService) {}

  public async ngOnInit() {
    this.allVendors = this.displayedVendors = this.vendorService.getVendors();
  }

  public onCategorySelectionChange(selectionChange: MatSelectionListChange) {
    this.filterVendorsByCategory(
      this.categoriesList.selectedOptions.selected.map(item => item.value)
    );
  }

  private filterVendorsByCategory(categories: VendorCategory[] = []) {
    if (categories.length === 0) {
      this.displayedVendors = this.allVendors;
    } else {
      this.displayedVendors = this.allVendors.filter(v =>
        categories.includes(v.category)
      );
    }
  }
}
