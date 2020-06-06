import { Component, OnInit } from '@angular/core';
import { HighLightedSectionModel } from '../models/high-lighted-section.model';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.scss']
})
export class ViewDocumentComponent implements OnInit {
  options = { autoHide: false, scrollbarMinSize: 100 };
  heightlightedSection: HighLightedSectionModel;
  isDisplayighLightedSection:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
