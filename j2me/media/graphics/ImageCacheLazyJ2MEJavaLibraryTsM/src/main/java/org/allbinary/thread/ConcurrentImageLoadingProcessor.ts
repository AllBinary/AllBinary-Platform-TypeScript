
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

        


            import { Exception } from '../../../java/lang/Exception.js';
        
import { ProgressCanvas } from '../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
      //not GWT import const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

      
import { ProgressCanvasFactory } from '../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      //not GWT import const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
import { ImageCache } from '../../../org/allbinary/image/ImageCache.js';
      //not GWT import const ImageCache = globalThis.org.allbinary.image.ImageCache;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseImageLoadingProcessor } from './BaseImageLoadingProcessor.js';
//not GWT import const  = globalThis.org.allbinary.thread.BaseImageLoadingProcessor;

                import { ABRunnable } from './ABRunnable.js';
//not GWT import const  = globalThis.org.allbinary.thread.ABRunnable;

                import { ImageThreadPool } from './ImageThreadPool.js';
//not GWT import const  = globalThis.org.allbinary.thread.ImageThreadPool;

                
export class ConcurrentImageLoadingProcessor extends BaseImageLoadingProcessor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly imageCache: ImageCache;

    private readonly runnable: ABRunnable = new class extends ABRunnable
                                {
                                
    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

        try {
            this.setRunning(true);
    
imageCache!.waitForLoadNow();
    
imageCache!.loadImages();
    
imageCache!.loadRemainingAnimations();
    
this.setRunning(false);
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    

                        if(!progressCanvas!.inProgress)
                        
                                    {
                                    progressCanvas!.endFromInitialLazyLoadingComplete();
    

                                    }
                                

                //: 
} catch(e) 
            {
this.setRunning(false);
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}

                                }
                            ;

public constructor (imageCache: ImageCache){

            super();
        this.imageCache= imageCache;
    
}


    public runTask(){

                        if(!this.runnable.isRunning())
                        
                                    {
                                    ImageThreadPool.getInstance()!.runTask(this.runnable);
    

                                    }
                                
}


}



