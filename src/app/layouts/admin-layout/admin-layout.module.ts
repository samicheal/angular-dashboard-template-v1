import { UserModalContent } from '../../pages/modals/users/user-add-modal/user-add-modal.component';
import { UserModalComponent } from '../../pages/modals/users/user-add-modal/user-modal-component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from './../../pages/users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalContent } from 'src/app/pages/modals/users/user-delete-modal/user-delete-modal-content';
import { UserDeleteModalComponent } from 'src/app/pages/modals/users/user-delete-modal/user-delete-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    UsersComponent,
    UserModalComponent,
    UserModalContent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClipboardModule,
    NgbModule
  ],
  providers: [UserDeleteModalComponent],
  entryComponents: [
    UserModalContent
  ]
})

export class AdminLayoutModule {}
