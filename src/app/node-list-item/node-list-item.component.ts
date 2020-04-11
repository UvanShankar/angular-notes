import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-node-list-item',
  templateUrl: './node-list-item.component.html',
  styleUrls: ['./node-list-item.component.css']
})
export class NodeListItemComponent  {
@Input() note:string;
@Output() delete:EventEmitter<string>=new EventEmitter<string>();

deletenodes(note){
  this.delete.emit(note);
}

}