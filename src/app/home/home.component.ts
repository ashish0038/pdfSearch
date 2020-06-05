import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options = { autoHide: false, scrollbarMinSize: 100 };
  certificate$: Object;  

  constructor() { }

  ngOnInit() {
     const data = [{
      certificateName:'Certificate of Liability insurance',
      certificateCreated:'2 Mar 2019'
     },
     {
      certificateName:'Certificate of Liability insurance',
      certificateCreated:'2 Oct 2019'
     },
     {
      certificateName:'Certificate of Liability insurance',
      certificateCreated:'2 Oct 2019'
     },
     {
      certificateName:'Certificate of Liability insurance',
      certificateCreated:'2 Oct 2019'
     }
    ]
     this.certificate$ = data;
  }
}
