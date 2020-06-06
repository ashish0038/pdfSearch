import { Component, OnInit, Input } from '@angular/core';
import { HighLightedSectionModel } from 'src/app/models/high-lighted-section.model';

@Component({
  selector: 'app-high-lighted-section',
  templateUrl: './high-lighted-section.component.html',
  styleUrls: ['./high-lighted-section.component.scss']
})
export class HighLightedSectionComponent implements OnInit {
  @Input() heightlightedSection: HighLightedSectionModel;

  constructor() { }

  ngOnInit() {

  }

}
