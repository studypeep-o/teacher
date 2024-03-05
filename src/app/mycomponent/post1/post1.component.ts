import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { AppComponent } from '../../app.component';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-post1',
  standalone: true,
  imports: [AppComponent,Post1Component,NgForOf],
  templateUrl: './post1.component.html',
  styleUrl: './post1.component.css'
})
export class Post1Component implements OnInit {
  http = inject(HttpClient);
  posts: any=[];

  ngOnInit(): void {

    this.fetchPosts();
      
  }
  fetchPosts(){
    this.http.get("http://192.168.0.104:8080/all11")
    .subscribe((posts: any) =>{
      console.log(posts);
    });
  }

}
