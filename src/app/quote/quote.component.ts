
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl:'./quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class  QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'BENARD AKAKA', "“Education is the most powerful weapon which you can use to change the world if you are planning for a lifetime, educate people............",new Date()),
    new Quote(2,'PHILIPIA EVE',"“If You are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people”",new Date()),
    new Quote(3,'FRANCIA MBUGUA',"“When you educate one person you can change a life, when you educate many you can change the world if you are planning for a lifetime, educate”",new Date()),
    // new Quote(4,'Phillipia Eve', "“Luck or Success favor the prepared minds",new Date()),
  ];  
 
  like(index){
    this.quotes[index].like++;
  }

  unlike(index){
    this.quotes[index].unlike++;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].user}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() {}

  ngOnInit(): void {
  }

}