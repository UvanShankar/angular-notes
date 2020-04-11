import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NodeListComponent } from './node-list/node-list.component';
import { NodeListItemComponent } from './node-list-item/node-list-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NodeListComponent, NodeListItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
