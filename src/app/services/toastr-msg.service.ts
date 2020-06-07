import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrMsgService {
  constructor(private readonly toastr: ToastrService) {}

  showSuccess(msg:string) {
    this.toastr.success(msg);
  }

  showError(error:string) {
    this.toastr.error(error);
  }
}
