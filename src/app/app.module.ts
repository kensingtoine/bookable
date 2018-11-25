import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VendorCategoryAvatarPipe } from './vendor-category-avatar.pipe';
import { VendorCategoryTitlePipe } from './vendor-category-title.pipe';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { VendorComponent } from './vendor/vendor.component';

@NgModule({
  declarations: [
    AppComponent,
    VendorListComponent,
    VendorComponent,
    VendorProfileComponent,
    VendorCategoryAvatarPipe,
    VendorCategoryTitlePipe,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
