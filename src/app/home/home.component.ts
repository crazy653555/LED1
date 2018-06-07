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
  item$: Observable<any[]>;
  title = 'app';
  menusHandler: any;
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;
  controll = false;
  aaa: any;
  // constructor(private _db: AngularFireDatabase) {
  // this.item$ = _db.list('item').valueChanges();
  // }

  ngOnInit(): void { }

  constructor(private afs: AngularFirestore) {
    this.itemDoc = afs.doc<any>('items/item');
    this.item = this.itemDoc.valueChanges();
    console.log('get controll = ' + this.item);
    this.itemDoc.update({ 'controll': this.controll });

    this.aaa = this.item.subscribe();
    console.log(this.aaa);
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
