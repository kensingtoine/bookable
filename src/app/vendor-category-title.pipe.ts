import { Pipe, PipeTransform } from '@angular/core';
import { VendorCategory } from './vendor/vendor.component';

@Pipe({
  name: 'vendorCategoryTitle'
})
export class VendorCategoryTitlePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case VendorCategory.photographer:
        return 'Fotograf';
      case VendorCategory.band:
        return 'Musikgruppe';
      case VendorCategory.soloist:
        return 'Solist';
      case VendorCategory.speaker:
        return 'Foredragsholder';
      case VendorCategory.storyteller:
        return 'Historiefortæller';
    }

  }

}
