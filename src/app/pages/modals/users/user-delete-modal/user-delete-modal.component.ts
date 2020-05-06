import { AdminLayoutComponent } from './../../../../layouts/admin-layout/admin-layout.component';
import { Component, OnInit, Injectable, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalContent } from './user-delete-modal-content';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-delete-modal',
  templateUrl: './user-delete-modal.component.html',
  styleUrls: ['./user-delete-modal.component.css']
})
@Injectable({
  providedIn: AdminLayoutComponent
})
export class UserDeleteModalComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  public open(id, entity) {
    const modalRef = this.modalService.open(DeleteModalContent);
    modalRef.componentInstance.id =  id;
    modalRef.componentInstance.entity =  entity;
  }
}
