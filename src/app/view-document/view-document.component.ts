import { Component, OnInit } from '@angular/core';
import { HighLightedSectionModel } from '../models/high-lighted-section.model';
import { SearchDictionaryPageDetailModel } from '../models/Search-dictionary-page-detail.model';
import { SearchDictionaryDetailModel } from '../models/search-dictionary-detail.model';
import { PublisherSubscriberService } from '../services/pub.sub.service';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.scss']
})
export class ViewDocumentComponent implements OnInit {
  options = { autoHide: false, scrollbarMinSize: 100 };
  heightlightedSection: HighLightedSectionModel;
  isDisplayighLightedSection: boolean = false;
  dicionaryDetail: Array<SearchDictionaryDetailModel>;

  constructor(private readonly pubsubService: PublisherSubscriberService) { }

  ngOnInit() {
    this.highlightSection();

    this.dicionaryDetail = new Array<SearchDictionaryDetailModel>();

    let item1 = new SearchDictionaryDetailModel();
    item1.title = 'General Liability';
    item1.pageDetail = new Array<SearchDictionaryPageDetailModel>();
    item1.pageDetail.push({
      pageNo: 1,
      details: [
        {
          headingText: 'CL CG 01 14 09 16', headingCoordinate: {
            x: 518, y: 751, height: 34, width: 189
          }, detailText: [
            { text: 'Additional Insured', detailCoordinate: null },
            { text: 'Completed', detailCoordinate: null },
            { text: 'Ongoing', detailCoordinate: null },
            { text: 'Waiver of Subrogation', detailCoordinate: null }
          ]
        },
        { headingText: 'Does not contribute(1)', headingCoordinate: null, detailText: null }
      ]
    });
    this.dicionaryDetail.push(item1);

    let item2 = new SearchDictionaryDetailModel();
    item2.title = "General Liability";
    item2.pageDetail = new Array<SearchDictionaryPageDetailModel>();
    item2.pageDetail.push({
      pageNo: 1,
      details: [
        {
          headingText: 'CL CG 01 14 09 16', headingCoordinate: null, detailText: [
            { text: 'Additional Insured', detailCoordinate: null },
            { text: 'Completed', detailCoordinate: null },
            { text: 'Ongoing', detailCoordinate: null },
            { text: 'Waiver of Subrogation', detailCoordinate: null }
          ]
        },
        { headingText: 'Does not contribute(1)', headingCoordinate: null, detailText: null }
      ]
    });
    this.dicionaryDetail.push(item2);

  }

  private highlightSection() {
    this.pubsubService.getHighLightObservable().subscribe(data => {
      this.isDisplayighLightedSection = false;
      if (!!data) {
        this.heightlightedSection = data;
        this.isDisplayighLightedSection = true;
        setTimeout(() => {
          document.getElementById('highlighSection').scrollIntoView();
        }, 0);
      }
    }, error => {
      this.isDisplayighLightedSection = false;
      console.log(error);
    });
  }
}
