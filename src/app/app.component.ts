import { CrazyServiceService } from './crazy-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prueba:any;
  constructor(private puto:CrazyServiceService){

  }
  title = 'alkemy-angularBlog';
ngOnInit(){

}

    }
  



