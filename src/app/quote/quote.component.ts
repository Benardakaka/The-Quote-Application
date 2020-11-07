
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl:'./quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class  QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'BENARD AKAKA', "“Education is the most powerful weapon which you can use to change the world if you are planning for a lifetime, educate people...........",new Date(2020,12,12)),
    new Quote(2,'PHILIPIA EVELINE',"“If You are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate ”",new Date(2020,11,12)),
    new Quote(3,'FRANCIA MBUGUA',"“When you educate one person you can change a life, when you educate many you can change the world if you are planning for a lifetime, ”",new Date(2020,10,17)),
     new Quote(4,'LAVENDAH AKAKA', " “The beautiful thing about learning is that no one can take it away from you.'Patience can cook a stone ' 'Their is to gain without pain..” ",new Date(2020,12,21)),
     new Quote(2,'VIOLET ASEKA',"“If You are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people”",new Date(2020,10,20)),
    new Quote(3,'KERRY KOGEI',"“When you Educate one person you can change a life, when you educate many you can change the world if you are planning for a lifetime, educate”",new Date(2020,12,30)),
  
  ];  
 
  like(index){
    this.quotes[index].like++;
  }

  unlike(index){
    this.quotes[index].unlike++;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Thank you for viewing this Quote.Do you want to delete it. ${this.quotes[index].user}?`)

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