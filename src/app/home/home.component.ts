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
  news$: Object;  

  constructor() { }

  ngOnInit() {
     const data = [{
      newsTitle:'Mega Walkin in Bristlecone',
      newsText : 'Mega Walkin in Bristlecone on this weekend for freshers.Ask your known to take benefit of this opportunity.',
      newsCreated:'2 Mar 2019'
     },
     {
      newsTitle:'Just try answers',
      newsText : '100 years ago everyone owned a horse and only the rich had cars. Today everyone has cars and only the rich own horses',
      newsCreated:'2 Oct 2019'
     },
     {
      newsTitle:'New gaming compitation launched',
      newsText : 'Our list feature takes the guesswork out of learning by offering a curated collection of classes to help you',
      newsCreated:'2 Oct 2019'
     },
     {
      newsTitle:'Introducing new online services',
      newsText : 'Hello designers! Adobe has been exceptionally generous these days and people have really been',
      newsCreated:'2 Oct 2019'
     }
    ]
     this.news$ = data;
  }

    viewMore(event){
      const elementList = document.querySelectorAll('.news-list');
      const element = elementList[3] as HTMLElement;
      element.scrollIntoView({behavior:'smooth'});
    }

}
