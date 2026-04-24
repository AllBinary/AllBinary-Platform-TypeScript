
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
        



import { Image } from "../../../../../javax/microedition/lcdui/Image.js";

    
import { NullAnimationFactory } from "../../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { OneRowSpriteIndexedAnimationFactory } from "../../../../../org/allbinary/animation/image/sprite/OneRowSpriteIndexedAnimationFactory.js";

    
import { BaseResourceAnimationInterfaceFactoryInterfaceFactory } from "../../../../../org/allbinary/animation/resource/BaseResourceAnimationInterfaceFactoryInterfaceFactory.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { ResourceLoadingLevelFactory } from "../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js";

    
import { ProgressCanvas } from "../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js";

    
import { ProgressCanvasFactory } from "../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { OpenGLFeatureFactory } from "../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js";

    
import { ImageCache } from "../../../../../org/allbinary/image/ImageCache.js";

    
import { ImageCacheFactory } from "../../../../../org/allbinary/image/ImageCacheFactory.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { OperatingSystemFactory } from "../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js";

    
import { ImageCompleteUtil } from "../../../../../org/allbinary/media/image/ImageCompleteUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TouchButtonBlankResource } from "./TouchButtonBlankResource.js";

import { TouchButtonGenericActionResource } from "./TouchButtonGenericActionResource.js";

import { TouchButtonStartResource } from "./TouchButtonStartResource.js";

import { TouchButtonUpResource } from "./TouchButtonUpResource.js";

import { TouchButtonDownResource } from "./TouchButtonDownResource.js";

import { TouchButtonTurnLeftResource } from "./TouchButtonTurnLeftResource.js";

import { TouchButtonTurnRightResource } from "./TouchButtonTurnRightResource.js";

import { TouchButtonStrafeLeftResource } from "./TouchButtonStrafeLeftResource.js";

import { TouchButtonStrafeRightResource } from "./TouchButtonStrafeRightResource.js";

export class TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory extends BaseResourceAnimationInterfaceFactoryInterfaceFactory {
        
public constructor (){
            super("TouchButton Animations");
                    

                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (name: string){
            super(name);
                        //var name = name


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public init(level: number){
    //var level = level
this.init(ImageCacheFactory.getInstance(), level);
    
}


                //@Throws(Error::class)
            
    init(imageCache: ImageCache, level: number){
    //var imageCache = imageCache
    //var level = level

                        if(this.isInitialized())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var portion: number = 140;
        
        
;
    

    var loadingString: string = new StringMaker().
                            append(this.toString())!.append(" Loading: ")!.toString()!;
        
        
;
    

    var index: number = 0;
        
        
;
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    
progressCanvas!.addPortion(portion, loadingString, index++);
    

    var touchButtonBlankResource: TouchButtonResource = TouchButtonBlankResource.getInstance()!;
        
        
;
    

    var touchButtonGenericActionResource: TouchButtonResource = TouchButtonGenericActionResource.getInstance()!;
        
        
;
    

    var touchButtonStartResource: TouchButtonResource = TouchButtonStartResource.getInstance()!;
        
        
;
    

    var touchButtonUpResource: TouchButtonResource = TouchButtonUpResource.getInstance()!;
        
        
;
    

    var touchButtonDownResource: TouchButtonResource = TouchButtonDownResource.getInstance()!;
        
        
;
    

    var touchButtonTurnLeftResource: TouchButtonResource = TouchButtonTurnLeftResource.getInstance()!;
        
        
;
    

    var touchButtonTurnRightResource: TouchButtonResource = TouchButtonTurnRightResource.getInstance()!;
        
        
;
    

    var touchButtonStrafeLeftResource: TouchButtonResource = TouchButtonStrafeLeftResource.getInstance()!;
        
        
;
    

    var touchButtonStrafeRightResource: TouchButtonResource = TouchButtonStrafeRightResource.getInstance()!;
        
        
;
    

    var touchButtonBlankResourceImage: Image = imageCache!.get(touchButtonBlankResource!.RESOURCE)!;
        
        
;
    

    var touchButtonGenericActionResourceImage: Image = imageCache!.get(touchButtonGenericActionResource!.RESOURCE)!;
        
        
;
    

    var touchButtonStartResourceImage: Image = imageCache!.get(touchButtonStartResource!.RESOURCE)!;
        
        
;
    

    var touchButtonUpResourceImage: Image = imageCache!.get(touchButtonUpResource!.RESOURCE)!;
        
        
;
    

    var touchButtonDownResourceImage: Image = imageCache!.get(touchButtonDownResource!.RESOURCE)!;
        
        
;
    

    var touchButtonTurnLeftResourceImage: Image = imageCache!.get(touchButtonTurnLeftResource!.RESOURCE)!;
        
        
;
    

    var touchButtonTurnRightResourceImage: Image = imageCache!.get(touchButtonTurnRightResource!.RESOURCE)!;
        
        
;
    

    var touchButtonStrafeLeftResourceImage: Image = imageCache!.get(touchButtonStrafeLeftResource!.RESOURCE)!;
        
        
;
    

    var touchButtonStrafeRightResourceImage: Image = imageCache!.get(touchButtonStrafeRightResource!.RESOURCE)!;
        
        
;
    

    var nullAnimationFactory: NullAnimationFactory = NullAnimationFactory.getFactoryInstance()!;
        
        
;
    

                        if(OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!.isOverScan())
                        
                                    {
                                    imageCache!.get(TouchButtonStartResource.getInstance()!.HINT);
    

                                    }
                                
progressCanvas!.addPortion(portion, loadingString, index++);
    

    var imageCompleteUtil: ImageCompleteUtil = ImageCompleteUtil.getInstance()!;
        
        
;
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitFor(touchButtonBlankResourceImage, touchButtonBlankResource!.RESOURCE);
    
this.add(touchButtonBlankResource!.RESOURCE, new OneRowSpriteIndexedAnimationFactory(touchButtonBlankResourceImage));
    
this.add(touchButtonBlankResource!.HINT, nullAnimationFactory);
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitFor(touchButtonGenericActionResourceImage, touchButtonGenericActionResource!.RESOURCE);
    
this.add(touchButtonGenericActionResource!.RESOURCE, new OneRowSpriteIndexedAnimationFactory(touchButtonGenericActionResourceImage));
    
this.add(touchButtonGenericActionResource!.HINT, nullAnimationFactory);
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitFor(touchButtonStartResourceImage, touchButtonStartResource!.RESOURCE);
    
this.add(touchButtonStartResource!.RESOURCE, new OneRowSpriteIndexedAnimationFactory(touchButtonStartResourceImage));
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitFor(touchButtonUpResourceImage, touchButtonUpResource!.RESOURCE);
    
this.add(touchButtonUpResource!.RESOURCE, new OneRowSpriteIndexedAnimationFactory(touchButtonUpResourceImage));
    
this.add(touchButtonUpResource!.HINT, nullAnimationFactory);
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitFor(touchButtonDownResourceImage, touchButtonDownResource!.RESOURCE);
    
this.add(touchButtonDownResource!.RESOURCE, new OneRowSpriteIndexedAnimationFactory(touchButtonDownResourceImage));
    
this.add(touchButtonDownResource!.HINT, nullAnimationFactory);
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitFor(touchButtonTurnLeftResourceImage, touchButtonTurnLeftResource!.RESOURCE);
    
this.add(touchButtonTurnLeftResource!.RESOURCE, new OneRowSpriteIndexedAnimationFactory(touchButtonTurnLeftResourceImage));
    
this.add(touchButtonTurnLeftResource!.HINT, nullAnimationFactory);
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitFor(touchButtonTurnRightResourceImage, touchButtonTurnRightResource!.RESOURCE);
    
this.add(touchButtonTurnRightResource!.RESOURCE, new OneRowSpriteIndexedAnimationFactory(touchButtonTurnRightResourceImage));
    
this.add(touchButtonTurnRightResource!.HINT, nullAnimationFactory);
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitFor(touchButtonStrafeLeftResourceImage, touchButtonStrafeLeftResource!.RESOURCE);
    
this.add(touchButtonStrafeLeftResource!.RESOURCE, new OneRowSpriteIndexedAnimationFactory(touchButtonStrafeLeftResourceImage));
    
this.add(touchButtonStrafeLeftResource!.HINT, nullAnimationFactory);
    
progressCanvas!.addPortion(portion, loadingString, index++);
    
imageCompleteUtil!.waitFor(touchButtonStrafeRightResourceImage, touchButtonStrafeRightResource!.RESOURCE);
    
this.add(touchButtonStrafeRightResource!.RESOURCE, new OneRowSpriteIndexedAnimationFactory(touchButtonStrafeRightResourceImage));
    
this.add(touchButtonStrafeRightResource!.HINT, nullAnimationFactory);
    

                        if(OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!.isOverScan())
                        
                                    {
                                    
    var touchButtonStartHintResource: Image = imageCache!.get(TouchButtonStartResource.getInstance()!.HINT)!;
        
        
;
    
this.add(touchButtonStartResource!.HINT, new OneRowSpriteIndexedAnimationFactory(touchButtonStartHintResource));
    

                                    }
                                
                        else {
                            this.add(touchButtonStartResource!.HINT, nullAnimationFactory);
    

                        }
                            
super.init(level);
    
}


    public isLoadingLevel(level: number): boolean{
    //var level = level

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;
        
        
;
    

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

                        if(!Features.getInstance()!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL);)
                        
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
                
            

