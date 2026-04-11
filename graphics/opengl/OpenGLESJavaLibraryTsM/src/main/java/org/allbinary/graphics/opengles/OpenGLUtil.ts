
        /* Generated Code Do Not Modify */
        



import { GL10 } from "../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { LoadTextures } from "../../../../org/allbinary/device/LoadTextures.js";

    
import { OpenGLESGraphics } from "../../../../org/allbinary/device/OpenGLESGraphics.js";

    
import { ProgressCanvas } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js";

    
import { ProgressCanvasFactory } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { CanvasStrings } from "../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { RendererStrings } from "../../../../org/allbinary/graphics/opengles/renderer/RendererStrings.js";

    
import { PreResourceImageUtil } from "../../../../org/allbinary/image/PreResourceImageUtil.js";

    
import { OpenGLESImage } from "../../../../org/allbinary/image/opengles/OpenGLESImage.js";

    
import { OpenGLImageCache } from "../../../../org/allbinary/image/opengles/OpenGLImageCache.js";

    
import { OpenGLImageCacheFactory } from "../../../../org/allbinary/image/opengles/OpenGLImageCacheFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { SynchObject } from "../../../../org/allbinary/thread/SynchObject.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class OpenGLUtil
            extends Object
         {
        

    private static readonly instance: OpenGLUtil = new OpenGLUtil();
        
        

    public static getInstance(): OpenGLUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly renderStrings: RendererStrings = RendererStrings.getInstance()!;
        
        

    readonly canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;
        
        

    readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        

    private readonly preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;
        
        

    private readonly lockObject: SynchObject = new SynchObject();
        
        

    private readonly anyType: SynchObject = new SynchObject();
        
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        

    public readonly runnableList: BasicArrayList = new BasicArrayList();
        
        

    private created: boolean = false;
        
        

    public onSurfaceCreated(gl: GL10){
    //var gl = gl

        try {
            
                        if(!created)
                        
                                    {
                                    created= true;
    
PreLogUtil.put(CommonLabels.getInstance()!.START_LABEL +OpenGLCapabilities.getInstance()!.toString(), this, this.renderStrings!.ON_SURFACE_CREATED);
    

                                    }
                                

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, this.renderStrings!.ON_SURFACE_CREATED, e);
    
}

}


    public onSurfaceCreated(gl: GL10, loadTextures: LoadTextures){
    //var gl = gl
    //var loadTextures = loadTextures

        try {
            loadTextures!.load(gl);
    
OpenGLLogUtil.getInstance()!.logError(gl);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, this.renderStrings!.ON_SURFACE_CREATED, e);
    
}

}


    private surfaceCreatedAndInitialized: boolean = false;
        
        

                //@Throws(Error::class)
            
    public onSurfaceChanged(gl: GL10, graphics: OpenGLESGraphics){
    //var gl = gl
    //var graphics = graphics

                        if(!surfaceCreatedAndInitialized)
                        
                                    {
                                    graphics.init();
    
surfaceCreatedAndInitialized= true;
    

                                    }
                                
graphics.update();
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    
progressCanvas!.update(graphics);
    
getInstance = OpenGLImageCacheFactory.getInstance();

                        getInstance as OpenGLImageCache
getInstance.
                    update(gl);
    
this.processRunnables();
    
this.set(gl);
    
}


    public add(image: Image): Image{
    //var image = image

    var encapsulateImage: Image = preResourceImageUtil!.encapsulate(image)!;
        
        
;
    

                        if(encapsulateImage != image)
                        
                                    {
                                    
        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(anyType) 

        //mutex.withLock
        {
list.add(encapsulateImage);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return encapsulateImage;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public clear(){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(anyType) 

        //mutex.withLock
        {
list.clear();
    
}

}


    public add(runnable: Runnable){
    //var runnable = runnable

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lockObject) 

        //mutex.withLock
        {

                        if(!this.runnableList!.contains(runnable);

                        )
                        
                                    {
                                    this.runnableList!.add(runnable);
    
displayInfoSingleton!.add(this.canvasStrings!.SCALED_IMAGES);
    

                                    }
                                
}

}


    processRunnables(){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lockObject) 

        //mutex.withLock
        {

    var runnable: Runnable
;
    

    var size: number = this.runnableList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
runnable= this.runnableList!.get(index);

                         as Runnable;
    
runnable.run();
    
}

this.runnableList!.clear();
    
}

}


                //@Throws(Error::class)
            
    set(gl: GL10){
var gl = gl

    var size: number = this.list.size()!;
        
        
;
    

    var image: any = {}
;
    




                        for (
    var index2: number = 0;
        
        
index2 < size; index2++)
        {
image= this.list.get(index2);
    
image = imageimage as OpenGLESImage
image.
                    set(gl);
    
}

}


}
                
            

