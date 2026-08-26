
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { IllegalArgumentException } from '../../../../../../java/lang/IllegalArgumentException.js';
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
//not game specific package import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Image } from '../../../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { NullImage } from '../../../../../../javax/microedition/lcdui/NullImage.js';
      const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
//not game specific package import { Activity } from '../../../../../../android/app/Activity.js';
      const Activity = globalThis.android.app.Activity;

      
//not game specific package import { AndroidUtil } from '../../../../../../org/allbinary/AndroidUtil.js';
      const AndroidUtil = globalThis.org.allbinary.AndroidUtil;

      
//not game specific package import { GameFeatureImageCacheFactory } from '../../../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
      const GameFeatureImageCacheFactory = globalThis.org.allbinary.image.GameFeatureImageCacheFactory;

      
//not game specific package import { PreResourceImageUtil } from '../../../../../../org/allbinary/image/PreResourceImageUtil.js';
      const PreResourceImageUtil = globalThis.org.allbinary.image.PreResourceImageUtil;

      
//not game specific package import { ForcedLogUtil } from '../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { ExceptionUtil } from '../../../../../../org/allbinary/logic/java/exception/ExceptionUtil.js';
      const ExceptionUtil = globalThis.org.allbinary.logic.java.exception.ExceptionUtil;

      
//not game specific package import { Animation } from '../../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { NullAnimationFactory } from '../../../../../../org/allbinary/animation/NullAnimationFactory.js';
      const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
//not game specific package import { Features } from '../../../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { MainFeatureFactory } from '../../../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
      const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;

      
//not game specific package import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { DisplayChangeEvent } from '../../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
      const DisplayChangeEvent = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEvent;

      
//not game specific package import { DisplayChangeEventHandler } from '../../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js';
      const DisplayChangeEventHandler = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEventHandler;

      
//not game specific package import { DisplayChangeEventListener } from '../../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventListener.js';
      const DisplayChangeEventListener = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEventListener;

      
//not game specific package import { ImageCacheFactory } from '../../../../../../org/allbinary/image/ImageCacheFactory.js';
      const ImageCacheFactory = globalThis.org.allbinary.image.ImageCacheFactory;

      
//not game specific package import { ImageScaleUtil } from '../../../../../../org/allbinary/media/image/ImageScaleUtil.js';
      const ImageScaleUtil = globalThis.org.allbinary.media.image.ImageScaleUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { AnimationBehavior } from '../../../../../../org/allbinary/animation/AnimationBehavior.js';
      const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not game specific package import { ImageAnimation } from '../../../../../../org/allbinary/animation/image/ImageAnimation.js';
      const ImageAnimation = globalThis.org.allbinary.animation.image.ImageAnimation;

      
//not game specific package import { ResourceUtil } from '../../../../../../org/allbinary/data/resource/ResourceUtil.js';
      const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;

      
//not game specific package import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not game specific package import { ARunnable } from '../../../../../../org/allbinary/thread/ARunnable.js';
      const ARunnable = globalThis.org.allbinary.thread.ARunnable;

      
//not game specific package import { NullRunnable } from '../../../../../../org/allbinary/thread/NullRunnable.js';
      const NullRunnable = globalThis.org.allbinary.thread.NullRunnable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProgressCanvas } from './ProgressCanvas.js';
import { ShowTitleProgressBarRunnable } from './ShowTitleProgressBarRunnable.js';
import { DismissTitleProgressBarRunnable } from './DismissTitleProgressBarRunnable.js';
import { TitleProgressBarSetProgressRunnable } from './TitleProgressBarSetProgressRunnable.js';
import { TitleProgressBarPortionSetProgressRunnable } from './TitleProgressBarPortionSetProgressRunnable.js';

export class AndroidBasicTitleProgressBar extends ProgressCanvas implements DisplayChangeEventListener {
        

    public static readonly RESOURCE: string = "ProgressImage";

    private static background: number= 0;

    public static setBackgroundResource(background: number){
AndroidBasicTitleProgressBar.background= background;
    
}


    private showTitleProgressBarRunnable: ARunnable = NullRunnable.getInstance()!;

    private dismissTitleProgressBarRunnable: ARunnable = NullRunnable.getInstance()!;

    private titleProgressDialogPortionSetProgressRunnable: ARunnable = NullRunnable.getInstance()!;

    private titleProgressDialogSetProgressRunnable: ARunnable = NullRunnable.getInstance()!;

    private midletActivity: Activity = AndroidUtil.NULL_ACTIVITY;

    private portion: number = 0;

    private readonly IMAGE: Image[] = new Array(4);

    private image: Image = NullImage.NULL_IMAGE;

    private animation: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;

 constructor (title: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(title, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.init();
    
DisplayChangeEventHandler.getInstance()!.addListenerInterface(this);
    

    var size: number = this.IMAGE.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.IMAGE[index]= NullImage.NULL_IMAGE;
    
}

}


    init(){

        try {
            
                        if(AndroidBasicTitleProgressBar.background != 0)
                        
                                    {
                                    ResourceUtil.getInstance()!.addResource(AndroidBasicTitleProgressBar.RESOURCE, new Integer(AndroidBasicTitleProgressBar.background));
    
GameFeatureImageCacheFactory.init();
    
this.image= ImageCacheFactory.getInstance()!.getWithKey(AndroidBasicTitleProgressBar.RESOURCE);
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e);
    
}

}


    public initActivity(activity: Activity){

        try {
            
                        if(this.midletActivity != activity)
                        
                                    {
                                    this.midletActivity= activity;
    
this.showTitleProgressBarRunnable= new ShowTitleProgressBarRunnable(this.midletActivity, this);
    
this.dismissTitleProgressBarRunnable= new DismissTitleProgressBarRunnable(this.midletActivity, this);
    
this.titleProgressDialogSetProgressRunnable= new TitleProgressBarSetProgressRunnable(this.midletActivity, this);
    
this.titleProgressDialogPortionSetProgressRunnable= new TitleProgressBarPortionSetProgressRunnable(this.midletActivity, this);
    
this.loadProgressImages();
    

                                    }
                                
this.updateCurrent();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e);
    
}

}


    updateCurrent(){

        try {
            
                        if(!this.isBackground())
                        
                                    {
                                    this.animation= NullAnimationFactory.getFactoryInstance()!.getInstance(0);
    

                                    }
                                
                             else 
                        if(AndroidBasicTitleProgressBar.background != 0)
                        
                                    {
                                    
    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

    var currentImage: Image;;
    

                        if(displayInfo!.isPortrait())
                        
                                    {
                                    currentImage= this.getImage(0);
    

                                    }
                                
                        else {
                            currentImage= this.getImage(2);
    

                        }
                            

                        if(currentImage == 
                                    null
                                )
                        
                                    {
                                    this.animation= NullAnimationFactory.getFactoryInstance()!.getInstance(0);
    

                                    }
                                
                        else {
                            this.animation= new ImageAnimation(currentImage, AnimationBehavior.getInstance());
    

                        }
                            

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.UPDATE, e);
    
}

}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){

        try {
            this.loadProgressImages();
    
this.updateCurrent();
    

                //: 
} catch(e) 
            {
this.logUtil!.putF(this.commonStrings!.EXCEPTION_LABEL +ExceptionUtil.getInstance()!.getStackTrace(e), this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT);
    
this.animation= NullAnimationFactory.getFactoryInstance()!.getInstance(0);
    
}

}


    loadProgressImages(){

        try {
            
    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

    var lastWidth: number = displayInfo!.getLastWidth()!;;
    

    var lastHeight: number = displayInfo!.getLastHeight()!;;
    

                        if(displayInfo!.isPortraitWH(lastWidth, lastHeight))
                        
                                    {
                                    this.setImages(0, lastWidth, lastHeight);
    

                                    }
                                
                        else {
                            this.setImages(2, lastWidth, lastHeight);
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.putF("IllegalArgumentException " +ExceptionUtil.getInstance()!.getStackTrace(e), this, "loadProgressImages");
    
this.animation= NullAnimationFactory.getFactoryInstance()!.getInstance(0);
    
}

                //: 
/* catch(e) 
            {
this.logUtil!.putF(this.commonStrings!.EXCEPTION_LABEL +ExceptionUtil.getInstance()!.getStackTrace(e), this, "loadProgressImages");
    
this.animation= NullAnimationFactory.getFactoryInstance()!.getInstance(0);
    
}
*/
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
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.START_METHOD_NAME);
    
super.start();
    
this.midletActivity!.runOnUiThread(this.showTitleProgressBarRunnable);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.START_METHOD_NAME, e);
    
}

}


    public end(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.END_METHOD_NAME);
    
this.midletActivity!.runOnUiThread(this.dismissTitleProgressBarRunnable);
    
super.end();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.END_METHOD_NAME, e);
    
}

}


    public addEarlyPortion(value: number, text: string, index: number){

        try {
            this.portion= value;
    
super.addEarlyPortion(value, text, index);
    

                        if(this.midletActivity != AndroidUtil.NULL_ACTIVITY)
                        
                                    {
                                    this.midletActivity!.runOnUiThread(this.titleProgressDialogPortionSetProgressRunnable);
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.ADD_PORTION, e);
    
}

}


    public addPortion(value: number, text: string, index: number){

        try {
            this.portion= value;
    
super.addPortion(value, text, index);
    
this.midletActivity!.runOnUiThread(this.titleProgressDialogPortionSetProgressRunnable);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.ADD_PORTION, e);
    
}

}


    public addNormalPortion(value: number, text: string){

        try {
            this.portion= value;
    
super.addNormalPortion(value, text);
    
this.midletActivity!.runOnUiThread(this.titleProgressDialogPortionSetProgressRunnable);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.ADD_PORTION, e);
    
}

}


    setValue(value: number){

        try {
            super.setValue(value);
    
this.midletActivity!.runOnUiThread(this.titleProgressDialogSetProgressRunnable);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setValue", e);
    
}

}


    public waitUntilDisplayed(){
}


                //@Throws(Exception.constructor)
            
    setImages(index: number, lastWidth: number, lastHeight: number){

    var image: Image = this.image;;
    

                        if(image != NullImage.NULL_IMAGE)
                        
                                    {
                                    
                        if(Features.getInstance()!.isFeature(MainFeatureFactory.getInstance()!.FULL_SCREEN))
                        
                                    {
                                    
                        if(this.IMAGE[index] == NullImage.NULL_IMAGE)
                        
                                    {
                                    this.IMAGE[index]= ImageScaleUtil.getInstance()!.createImage2(ImageCacheFactory.getInstance(), image, lastWidth, image.getWidth(), lastHeight -20, image.getHeight(), false);
    

                                    }
                                

                                    }
                                
                        else {
                            
    var nextIndex: number = index +1;;
    

                        if(this.IMAGE[nextIndex] == NullImage.NULL_IMAGE)
                        
                                    {
                                    this.IMAGE[nextIndex]= ImageScaleUtil.getInstance()!.createImage2(ImageCacheFactory.getInstance(), image, lastWidth, image.getWidth(), lastHeight -28, image.getHeight(), false);
    

                                    }
                                

                        }
                            

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public initOpenGL(graphics: Graphics){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.INIT);
    
this.image= GameFeatureImageCacheFactory.getInstance()!.getWithKey(AndroidBasicTitleProgressBar.RESOURCE);
    

    var preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;;
    

    var size: number = this.IMAGE.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

                        if(this.IMAGE[index] != NullImage.NULL_IMAGE)
                        
                                    {
                                    this.IMAGE[index]= preResourceImageUtil!.encapsulate(this.IMAGE[index]!);
    

                                    }
                                
}

this.updateCurrent();
    
}


                //@Throws(Exception.constructor)
            
    public update(graphics: Graphics){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.UPDATE);
    
this.initOpenGL(graphics);
    
this.image= GameFeatureImageCacheFactory.getInstance()!.getWithKey(AndroidBasicTitleProgressBar.RESOURCE);
    

    var preResourceImageUtil: PreResourceImageUtil = PreResourceImageUtil.getInstance()!;;
    

    var size: number = this.IMAGE.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

                        if(this.IMAGE[index] != NullImage.NULL_IMAGE)
                        
                                    {
                                    preResourceImageUtil!.update(graphics, this.IMAGE[index]!);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    getImage(index: number): Image{

    var image: Image = NullImage.NULL_IMAGE;;
    

                        if(Features.getInstance()!.isFeature(MainFeatureFactory.getInstance()!.FULL_SCREEN))
                        
                                    {
                                    image= this.IMAGE[index]!;
    

                                    }
                                
                        else {
                            image= this.IMAGE[index +1]!;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


    public paint2(graphics: Graphics){

        try {
            this.animation.paintXY(graphics, 0, 20);
    
super.paint2(graphics);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.canvasStrings!.PAINT, e);
    
}

}


    setBackground(background: boolean){
super.setBackground(background);
    
this.updateCurrent();
    
}


    setPortion(portion: number){
this.portion= portion;
    
}


    getPortion(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.portion;
    
}


}
                
            

