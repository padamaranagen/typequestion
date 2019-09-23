import { Component, OnInit } from '@angular/core';

import {
  SearchService
} from 'src/app/service/search.service';
import {
  Subject
} from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  providers: [SearchService]
})
export class SearchbarComponent implements OnInit {

  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService){
    this.searchService=searchService;
  }

  ngOnInit() {
    this.searchService.search(this.searchTerm$)
    .subscribe(mydata => {
      this.results=mydata;
      //this.results = Array.of(this.results); 
      //console.log("Results:"+mydata.results[0].name);
    });
  }

}
