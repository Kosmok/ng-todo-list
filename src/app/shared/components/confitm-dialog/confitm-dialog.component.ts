import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ConfitmData {
  question: string;
}

@Component({
  selector: 'app-confitm-dialog',
  templateUrl: './confitm-dialog.component.html',
  styleUrls: ['./confitm-dialog.component.scss']
})
export class ConfitmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfitmData) {}

  ngOnInit() {
  }

}
