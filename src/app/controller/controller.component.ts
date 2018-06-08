import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';
import {
  AngularFirestoreDocument,
  AngularFirestore
} from 'angularfire2/firestore';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;
  controller = false;


  ngOnInit(): void { }


  constructor(private afs: AngularFirestore) {
    this.itemDoc = afs.doc<any>('led/items');
    this.item = this.itemDoc.valueChanges();
    this.itemDoc.update({ 'controller': this.controller }); // 初始化
  }

  changeText() {
    if (this.controller) {
      this.controller = false;
    } else {
      this.controller = true;
    }
    this.itemDoc.update({ 'controller': this.controller });
  }
}
