import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  element=true;
value=true;
details: any;
//parentMethod(ev: any){
 // console.log(ev);
//}
getmyOutput(ev:any){
this.details=ev;
console.log(ev);
}

}
