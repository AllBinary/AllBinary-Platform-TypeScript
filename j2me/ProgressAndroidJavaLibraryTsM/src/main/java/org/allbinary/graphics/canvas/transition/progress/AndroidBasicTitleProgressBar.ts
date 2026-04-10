
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
        



import { Graphics } from "../../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../../../../javax/microedition/lcdui/Image.js";

    
import { NullCanvas } from "../../../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { Activity } from "../../../../../../android/app/Activity.js";

    
import { AndroidUtil } from "../../../../../../org/allbinary/AndroidUtil.js";

    
import { GameFeatureImageCacheFactory } from "../../../../../../org/allbinary/image/GameFeatureImageCacheFactory.js";

    
import { PreResourceImageUtil } from "../../../../../../org/allbinary/image/PreResourceImageUtil.js";

    
import { ForcedLogUtil } from "../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { ExceptionUtil } from "../../../../../../org/allbinary/logic/java/exception/ExceptionUtil.js";

    
import { Animation } from "../../../../../../org/allbinary/animation/Animation.js";

    
import { NullAnimationFactory } from "../../../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { Features } from "../../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { MainFeatureFactory } from "../../../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { DisplayInfoSingleton } from "../../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { DisplayChangeEvent } from "../../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js";

    
import { DisplayChangeEventHandler } from "../../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js";

    
import { DisplayChangeEventListener } from "../../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventListener.js";

    
import { ImageCacheFactory } from "../../../../../../org/allbinary/image/ImageCacheFactory.js";

    
import { ImageScaleUtil } from "../../../../../../org/allbinary/media/image/ImageScaleUtil.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { AnimationBehavior } from "../../../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { ImageAnimation } from "../../../../../../org/allbinary/animation/image/ImageAnimation.js";

    
import { ResourceUtil } from "../../../../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { EventStrings } from "../../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { ARunnable } from "../../../../../../org/allbinary/thread/ARunnable.js";

    
import { NullRunnable } from "../../../../../../org/allbinary/thread/NullRunnable.js";

    

export class AndroidBasicTitleProgressBar extends ProgressCanvas
                , DisplayChangeEventListener {
        

    public static readonly RESOURCE: string = "ProgressImage";
        
        

    private background: number= 0

    public static setBackground(background: number){
var background = background
AndroidBasicTitleProgressBar.background= background
}


    private showTitleProgressBarRunnable: ARunnable = NullRunnable.getInstance()!;
        
        

    private dismissTitleProgressBarRunnable: ARunnable = NullRunnable.getInstance()!;
        
        

    private titleProgressDialogPortionSetProgressRunnable: ARunnable = NullRunnable.getInstance()!;
        
        

    private titleProgressDialogSetProgressRunnable: ARunnable = NullRunnable.getInstance()!;
        
        

    private midletActivity: Activity = AndroidUtil.NULL_ACTIVITY;
        
        

    private portion: number = 0;
        
        

    private readonly IMAGE: Image[] = new Array(4);
        
        

    private image: Image = NullCanvas.NULL_IMAGE;
        
        

    private animation: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;
        
        
 constructor (title: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(title, backgroundBasicColor, foregroundBasicColor){

            super();
            var title = title
var backgroundBasicColor = backgroundBasicColor
var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
this.init()
addListener(this)

    var size: number = IMAGE.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
IMAGE[index]= NullCanvas.NULL_IMAGE
}

}


    init(){

        try {
            
    
                        if(AndroidBasicTitleProgressBar.background != 0)
                        
                                    {
                                    addResource(RESOURCE, Integer(AndroidBasicTitleProgressBar.background))
init()
this.image= ImageCacheFactory.getInstance()!.get(RESOURCE)

                                    }
                                
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e)
}

}


    public init(activity: Activity){
var activity = activity

        try {
            
    
                        if(this.midletActivity != activity)
                        
                                    {
                                    this.midletActivity= activity
this.showTitleProgressBarRunnable= ShowTitleProgressBarRunnable(this.midletActivity, this)
this.dismissTitleProgressBarRunnable= DismissTitleProgressBarRunnable(this.midletActivity, this)
this.titleProgressDialogSetProgressRunnable= TitleProgressBarSetProgressRunnable(this.midletActivity, this)
this.titleProgressDialogPortionSetProgressRunnable= TitleProgressBarPortionSetProgressRunnable(this.midletActivity, this)
this.loadProgressImages()

                                    }
                                
this.updateCurrent()
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e)
}

}


    updateCurrent(){

        try {
            
    
                        if(!this.isBackground())
                        
                                    {
                                    this.animation= NullAnimationFactory.getFactoryInstance()!.getInstance(0)

                                    }
                                
                             else 
    
                        if(AndroidBasicTitleProgressBar.background != 0)
                        
                                    {
                                    
    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        


    var currentImage: Image


    
                        if(displayInfo!.isPortrait())
                        
                                    {
                                    currentImage= this.getImage(0)

                                    }
                                
                        else {
                            currentImage= this.getImage(2)

                        }
                            

    
                        if(currentImage == 
                                    null
                                )
                        
                                    {
                                    this.animation= NullAnimationFactory.getFactoryInstance()!.getInstance(0)

                                    }
                                
                        else {
                            this.animation= ImageAnimation(currentImage, AnimationBehavior.getInstance())

                        }
                            

                                    }
                                
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.UPDATE, e)
}

}


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this)
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){
var displayChangeEvent = displayChangeEvent

        try {
            this.loadProgressImages()
this.updateCurrent()
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION_LABEL +ExceptionUtil.getInstance()!.getStackTrace(e), this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT)
this.animation= NullAnimationFactory.getFactoryInstance()!.getInstance(0)
}

}


    loadProgressImages(){

        try {
            
    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        


    var lastWidth: number = displayInfo!.getLastWidth()!;
        
        


    var lastHeight: number = displayInfo!.getLastHeight()!;
        
        


    
                        if(displayInfo!.isPortrait(lastWidth, lastHeight))
                        
                                    {
                                    this.setImages(0, lastWidth, lastHeight)

                                    }
                                
                        else {
                            this.setImages(2, lastWidth, lastHeight)

                        }
                            
} catch(e: IllegalArgumentException)
            {
put("IllegalArgumentException " +ExceptionUtil.getInstance()!.getStackTrace(e), this, "loadProgressImages")
this.animation= NullAnimationFactory.getFactoryInstance()!.getInstance(0)
}
 catch(e: Exception)
            {
put(commonStrings!.EXCEPTION_LABEL +ExceptionUtil.getInstance()!.getStackTrace(e), this, "loadProgressImages")
this.animation= NullAnimationFactory.getFactoryInstance()!.getInstance(0)
}

}


    public isInitialized(): boolean{

    
                        if(this.midletActivity != AndroidUtil.NULL_ACTIVITY)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public start(){

        try {
            put(commonStrings!.START, this, commonStrings!.START_METHOD_NAME)
start()
runOnUiThread(showTitleProgressBarRunnable)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.START_METHOD_NAME, e)
}

}


    public end(){

        try {
            put(commonStrings!.START, this, commonStrings!.END_METHOD_NAME)
runOnUiThread(dismissTitleProgressBarRunnable)
end()
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.END_METHOD_NAME, e)
}

}


    public addEarlyPortion(value: number, text: string, index: number){
var value = value
var text = text
var index = index

        try {
            this.portion= value
addEarlyPortion(value, text, index)

    
                        if(this.midletActivity != AndroidUtil.NULL_ACTIVITY)
                        
                                    {
                                    runOnUiThread(titleProgressDialogPortionSetProgressRunnable)

                                    }
                                
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, ADD_PORTION, e)
}

}


    public addPortion(value: number, text: string, index: number){
var value = value
var text = text
var index = index

        try {
            this.portion= value
addPortion(value, text, index)
runOnUiThread(titleProgressDialogPortionSetProgressRunnable)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, ADD_PORTION, e)
}

}


    public addPortion(value: number, text: string){
var value = value
var text = text

        try {
            this.portion= value
addPortion(value, text)
runOnUiThread(titleProgressDialogPortionSetProgressRunnable)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, ADD_PORTION, e)
}

}


    setValue(value: number){
var value = value

        try {
            setValue(value)
runOnUiThread(titleProgressDialogSetProgressRunnable)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "setValue", e)
}

}


    public waitUntilDisplayed(){
}


                @Throws(Exception::class)
            
    setImages(index: number, lastWidth: number, lastHeight: number){
var index = index
var lastWidth = lastWidth
var lastHeight = lastHeight

    var image: Image = this.image;
        
        


    
                        if(image != NullCanvas.NULL_IMAGE)
                        
                                    {
                                    
    
                        if(Features.getInstance()!.isFeature(MainFeatureFactory.getInstance()!.FULL_SCREEN))
                        
                                    {
                                    
    
                        if(this.IMAGE[index] == NullCanvas.NULL_IMAGE)
                        
                                    {
                                    this.IMAGE[index]= ImageScaleUtil.getInstance()!.createImage(ImageCacheFactory.getInstance(), image, lastWidth.toFloat(), image.getWidth().toFloat(), lastHeight.toFloat() -20, image.getHeight().toFloat(), false)

                                    }
                                

                                    }
                                
                        else {
                            
    var nextIndex: number = index +1;
        
        


    
                        if(this.IMAGE[nextIndex] == NullCanvas.NULL_IMAGE)
                        
                                    {
                                    this.IMAGE[nextIndex]= ImageScaleUtil.getInstance()!.createImage(ImageCacheFactory.getInstance(), image, lastWidth.toFloat(), image.getWidth().toFloat(), lastHeight.toFloat() -28, image.getHeight().toFloat(), false)

                                    }
                                

                        }
                            

                                    }
                                
}


                @Throws(Exception::class)
            
    public initOpenGL(graphics: Graphics){
var graphics = graphics
put(commonStrings!.START, this, commonStrings!.INIT)
this.image= GameFeatureImageCacheFactory.getInstance()!.get(RESOURCE)

    var preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;
        
        


    var size: number = this.IMAGE.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    
                        if(this.IMAGE[index] != NullCanvas.NULL_IMAGE)
                        
                                    {
                                    this.IMAGE[index]= preResourceImageUtil!.encapsulate(this.IMAGE[index]!)

                                    }
                                
}

this.updateCurrent()
}


                @Throws(Exception::class)
            
    public update(graphics: Graphics){
var graphics = graphics
put(commonStrings!.START, this, commonStrings!.UPDATE)
this.initOpenGL(graphics)
this.image= GameFeatureImageCacheFactory.getInstance()!.get(RESOURCE)

    var preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;
        
        


    var size: number = this.IMAGE.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    
                        if(this.IMAGE[index] != NullCanvas.NULL_IMAGE)
                        
                                    {
                                    update(graphics, this.IMAGE[index]!)

                                    }
                                
}

}


                @Throws(Exception::class)
            
    getImage(index: number): Image{
var index = index

    var image: Image = NullCanvas.NULL_IMAGE;
        
        


    
                        if(Features.getInstance()!.isFeature(MainFeatureFactory.getInstance()!.FULL_SCREEN))
                        
                                    {
                                    image= this.IMAGE[index]!

                                    }
                                
                        else {
                            image= this.IMAGE[index +1]!

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public paint2(graphics: Graphics){
var graphics = graphics

        try {
            paint(graphics, 0, 20)
paint2(graphics)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, canvasStrings!.PAINT, e)
}

}


    setBackground(background: boolean){
var background = background
setBackground(background)
this.updateCurrent()
}


    setPortion(portion: number){
var portion = portion
this.portion= portion
}


    getPortion(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return portion;
    
}


}
                
            

