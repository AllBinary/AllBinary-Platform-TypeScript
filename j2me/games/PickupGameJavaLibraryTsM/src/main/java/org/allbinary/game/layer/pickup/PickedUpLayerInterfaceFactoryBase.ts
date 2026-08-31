
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        
            import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PickedUpLayerInterfaceFactoryInterface } from './PickedUpLayerInterfaceFactoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface;

                import { PickedUpLayerType } from './PickedUpLayerType.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerType;

                
export class PickedUpLayerInterfaceFactoryBase
            extends Object
         implements PickedUpLayerInterfaceFactoryInterface {
        

    public static readonly NULL_PICKED_UP_LAYER_FACTORY_BASE: PickedUpLayerInterfaceFactoryBase = new PickedUpLayerInterfaceFactoryBase();

    public getIconLayer(): AllBinaryLayer{



                            throw new RuntimeException();
                    
}


    public getAnimationInterface(): Animation{



                            throw new RuntimeException();
                    
}


    public getPickedUpLayerType(): PickedUpLayerType{



                            throw new RuntimeException();
                    
}


}



