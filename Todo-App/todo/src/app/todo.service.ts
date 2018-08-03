import { Injectable } from '@angular/core';
import {Todo} from './todo';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  addTodo(todo:Todo): Observable<Todo[]> {
    let formData = new FormData();
    console.log(todo)
    for(let key in Todo){
      console.log(key+"_"+todo[key])
      formData.append(key, todo[key]);
    }

    let headers:HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', '');
    return this.http.post<Todo[]>(this.todoUrl, todo,{headers});
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl);
  }

  getTodoDetail(id:number): Observable<Todo> {
    return this.http.get<Todo>(this.todoUrl+'/'+id);
  }

  editTodo(todo:Todo,id:number): Observable<Todo[]> {
    let formData = new FormData();
    console.log(todo)
    for(let key in Todo){
      console.log(key+"_"+todo[key])
      formData.append(key, todo[key]);
    }
    let headers:HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', '');
    return this.http.put<Todo[]>(this.todoUrl+"/"+id, todo);
  }

  deleteTodo(id:number): Observable<Todo> {
    let headers:HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', '');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.delete<Todo>(this.todoUrl+"/"+id,{headers});
  }
  
}
