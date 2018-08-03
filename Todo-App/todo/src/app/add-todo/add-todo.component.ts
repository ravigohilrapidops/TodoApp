import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../todo';
import { TodoService } from '../todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todo:Todo = new Todo();
  
  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router) { }
  action = (!this.route.snapshot.params.id)?"Add New Todo":"Edit Todo";

  ngOnInit() {
    if(this.route.snapshot.params.id) {
      this.todoService.getTodoDetail(this.route.snapshot.params.id).subscribe((todo) => {
        this.todo = todo;
      });
    }
  }

  createTodo(form) {
    if(!form.invalid) {
      if(!this.route.snapshot.params.id){
        this.todoService.addTodo(this.todo).subscribe((data) => {
          alert('Record added');
          this.router.navigate(['todos']);
        });
      }else{
        this.todoService.editTodo(this.todo,this.route.snapshot.params.id).subscribe((data) => {
           alert('Record Edited');
           this.router.navigate(['todos']);
        });
      }
    }
  }
}
