import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-add-modal',
  templateUrl: './user-modal-component.html',
  styleUrls: ['./user-add-modal.component.css']
})
export class NgbdModalContent {

  constructor(public activeModal: NgbActiveModal) {}

}


@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './user-add-modal.component.html'
})
export class NgbdModalComponent {

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(NgbdModalContent);
  }
}
