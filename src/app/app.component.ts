import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menusHandler: any;

  item$: Observable<any[]>;
  //constructor(private _db: AngularFireDatabase) {
  //this.item$ = _db.list('item').valueChanges();
  //}

  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.itemDoc = afs.doc<any>('items/item');
    this.item = this.itemDoc.valueChanges();
  }

  changeText() {
    console.log('aa');
    this.itemDoc.update({ '1': false });
  }
}
