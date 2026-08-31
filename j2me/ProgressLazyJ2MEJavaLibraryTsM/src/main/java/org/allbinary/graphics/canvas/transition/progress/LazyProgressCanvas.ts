
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { Processor } from '../../../../../../org/allbinary/canvas/Processor.js';
      //not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;

      
import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { NullPaintable } from '../../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      //not GWT import const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
import { ImageCacheFactory } from '../../../../../../org/allbinary/image/ImageCacheFactory.js';
      //not GWT import const ImageCacheFactory = globalThis.org.allbinary.image.ImageCacheFactory;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProgressCanvas } from './ProgressCanvas.js';
//not GWT import const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

                
export class LazyProgressCanvas extends ProgressCanvas {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

protected constructor (title: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(title, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public start(){
super.start();
    
this.hasPainted= false;
    
}


    public end(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.END_METHOD_NAME);
    
this.endActual();
    
this.paintable= GAUGE_PAINTABLE;
    
ImageCacheFactory.getInstance()!.runTask();
    
ImageCacheFactory.getInstance()!.progressEnded();
    

                //: 
} catch(e) 
            {
this.logUtil!.putF(this.commonStrings!.EXCEPTION, this, this.commonStrings!.END_METHOD_NAME);
    
}

}


    public inGame(){
inGameProcessor= Processor.getInstance();
    
}


    public endFromInitialLazyLoadingComplete(){
super.endFromInitialLazyLoadingComplete();
    
this.paintable= NullPaintable.getInstance();
    
}


    public endIfPaintedSinceStart(){

                        if(this.paintable == GAUGE_PAINTABLE && this.hasPainted)
                        
                                    {
                                    this.endFromInitialLazyLoadingComplete();
    

                                    }
                                
}


}



