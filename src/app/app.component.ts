import { Component, OnInit  } from '@angular/core';
import { Http ,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {PaginatePipe, PaginationService, PaginationControlsDirective, PaginationInstance} from 'ng2-pagination';
import { SpinnerService } from '@chevtek/angular-spinners';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ PaginationService],
  
})

export class AppComponent implements OnInit {
   baseUrl="https://api.github.com/search/repositories?q=";
  constructor(private http: Http) { }
  private title = 'app';
  private searchKeyWord:string;
  private _items:any[];
  private total_count:string
  private page:number=1;
  private url:string
  private per_page: number=15;
  private showTable:boolean=false
  //https://api.github.com/search/repositories?q=tetries&page=1&per_page=3
  ngOnInit(): void {
   
  }

  getItems():void{
    this.url=this.baseUrl+this.searchKeyWord+'&page='+this.page+'&per_page='+15;
    this.http.get(this.url).map(data=>data.json()).
    subscribe(res=>{
      this._items=res.items;
      this.total_count=res.total_count;
      this.showTable=true;
     })
  }
  
  wordCanged():void{
    this.page=1
     this.getItems();
  }

  pageChanged(page: number) {
    this.page=page;
    this.getItems();
  }
}
