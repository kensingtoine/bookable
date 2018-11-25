import { Pipe, PipeTransform } from '@angular/core';
import { VendorCategory } from './vendor/vendor.component';

@Pipe({
  name: 'vendorCategoryAvatar'
})
export class VendorCategoryAvatarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case VendorCategory.photographer:
        return 'assets/avatars/icons8-slr-camera-64.png';
      case VendorCategory.band:
        return 'assets/avatars/icons8-music-64.png';
      case VendorCategory.soloist:
        return 'assets/avatars/icons8-music-64.png';
      case VendorCategory.speaker:
        return 'assets/avatars/icons8-micro-64.png';
      case VendorCategory.storyteller:
        return 'assets/avatars/icons8-micro-64.png';
    }

  }

}
