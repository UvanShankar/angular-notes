import { Component } from '@angular/core';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.css']
})
export class NodeListComponent  {

note:string;
notes:Array<string>=[];
addnote()
{
  this.notes.push(this.note);
  this.note="";
}
deletenode(nodetodel:string){
  const nodedel=this.notes.indexOf(nodetodel);
  this.notes.splice(nodedel,1);
}

}