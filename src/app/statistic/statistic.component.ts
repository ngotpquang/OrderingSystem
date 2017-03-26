import {Component,Input, ViewChild, ViewContainerRef} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'common-modal',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {

  @ViewChild('childModal') public childModal:ModalDirective;
  @Input() title?:string;

  constructor(private viewContainerRef: ViewContainerRef) { }
  show(){
    this.childModal.show();
  }
  hide(){
    this.childModal.hide();
  }
}
