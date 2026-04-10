
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
        



import { ProgressCanvas } from "../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js";

    
import { ProgressCanvasFactory } from "../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { ImageCache } from "../../../org/allbinary/image/ImageCache.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class ConcurrentImageLoadingProcessor extends BaseImageLoadingProcessor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly imageCache: ImageCache

    private readonly runnable: ABRunnable = new object: ABRunnable()
                                {
                                
    public run(){

        try {
            this.this.setRunning(true)
imageCache!.waitForLoadNow()
imageCache!.loadImages()
imageCache!.loadRemainingAnimations()
this.this.setRunning(false)

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        


                        if(!progressCanvas!.inProgress)
                        
                                    {
                                    progressCanvas!.endFromInitialLazyLoadingComplete()

                                    }
                                
} catch(e: Exception)
            {
this.this.setRunning(false)
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}

}

                                }
                            ;
        
        
public constructor (imageCache: ImageCache){

            super();
                //var imageCache = imageCache
this.imageCache= imageCache
}


    public runTask(){

                        if(!this.runnable.isRunning())
                        
                                    {
                                    ImageThreadPool.getInstance()!.runTask(this.runnable)

                                    }
                                
}


}
                
            

