
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
                *   
                *  By agreeing to this license you and any business entity you represent are 
                *  legally bound to the AllBinary Open License Version 1 legal agreement. 
                *   
                *  You may obtain the AllBinary Open License Version 1 legal agreement from 
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
                *   
                *  Created By: Travis Berthelot    
        */
import { Object } from '../../java/lang/Object.js';
import { Canvas } from '../../android/graphics/Canvas.js';
import { Paint } from '../../android/graphics/Paint.js';

export class TsUtil
            //extends Object
         {
        

    private static readonly instance: TsUtil = new TsUtil();
        
        

    public static getInstance(): TsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TsUtil.instance;
    
}

    public drawTextC(g: Canvas, text: string[], index: number, count: number, x: number, y: number, paint: Paint): void {
        g.drawTextC(text, index, count, x, y, paint);
    }

    public drawText(g: Canvas, text: string, x: number, y: number, paint: Paint): void {
        g.drawText(text, x, y, paint);
    }

    public drawTextO(g: Canvas, text: string, start: number, end: number, x: number, y: number, paint: Paint): void {
        g.drawTextO(text, start, end, x, y, paint);
    }


    public hashCode(anyType: any = {}): number{
var anyType = anyType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return -1;
    
}

   public waitFor(object: Object, timeInMillis: number) {
      object.waitFor(timeInMillis);
   }

}
                
