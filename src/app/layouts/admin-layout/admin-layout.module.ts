import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from './../../pages/users/users.component';

import { NgbdModalComponent, NgbdModalContent } from '../../modal/user/user-add-modal/user-add-modal.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    UsersComponent,
    NgbdModalComponent,
    NgbdModalContent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  entryComponents: [NgbdModalContent]
})

export class AdminLayoutModule {}
