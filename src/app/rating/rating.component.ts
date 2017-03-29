import {Component, Input, Output, EventEmitter, ElementRef, OnInit} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'puk-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RatingComponent implements OnInit{

  private el:HTMLElement;
    private defaultCount:number = 0;
    private pukList:number[] = [];
    private pukHoverIndex:number;

    @Input() pukCount:number;
    @Input() pukModel:number;
    @Input() pukEmptyImage:string;
    @Input() pukFullImage:string;
    @Input() pukImageWidth:string;
    @Input() pukImageHeight:string;
    @Input() pukIconBase:string;
    @Input() pukFullIcon:string;
    @Input() pukEmptyIcon:string;
    @Input() pukIconColor:string;
    @Input() pukIconSize:string;
    @Input() rating:number;
    @Input() itemId:number;

    @Output() pukClick = new EventEmitter();
    @Output() pukHover = new EventEmitter();


    constructor(el:ElementRef) {
        this.pukCount = this.pukCount || this.defaultCount;
  }


    ngOnInit() {
        for (let i = 1; i <= this.pukCount; i++) {
            this.pukList.push(i);
        }
        console.log("list size "+ this.pukCount);

    }


    private onClick(pukModel:number):void {
        this.pukModel = pukModel;
        this.pukClick.emit(pukModel);
        console.log("monuse click "+ pukModel);

    }



    private onMouseEnter(pukModel:number):void {
        this.pukHoverIndex = pukModel;
        this.pukHover.emit(pukModel);
    }


    private onMouseLeave():void{
        this.pukHoverIndex = null;
    }

    private getClass(index:number):Object {
        if (this.pukEmptyImage && this.pukFullImage) {
            return;
        }
        else {
            if (this.pukHoverIndex) {
                return index <= this.pukHoverIndex ? this.pukFullIcon + ' ' + this.pukIconBase : this.pukEmptyIcon + ' ' + this.pukIconBase;
            }
            return index <= this.pukModel ? this.pukFullIcon + ' ' + this.pukIconBase : this.pukEmptyIcon + ' ' + this.pukIconBase;
        }
    }



    private getStyle(index:number):Object {
        if (this.pukEmptyImage && this.pukFullImage) {

            let image_url;
            if (this.pukHoverIndex) {
                image_url = index <= this.pukHoverIndex ? this.pukFullImage : this.pukEmptyImage;
            }
            else {
                image_url = index <= this.pukModel ? this.pukFullImage : this.pukEmptyImage;
            }

            return {
                "background-size": this.pukImageWidth + ' ' + this.pukImageHeight,
                "background-image": "url(" + image_url + ")",
                "display": "inline-block",
                "width": this.pukImageWidth,
                "height": this.pukImageHeight
            };
        }
        else {
            return {
                "color": this.pukIconColor,
                "font-size": this.pukIconSize
            }
        }

    }

}
