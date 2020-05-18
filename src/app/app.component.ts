import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postOne:Post = new Post(
    'Mon Premier Post',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis facilisis lectus. Nunc purus dolor, bibendum ac euismod sed, dapibus non turpis. Proin euismod tempor dui non commodo. Aenean pellentesque malesuada lacus sed vulputate. Proin suscipit ipsum quis pellentesque sagittis',
    5);
  postTwo:Post = new Post(
    'Mon Second Post',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis facilisis lectus. Nunc purus dolor, bibendum ac euismod sed, dapibus non turpis. Proin euismod tempor dui non commodo. Aenean pellentesque malesuada lacus sed vulputate. Proin suscipit ipsum quis pellentesque sagittis.',
    -2);

  posts = [this.postOne,this.postTwo];
}

/**
 * Represente un post.
 * @constructor
 * @param {string} title - le titre du post
 * @param {string} content - le contenu du post
 * @param {loveIts} number - le nombre de réaction sur le post
 */
class Post{
  title:string;
  content:string;
  loveIts:number;
  created_at:object;
  constructor(title:string,content:string,loveIts:number) {
    this.title =title;
    this.content=content;
    this.loveIts=loveIts;
    this.created_at=new Date();
  }
}

