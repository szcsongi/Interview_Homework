import { Component } from '@angular/core';
import { DataService } from '../app/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularHomework';
  api_input = '';
  api_output = [] as any;

  SendInputToAPI() {
    this.dataService.sendGetRequestToRestApi(this.api_input).subscribe((data: any)=>{
      this.api_output = data;
    })  
  } 
  
  constructor(private dataService: DataService) { }
  

}
