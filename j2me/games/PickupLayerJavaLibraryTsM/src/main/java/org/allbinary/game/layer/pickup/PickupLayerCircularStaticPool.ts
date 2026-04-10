
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

    

export class PickupLayerCircularStaticPool extends AllBinaryLayerCircularPool {
        

    private SINGLETON: PickupLayerCircularStaticPool = new PickupLayerCircularStaticPool();
        
        

    public static getInstance(): PickupLayerCircularStaticPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}

private constructor (){

            super();
            }


                @Throws(Exception::class)
            
    public getInstance(pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface, x: number, y: number, z: number): PickedUpLayerInterface{
var pickedUpLayerInterfaceFactoryInterface = pickedUpLayerInterfaceFactoryInterface
var x = x
var y = y
var z = z

    var pickupLayer: PickupLayer = this.getNextInstance() as PickupLayer;
        
        

init(x, y, z)
init(pickedUpLayerInterfaceFactoryInterface, pickedUpLayerInterfaceFactoryInterface!.getAnimationInterface())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pickupLayer;
    
}


}
                
            

