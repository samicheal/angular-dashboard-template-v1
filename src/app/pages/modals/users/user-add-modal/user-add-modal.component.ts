import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Observable} from "rxjs";

import { HttpResponseHanlderService } from './../../../../service/helpers/http-response-hanlder.service';
import { RedirectService } from './../../../../service/helpers/redirect.service';
import { UserserviceService } from '../../../../service/userservice/userservice.service';

@Component({
  selector: 'app-user-add-modal',
  templateUrl: './user-modal-component.html',
  styleUrls: ['./user-add-modal.component.css']
})
export class UserModalContent implements OnInit {

  userRegistration: FormGroup;
  types: String[] = ['user', 'admin']
  messages: String[] = ['Thank you for registering', 'Error creating user at this time']
  submitted = false;

  ngOnInit(): void {
    this.userRegistration = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required , Validators.minLength(4)]),
      type: new FormControl('', Validators.required)
    });
  }
  constructor(public activeModal: NgbActiveModal,
              private userService: UserserviceService,
              private responseHandler: HttpResponseHanlderService,
              private redirectService: RedirectService
              ) {}

  submit(): void {
    this.submitted = true;
    if(this.userRegistration.invalid)
      return;

    this.userService
        .createUser(this.userRegistration.value)
        .subscribe(
          data => {
            this.userRegistration.reset();
            this.responseHandler.renderSuccessNotificationAndModalDismissal(this.messages[0], this.activeModal);
            return true;
          },
          error => {
            this.responseHandler.renderErrorNotificationAndModalDismissal(this.messages[1], this.activeModal)
            return Observable.throw(error);
          }
        );

    this.redirectService.refreshComponent("users");    
    this.submitted = false;
  }

  get f(){
    return this.userRegistration.controls;
  }
}
