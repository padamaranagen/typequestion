import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  questions:Question[]=[];

  constructor( private questionService:QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions():void{
    this.questionService.getQuestions().subscribe(questions=>this.questions=questions.slice(0,4));
  }
}
