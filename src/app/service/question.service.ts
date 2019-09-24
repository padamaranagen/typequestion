import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';


import { Question } from 'src/app/model/question';
import { Questions } from 'src/app/mock/mock-question';
import { MessageService } from 'src/app/service/message.service'


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private messageService:MessageService) { }

  getQuestions(): Observable<Question[]>
  {
    this.messageService.add('Question Service:Fetched Questions');
    return of(Questions);
  }
  getQuestion(id:number):Observable<Question>{
    this.messageService.add(`QuestionService: fetched product id=${id}`);
    return of(Questions.find(Question=>Question.id===id));
  }
}
