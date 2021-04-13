import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  articles;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.apiService.getNews().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }
}
