import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts = [
  {
  	title:'Mon Premier Post',
  	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis facilisis lectus. Nunc purus dolor, bibendum ac euismod sed, dapibus non turpis. Proin euismod tempor dui non commodo. Aenean pellentesque malesuada lacus sed vulputate. Proin suscipit ipsum quis pellentesque sagittis.',
  	loveIts:5,
  	created_at:'10/24/2018, 11:00 AM'
  },
  {
  	title:'Mon Second Post',
  	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis facilisis lectus. Nunc purus dolor, bibendum ac euismod sed, dapibus non turpis. Proin euismod tempor dui non commodo. Aenean pellentesque malesuada lacus sed vulputate. Proin suscipit ipsum quis pellentesque sagittis.',
  	loveIts:-2,
  	created_at:'10/24/2018, 2:00 PM'
  }];
}

