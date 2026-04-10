
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
        



import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    

export class PickedUpLayerInterfaceFactory extends PickedUpLayerInterfaceFactoryBase {
        

    private readonly pickedUpLayerType: PickedUpLayerType

    private readonly iconLayer: IconLayer

    private readonly animationInterface: Animation
protected constructor (pickeUpLayerType: PickedUpLayerType, iconLayer: IconLayer, animationInterface: Animation){

            super();
            var pickeUpLayerType = pickeUpLayerType
var iconLayer = iconLayer
var animationInterface = animationInterface
this.pickedUpLayerType= pickeUpLayerType
this.animationInterface= animationInterface
this.iconLayer= iconLayer
}


    public getIconLayer(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return iconLayer;
    
}


    public getAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationInterface;
    
}


    public getPickedUpLayerType(): PickedUpLayerType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pickedUpLayerType;
    
}


}
                
            

