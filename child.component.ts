import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  c1=true;
  c2=true;
 style='italic';
  color="yellow";
  list=['red','green'];
  @Input() showElement: any;
  people = [
    { name: 'joha', age: 20, country: 'ind' },
    { name: 'foo', age: 35, country: 'uk' },
    { name: 'bar', age: 40, country: 'us' },
    { name: 'harry', age: 25, country: 'can' },
    { name: 'kally', age: 35, country: 'ind' }
  ];


@Input() profile: any;
@Output() myOutput = new EventEmitter();
  constructor() { 
   
  }

  ngOnInit(){
    //this.myOutput.emit('hello from the child');
    this.myOutput.emit({name:"John",age:20});
  }

}
