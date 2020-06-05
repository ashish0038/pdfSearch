import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menu$: Object;
  setAtrr: boolean = false;

  constructor() {

  }

  someMethod(event: any) {
    if (event.keyCode == 13 || event.keyCode == 9) {
      setTimeout(function () {
        const elementList = document.querySelectorAll('.dropdown-menu');
        for (var i = 0; i < elementList.length; i++) {
          const eleHasClass = elementList[i].classList.value;
          if (eleHasClass == 'dropdown-menu show') {
            elementList[i].setAttribute("aria-hidden", "false");
          } else {
            elementList[i].setAttribute("aria-hidden", "true");
          } 
        }
      }, 100);
    }
  }


  ngOnInit() {

    const menu = [
      {
        label: 'My Documents',
        icon: 'Documents',
        link: '/home',
      },
      
    ];

    this.menu$ = menu;


  }

}
