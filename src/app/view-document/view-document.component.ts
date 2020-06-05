import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.scss']
})
export class ViewDocumentComponent implements OnInit {
  options = { autoHide: false, scrollbarMinSize: 100 };
  constructor() { }

  ngOnInit() {
  }

}
