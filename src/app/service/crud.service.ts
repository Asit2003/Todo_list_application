import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  deleteTask(etask: Task) {
    throw new Error('Method not implemented.');
  }

  serviceURL : string

  constructor(private http : HttpClient) {
    this.serviceURL = "http://localhost:3000/tasks"
   }
   addTask(task : Task) : Observable<Task>{
     return this.http.post<Task>(this.serviceURL,task);
   }
  
  getAllTask() : Observable<Task[]>{
    return this.http.get<Task[]>(this.serviceURL);
  } 
  DeleteTask(task : Task) : Observable<Task>{
    return this.http.delete<Task>(this.serviceURL+'/'+task.id);
  } 
  editTask(task : Task) : Observable<Task>{
    return this.http.put<Task>(this.serviceURL+'/'+task.id,task);
  } 
}
