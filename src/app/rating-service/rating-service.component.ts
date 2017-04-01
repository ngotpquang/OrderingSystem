import {Component, Input, Output, EventEmitter, ElementRef, OnInit} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'service-rating',
  templateUrl: './rating-service.component.html',
  styleUrls: ['./rating-service.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RatingServiceComponent implements OnInit{

  private el:HTMLElement;
    private defaultCount:number = 0;
    private serviceList:number[] = [];
    private serviceHoverIndex:number;

    @Input() serviceCount:number;
    @Input() serviceModel:number;
    @Input() serviceEmptyImage:string;
    @Input() serviceFullImage:string;
    @Input() serviceImageWidth:string;
    @Input() serviceImageHeight:string;
    @Input() serviceIconBase:string;
    @Input() serviceFullIcon:string;
    @Input() serviceEmptyIcon:string;
    @Input() serviceIconColor:string;
    @Input() serviceIconSize:string;
    @Input() rating:number;
    @Input() itemId:number;

    @Output() serviceClick = new EventEmitter();
    @Output() serviceHover = new EventEmitter();


    constructor(el:ElementRef) {
        this.serviceCount = this.serviceCount || this.defaultCount;
  }


    ngOnInit() {
        for (let i = 1; i <= this.serviceCount; i++) {
            this.serviceList.push(i);
        }
        console.log("list size "+ this.serviceCount);

    }


    private onClick(serviceModel:number):void {
        this.serviceModel = serviceModel;
        this.serviceClick.emit(serviceModel);
        console.log("monuse click "+ serviceModel);
    }



    private onMouseEnter(serviceModel:number):void {
        this.serviceHoverIndex = serviceModel;
        this.serviceHover.emit(serviceModel);
    }


    private onMouseLeave():void{
        this.serviceHoverIndex = null;
    }

    private getClass(index:number):Object {
        if (this.serviceEmptyImage && this.serviceFullImage) {
            return;
        }
        else {
            if (this.serviceHoverIndex) {
                return index <= this.serviceHoverIndex ? this.serviceFullIcon + ' ' + this.serviceIconBase : this.serviceEmptyIcon + ' ' + this.serviceIconBase;
            }
            return index <= this.serviceModel ? this.serviceFullIcon + ' ' + this.serviceIconBase : this.serviceEmptyIcon + ' ' + this.serviceIconBase;
        }
    }



    private getStyle(index:number):Object {
        if (this.serviceEmptyImage && this.serviceFullImage) {

            let image_url;
            if (this.serviceHoverIndex) {
                image_url = index <= this.serviceHoverIndex ? this.serviceFullImage : this.serviceEmptyImage;
            }
            else {
                image_url = index <= this.serviceModel ? this.serviceFullImage : this.serviceEmptyImage;
            }

            return {
                "background-size": this.serviceImageWidth + ' ' + this.serviceImageHeight,
                "background-image": "url(" + image_url + ")",
                "display": "inline-block",
                "width": this.serviceImageWidth,
                "height": this.serviceImageHeight
            };
        }
        else {
            return {
                "color": "orange",
                "font-size": this.serviceIconSize
            }
        }
    }

}
