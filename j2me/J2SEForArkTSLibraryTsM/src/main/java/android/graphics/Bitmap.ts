//Logic will need to map from ets to ts only

/*actual*/ export class Bitmap
{
  getHeight(): number {
    throw new Error('Method not implemented.');
  }
  getWidth(): number {
    throw new Error('Method not implemented.');
  }
   public isMutable(): boolean {
     throw new Error("No Impl");
     // return false;
   }

  public getPixels(argb: number[], offset: number, scanlength: number, x: number, y: number, width: number, height: number): void {
    throw new Error("No Impl");
  }

}