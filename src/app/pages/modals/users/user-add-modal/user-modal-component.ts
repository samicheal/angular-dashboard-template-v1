import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalContent } from './user-add-modal.component';


@Component({
    selector: 'add-user-modal',
    templateUrl: './user-add-modal.component.html'
  })
  export class UserModalComponent{
  
    constructor(private modalService: NgbModal) {}
  
    open() {
      this.modalService.open(UserModalContent);
    }
  }