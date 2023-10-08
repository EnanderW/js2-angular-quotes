import { Component, OnInit } from '@angular/core';

interface Quote {
  quote: string;
  author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  quotes: Quote[] = [];
  newQuote: string = '';

  ngOnInit(): void {
    fetch('https://dummyjson.com/quotes')
      .then((res) => res.json())
      .then((res) => (this.quotes = res.quotes));
  }

  addQuote(): void {
    this.quotes.push({
      author: 'You',
      quote: this.newQuote,
    });

    this.newQuote = '';
  }
}
