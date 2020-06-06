import { Component, OnInit, Input } from '@angular/core';
import { SearchDictionaryDetailModel } from 'src/app/models/search-dictionary-detail.model';
import { HighLightedSectionModel } from 'src/app/models/high-lighted-section.model';
import { PublisherSubscriberService } from 'src/app/services/pub.sub.service';

@Component({
  selector: 'app-page-navigation-bar',
  templateUrl: './page-navigation-bar.component.html',
  styleUrls: ['./page-navigation-bar.component.scss']
})
export class PageNavigationBarComponent implements OnInit {
  @Input() DictionaryData: Array<SearchDictionaryDetailModel>;

  constructor(private readonly pubsubService: PublisherSubscriberService) { }

  ngOnInit() {
  }

  highlightSection(coordinate: HighLightedSectionModel) {
    this.pubsubService.publishHighLightObservable(coordinate);
  }

}
