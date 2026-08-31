
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
      //not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;

      
import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      //not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
      //not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
//not plain js import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
      //not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CompoundAnimationInterfaceFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    readonly basicAnimationInterfaceFactoryInterfaceArrayP: AnimationInterfaceFactoryInterface[];

    readonly animationBehaviorFactory: AnimationBehaviorFactory;

public constructor (basicAnimationInterfaceFactoryInterfaceArray: AnimationInterfaceFactoryInterface[], animationBehaviorFactory: AnimationBehaviorFactory){

            super();
        this.basicAnimationInterfaceFactoryInterfaceArrayP= basicAnimationInterfaceFactoryInterfaceArray;
    
this.animationBehaviorFactory= animationBehaviorFactory;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

    var size: number = this.basicAnimationInterfaceFactoryInterfaceArrayP!.length
                ;;
    

    var animationInterfaceArray: Animation[] = this.createArray(size)!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
animationInterfaceArray[index]= this.basicAnimationInterfaceFactoryInterfaceArrayP[index]!.getInstance(instanceId);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createAnimation(animationInterfaceArray);;
    
}


    createArray(size: number): Animation[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullAnimationFactory.getFactoryInstance()!.EMPTY_ARRAY;
    
}


    createAnimation(animationInterfaceArray: Animation[]): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullAnimationFactory.getFactoryInstance()!.getInstance(0);;
    
}


    public getBasicAnimationInterfaceFactoryInterfaceArray(): AnimationInterfaceFactoryInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicAnimationInterfaceFactoryInterfaceArrayP;
    
}


    public setInitialScale(scaleProperties: ScaleProperties){

    var size: number = this.basicAnimationInterfaceFactoryInterfaceArrayP!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.basicAnimationInterfaceFactoryInterfaceArrayP[index]!.setInitialScale(scaleProperties);
    
}

}


}



