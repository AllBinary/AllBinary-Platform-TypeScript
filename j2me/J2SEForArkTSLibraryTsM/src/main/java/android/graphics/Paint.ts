//Logic will need to map from ets to ts only

export type Style = InstanceType<typeof Paint.Style>;

/*actual*/ export class Paint
{

  static Style = class {
    static FILL: string = "FILL";
    static FILL_AND_STROKE: string = "FILL_AND_STROKE";
    static STROKE: string = "STROKE";
  };


  public setStyle(style: Style): void {
    throw new Error("No Impl");
  }

  public setStrokeWidth(width: number): void {
    throw new Error("No Impl");
  }

  public setColor(color: number): void {
    throw new Error("No Impl");
  }

  public measureText(text: string): number { 
    throw new Error("No Impl");
  }

  public getTextSize(): number;
  public getTextSize(size: number): number;
  public getTextSize(size?: number): number {
    if (size !== undefined) {
      throw new Error("No Impl 1");
    } else {
      throw new Error("No Impl 2");
    }
  }

  public setTextSize(size: number) {
    throw new Error('Method not implemented.');
  }

}
