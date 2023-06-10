

import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource, MatTreeModule, MatTreeNode} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Route,RouterLink } from '@angular/router';
interface FoodNode {
  name: string;
  route?:string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple',route:'home'}, {name: 'Banana',route:'dashboard'}, {name: 'Fruit loops',route:'dashboard'}],
  },
  {
    name: 'Setups',
    children: [
      {
        name: 'Organization',
        children: [{name: 'List',route:"organization"}, {name: 'Add',route:'organization/add'}],
      },
      {
        name: 'General',
        children: [{name: 'States',route:"organization/states"}, {name: 'Regions',route:'organization/regions'}],
      },
      {
        name: 'Boards',
        children: [{name: 'List',route:"organization/boards"}, {name: 'Add ',route:'organization/board/new'},
        
      ]},
      {
        name: 'Branchs',
        children: [{name: 'All Branch',route:"organization/branch/list"},{name: 'List Branch',route:"organization/branchs"}, {name: 'Add ',route:'organization/branch/new'},
        
      ]},
      {
        name: 'Institution',
        children: [{name: 'List',route:"organization/skools"}, {name: 'Add Institute',route:'organization/skool/new'},
        
      ]
      },
      {
        name: 'Library',
        children: [{name: 'Books',route:"books"}, {name: 'Add Book',route:"books/add"}],
      },
    ],
  },
];


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
 
 
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

/**
 * @title Tree with nested nodes
 */

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  
  logNode(node:any ){
    console.log(node);
  }
}
