import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Todo} from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todotitle = "Todo List";
  todoList: Todo[];
  msg="";
  
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
         this.todoList = todos;
    }); 
  }
  
  removeTodo(todoList) {
    if(confirm("Are you sure to delete "+todoList.task+"?")) {
      this.todoService.deleteTodo(todoList.id).subscribe((data:any) => {
        this.todoList = data.datas;
        this.msg = 'done';
      },
     (err)=>{
      console.log(err);
     });
    }
  }

}
