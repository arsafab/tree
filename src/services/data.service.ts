import { Injectable } from '@angular/core';
import { Observable, from  } from 'rxjs';
import { TreeNode } from 'src/models/treeNode.model.js';
// @ts-ignore
import * as dataMock from '../assets/data.js';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }

  public getData(): Observable<unknown> {
    return from (dataMock.fetchData());
  }
}
