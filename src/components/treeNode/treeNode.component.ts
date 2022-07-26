import { Component, Input } from "@angular/core";
import { TreeNode } from "src/models/treeNode.model";

@Component({
  selector: 'app-tree-node',
  templateUrl: './treeNode.component.html',
  styleUrls: ['./treeNode.component.css']
})
export class TreeNodeComponent {
  @Input() public data: TreeNode;
  public activeIds = new Set();

  public setActive(node: TreeNode): void {
    if (this.activeIds.has(node.id)) this.activeIds.delete(node.id);
    else this.activeIds.add(node.id);
  }
}
