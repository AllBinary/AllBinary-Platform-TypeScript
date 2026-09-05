
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
import { AnimationBehaviorFactory } from '../../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
//not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
import { OneRowSpriteIndexedAnimationFactory } from '../../../../../org/allbinary/animation/image/sprite/OneRowSpriteIndexedAnimationFactory.js';
//not GWT import const OneRowSpriteIndexedAnimationFactory = globalThis.org.allbinary.animation.image.sprite.OneRowSpriteIndexedAnimationFactory;

      
import { BaseResourceAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/resource/BaseResourceAnimationInterfaceFactoryInterfaceFactory.js';
//not GWT import const BaseResourceAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.resource.BaseResourceAnimationInterfaceFactoryInterfaceFactory;

      
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { ResourceLoadingLevelFactory } from '../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
//not GWT import const ResourceLoadingLevelFactory = globalThis.org.allbinary.game.resource.ResourceLoadingLevelFactory;

      
import { ProgressCanvas } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
//not GWT import const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

      
import { ProgressCanvasFactory } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;

      
import { ImageCache } from '../../../../../org/allbinary/image/ImageCache.js';
//not GWT import const ImageCache = globalThis.org.allbinary.image.ImageCache;

      
import { ImageCacheFactory } from '../../../../../org/allbinary/image/ImageCacheFactory.js';
//not GWT import const ImageCacheFactory = globalThis.org.allbinary.image.ImageCacheFactory;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const OperatingSystemFactory = globalThis.org.allbinary.logic.system.os.OperatingSystemFactory;

      
//not plain js import { ImageCompleteUtil } 
const ImageCompleteUtil = globalThis.org.allbinary.media.image.ImageCompleteUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchButtonBlankResource } from './TouchButtonBlankResource.js';
//not GWT import - same folder const TouchButtonBlankResource = globalThis.org.allbinary.input.motion.button.TouchButtonBlankResource;

                import { TouchButtonResource } from './TouchButtonResource.js';
//not GWT import - same folder const TouchButtonResource = globalThis.org.allbinary.input.motion.button.TouchButtonResource;

                import { TouchButtonGenericActionResource } from './TouchButtonGenericActionResource.js';
//not GWT import - same folder const TouchButtonGenericActionResource = globalThis.org.allbinary.input.motion.button.TouchButtonGenericActionResource;

                import { TouchButtonStartResource } from './TouchButtonStartResource.js';
//not GWT import - same folder const TouchButtonStartResource = globalThis.org.allbinary.input.motion.button.TouchButtonStartResource;

                import { TouchButtonUpResource } from './TouchButtonUpResource.js';
//not GWT import - same folder const TouchButtonUpResource = globalThis.org.allbinary.input.motion.button.TouchButtonUpResource;

                import { TouchButtonDownResource } from './TouchButtonDownResource.js';
//not GWT import - same folder const TouchButtonDownResource = globalThis.org.allbinary.input.motion.button.TouchButtonDownResource;

                import { TouchButtonTurnLeftResource } from './TouchButtonTurnLeftResource.js';
//not GWT import - same folder const TouchButtonTurnLeftResource = globalThis.org.allbinary.input.motion.button.TouchButtonTurnLeftResource;

                import { TouchButtonTurnRightResource } from './TouchButtonTurnRightResource.js';
//not GWT import - same folder const TouchButtonTurnRightResource = globalThis.org.allbinary.input.motion.button.TouchButtonTurnRightResource;

                import { TouchButtonStrafeLeftResource } from './TouchButtonStrafeLeftResource.js';
//not GWT import - same folder const TouchButtonStrafeLeftResource = globalThis.org.allbinary.input.motion.button.TouchButtonStrafeLeftResource;

                import { TouchButtonStrafeRightResource } from './TouchButtonStrafeRightResource.js';
//not GWT import - same folder const TouchButtonStrafeRightResource = globalThis.org.allbinary.input.motion.button.TouchButtonStrafeRightResource;

                
export class TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory extends BaseResourceAnimationInterfaceFactoryInterfaceFactory {
        

    public static createFactory(): TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory("TouchButton Animations");
    
}


public constructor (name: string){
            super(name, StdUtil.getInstance()!.createHashtable(), StdUtil.getInstance()!.createHashtable(), StdUtil.getInstance()!.createHashtable());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public init(level: number){
this.initImageCache(ImageCacheFactory.getInstance(), level);
    
}


                //@Throws(Exception.constructor)
            
    initImageCache(imageCache: ImageCache, level: number){

                        if(this.isInitialized())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var portion: number = 140;;
    

    var loadingString: string = new StringMaker().append(this.toString())!.append(" Loading: ")!.toString()!;;
    

    var index: number = 0;;
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.addPortion(portion, loadingString, index++);
    

    var touchButtonBlankResource: TouchButtonResource = TouchButtonBlankResource.getInstance()!;;
    

    var touchButtonGenericActionResource: TouchButtonResource = TouchButtonGenericActionResource.getInstance()!;;
    

    var touchButtonStartResource: TouchButtonResource = TouchButtonStartResource.getInstance()!;;
    

    var touchButtonUpResource: TouchButtonResource = TouchButtonUpResource.getInstance()!;;
    

    var touchButtonDownResource: TouchButtonResource = TouchButtonDownResource.getInstance()!;;
    

    var touchButtonTurnLeftResource: TouchButtonResource = TouchButtonTurnLeftResource.getInstance()!;;
    

    var touchButtonTurnRightResource: TouchButtonResource = TouchButtonTurnRightResource.getInstance()!;;
    

    var touchButtonStrafeLeftResource: TouchButtonResource = TouchButtonStrafeLeftResource.getInstance()!;;
    

    var touchButtonStrafeRightResource: TouchButtonResource = TouchButtonStrafeRightResource.getInstance()!;;
    

    var touchButtonBlankResourceImage: Image = imageCache!.getWithKey(touchButtonBlankResource!.RESOURCE)!;;
    

    var touchButtonGenericActionResourceImage: Image = imageCache!.getWithKey(touchButtonGenericActionResource!.RESOURCE)!;;
    

    var touchButtonStartResourceImage: Image = imageCache!.getWithKey(touchButtonStartResource!.RESOURCE)!;;
    

    var touchButtonUpResourceImage: Image = imageCache!.getWithKey(touchButtonUpResource!.RESOURCE)!;;
    

    var touchButtonDownResourceImage: Image = imageCache!.getWithKey(touchButtonDownResource!.RESOURCE)!;;
    

    var touchButtonTurnLeftResourceImage: Image = imageCache!.getWithKey(touchButtonTurnLeftResource!.RESOURCE)!;;
    

    var touchButtonTurnRightResourceImage: Image = imageCache!.getWithKey(touchButtonTurnRightResource!.RESOURCE)!;;
    

    var touchButtonStrafeLeftResourceImage: Image = imageCache!.getWithKey(touchButtonStrafeLeftResource!.RESOURCE)!;;
    

    var touchButtonStrafeRightResourceImage: Image = imageCache!.getWithKey(touchButtonStrafeRightResource!.RESOURCE)!;;
    

    var nullAnimationFactory: NullAnimationFactory = NullAnimationFactory.getFactoryInstance()!;;
    

                        if(OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!.isOverScan())
                        
                                    {
                                    imageCache!.getWithKey(TouchButtonStartResource.getInstance()!.HINT);
    

                                    }
                                
progressCanvas!.addPortion(portion, loadingString, index++);
    

    var imageCompleteUtil: ImageCompleteUtil = ImageCompleteUtil.getInstance()!;;
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitForImage(touchButtonBlankResourceImage, touchButtonBlankResource!.RESOURCE);
    
this.add(touchButtonBlankResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonBlankResourceImage, AnimationBehaviorFactory.getInstance()));
    
this.add(touchButtonBlankResource!.HINT, nullAnimationFactory);
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitForImage(touchButtonGenericActionResourceImage, touchButtonGenericActionResource!.RESOURCE);
    
this.add(touchButtonGenericActionResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonGenericActionResourceImage, AnimationBehaviorFactory.getInstance()));
    
this.add(touchButtonGenericActionResource!.HINT, nullAnimationFactory);
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitForImage(touchButtonStartResourceImage, touchButtonStartResource!.RESOURCE);
    
this.add(touchButtonStartResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonStartResourceImage, AnimationBehaviorFactory.getInstance()));
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitForImage(touchButtonUpResourceImage, touchButtonUpResource!.RESOURCE);
    
this.add(touchButtonUpResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonUpResourceImage, AnimationBehaviorFactory.getInstance()));
    
this.add(touchButtonUpResource!.HINT, nullAnimationFactory);
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitForImage(touchButtonDownResourceImage, touchButtonDownResource!.RESOURCE);
    
this.add(touchButtonDownResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonDownResourceImage, AnimationBehaviorFactory.getInstance()));
    
this.add(touchButtonDownResource!.HINT, nullAnimationFactory);
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitForImage(touchButtonTurnLeftResourceImage, touchButtonTurnLeftResource!.RESOURCE);
    
this.add(touchButtonTurnLeftResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonTurnLeftResourceImage, AnimationBehaviorFactory.getInstance()));
    
this.add(touchButtonTurnLeftResource!.HINT, nullAnimationFactory);
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitForImage(touchButtonTurnRightResourceImage, touchButtonTurnRightResource!.RESOURCE);
    
this.add(touchButtonTurnRightResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonTurnRightResourceImage, AnimationBehaviorFactory.getInstance()));
    
this.add(touchButtonTurnRightResource!.HINT, nullAnimationFactory);
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitForImage(touchButtonStrafeLeftResourceImage, touchButtonStrafeLeftResource!.RESOURCE);
    
this.add(touchButtonStrafeLeftResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonStrafeLeftResourceImage, AnimationBehaviorFactory.getInstance()));
    
this.add(touchButtonStrafeLeftResource!.HINT, nullAnimationFactory);
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitForImage(touchButtonStrafeRightResourceImage, touchButtonStrafeRightResource!.RESOURCE);
    
this.add(touchButtonStrafeRightResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonStrafeRightResourceImage, AnimationBehaviorFactory.getInstance()));
    
this.add(touchButtonStrafeRightResource!.HINT, nullAnimationFactory);
    

                        if(OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!.isOverScan())
                        
                                    {
                                    
    var touchButtonStartHintResource: Image = imageCache!.getWithKey(TouchButtonStartResource.getInstance()!.HINT)!;;
    
this.add(touchButtonStartResource!.HINT, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonStartHintResource, AnimationBehaviorFactory.getInstance()));
    

                                    }
                                
                        else {
                            this.add(touchButtonStartResource!.HINT, nullAnimationFactory);
    

                        }
                            
super.init(level);
    
}


    public isLoadingLevel(level: number): boolean{

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;;
    

                        if(level == resourceLoadingLevelFactory!.LOAD_TOUCH.getLevel())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.isLoadingLevel(level);;
    

                        }
                            
}


    public isFeature(): boolean{

                        if(!Features.getInstance()!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}



