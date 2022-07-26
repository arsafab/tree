import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeNodeComponent } from 'src/components/treeNode/treeNode.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeNodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
