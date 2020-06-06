import { Component, OnInit } from '@angular/core';

import { CertificateDetails } from 'src/app/models/certificate-detail';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  options = { autoHide: false, scrollbarMinSize: 100 };
  certificate: Array<CertificateDetails>;

  constructor() { }

  ngOnInit() {
    this.certificate = new Array<CertificateDetails>();

    this.certificate.push({
      certificateName: 'Certificate of Liability insurance',
      certificateCreated: '2 Mar 2019'
    });

    this.certificate.push({
      certificateName: 'Certificate of Liability insurance',
      certificateCreated: '2 Oct 2019'
    });

    this.certificate.push({
      certificateName: 'Certificate of Liability insurance',
      certificateCreated: '2 Oct 2019'
    });

    this.certificate.push({
      certificateName: 'Certificate of Liability insurance',
      certificateCreated: '2 Oct 2019'
    });
  }
}
