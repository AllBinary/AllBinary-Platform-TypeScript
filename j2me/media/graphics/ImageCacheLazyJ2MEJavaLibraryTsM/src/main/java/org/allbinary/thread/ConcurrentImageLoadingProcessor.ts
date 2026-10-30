
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
//not GWT import const ProgressCanvas

import { ProgressCanvasFactory } from '../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory

import { ImageCache } from '../../../org/allbinary/image/ImageCache.js';
//not GWT import const ImageCache

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseImageLoadingProcessor } from './BaseImageLoadingProcessor.js';
//sameFolderImports - not GWT import - same folder const BaseImageLoadingProcessor
import { ABRunnable } from './ABRunnable.js';
//sameFolderImports - not GWT import - same folder const ABRunnable
//import { ImageCacheRunnable } from './ImageCacheRunnable.js';
//sameFolderImports - not GWT import - same folder const ImageCacheRunnable
import { ImageThreadPool } from './ImageThreadPool.js';
//sameFolderImports - not GWT import - same folder const ImageThreadPool
type ImageCacheRunnable = InstanceType<ConcurrentImageLoadingProcessor['ImageCacheRunnable']>;

export class ConcurrentImageLoadingProcessor extends BaseImageLoadingProcessor {
        

//inner= member=true isStatic=
ImageCacheRunnable = (() => { const outer$ConcurrentImageLoadingProcessor = this; return class extends ABRunnable {
        

    private readonly imageCache: ImageCache;

public constructor (imageCache: ImageCache){

            super();
        this.imageCache= imageCache;
    
}


    public run(){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

 try { this.setRunning(true);
    
this.imageCache!.waitForLoadNow();
    
this.imageCache!.loadImages();
    
this.imageCache!.loadRemainingAnimations();
    
this.setRunning(false);
    

    let progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    

                        if(!progressCanvas!.inProgress)
                        
                                    {
                                    progressCanvas!.endFromInitialLazyLoadingComplete();
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.setRunning(false);
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    

 }
   }
 
}


}; })();
    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly runnable: ABRunnable;

public constructor (imageCache: ImageCache){

            super();
        this.runnable= new this.ImageCacheRunnable(imageCache);
    
}


    public runTask(){

                        if(!this.runnable.isRunning())
                        
                                    {
                                    ImageThreadPool.getInstance()!.runTask(this.runnable);
    

                                    }
                                
}


}

