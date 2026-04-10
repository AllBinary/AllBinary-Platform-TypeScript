
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
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
        



import { InputStream } from "../../../java/io/InputStream.js";

    
import { Image } from "../../../javax/microedition/lcdui/Image.js";

    
import { NullCanvas } from "../../../javax/microedition/lcdui/NullCanvas.js";

    
import { J2MEUtil } from "../../../org/allbinary/J2MEUtil.js";

    
import { LazyImageRotationAnimation } from "../../../org/allbinary/animation/image/LazyImageRotationAnimation.js";

    
import { GameGlobalsFactory } from "../../../org/allbinary/canvas/GameGlobalsFactory.js";

    
import { Processor } from "../../../org/allbinary/canvas/Processor.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { ResourceUtil } from "../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { ABToGBUtil } from "../../../org/allbinary/game/canvas/ABToGBUtil.js";

    
import { AllBinaryGameCanvas } from "../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js";

    
import { GDLazyResources } from "../../../org/allbinary/game/gd/resource/GDLazyResources.js";

    
import { GDResources } from "../../../org/allbinary/game/gd/resource/GDResources.js";

    
import { ProgressCanvas } from "../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js";

    
import { ProgressCanvasFactory } from "../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { Memory } from "../../../org/allbinary/system/Memory.js";

    
import { BaseImageLoadingProcessor } from "../../../org/allbinary/thread/BaseImageLoadingProcessor.js";

    
import { ConcurrentImageLoadingProcessor } from "../../../org/allbinary/thread/ConcurrentImageLoadingProcessor.js";

    
import { SynchObject } from "../../../org/allbinary/thread/SynchObject.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    

export class ImageCache extends ImageCacheBase {
        

    public static readonly NULL_IMAGE_CACHE: ImageCache = new ImageCache();
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly concurrentImageLoadingProcessor: BaseImageLoadingProcessor = new ConcurrentImageLoadingProcessor(this);
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    readonly resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;
        
        

    private readonly gameGlobalsFactory: GameGlobalsFactory = GameGlobalsFactory.getInstance()!;
        
        

    private readonly gdResources: GDResources = GDResources.getInstance()!;
        
        

    public readonly loadNowList: BasicArrayList = new BasicArrayList();
        
        

    public readonly loadSoonList: BasicArrayList = new BasicArrayList();
        
        

    public readonly loadList: BasicArrayList = new BasicArrayList();
        
        

    public readonly loadAfterList: BasicArrayList = new BasicArrayList();
        
        

    private readonly lock: SynchObject = new SynchObject();
        
        

    private firstTime: boolean = true;
        
        

    private totalLoaded: number = 0;
        
        

    public progressEnded: boolean = false;
        
        

    public hasAnyLazyAnimationFactories: boolean = false;
        
        

export inner class NotHTMLProcessor extends Processor {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public process(){
concurrentImageLoadingProcessor!.runTask()
}


}
                
            
export inner class NotHTMLEndProcessor extends Processor {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public process(){

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        

progressCanvas!.endIfPaintedSinceStart()
}


}
                
            
export inner class HTMLEndProcessor extends Processor {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public process(){

    var size: number = gdResources!.currentLayoutRequiredTotal;
        
        


                    //Otherwise - statement - EmptyStmt


                        if(size == 0)
                        
                                    {
                                    
    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        

progressCanvas!.endIfPaintedSinceStart()

                                    }
                                
                             else 
                        if(totalLoaded > size /12)
                        
                                    {
                                    
    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        

progressCanvas!.endIfPaintedSinceStart()
endProcessor= NotHTMLEndProcessor()

                                    }
                                
}


}
                
            
export inner class FirstProcessor extends Processor {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public process(){

    var isHTML: boolean = J2MEUtil.isHTML()!;
        
        


                        if(isHTML)
                        
                                    {
                                    processor= Processor.getInstance()
endProcessor= HTMLEndProcessor()

                                    }
                                
                        else {
                            processor= NotHTMLProcessor()
endProcessor= NotHTMLEndProcessor()

        try {
            runTask()
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.END_METHOD_NAME)
}


                        }
                            
}


}
                
            
    private processor: Processor = new FirstProcessor();
        
        

    private endProcessor: Processor = Processor.getInstance()!;
        
        
public constructor (){

            super();
            }


    public addListener(renderer: any = {}){
var renderer = renderer
}


                //@Throws(Error::class)
            
    public waitForLoadNow(){

                        if(firstTime)
                        
                                    {
                                    
    var abToGBUtil: ABToGBUtil = ABToGBUtil.getInstance()!;
        
        


    var abCanvas: AllBinaryGameCanvas = abToGBUtil!.abCanvas as AllBinaryGameCanvas;
        
        


        while(loadNowList!.isEmpty() && (!abCanvas!.isInitialized() || (abCanvas!.isInitialized() && this.hasAnyLazyAnimationFactories)) && !this.progressEnded)
        {
Thread.sleep(120)
}

firstTime= false

                                    }
                                
}


    private readonly LOAD_IMAGE_FOR_ANIMATION: string = "Load Image Animation";
        
        

                //@Throws(Error::class)
            
    public loadImageForAnimation(){

    var lazyImageRotationAnimation: LazyImageRotationAnimation = 
                null
            ;
        
        


        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lock) 

        //mutex.withLock
        {

                        if(loadNowList!.isEmpty())
                        
                                    {
                                    this.endProcessor!.process()

                        if(loadSoonList!.isEmpty())
                        
                                    {
                                    
                        if(this.loadAfterList!.isEmpty())
                        
                                    {
                                    
                        if(firstTime)
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(gameGlobalsFactory!.newCanvas)
                        
                                    {
                                    
                                    }
                                
                        else {
                            loadImage()

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
                        else {
                            lazyImageRotationAnimation= this.loadAfterList!.get(0) as LazyImageRotationAnimation

                        if(this.loadImageForAnimation(lazyImageRotationAnimation))
                        
                                    {
                                    loadAfterList!.remove(lazyImageRotationAnimation)

                                    }
                                

                        }
                            

                                    }
                                
                        else {
                            lazyImageRotationAnimation= this.loadSoonList!.get(0) as LazyImageRotationAnimation

                        if(this.loadImageForAnimation(lazyImageRotationAnimation))
                        
                                    {
                                    loadSoonList!.remove(lazyImageRotationAnimation)

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
lazyImageRotationAnimation= loadNowList!.get(0) as LazyImageRotationAnimation
}


                        if(this.loadImageForAnimation(lazyImageRotationAnimation))
                        
                                    {
                                    
        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lock) 

        //mutex.withLock
        {
loadNowList!.remove(lazyImageRotationAnimation)
}


                        if(lazyImageRotationAnimation!.layoutIndex != 0)
                        
                                    {
                                    
    var list: BasicArrayList = this.getAssociated(lazyImageRotationAnimation)!;
        
        


        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lock) 

        //mutex.withLock
        {

    var size: number = list.size()!;
        
        


                        if(size > 0)
                        
                                    {
                                    loadSoonList!.addAll(list)

                                    }
                                
}


                                    }
                                

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        


    var isHTML: boolean = J2MEUtil.isHTML()!;
        
        


                        if(this.loadNowList!.isEmpty() && (!isHTML || this.firstTime))
                        
                                    {
                                    progressCanvas!.endFromInitialLazyLoadingComplete()

                                    }
                                
                        else {
                            
                        if(this.totalLoaded % 10 == 0)
                        
                                    {
                                    progressCanvas!.addPortion(1, LOAD_IMAGE_FOR_ANIMATION)

                                    }
                                

                        }
                            

                                    }
                                
}


                //@Throws(Error::class)
            
    public loadImages(){

        while(!loadList!.isEmpty() || !loadNowList!.isEmpty())
        {
loadImageForAnimations()
loadImage()
}

}


                //@Throws(Error::class)
            
    public loadImageForAnimations(){

        while(!loadNowList!.isEmpty())
        {
loadImageForAnimation()
}

}


                //@Throws(Error::class)
            
    public loadRemainingAnimations(){

        while(!this.loadAfterList!.isEmpty() || !this.loadNowList!.isEmpty())
        {

        while(!loadNowList!.isEmpty())
        {
loadImageForAnimation()
}


    var lazyImageRotationAnimation: LazyImageRotationAnimation = 
                null
            ;
        
        


        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lock) 

        //mutex.withLock
        {

                        if(!this.loadAfterList!.isEmpty())
                        lazyImageRotationAnimation= this.loadAfterList!.remove(0) as LazyImageRotationAnimation
}


                        if(lazyImageRotationAnimation != 
                                    null
                                )
                        
                                    {
                                    this.loadImageForAnimation(lazyImageRotationAnimation)

                                    }
                                
}

}


                //@Throws(Error::class)
            
    loadImageForAnimation(lazyImageRotationAnimation: LazyImageRotationAnimation): boolean{
    //var lazyImageRotationAnimation = lazyImageRotationAnimation

    var image: Image = lazyImageRotationAnimation!.animationInterfaceFactoryInterface!.getImage()!;
        
        


                        if(this.loadImage(image))
                        
                                    {
                                    lazyImageRotationAnimation!.setRealAnimation()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    loadImage(){

    var image: Image = 
                null
            ;
        
        


        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lock) 

        //mutex.withLock
        {

                        if(loadList!.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
image= loadList!.remove(0) as Image
}

this.loadImage(image)
}


                //@Throws(Error::class)
            
    loadImage(image: Image): boolean{
    //var image = image

                        if(image.isReady())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            
                        if(image.getImage() != 
                                    null
                                )
                        
                                    {
                                    
                        if(image.setReady())
                        
                                    {
                                    this.totalLoaded++



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
                        else {
                            
    var key: string = image.getName()!;
        
        


    var image2: Image = this.creatImage(key)!;
        
        


                        if(image2.isReady())
                        
                                    {
                                    this.init(image, image2)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            image.setImage(image2.getImage())

                        }
                            

                        }
                            

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    init(image: Image, image2: Image){
    //var image = image
    //var image2 = image2
image.init(image2.getImage())
}


                //@Throws(Error::class)
            
    creatImage(key: string): Image{
    //var key = key

    var inputStream: InputStream = resourceUtil!.getResourceAsStream(key)!;
        
        


    var image: Image = Image.createImage(inputStream)!;
        
        

image.setName(key)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Error::class)
            
    public get(caller: string, width: number, height: number): Image{
    //var caller = caller
    //var width = width
    //var height = height

    var foundIndex: number = this.getIndex(width, height)!;
        
        


    var image: Image = this.getFromAvailable(foundIndex, width, height)!;
        
        


                        if(image == NullCanvas.NULL_IMAGE)
                        
                                    {
                                    volume += width *height

                        if(volume > 32000)
                        
                                    {
                                    System.gc()
volume= 0

                                    }
                                
image= this.createImage(caller, width, height)

                        if(nextIndex > widths.length -1)
                        
                                    {
                                    
                        if(foundIndex ==  -1)
                        
                                    {
                                    foundIndex= nextIndex
widths[nextIndex]= width
heights[nextIndex]= height
nextIndex++

                                    }
                                
listOfList[foundIndex]!.add(image)

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Error::class)
            
    public get(key: any = {}): Image{
    //var key = key

    var image: Image = this.getImage(key)!;
        
        


                        if(image == NullCanvas.NULL_IMAGE)
                        
                                    {
                                    
    var inputStream: InputStream = 
                null
            ;
        
        


        try {
            image= this.createImage(key, inputStream)
} catch(e: Exception)
            {
logUtil!.put("Exception: Trying Again After GC", this, commonStrings!.GET, e)
logUtil!.put(StringMaker().
                            append("InputStream: ")!.append(StringUtil.getInstance()!.toString(inputStream))!.toString(), this, commonStrings!.GET)
System.gc()
System.gc()
logUtil!.put(Memory.getInfo(), this, commonStrings!.GET)
Thread.sleep(100)
image= this.createImage(key, inputStream)
}

this.hashtable.put(key, image)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public getIndex(key: any = {}): number{
    //var key = key

    var gdResources: GDResources = GDResources.getInstance()!;
        
        


    var resourceStringArray: string[] = gdResources!.resourceStringArray;
        
        


    var size: number = resourceStringArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(resourceStringArray[index] == key)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    

                                    }
                                
}

logUtil!.put(StringMaker().
                            append("unable to find key: ")!.append(StringUtil.getInstance()!.toString(key))!.toString(), this, commonStrings!.RUN)



                            throw RuntimeException()
}


                //@Throws(Error::class)
            
    createImage(key: any = {}, inputStream: InputStream): Image{
    //var key = key
    //var inputStream = inputStream

    var gdLazyResources: GDLazyResources = GDLazyResources.getInstance()!;
        
        


    var resourceStringArray: string[] = gdLazyResources!.requiredResourcesBeforeLoadingArray;
        
        


    var size: number = resourceStringArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(key == resourceStringArray[index])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.creatImage(key as String);
    

                                    }
                                
}

this.runTask()

    var index: number = this.getIndex(key)!;
        
        


    var width: number = gdLazyResources!.imageResourceWidthArray[index]!;
        
        


    var height: number = gdLazyResources!.imageResourceHeightArray[index]!;
        
        


    var image: Image = this.createImageLater(key as String, width, height)!;
        
        


        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lock) 

        //mutex.withLock
        {
loadList!.add(image)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Error::class)
            
    createImageLater(key: string, width: number, height: number): Image{
    //var key = key
    //var width = width
    //var height = height



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Image.createImageLater(key, width, height);
    
}


    public getAssociated(lazyImageRotationAnimation: LazyImageRotationAnimation): BasicArrayList{
    //var lazyImageRotationAnimation = lazyImageRotationAnimation

    var list: BasicArrayList = new BasicArrayList();
        
        


        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lock) 

        //mutex.withLock
        {

    var lazyImageRotationAnimation2: LazyImageRotationAnimation = 
                null
            ;
        
        


    var size: number = this.loadAfterList!.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
lazyImageRotationAnimation2= this.loadAfterList!.get(index) as LazyImageRotationAnimation

                        if(lazyImageRotationAnimation2!.instanceId == lazyImageRotationAnimation!.instanceId)
                        
                                    {
                                    list.add(lazyImageRotationAnimation2)

                                    }
                                
}


    var size2: number = list.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size2; index++)
        {
this.loadAfterList!.remove(list.get(index))
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


    public add(lazyImageRotationAnimation: LazyImageRotationAnimation){
    //var lazyImageRotationAnimation = lazyImageRotationAnimation

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lock) 

        //mutex.withLock
        {
this.loadAfterList!.add(lazyImageRotationAnimation)
}

}


                //@Throws(Error::class)
            
    public insertFirst(lazyImageRotationAnimation: LazyImageRotationAnimation){
    //var lazyImageRotationAnimation = lazyImageRotationAnimation

                        if(this.loadNowList!.contains(lazyImageRotationAnimation))
                        
                                    {
                                    
                                    }
                                
                        else {
                            
        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(lock) 

        //mutex.withLock
        {
this.loadNowList!.add(lazyImageRotationAnimation)
this.loadAfterList!.remove(lazyImageRotationAnimation)
}


                        }
                            
this.runTask()
}


    public progressEnded(){
this.progressEnded= true
}


                //@Throws(Error::class)
            
    public runTask(){
this.processor.process()
}


    public initProgress(){

                        if(firstTime)
                        
                                    {
                                    firstTime= false

                                    }
                                
}


    public isLazy(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

