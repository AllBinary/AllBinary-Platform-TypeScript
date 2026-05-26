
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Hashtable } from '../../../../../java/util/Hashtable.js';
      
import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      
import { AnimationBehaviorFactory } from '../../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
      
import { OneRowSpriteIndexedAnimationFactory } from '../../../../../org/allbinary/animation/image/sprite/OneRowSpriteIndexedAnimationFactory.js';
      
import { BaseResourceAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/resource/BaseResourceAnimationInterfaceFactoryInterfaceFactory.js';
      
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
      
import { ResourceLoadingLevelFactory } from '../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
      
import { ProgressCanvas } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
      
import { ProgressCanvasFactory } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
      
import { ImageCache } from '../../../../../org/allbinary/image/ImageCache.js';
      
import { ImageCacheFactory } from '../../../../../org/allbinary/image/ImageCacheFactory.js';
      
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      
import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
      
import { ImageCompleteUtil } from '../../../../../org/allbinary/media/image/ImageCompleteUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchButtonBlankResource } from './TouchButtonBlankResource.js';
import { TouchButtonResource } from './TouchButtonResource.js';
import { TouchButtonGenericActionResource } from './TouchButtonGenericActionResource.js';
import { TouchButtonStartResource } from './TouchButtonStartResource.js';
import { TouchButtonUpResource } from './TouchButtonUpResource.js';
import { TouchButtonDownResource } from './TouchButtonDownResource.js';
import { TouchButtonTurnLeftResource } from './TouchButtonTurnLeftResource.js';
import { TouchButtonTurnRightResource } from './TouchButtonTurnRightResource.js';
import { TouchButtonStrafeLeftResource } from './TouchButtonStrafeLeftResource.js';
import { TouchButtonStrafeRightResource } from './TouchButtonStrafeRightResource.js';

export class TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory extends BaseResourceAnimationInterfaceFactoryInterfaceFactory {
        

    public static createFactory(): TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory("TouchButton Animations");
    
}


public constructor (name: string){
            super(name, new Hashtable<any, any>(), new Hashtable<any, any>(), new Hashtable<any, any>());
                    

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
                
            

