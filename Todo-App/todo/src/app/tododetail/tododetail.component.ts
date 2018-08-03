import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../todo';
import {ActivatedRoute} from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoService :TodoService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.todoService.getTodoDetail(this.route.snapshot.params.id).subscribe((todo) => {
       this.todo = todo;
    });
  }
}
