import { UserserviceService } from './../../../../service/userservice/userservice.service';
import { Component, OnInit } from "@angular/core";
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpResponseHanlderService } from 'src/app/service/helpers/http-response-hanlder.service';
import { RedirectService } from 'src/app/service/helpers/redirect.service';
import {Observable} from "rxjs";

@Component({
    selector: 'user-delete-modal',
    templateUrl: './user-delete-modal.component.html',
    styleUrls: ['./user-delete-modal.component.css']
})
export  class DeleteModalContent implements OnInit{

    messages: String[] = ["user successfully deleted"];
    
    ngOnInit(): void {
    }

    constructor(public activeModal: NgbActiveModal,
                private userserviceService: UserserviceService,
                private responseHandler: HttpResponseHanlderService,
                private redirectService: RedirectService) {}

    public delete(id) {
        this.userserviceService
            .deleteUser(id)
            .subscribe(
                  response => {
                    this.responseHandler.renderSuccessNotificationAndModalDismissal(this.messages[0], this.activeModal);
                    console.log("response " + response);
                    return true;
                  },
                  error => {
                    this.responseHandler.renderErrorNotificationAndModalDismissal(this.messages[1], this.activeModal)
                    return Observable.throw(error);
                  }
            );
        this.redirectService.refreshComponent("users");
    }
}