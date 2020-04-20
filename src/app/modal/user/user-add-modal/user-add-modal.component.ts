import { UserserviceService } from './../../../service/userservice.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Observable} from "rxjs";


@Component({
  selector: 'app-user-add-modal',
  templateUrl: './user-modal-component.html',
  styleUrls: ['./user-add-modal.component.css']
})
export class NgbdModalContent implements OnInit {

  userRegistration: FormGroup;
  types: String[] = ['user', 'admin']
  submitted = false;
  validMessage: String;

  ngOnInit(): void {
    this.userRegistration = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required , Validators.minLength(4)]),
      type: new FormControl('', Validators.required)
    });
  }
  constructor(public activeModal: NgbActiveModal, private userService: UserserviceService) {}

  trial(): void {
    this.submitted = true;
    if(this.userRegistration.invalid)
      return;
    this.validMessage = "thank you for registering";
    this.userService
        .createUser(this.userRegistration.value)
        .subscribe(
          data => {
            this.userRegistration.reset();
            return true;
          },
          error => {
            return Observable.throw(error);
          }
        );
    this.submitted = false;
  }

  get f(){
    return this.userRegistration.controls;
  }
}


@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './user-add-modal.component.html'
})
export class NgbdModalComponent{

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(NgbdModalContent);
  }
}
