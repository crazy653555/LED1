import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';
import {
  AngularFirestoreDocument,
  AngularFirestore
} from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;
  controll = false;


  ngOnInit(): void { }


  constructor(private afs: AngularFirestore) {
    this.itemDoc = afs.doc<any>('items/item');
    this.item = this.itemDoc.valueChanges();
    this.itemDoc.update({ 'controll': this.controll }); // 初始化
  }

  changeText() {
    if (this.controll) {
      this.controll = false;
    } else {
      this.controll = true;
    }
    this.itemDoc.update({ 'controll': this.controll });
  }
}
