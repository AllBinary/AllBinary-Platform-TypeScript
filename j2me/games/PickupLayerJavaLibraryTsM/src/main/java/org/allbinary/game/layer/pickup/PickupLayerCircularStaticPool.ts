
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
        



import { AllBinaryLayerCircularPool } from "../../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PickedUpLayerInterface } from "./PickedUpLayerInterface.js";

import { PickedUpLayerInterfaceFactoryInterface } from "./PickedUpLayerInterfaceFactoryInterface.js";

export class PickupLayerCircularStaticPool extends AllBinaryLayerCircularPool {
        

    private SINGLETON: PickupLayerCircularStaticPool = new PickupLayerCircularStaticPool();
        
        

    public static getInstance(): PickupLayerCircularStaticPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}

private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getInstance(pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface, x: number, y: number, z: number): PickedUpLayerInterface{
var pickedUpLayerInterfaceFactoryInterface = pickedUpLayerInterfaceFactoryInterface
var x = x
var y = y
var z = z

    var pickupLayer: PickupLayer = this.getNextInstance();

                         as PickupLayer;
        
        
;
    
pickupLayer!.init(x, y, z);
    
pickupLayer!.init(pickedUpLayerInterfaceFactoryInterface, pickedUpLayerInterfaceFactoryInterface!.getAnimationInterface());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pickupLayer;
    
}


}
                
            

