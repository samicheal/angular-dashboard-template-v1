import { NotificationService } from './../notification/notification.service';
import { Injectable } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class HttpResponseHanlderService {

  constructor(private notificationService: NotificationService) {}    

  renderSuccessNotificationAndModalDismissal(notification: String, activeModal: NgbActiveModal){
      activeModal.close();
      this.notificationService.showSuccess(notification, "");
  }

  renderErrorNotificationAndModalDismissal(notification: String, activeModal: NgbActiveModal){
      activeModal.close();
      this.notificationService.showError(notification, "");
  }

  renderErrorNotification(notification: String){
    this.notificationService.showError(notification, "");
  }

  renderSuccessNotification(notification: String){
    this.notificationService.showSuccess(notification, "");
  }

  dismissModal(activeModal: NgbActiveModal){
    activeModal.close();
  }
}
