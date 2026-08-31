
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
        
import { AllBinaryLayerCircularPool } from '../../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js';
      //not GWT import const AllBinaryLayerCircularPool = globalThis.org.allbinary.layer.AllBinaryLayerCircularPool;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PickupLayer } from './PickupLayer.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.pickup.PickupLayer;

                import { PickedUpLayerInterface } from './PickedUpLayerInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterface;

                import { PickedUpLayerInterfaceFactoryInterface } from './PickedUpLayerInterfaceFactoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface;

                
export class PickupLayerCircularStaticPool extends AllBinaryLayerCircularPool {
        

    private static SINGLETON: PickupLayerCircularStaticPool = new PickupLayerCircularStaticPool();

    public static getInstance(): PickupLayerCircularStaticPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PickupLayerCircularStaticPool.SINGLETON;
    
}


private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstanceXYZ(pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface, x: number, y: number, z: number): PickedUpLayerInterface{

    var pickupLayer: PickupLayer = this.getNextInstance() as PickupLayer;;
    
pickupLayer!.initXYZ(x, y, z);
    
pickupLayer!.init(pickedUpLayerInterfaceFactoryInterface, pickedUpLayerInterfaceFactoryInterface!.getAnimationInterface());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pickupLayer;
    
}


}



