//Logic will need to map from ets to ts only
//With Canvas(this.context) Component
import { Bitmap } from './Bitmap';
import { Matrix } from './Matrix';
import { Paint } from './Paint';
import { Rect } from './Rect';
import { RectF } from './RectF';

/*actual*/ export class Canvas
{
    concat(matrix: Matrix) {
        throw new Error('Method not implemented.');
    }

    getClipBounds(newClip: Rect) {
        throw new Error('Method not implemented.');
    }

    restore() {
        throw new Error('Method not implemented.');
    }

    scale(arg0: number, arg1: number) {
        throw new Error('Method not implemented.');
    }

    rotate(arg0: number) {
        throw new Error('Method not implemented.');
    }

    save() {
        throw new Error('Method not implemented.');
    }

    public setBitmap(bitmap: Bitmap): void {
        throw new Error("No Impl");
    }

    public getWidth(): number {
        throw new Error("No Impl");
    }

    public getHeight(): number {
        throw new Error("No Impl");
    }

    public drawRect(left: number, top: number, right: number, bottom: number, paint: Paint): void {
        throw new Error("No Impl");
    }

    public drawArc(oval: RectF, startAngle: number, sweepAngle: number, useCenter: boolean, paint: Paint): void {
        throw new Error("No Impl");
    }

    public drawLine(startX: number, startY: number, stopX: number, stopY: number, paint: Paint): void { 
        throw new Error("No Impl");
    }

    public drawText(text: string[], index: number, count: number, x: number, y: number, paint: Paint);
    public drawText(text: string, x: number, y: number, paint: Paint);
    public drawText(text: string, start: number, end: number, x: number, y: number, paint: Paint);
    public drawText(text: any, startOrX: number, endOrY: number, xOrPaint?: any, y?: number, paint?: Paint): void {
        throw new Error("No Impl");
    }

    public drawBitmap(img: Bitmap, rect: Rect, dstRect: Rect, paint: Paint);
    public drawBitmap(img: Bitmap, newx: number, newy: number, paint: Paint);
    public drawBitmap(img: Bitmap, newx: any, newy: any, paint: Paint) {
        throw new Error('Method not implemented.');
    }

    public translate(dx: number, dy: number): void {
        throw new Error("No Impl");
    }
}

