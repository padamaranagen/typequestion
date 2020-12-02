import { Component, OnInit } from '@angular/core';
import { EiddoConfigService } from 'src/app/service/eiddoconfig/eiddo-config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private eiddoConfigService: EiddoConfigService) { }

  footerURLs: any;
  objectKeys = Object.keys;
  ngOnInit() {
    const request = ['home.url',
    'angular5.url',
    'angular7.url',
    'anguglar9.url',
    'angular11.url',
    'help.url'];
    this.eiddoConfigService.retrieveURLs(request).subscribe(data => {
      console.log('eiddo response', data);
      this.footerURLs = data;
    });
  }

  openURL(url) {
    window.open(url, '_blank', 'resizable= yes,scrollbars=yes');
  }
}
