import { ElementRef, ChangeDetectorRef } from '@angular/core';
import { AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
export declare class MglTimelineComponent implements AfterViewInit, OnChanges, OnDestroy {
    private elementRef;
    private changeDetectorRef;
    toggle: boolean;
    mobileWidthThreshold: number;
    alternate: boolean;
    side: string;
    set mobile(value: boolean);
    get mobile(): boolean;
    private _focusOnOpen;
    set focusOnOpen(focusOnOpen: boolean);
    get focusOnOpen(): boolean;
    private subscriptions;
    private content;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
    ngOnChanges(simpleChanges: any): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    private updateContent;
    onResize(ev: KeyboardEvent): void;
}
