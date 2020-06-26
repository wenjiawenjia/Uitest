import { Component, OnInit } from '@angular/core';
import { userService } from '../login/user.service';
import { ApiService } from '../api/api.service';
import { node } from './hierarchy.interface';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {

  data: node[];

  private _transformer = (node: node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      displayName: node.displayName,
      level: level,
    };
  }
  treeControl = new FlatTreeControl<node>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private userService: userService,
    private apiService: ApiService) { }

  ngOnInit() {

    const sessionKey = '337.1593189801.e9f83c8dda4bf3f0166ffc139ee4c17b069ff60';
    //this.userService.getSessionKey();
    console.log(sessionKey);
    this.apiService.getHierarchy(sessionKey).subscribe(resp => {
      // console.log(resp);
      if (resp && resp['status'] === 200) {
        const node = resp['entity']['nodeStandardMetadata'];

        this.data = [{ displayName: node.displayName, children: node.children, nodeId: node.nodeId }];



        console.log(this.data);
        this.dataSource.data = this.data;

      }
    });
  }
  hasChild = (_: number, node: node) => node.expandable;

}
