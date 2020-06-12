import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TaskService } from 'src/app/services/task.service';
import { Task } from './../../interfaces/task';

@Component({
  selector: 'app-componentapp',
  templateUrl: './componentapp.component.html',
  styleUrls: ['./componentapp.component.css']
})
export class ComponentappComponent implements OnInit {

  conversion: any;
  rta:Task[];

  constructor(private http: HttpClient, private taskService: TaskService) { }

  ngOnInit() {
    this.http.get('https://challenge.agenciaego.tech/models')
    .subscribe(
      data => {
      this.conversion=data;
      this.rta=this.conversion;

      console.log("prueba" , this.rta);
    });
  }

getAllTasks() {
  this.taskService.getAllTasks()
  .subscribe(tasks => {
    this.rta=tasks;
    console.log(tasks);  
});
}

getTask() {
  this.taskService.getTask('1')
.subscribe(task => {
    console.log(task);  
  });
}
}