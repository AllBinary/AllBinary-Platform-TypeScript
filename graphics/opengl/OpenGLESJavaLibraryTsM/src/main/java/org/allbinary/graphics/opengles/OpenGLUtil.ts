
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Runnable } from '../../../../java/lang/Runnable.js';
        
//not game specific package import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { LoadTextures } from '../../../../org/allbinary/device/LoadTextures.js';
      const LoadTextures = globalThis.org.allbinary.device.LoadTextures;

      
//not game specific package import { OpenGLESGraphics } from '../../../../org/allbinary/device/OpenGLESGraphics.js';
      const OpenGLESGraphics = globalThis.org.allbinary.device.OpenGLESGraphics;

      
//not game specific package import { ProgressCanvas } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
      const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

      
//not game specific package import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
//not game specific package import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { RendererStrings } from '../../../../org/allbinary/graphics/opengles/renderer/RendererStrings.js';
      const RendererStrings = globalThis.org.allbinary.graphics.opengles.renderer.RendererStrings;

      
//not game specific package import { PreResourceImageUtil } from '../../../../org/allbinary/image/PreResourceImageUtil.js';
      const PreResourceImageUtil = globalThis.org.allbinary.image.PreResourceImageUtil;

      
//not game specific package import { OpenGLESImage } from '../../../../org/allbinary/image/opengles/OpenGLESImage.js';
      const OpenGLESImage = globalThis.org.allbinary.image.opengles.OpenGLESImage;

      
//not game specific package import { OpenGLImageCache } from '../../../../org/allbinary/image/opengles/OpenGLImageCache.js';
      const OpenGLImageCache = globalThis.org.allbinary.image.opengles.OpenGLImageCache;

      
//not game specific package import { OpenGLImageCacheFactory } from '../../../../org/allbinary/image/opengles/OpenGLImageCacheFactory.js';
      const OpenGLImageCacheFactory = globalThis.org.allbinary.image.opengles.OpenGLImageCacheFactory;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { SynchObject } from '../../../../org/allbinary/thread/SynchObject.js';
      const SynchObject = globalThis.org.allbinary.thread.SynchObject;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLCapabilities } from './OpenGLCapabilities.js';
import { OpenGLLogUtil } from './OpenGLLogUtil.js';

export class OpenGLUtil
            extends Object
         {
        

    private static readonly instance: OpenGLUtil = new OpenGLUtil();

    public static getInstance(): OpenGLUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly renderStrings: RendererStrings = RendererStrings.getInstance()!;

    readonly canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;

    readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    private readonly preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;

    private readonly lockObject: SynchObject = new SynchObject();

    private readonly anyType: SynchObject = new SynchObject();

    private readonly list: BasicArrayList = new BasicArrayListD();

    public readonly runnableList: BasicArrayList = new BasicArrayListD();

    private created: boolean = false;

    public onSurfaceCreated(gl: GL10){

        try {
            
                        if(!this.created)
                        
                                    {
                                    this.created= true;
    
PreLogUtil.put(CommonLabels.getInstance()!.START_LABEL +OpenGLCapabilities.getInstance()!.toString(), this, this.renderStrings!.ON_SURFACE_CREATED);
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.renderStrings!.ON_SURFACE_CREATED, e);
    
}

}


    public onSurfaceCreated(gl: GL10, loadTextures: LoadTextures){

        try {
            loadTextures!.load(gl);
    
OpenGLLogUtil.getInstance()!.logError(gl);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.renderStrings!.ON_SURFACE_CREATED, e);
    
}

}


    private surfaceCreatedAndInitialized: boolean = false;

                //@Throws(Exception.constructor)
            
    public onSurfaceChanged(gl: GL10, graphics: OpenGLESGraphics){

                        if(!this.surfaceCreatedAndInitialized)
                        
                                    {
                                    graphics.init();
    
this.surfaceCreatedAndInitialized= true;
    

                                    }
                                
graphics.update();
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.update(graphics);
    
getInstance = OpenGLImageCacheFactory.getInstance()getInstance as OpenGLImageCache
getInstance.
                    update(gl);
    
this.processRunnables();
    
this.set(gl);
    
}


    public addImage(image: Image): Image{

    var encapsulateImage: Image = this.preResourceImageUtil!.encapsulate(image)!;;
    

                        if(encapsulateImage != image)
                        
                                    {
                                    
        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.anyType) 

        //mutex.withLock
        
this.list.add(encapsulateImage);
    





                        //if statement needs to be on the same line and ternary does not work the same way.
                        return encapsulateImage;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public clear(){

        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.anyType) 

        //mutex.withLock
        
this.list.clear();
    


}


    public addRunnable(runnable: Runnable){

        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lockObject) 

        //mutex.withLock
        

                        if(!this.runnableList!.contains(runnable))
                        
                                    {
                                    this.runnableList!.add(runnable);
    
this.displayInfoSingleton!.add(this.canvasStrings!.SCALED_IMAGES);
    

                                    }
                                


}


    processRunnables(){

        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lockObject) 

        //mutex.withLock
        

    var runnable: Runnable;;
    

    var size: number = this.runnableList!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
runnable= this.runnableList!.get(index) as Runnable;
    
runnable.run();
    
}

this.runnableList!.clear();
    


}


                //@Throws(Exception.constructor)
            
    set(gl: GL10){

    var size: number = this.list.size()!;;
    

    var image: any;;
    




                        for (
    var index2: number = 0;index2 < size; index2++)
        {
image= this.list.get(index2);
    
image = imageimage as OpenGLESImage
image.
                    set(gl);
    
}

}


}



