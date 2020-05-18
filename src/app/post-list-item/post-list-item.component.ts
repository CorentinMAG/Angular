import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  @Input() my_title:string;
  @Input() my_content:string;
  @Input() my_like:number;
  @Input() my_date:string;

  getColor(){

  }

  ngOnInit() {
  }

  Onlike(){
  	this.my_like = this.my_like +1;
  }

  Ondislike(){
  	this.my_like = this.my_like -1;
  }

}
