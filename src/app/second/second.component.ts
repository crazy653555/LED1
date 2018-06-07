import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestoreDocument,
  AngularFirestore
} from 'angularfire2/firestore';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;

  url: string = location.href; // 取得網址
  getPara = [];
  aryPara = []; // 存放queryString
  setText =
    '輸入方式:?color=#ff0000&fontsize=20em&scrollAmount=20&text=跑馬燈內容';
  setColor = '#ff0000';
  setFontSize = '20em';
  setScrollAmount = '30';


  constructor(private afs: AngularFirestore) {
    this.itemDoc = afs.doc<any>('items/item');
    this.item = this.itemDoc.valueChanges();

  }

  ngOnInit() {
    // 取得queryString參數
    if (this.url.indexOf('?') !== -1) {
      this.getPara = this.url.split('?')[1].split('&');

      for (let i = 0; i < this.getPara.length; i++) {
        this.aryPara.push(this.getPara[i].split('=')[1]);
      }

      this.setColor = this.aryPara[0]; // 字體顏色
      this.setFontSize = this.aryPara[1]; // 字體大小
      this.setScrollAmount = this.aryPara[2]; // 捲動速度
      this.setText = decodeURI(this.aryPara[3]); // 文字
    }
  }
}
