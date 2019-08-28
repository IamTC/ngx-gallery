import { Component, Input, Output, EventEmitter, } from '@angular/core';

@Component({
    selector: 'ngx-gallery-arrows',
    template: `
        <div class="ngx-gallery-arrow-wrapper ngx-gallery-arrow-left">
            <div class="ngx-gallery-icon ngx-gallery-arrow" aria-hidden="true" (click)="handlePrevClick()" [class.ngx-gallery-disabled]="prevDisabled">
				<img [src]="arrowPrevIcon" class="ngx-gallery-icon-content">
            </div>
        </div>
        <div class="ngx-gallery-arrow-wrapper ngx-gallery-arrow-right">
            <div class="ngx-gallery-icon ngx-gallery-arrow" aria-hidden="true" (click)="handleNextClick()" [class.ngx-gallery-disabled]="nextDisabled">
				<img [src]="arrowNextIcon" class="ngx-gallery-icon-content">				
            </div>
        </div>
    `,
    styleUrls: ['./ngx-gallery-arrows.component.scss']
})
export class NgxGalleryArrowsComponent {
    @Input() prevDisabled: boolean;
    @Input() nextDisabled: boolean;
    @Input() arrowPrevIcon: string;
    @Input() arrowNextIcon: string;

    @Output() onPrevClick = new EventEmitter();
    @Output() onNextClick = new EventEmitter();

    handlePrevClick(): void {
        this.onPrevClick.emit();
    }

    handleNextClick(): void {
        this.onNextClick.emit();
    }
}
