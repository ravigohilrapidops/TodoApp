import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pagetitle = "Dashboard";
  totalTodos;
  totalCompletedTodos;
  totalUncompletedTodos;
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getCount();
  }

  getCount(): void{
    this.todoService.getTodos().subscribe((todos) => {
        if(todos.length >= 0) {

          this.totalTodos = todos.length;
          this.totalCompletedTodos = todos.filter((value) => {
               return value.isCompleted == true;
          });
          this.totalCompletedTodos=this.totalCompletedTodos.length;
          
          this.totalUncompletedTodos = todos.filter((value) => {
            return value.isCompleted == false;
          });
          this.totalUncompletedTodos = this.totalUncompletedTodos.length;
        }else {
          
        }
    });
  }

}
