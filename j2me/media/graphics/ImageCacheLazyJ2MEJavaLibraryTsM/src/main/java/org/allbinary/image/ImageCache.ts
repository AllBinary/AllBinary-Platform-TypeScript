
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
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
            import { System } from '../../../java/lang/System.js';
        
            import { Thread } from '../../../java/lang/Thread.js';
        
import { InputStream } from '../../../java/io/InputStream.js';
      
import { Image } from '../../../javax/microedition/lcdui/Image.js';
      
import { NullImage } from '../../../javax/microedition/lcdui/NullImage.js';
      
import { J2MEUtil } from '../../../org/allbinary/J2MEUtil.js';
      
import { LazyImageRotationAnimation } from '../../../org/allbinary/animation/image/LazyImageRotationAnimation.js';
      
import { GameGlobalsFactory } from '../../../org/allbinary/canvas/GameGlobalsFactory.js';
      
import { Processor } from '../../../org/allbinary/canvas/Processor.js';
      
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      
import { ResourceUtil } from '../../../org/allbinary/data/resource/ResourceUtil.js';
      
import { ABToGBUtil } from '../../../org/allbinary/game/canvas/ABToGBUtil.js';
      
import { AllBinaryGameCanvas } from '../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
      
import { GDLazyResources } from '../../../org/allbinary/game/gd/resource/GDLazyResources.js';
      
import { GDResources } from '../../../org/allbinary/game/gd/resource/GDResources.js';
      
import { ProgressCanvas } from '../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
      
import { ProgressCanvasFactory } from '../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      
import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
      
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      
import { Memory } from '../../../org/allbinary/system/Memory.js';
      
import { BaseImageLoadingProcessor } from '../../../org/allbinary/thread/BaseImageLoadingProcessor.js';
      
import { ConcurrentImageLoadingProcessor } from '../../../org/allbinary/thread/ConcurrentImageLoadingProcessor.js';
      
import { SynchObject } from '../../../org/allbinary/thread/SynchObject.js';
      
import { BasicArrayList } from '../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageCacheBase } from './ImageCacheBase.js';
//import { NotHTMLEndProcessor } from './NotHTMLEndProcessor.js';
//import { FirstProcessor } from './FirstProcessor.js';
//import { NotHTMLProcessor } from './NotHTMLProcessor.js';
//import { HTMLEndProcessor } from './HTMLEndProcessor.js';

export class ImageCache extends ImageCacheBase {
        

    public static readonly NULL_IMAGE_CACHE: ImageCache = new ImageCache();

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly concurrentImageLoadingProcessor: BaseImageLoadingProcessor = new ConcurrentImageLoadingProcessor(this);

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    readonly resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;

    private readonly gameGlobalsFactory: GameGlobalsFactory = GameGlobalsFactory.getInstance()!;

    private readonly gdResources: GDResources = GDResources.getInstance()!;

    public readonly loadNowList: BasicArrayList = new BasicArrayListD();

    public readonly loadSoonList: BasicArrayList = new BasicArrayListD();

    public readonly loadList: BasicArrayList = new BasicArrayListD();

    public readonly loadAfterList: BasicArrayList = new BasicArrayListD();

    private readonly lock: SynchObject = new SynchObject();

    private firstTime: boolean = true;

    private totalLoaded: number = 0;

    public progressEnded: boolean = false;

    public hasAnyLazyAnimationFactories: boolean = false;

//inner= member=true isStatic=
NotHTMLProcessor = class extends Processor {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public process(){
concurrentImageLoadingProcessor!.runTask();
    
}


}
                
            
//inner= member=true isStatic=
NotHTMLEndProcessor = class extends Processor {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public process(){

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.endIfPaintedSinceStart();
    
}


}
                
            
//inner= member=true isStatic=
HTMLEndProcessor = class extends Processor {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public process(){

    var size: number = gdResources!.currentLayoutRequiredTotal;;
    

                    //Otherwise - statement - EmptyStmt


                        if(size == 0)
                        
                                    {
                                    
    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.endIfPaintedSinceStart();
    

                                    }
                                
                             else 
                        if(totalLoaded > size /12)
                        
                                    {
                                    
    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.endIfPaintedSinceStart();
    
endProcessor= new this.NotHTMLEndProcessor();
    

                                    }
                                
}


}
                
            
//inner= member=true isStatic=
FirstProcessor = class extends Processor {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public process(){
ImageCache.prototype.firstProcess();
    
}


}
                
            
    private processor: Processor = new this.FirstProcessor();

    private endProcessor: Processor = Processor.getInstance()!;

public constructor (){

            super();
        }


    public firstProcess(){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var isHTML: boolean = J2MEUtil.isHTML()!;;
    

                        if(isHTML)
                        
                                    {
                                    this.processor= Processor.getInstance();
    
this.endProcessor= new this.HTMLEndProcessor();
    

                                    }
                                
                        else {
                            this.processor= new this.NotHTMLProcessor();
    
this.endProcessor= new this.NotHTMLEndProcessor();
    

        try {
            runTask();
    

                //: 
} catch(e) 
            {
logUtil!.putF(this.commonStrings!.EXCEPTION, this, this.commonStrings!.END_METHOD_NAME);
    
}


                        }
                            
}


    public addListener(renderer: any = {}){
}


                //@Throws(Exception.constructor)
            
    public waitForLoadNow(){

                        if(this.firstTime)
                        
                                    {
                                    
    var abToGBUtil: ABToGBUtil = ABToGBUtil.getInstance()!;;
    

    var abCanvas: AllBinaryGameCanvas = abToGBUtil!.abCanvas as AllBinaryGameCanvas;;
    

        while(this.loadNowList!.isEmpty() && (!abCanvas!.isInitialized() || (abCanvas!.isInitialized() && this.hasAnyLazyAnimationFactories)) && !this.progressEnded)
        {
Thread.sleep(120);
    
}

this.firstTime= false;
    

                                    }
                                
}


    private readonly LOAD_IMAGE_FOR_ANIMATION: string = "Load Image Animation";

                //@Throws(Exception.constructor)
            
    public loadImageForAnimation(){

    var lazyImageRotationAnimation: LazyImageRotationAnimation = 
                null
            ;;
    

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 

        //mutex.withLock
        

                        if(this.loadNowList!.isEmpty())
                        
                                    {
                                    this.endProcessor!.process();
    

                        if(this.loadSoonList!.isEmpty())
                        
                                    {
                                    
                        if(this.loadAfterList!.isEmpty())
                        
                                    {
                                    
                        if(this.firstTime)
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(this.gameGlobalsFactory!.newCanvas)
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.loadNextImage();
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
                        else {
                            lazyImageRotationAnimation= this.loadAfterList!.get(0) as LazyImageRotationAnimation;
    

                        if(this.loadImageForLazyAnimation(lazyImageRotationAnimation))
                        
                                    {
                                    this.loadAfterList!.remove(lazyImageRotationAnimation);
    

                                    }
                                

                        }
                            

                                    }
                                
                        else {
                            lazyImageRotationAnimation= this.loadSoonList!.get(0) as LazyImageRotationAnimation;
    

                        if(this.loadImageForLazyAnimation(lazyImageRotationAnimation))
                        
                                    {
                                    this.loadSoonList!.remove(lazyImageRotationAnimation);
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
lazyImageRotationAnimation= this.loadNowList!.get(0) as LazyImageRotationAnimation;
    



                        if(this.loadImageForLazyAnimation(lazyImageRotationAnimation))
                        
                                    {
                                    
        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 

        //mutex.withLock
        
this.loadNowList!.remove(lazyImageRotationAnimation);
    



                        if(lazyImageRotationAnimation!.layoutIndex != 0)
                        
                                    {
                                    
    var list: BasicArrayList = this.getAssociated(lazyImageRotationAnimation)!;;
    

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 

        //mutex.withLock
        

    var size: number = list.size()!;;
    

                        if(size > 0)
                        
                                    {
                                    this.loadSoonList!.addAllList(list);
    

                                    }
                                



                                    }
                                

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    

    var isHTML: boolean = J2MEUtil.isHTML()!;;
    

                        if(this.loadNowList!.isEmpty() && (!isHTML || this.firstTime))
                        
                                    {
                                    progressCanvas!.endFromInitialLazyLoadingComplete();
    

                                    }
                                
                        else {
                            
                        if(this.totalLoaded % 10 == 0)
                        
                                    {
                                    progressCanvas!.addNormalPortion(1, this.LOAD_IMAGE_FOR_ANIMATION);
    

                                    }
                                

                        }
                            

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public loadImages(){

        while(!this.loadList!.isEmpty() || !this.loadNowList!.isEmpty())
        {
this.loadImageForAnimations();
    
this.loadNextImage();
    
}

}


                //@Throws(Exception.constructor)
            
    public loadImageForAnimations(){

        while(!this.loadNowList!.isEmpty())
        {
this.loadImageForAnimation();
    
}

}


                //@Throws(Exception.constructor)
            
    public loadRemainingAnimations(){

        while(!this.loadAfterList!.isEmpty() || !this.loadNowList!.isEmpty())
        {

        while(!this.loadNowList!.isEmpty())
        {
this.loadImageForAnimation();
    
}


    var lazyImageRotationAnimation: LazyImageRotationAnimation = 
                null
            ;;
    

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 

        //mutex.withLock
        

                        if(!this.loadAfterList!.isEmpty())
                        lazyImageRotationAnimation= this.loadAfterList!.removeAt(0) as LazyImageRotationAnimation



                        if(lazyImageRotationAnimation != 
                                    null
                                )
                        
                                    {
                                    this.loadImageForLazyAnimation(lazyImageRotationAnimation);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    loadImageForLazyAnimation(lazyImageRotationAnimation: LazyImageRotationAnimation): boolean{

    var image: Image = lazyImageRotationAnimation!.animationInterfaceFactoryInterface!.getImage()!;;
    

                        if(this.loadImage(image))
                        
                                    {
                                    lazyImageRotationAnimation!.setRealAnimation();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    loadNextImage(){

    var image: Image = 
                null
            ;;
    

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 

        //mutex.withLock
        

                        if(this.loadList!.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
image= this.loadList!.removeAt(0) as Image;
    


this.loadImage(image);
    
}


                //@Throws(Exception.constructor)
            
    loadImage(image: Image): boolean{

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
                                    this.totalLoaded++;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
                        else {
                            
    var key: string = image.getName()!;;
    

    var image2: Image = this.creatImage(key)!;;
    

                        if(image2.isReady())
                        
                                    {
                                    this.init(image, image2);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            image.setImage(image2.getImage());
    

                        }
                            

                        }
                            

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    init(image: Image, image2: Image){
image.init(image2.getImage());
    
}


                //@Throws(Exception.constructor)
            
    creatImage(key: string): Image{

    var inputStream: InputStream = resourceUtil!.getResourceAsStream(key)!;;
    

    var image: Image = Image.createImage(inputStream)!;;
    
image.setName(key);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Exception.constructor)
            
    public get(caller: string, width: number, height: number): Image{

    var foundIndex: number = this.getIndexWH(width, height)!;;
    

    var image: Image = this.getFromAvailable(foundIndex, width, height)!;;
    

                        if(image == NullImage.NULL_IMAGE)
                        
                                    {
                                    this.volume += width *height;
    

                        if(this.volume > 32000)
                        
                                    {
                                    System.gc();
    
this.volume= 0;
    

                                    }
                                
image= this.createImage(caller, width, height);
    

                        if(this.nextIndex > this.widths.length -1)
                        
                                    {
                                    
                        if(foundIndex ==  -1)
                        
                                    {
                                    foundIndex= this.nextIndex;
    
this.widths[this.nextIndex]= width;
    
this.heights[this.nextIndex]= height;
    
this.nextIndex++;
    

                                    }
                                
this.listOfList[foundIndex]!.add(image);
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Exception.constructor)
            
    public getWithKey(key: any = {}): Image{

    var image: Image = this.getImage(key)!;;
    

                        if(image == NullImage.NULL_IMAGE)
                        
                                    {
                                    
    var inputStream: InputStream = 
                null
            ;;
    

        try {
            image= this.createImageFromInputStream(key, inputStream);
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Exception: Trying Again After GC", this, this.commonStrings!.GET, e);
    
this.logUtil!.putF(new StringMaker().append("InputStream: ")!.append(StringUtil.getInstance()!.toString(inputStream))!.toString(), this, this.commonStrings!.GET);
    
System.gc();
    
System.gc();
    
this.logUtil!.putF(Memory.getInfo(), this, this.commonStrings!.GET);
    
Thread.sleep(100);
    
image= this.createImageFromInputStream(key, inputStream);
    
}

this.hashtable.put(key, image);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public getIndex(key: any = {}): number{

    var gdResources: GDResources = GDResources.getInstance()!;;
    

    var resourceStringArray: string[] = gdResources!.resourceStringArray;;
    

    var size: number = resourceStringArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

                        if(resourceStringArray[index] == key)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    

                                    }
                                
}

this.logUtil!.putF(new StringMaker().append("unable to find key: ")!.append(StringUtil.getInstance()!.toString(key))!.toString(), this, this.commonStrings!.RUN);
    



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    createImageFromInputStream(key: any = {}, inputStream: InputStream): Image{

    var gdLazyResources: GDLazyResources = GDLazyResources.getInstance()!;;
    

    var resourceStringArray: string[] = gdLazyResources!.requiredResourcesBeforeLoadingArray;;
    

    var size: number = resourceStringArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

                        if(key == resourceStringArray[index])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.creatImage(key as string);;
    

                                    }
                                
}

this.runTask();
    

    var index: number = this.getIndex(key)!;;
    

    var width: number = gdLazyResources!.imageResourceWidthArray[index]!;;
    

    var height: number = gdLazyResources!.imageResourceHeightArray[index]!;;
    

    var image: Image = this.createImageLater(key as string, width, height)!;;
    

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 

        //mutex.withLock
        
this.loadList!.add(image);
    





                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


                //@Throws(Exception.constructor)
            
    createImageLater(key: string, width: number, height: number): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Image.createImageLater(key, width, height);;
    
}


    public getAssociated(lazyImageRotationAnimation: LazyImageRotationAnimation): BasicArrayList{

    var list: BasicArrayList = new BasicArrayListD();;
    

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 

        //mutex.withLock
        

    var lazyImageRotationAnimation2: LazyImageRotationAnimation = 
                null
            ;;
    

    var size: number = this.loadAfterList!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
lazyImageRotationAnimation2= this.loadAfterList!.get(index) as LazyImageRotationAnimation;
    

                        if(lazyImageRotationAnimation2!.instanceId == lazyImageRotationAnimation!.instanceId)
                        
                                    {
                                    list.add(lazyImageRotationAnimation2);
    

                                    }
                                
}


    var size2: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size2; index++)
        {
this.loadAfterList!.remove(list.get(index));
    
}






                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


    public add(lazyImageRotationAnimation: LazyImageRotationAnimation){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 

        //mutex.withLock
        
this.loadAfterList!.add(lazyImageRotationAnimation);
    


}


                //@Throws(Exception.constructor)
            
    public insertFirst(lazyImageRotationAnimation: LazyImageRotationAnimation){

                        if(this.loadNowList!.contains(lazyImageRotationAnimation))
                        
                                    {
                                    
                                    }
                                
                        else {
                            
        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 

        //mutex.withLock
        
this.loadNowList!.add(lazyImageRotationAnimation);
    
this.loadAfterList!.remove(lazyImageRotationAnimation);
    



                        }
                            
this.runTask();
    
}


    public progressEnded(){
this.progressEnded= true;
    
}


                //@Throws(Exception.constructor)
            
    public runTask(){
this.processor.process();
    
}


    public initProgress(){

                        if(this.firstTime)
                        
                                    {
                                    this.firstTime= false;
    

                                    }
                                
}


    public isLazy(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

