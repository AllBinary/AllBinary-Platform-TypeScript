
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
        
import { PickedUpLayerInterface } from '../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterface.js';

    
import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';

    
import { CollidableInterfaceCompositeInterface } from '../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js';

    
import { CollisionType } from '../../../../org/allbinary/game/collision/CollisionType.js';

    
import { CollisionTypeFactory } from '../../../../org/allbinary/game/collision/CollisionTypeFactory.js';

    
import { CollidableDestroyableDamageableBehavior } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableBehavior.js';

    
import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VehiclePropertiesCompositeInterface } from './VehiclePropertiesCompositeInterface.js';
import { CollidableCompositeLayer } from './CollidableCompositeLayer.js';
import { VehicleProperties } from './VehicleProperties.js';
import { VehicleFrictionProperties } from './VehicleFrictionProperties.js';

export class CollidableVehicleBehavior extends CollidableDestroyableDamageableBehavior {
        

    totalImpactVelocity: number = 0;
public constructor (collidable: boolean){
            super(collidable);
                        //var collidable = collidable


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public collide(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer){
    //var ownerLayer = ownerLayer
    //var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface

    var collisionTypeFactory: CollisionTypeFactory = CollisionTypeFactory.getInstance()!;
;
    

    var collisionType: CollisionType = collidableInterfaceCompositeInterface!.getCollidableInferface()!.getCollisionTypeWith(ownerLayer)!;
;
    

                        if(collisionType == collisionTypeFactory!.PICKUP)
                        
                                    {
                                    
    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = (ownerLayer as CollidableDestroyableDamageableLayer);
;
    
collidableDestroyableDamageableLayer!.getPickupBehavior()!.doPickupLayer(collidableInterfaceCompositeInterface as PickedUpLayerInterface);
    

                                    }
                                
                             else 
                        if(collisionType == collisionTypeFactory!.COLLISION)
                        
                                    {
                                    super.collide(ownerLayer, collidableInterfaceCompositeInterface);
    

                                    }
                                
                        else {
                            this.collideVehicle(ownerLayer, collidableInterfaceCompositeInterface as VehiclePropertiesCompositeInterface);
    

                        }
                            
}


    public collideInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface){
    //var ownerLayer = ownerLayer
    //var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface
ForcedLogUtil.log("Don't Use Interface Version It Is Slower", this);
    
}


    private halfImpactVelocityX: number= 0

    private halfImpactVelocityY: number= 0

    collideVehicle(ownerLayer: CollidableCompositeLayer, vehiclePropertiesCompositeInterface: VehiclePropertiesCompositeInterface){
    //var ownerLayer = ownerLayer
    //var vehiclePropertiesCompositeInterface = vehiclePropertiesCompositeInterface

    var ownerVehicleLayerInterface: VehiclePropertiesCompositeInterface = (ownerLayer as VehiclePropertiesCompositeInterface);
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
                                    this.halfImpactVelocityX= (impactVelocityX>>1);
    
ownerVehicleProperties!.getVelocityProperties()!.getVelocityXBasicDecimalP()!.addlong(this.halfImpactVelocityX);
    
vehicleProperties!.getVelocityProperties()!.getVelocityXBasicDecimalP()!.addlong(this.halfImpactVelocityX);
    

                                    }
                                
                        else {
                            
                        }
                            

                        if(impactVelocityY != 0L)
                        
                                    {
                                    this.halfImpactVelocityY= (impactVelocityY>>1);
    
ownerVehicleProperties!.getVelocityProperties()!.getVelocityYBasicDecimalP()!.addlong(this.halfImpactVelocityY);
    
vehicleProperties!.getVelocityProperties()!.getVelocityXBasicDecimalP()!.addlong(this.halfImpactVelocityY);
    

                                    }
                                
                        else {
                            
                        }
                            
this.collideFriction(ownerVehicleLayerInterface);
    
this.collideFriction(vehiclePropertiesCompositeInterface);
    
this.totalImpactVelocity= impactVelocityX +impactVelocityY;
    
}


    collideFriction(vehiclePropertiesCompositeInterface: VehiclePropertiesCompositeInterface){
    //var vehiclePropertiesCompositeInterface = vehiclePropertiesCompositeInterface

    var vehicleFrictionProperties: VehicleFrictionProperties = vehiclePropertiesCompositeInterface!.getVehicleProperties()!.getVehicleFrictionProperties()!;
;
    
vehiclePropertiesCompositeInterface!.getVehicleProperties()!.getVehicleFrictionProperties()!.friction(vehiclePropertiesCompositeInterface!.getVehicleProperties()!.getVelocityProperties(), vehicleFrictionProperties!.getCrashFrictionNominator());
    
}


}
                
            

