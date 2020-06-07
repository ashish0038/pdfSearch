import { Component, OnInit, Input } from '@angular/core';
import { SearchDictionaryDetailModel } from 'src/app/models/search-dictionary-detail.model';

@Component({
  selector: 'app-page-navigation-bar',
  templateUrl: './page-navigation-bar.component.html',
  styleUrls: ['./page-navigation-bar.component.scss']
})
export class PageNavigationBarComponent implements OnInit {
  @Input() dictionaryData: Array<SearchDictionaryDetailModel>;

  constructor() { }

  ngOnInit() {
  }
}
