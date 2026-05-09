

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
        
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../java/lang/Object.js';


        
            import { InterruptedException } from '../../java/lang/InterruptedException.js';
        
import { Canvas } from '../../android/graphics/Canvas.js';

    
import { Paint } from '../../android/graphics/Paint.js';

    
import { InvalidRecordIDException } from '../../javax/microedition/rms/InvalidRecordIDException.js';

    
import { RecordStore } from '../../javax/microedition/rms/RecordStore.js';

    
import { RecordStoreException } from '../../javax/microedition/rms/RecordStoreException.js';

    
import { RecordStoreNotOpenException } from '../../javax/microedition/rms/RecordStoreNotOpenException.js';

    
import { NullUtil } from '../../org/allbinary/logic/NullUtil.js';

        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TsUtil
            
         {
        

    private static readonly instance: TsUtil = new TsUtil();

    public static getInstance(): TsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TsUtil.instance;
    
}


    public hashCode(anyType: any = {}): number{
var anyType = anyType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType!.hashCode();;
    
}


                //@Throws(InterruptedException.constructor)
            
    public waitFor(any: any = {}, timeoutMillis: number){
var any = any
    //var timeoutMillis = timeoutMillis

    var anyType: any = any as Object;
;
    
anyType!.wait(timeoutMillis);
    
}


                //@Throws(RecordStoreNotOpenException.constructor, InvalidRecordIDException.constructor, RecordStoreException.constructor)
            
    public getRecord(anyType: any = {}, recordId: number): number[]{
    //var anyType = anyType
    //var recordId = recordId

    var recordStore: RecordStore = anyType as RecordStore;
;
    

    var data: number[]
;
    

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this) 

        //mutex.withLock
        
data= new Array(recordStore!.getRecordSize(recordId));
    
recordStore!.getRecord(recordId, data, 0);
    





                        //if statement needs to be on the same line and ternary does not work the same way.
                        return data.length < 1
                        ?       
                                NullUtil.getInstance()!.NULL_BYTE_ARRAY
                                :

                            data;

    ;
    
}


    public drawTextC(g: Canvas, text: string[], index: number, count: number, x: number, y: number, paint: Paint): void {
    //var g = g
    //var text = text
    //var index = index
    //var count = count
    //var x = x
    //var y = y
    //var paint = paint
g.drawTextC(text, index, count, x, y, paint);
    
}


    public drawText(g: Canvas, text: string, x: number, y: number, paint: Paint): void {
    //var g = g
    //var text = text
    //var x = x
    //var y = y
    //var paint = paint
g.drawText(text, x, y, paint);
    
}


    public drawTextO(g: Canvas, text: string, start: number, end: number, x: number, y: number, paint: Paint): void{
    //var g = g
    //var text = text
    //var start = start
    //var end = end
    //var x = x
    //var y = y
    //var paint = paint
g.drawTextO(text, start, end, x, y, paint);
    
}

  public drawBitmap(g: Canvas, img: Bitmap, rect: Rect, dstRect: Rect, paint: Paint): void {
    g.drawBitmapRect(g, img, rect, dstRect, paint);
  }


}
                
            

