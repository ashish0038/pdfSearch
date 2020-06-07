import { Component, OnInit, Input } from '@angular/core';
import { HighLightedSectionModel } from 'src/app/models/high-lighted-section.model';
import { PublisherSubscriberService } from 'src/app/services/pub.sub.service';
import { SearchDictionaryPageDetailModel } from 'src/app/models/Search-dictionary-page-detail.model';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit {
  @Input() pageDetail: Array<SearchDictionaryPageDetailModel>;

  constructor(private readonly pubsubService: PublisherSubscriberService) { }

  ngOnInit() {
  }

  highlightSection(coordinate: HighLightedSectionModel) {
    this.pubsubService.publishHighLightObservable(coordinate);
  }

}
