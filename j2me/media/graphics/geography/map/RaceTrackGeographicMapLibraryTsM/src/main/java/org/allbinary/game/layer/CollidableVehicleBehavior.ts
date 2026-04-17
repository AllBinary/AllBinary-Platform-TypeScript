
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
        



import { PickedUpLayerInterface } from "../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterface.js";

    
import { ForcedLogUtil } from "../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { CollidableInterfaceCompositeInterface } from "../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js";

    
import { CollisionType } from "../../../../org/allbinary/game/collision/CollisionType.js";

    
import { CollisionTypeFactory } from "../../../../org/allbinary/game/collision/CollisionTypeFactory.js";

    
import { CollidableDestroyableDamageableBehavior } from "../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableBehavior.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CollidableCompositeLayer } from "./CollidableCompositeLayer.js";

import { VehiclePropertiesCompositeInterface } from "./VehiclePropertiesCompositeInterface.js";

export class CollidableVehicleBehavior extends CollidableDestroyableDamageableBehavior {
        

    totalImpactVelocity: number = 0;
        
        
public constructor (ownerLayer: CollidableCompositeLayer, collidable: boolean)                        

                            : super(ownerLayer, collidable){

            super();
                //var ownerLayer = ownerLayer
    //var collidable = collidable


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public collide(collidableInterfaceCompositeInterface: CollidableCompositeLayer){
    //var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface

    var collisionTypeFactory: CollisionTypeFactory = CollisionTypeFactory.getInstance()!;
        
        
;
    

    var collisionType: CollisionType = collidableInterfaceCompositeInterface!.getCollidableInferface()!.getCollisionTypeWith(this.ownerLayer)!;
        
        
;
    

                        if(collisionType == collisionTypeFactory!.PICKUP)
                        
                                    {
                                    
    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = (this.ownerLayer as CollidableDestroyableDamageableLayer);
        
        
;
    
collidableDestroyableDamageableLayer!.getPickupBehavior()!.doPickup(collidableInterfaceCompositeInterface as PickedUpLayerInterface);
    

                                    }
                                
                             else 
                        if(collisionType == collisionTypeFactory!.COLLISION)
                        
                                    {
                                    super.collide(collidableInterfaceCompositeInterface);
    

                                    }
                                
                        else {
                            this.collide(collidableInterfaceCompositeInterface as VehiclePropertiesCompositeInterface);
    

                        }
                            
}


    public collide(collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface){
    //var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface
ForcedLogUtil.log("Don't Use Interface Version It Is Slower", this);
    
}


    private halfImpactVelocityX: number= 0

    private halfImpactVelocityY: number= 0

    collide(vehiclePropertiesCompositeInterface: VehiclePropertiesCompositeInterface){
    //var vehiclePropertiesCompositeInterface = vehiclePropertiesCompositeInterface

    var ownerVehicleLayerInterface: VehiclePropertiesCompositeInterface = (this.ownerLayer as VehiclePropertiesCompositeInterface);
        
        
;
    

    var ownerVehicleProperties: VehicleProperties = ownerVehicleLayerInterface!.getVehicleProperties()!;
        
        
;
    

    var vehicleProperties: VehicleProperties = vehiclePropertiesCompositeInterface!.getVehicleProperties()!;
        
        
;
    

    var impactVelocityX: number = ownerVehicleProperties!.getVelocityProperties()!.getVelocityXBasicDecimalP()!.getUnscaled() -vehicleProperties!.getVelocityProperties()!.getVelocityXBasicDecimalP()!.getUnscaled();
        
        
;
    

    var impactVelocityY: number = ownerVehicleProperties!.getVelocityProperties()!.getVelocityYBasicDecimalP()!.getUnscaled() -vehicleProperties!.getVelocityProperties()!.getVelocityYBasicDecimalP()!.getUnscaled();
        
        
;
    

                        if(impactVelocityX != 0L)
                        
                                    {
                                    halfImpactVelocityX= (impactVelocityX shr 1);
    
ownerVehicleProperties!.getVelocityProperties()!.getVelocityXBasicDecimalP()!.add(halfImpactVelocityX);
    
vehicleProperties!.getVelocityProperties()!.getVelocityXBasicDecimalP()!.add(halfImpactVelocityX);
    

                                    }
                                
                        else {
                            
                        }
                            

                        if(impactVelocityY != 0L)
                        
                                    {
                                    halfImpactVelocityY= (impactVelocityY shr 1);
    
ownerVehicleProperties!.getVelocityProperties()!.getVelocityYBasicDecimalP()!.add(halfImpactVelocityY);
    
vehicleProperties!.getVelocityProperties()!.getVelocityXBasicDecimalP()!.add(halfImpactVelocityY);
    

                                    }
                                
                        else {
                            
                        }
                            
this.collideFriction(ownerVehicleLayerInterface);
    
this.collideFriction(vehiclePropertiesCompositeInterface);
    
totalImpactVelocity= impactVelocityX +impactVelocityY;
    
}


    collideFriction(vehiclePropertiesCompositeInterface: VehiclePropertiesCompositeInterface){
    //var vehiclePropertiesCompositeInterface = vehiclePropertiesCompositeInterface

    var vehicleFrictionProperties: VehicleFrictionProperties = vehiclePropertiesCompositeInterface!.getVehicleProperties()!.getVehicleFrictionProperties()!;
        
        
;
    
vehiclePropertiesCompositeInterface!.getVehicleProperties()!.getVehicleFrictionProperties()!.friction(vehiclePropertiesCompositeInterface!.getVehicleProperties()!.getVelocityProperties(), vehicleFrictionProperties!.getCrashFrictionNominator());
    
}


}
                
            

