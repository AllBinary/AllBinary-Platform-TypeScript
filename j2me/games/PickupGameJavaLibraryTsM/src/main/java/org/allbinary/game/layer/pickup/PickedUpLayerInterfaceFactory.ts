
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
        



//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PickedUpLayerInterfaceFactoryBase } from './PickedUpLayerInterfaceFactoryBase.js';
import { PickedUpLayerType } from './PickedUpLayerType.js';
import { IconLayer } from './IconLayer.js';

export class PickedUpLayerInterfaceFactory extends PickedUpLayerInterfaceFactoryBase {
        

    private readonly pickedUpLayerType: PickedUpLayerType;

    private readonly iconLayer: IconLayer;

    private readonly animationInterface: Animation;

protected constructor (pickeUpLayerType: PickedUpLayerType, iconLayer: IconLayer, animationInterface: Animation){

            super();
        this.pickedUpLayerType= pickeUpLayerType;
    
this.animationInterface= animationInterface;
    
this.iconLayer= iconLayer;
    
}


    public getIconLayer(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.iconLayer;
    
}


    public getAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterface;
    
}


    public getPickedUpLayerType(): PickedUpLayerType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pickedUpLayerType;
    
}


}



