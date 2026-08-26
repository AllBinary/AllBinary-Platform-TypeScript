
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
//not game specific package import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
//not game specific package import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
      const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
//not game specific package import { AnimationFactoryImageScaleUtil } from '../../../../org/allbinary/image/AnimationFactoryImageScaleUtil.js';
      const AnimationFactoryImageScaleUtil = globalThis.org.allbinary.image.AnimationFactoryImageScaleUtil;

      
//not game specific package import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
      const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;

      
//not game specific package import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnimationFactoryInitializationVisitor } from './AnimationFactoryInitializationVisitor.js';

export class BaseImageAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    public static createFactoryBase(image: Image, sequenceArray: number[], width: number, height: number, animationBehaviorFactory: AnimationBehaviorFactory): BaseImageAnimationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BaseImageAnimationFactory(image, sequenceArray, width, height, 0, 0, animationBehaviorFactory);
    
}


    readonly animationFactoryImageScaleUtil: AnimationFactoryImageScaleUtil = AnimationFactoryImageScaleUtil.getInstance()!;

    private readonly image: Image;

    public readonly animationBehaviorFactory: AnimationBehaviorFactory;

    private readonly sequenceArray: number[];

    readonly animationFactoryInitializationVisitor: AnimationFactoryInitializationVisitor;

    scaleProperties: ScaleProperties = ScaleProperties.instance;

public constructor (image: Image, sequenceArray: number[], width: number, height: number, dx: number, dy: number, animationBehaviorFactory: AnimationBehaviorFactory){

            super();
        this.animationFactoryInitializationVisitor= new AnimationFactoryInitializationVisitor();
    
this.image= image;
    
this.animationFactoryInitializationVisitor!.width= width;
    
this.animationFactoryInitializationVisitor!.height= height;
    
this.animationBehaviorFactory= animationBehaviorFactory;
    
this.sequenceArray= sequenceArray;
    
this.animationFactoryInitializationVisitor!.dx= dx;
    
this.animationFactoryInitializationVisitor!.dy= dy;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullAnimationFactory.getFactoryInstance()!.getInstance(instanceId);;
    
}


    public getImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.image;
    
}


    public getSequenceArray(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sequenceArray;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){
this.scaleProperties= scaleProperties;
    

                        if(this.scaleProperties!.shouldScale)
                        
                                    {
                                    this.scaleProperties!.scaleWidth= Math.round((this.animationFactoryInitializationVisitor!.width *this.scaleProperties!.scaleX));
    
this.scaleProperties!.scaleHeight= Math.round((this.animationFactoryInitializationVisitor!.height *this.scaleProperties!.scaleY));
    

                                    }
                                
                        else {
                            
                        }
                            
}


    public getAnimationFactoryInitializationVisitorP(): AnimationFactoryInitializationVisitor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationFactoryInitializationVisitor;
    
}


    public getScalePropertiesP(): ScaleProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scaleProperties;
    
}


    public toString(): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(super.toString());
    
stringBuffer!.append(commonLabels!.HEIGHT_LABEL);
    
stringBuffer!.appendint(this.image.getHeight());
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(this.animationFactoryInitializationVisitor!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

