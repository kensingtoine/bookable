import { Injectable } from '@angular/core';

import { Vendor, VendorCategory } from './vendor/vendor.component';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  constructor() {}

  public getVendors(): Vendor[] {
    return [
      {
        id: 0,
        name: 'Basses ballader',
        category: VendorCategory.band,
        description: {
          danish: 'Vi er det bedste band nogensinde'
        },
        profileImageSrc:
          'http://www.beatclub.ie/themes/beatclub/images/beatclub.jpg'
      },
      {
        id: 1,
        name: 'Fredes foto',
        category: VendorCategory.photographer,
        description: {
          danish: 'Jeg knipser hver en svipser'
        },
        profileImageSrc: ''
      },
      {
        id: 2,
        name: 'Alvidende Alfred',
        category: VendorCategory.speaker,
        description: {
          danish: 'Jeg deler ud gladeligt af alle mine guldkorn'
        }
      },
      {
        id: 0,
        name: 'Basses ballader',
        category: VendorCategory.band,
        description: {
          danish: 'Vi er det bedste band nogensinde'
        },
        profileImageSrc:
          'http://www.beatclub.ie/themes/beatclub/images/beatclub.jpg'
      },
      {
        id: 1,
        name: 'Fredes foto',
        category: VendorCategory.photographer,
        description: {
          danish: 'Jeg knipser hver en svipser'
        },
        profileImageSrc: ''
      },
      {
        id: 2,
        name: 'Alvidende Alfred',
        category: VendorCategory.speaker,
        description: {
          danish: 'Jeg deler ud gladeligt af alle mine guldkorn'
        }
      },
      {
        id: 0,
        name: 'Basses ballader',
        category: VendorCategory.band,
        description: {
          danish: 'Vi er det bedste band nogensinde'
        },
        profileImageSrc:
          'http://www.beatclub.ie/themes/beatclub/images/beatclub.jpg'
      },
      {
        id: 1,
        name: 'Fredes foto',
        category: VendorCategory.photographer,
        description: {
          danish: 'Jeg knipser hver en svipser'
        },
        profileImageSrc: ''
      },
      {
        id: 2,
        name: 'Alvidende Alfred',
        category: VendorCategory.speaker,
        description: {
          danish: 'Jeg deler ud gladeligt af alle mine guldkorn'
        }
      },
      {
        id: 0,
        name: 'Basses ballader',
        category: VendorCategory.band,
        description: {
          danish: 'Vi er det bedste band nogensinde'
        },
        profileImageSrc:
          'http://www.beatclub.ie/themes/beatclub/images/beatclub.jpg'
      },
      {
        id: 1,
        name: 'Fredes foto',
        category: VendorCategory.photographer,
        description: {
          danish: 'Jeg knipser hver en svipser'
        },
        profileImageSrc: ''
      },
      {
        id: 2,
        name: 'Alvidende Alfred',
        category: VendorCategory.speaker,
        description: {
          danish: 'Jeg deler ud gladeligt af alle mine guldkorn'
        }
      },
      {
        id: 0,
        name: 'Basses ballader',
        category: VendorCategory.band,
        description: {
          danish: 'Vi er det bedste band nogensinde'
        },
        profileImageSrc:
          'http://www.beatclub.ie/themes/beatclub/images/beatclub.jpg'
      },
      {
        id: 1,
        name: 'Fredes foto',
        category: VendorCategory.photographer,
        description: {
          danish: 'Jeg knipser hver en svipser'
        },
        profileImageSrc: ''
      },
      {
        id: 2,
        name: 'Alvidende Alfred',
        category: VendorCategory.speaker,
        bookingsTotal: 123,
        description: {
          danish: 'Jeg deler ud gladeligt af alle mine guldkorn'
        }
      },
      {
        id: 0,
        name: 'Basses ballader',
        category: VendorCategory.band,
        description: {
          danish: 'Vi er det bedste band nogensinde'
        },
        profileImageSrc:
          'http://www.beatclub.ie/themes/beatclub/images/beatclub.jpg'
      },
      {
        id: 1,
        name: 'Fredes foto',
        category: VendorCategory.photographer,
        description: {
          danish: 'Jeg knipser hver en svipser'
        },
        profileImageSrc: ''
      },
      {
        id: 2,
        name: 'Alvidende Alfred',
        category: VendorCategory.speaker,
        description: {
          danish: 'Jeg deler ud gladeligt af alle mine guldkorn'
        }
      }
    ];
  }
}
