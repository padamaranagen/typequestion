import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  //created an array called messages
  messages:string[]=[];

  add(message:string):void{
    this.messages.push(message);
  }
  clear():void{
    this.messages=[];
  }

}
