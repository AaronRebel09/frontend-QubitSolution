import { AnimationBuilder } from '@angular/animations';
import { EventEmitter, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
export declare class MglTimelineEntryContentComponent implements AfterViewInit {
    private elementRef;
    private animationBuilder;
    private renderer;
    expandAnimationTiming: string;
    collapseAnimationTiming: string;
    private contentHeight;
    animationDone: EventEmitter<any>;
    private _expanded;
    set expanded(expanded: boolean);
    get expanded(): boolean;
    constructor(elementRef: ElementRef, animationBuilder: AnimationBuilder, renderer: Renderer2);
    ngAfterViewInit(): void;
    private getCollapsedStyle;
    private getExpandedStyle;
    animate(): void;
    setStyle(): void;
}
