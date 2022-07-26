import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TreeNode } from 'src/models/treeNode.model';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: Observable<TreeNode[]>;

  constructor(private readonly dataService: DataService) {}

  public ngOnInit(): void {
    this.data = this.dataService.getData() as Observable<TreeNode[]>;
  }
}
