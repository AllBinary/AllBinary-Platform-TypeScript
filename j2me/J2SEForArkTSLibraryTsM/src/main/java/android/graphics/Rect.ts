//Logic will need to map from ets to ts only

/*actual*/ export class Rect
{
  left: number;
  top: number;
  right: number;
  bottom: number;

  constructor();
  constructor(left: number, top: number, right: number, bottom: number);
  constructor(r: Rect);
  constructor(leftOrR?: number | Rect, top?: number, right?: number, bottom?: number) {
    if (leftOrR === undefined) {
      this.left = 0;
      this.top = 0;
      this.right = 0;
      this.bottom = 0;
    } else if (typeof leftOrR === 'number') {
      this.left = leftOrR;
      this.top = top!;
      this.right = right!;
      this.bottom = bottom!;
    } else {
      this.left = leftOrR.left;
      this.top = leftOrR.top;
      this.right = leftOrR.right;
      this.bottom = leftOrR.bottom;
    }
  }

  height(): number {
    throw new Error('Method not implemented.');
  }
  width(): number {
    throw new Error('Method not implemented.');
  }
    
}
