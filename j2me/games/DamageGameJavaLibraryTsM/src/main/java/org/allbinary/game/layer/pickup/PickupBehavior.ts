
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
        



import { HealthInterfaceCompositeInterface } from "../../../../../org/allbinary/game/health/HealthInterfaceCompositeInterface.js";

    
import { CollidableCompositeLayer } from "../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { CountedLayerInterfaceFactoryPart } from "../../../../../org/allbinary/game/part/CountedLayerInterfaceFactoryPart.js";

    
import { PartInterface } from "../../../../../org/allbinary/game/part/PartInterface.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

import { PickedUpLayerTypeFactory } from "./PickedUpLayerTypeFactory.js";

export class PickupBehavior
            extends Object
        
                , PickupBehaviorInterface {
        

    public static readonly NULL_PICKUP_BEHAVIOR: PickupBehavior = new PickupBehavior(CollidableCompositeLayer.NULL_COLLIDABLE_COMPOSITE_LAYER, 0);
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly countedIndex: number

    private readonly ownerLayerInterface: CollidableCompositeLayer
public constructor (ownerLayerInterface: CollidableCompositeLayer, countedIndex: number){

            super();
                //var ownerLayerInterface = ownerLayerInterface
    //var countedIndex = countedIndex
this.ownerLayerInterface= ownerLayerInterface;
    
this.countedIndex= countedIndex;
    
}


    public doPickup(pickupProcessorInterface: PickupProcessorInterface){
    //var pickupProcessorInterface = pickupProcessorInterface

        try {
            
    var healthInterfaceCompositeInterface: HealthInterfaceCompositeInterface = this.ownerLayerInterface as HealthInterfaceCompositeInterface;
        
        
;
    

                        if(healthInterfaceCompositeInterface!.getHealthInterface()!.isAlive())
                        
                                    {
                                    pickupProcessorInterface!.process(ownerLayerInterface);
    

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "doPickup", e);
    
}

}


    public doPickup(pickupLayerInterface: PickedUpLayerInterface){
var pickupLayerInterface = pickupLayerInterface

        try {
            
    var pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface = pickupLayerInterface!.getPickedUpLayerInterfaceFactoryInterface()!;
        
        
;
    

    var pickedUpLayerType: PickedUpLayerType = pickedUpLayerInterfaceFactoryInterface!.getPickedUpLayerType()!;
        
        
;
    

    var pickedUpLayerTypeFactory: PickedUpLayerTypeFactory = PickedUpLayerTypeFactory.getInstance()!;
        
        
;
    

                        if(pickedUpLayerType == pickedUpLayerTypeFactory!.BEAM || pickedUpLayerType == pickedUpLayerTypeFactory!.MINE || pickedUpLayerType == pickedUpLayerTypeFactory!.PROJECTILE || pickedUpLayerType == pickedUpLayerTypeFactory!.ENHANCEMENT)
                        
                                    {
                                    this.add(pickedUpLayerInterfaceFactoryInterface as CountedPickedUpLayerInterfaceFactoryInterface);
    

                                    }
                                
                             else 
                        if(pickedUpLayerInterfaceFactoryInterface!.getPickedUpLayerType() == pickedUpLayerTypeFactory!.PART)
                        
                                    {
                                    
    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = this.ownerLayerInterface as CollidableDestroyableDamageableLayer;
        
        
;
    
collidableDestroyableDamageableLayer!.addPart(pickedUpLayerInterfaceFactoryInterface);
    

                                    }
                                
                             else 
                        if(pickedUpLayerType == pickedUpLayerTypeFactory!.NONE)
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.doPickup(pickedUpLayerInterfaceFactoryInterface as PickupProcessorInterface);
    

                        }
                            
pickupLayerInterface!.setPickedUp();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "doPickup", e);
    
}

}


    add(countedPickedUpLayerInterfaceFactoryInterface: CountedPickedUpLayerInterfaceFactoryInterface){
var countedPickedUpLayerInterfaceFactoryInterface = countedPickedUpLayerInterfaceFactoryInterface

    var partIndex: number = countedPickedUpLayerInterfaceFactoryInterface!.getId() +this.countedIndex;
        
        
;
    
this.add(countedPickedUpLayerInterfaceFactoryInterface, partIndex);
    
}


    add(countedPickedUpLayerInterfaceFactoryInterface: CountedPickedUpLayerInterfaceFactoryInterface, partIndex: number){
    //var countedPickedUpLayerInterfaceFactoryInterface = countedPickedUpLayerInterfaceFactoryInterface
    //var partIndex = partIndex

    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = this.ownerLayerInterface as CollidableDestroyableDamageableLayer;
        
        
;
    

    var countedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart = collidableDestroyableDamageableLayer!.getPartInterfaceArray()[partIndex]! as CountedLayerInterfaceFactoryPart;
        
        
;
    
countedLayerInterfaceFactory!.setTotal(countedLayerInterfaceFactory!.getTotal() +countedPickedUpLayerInterfaceFactoryInterface!.getTotal());
    
}


    public getFirstAvailableCountedLayerInterfaceFactory(pickedUpLayerTypeArray: PickedUpLayerType[]): CountedLayerInterfaceFactoryPart{
var pickedUpLayerTypeArray = pickedUpLayerTypeArray

    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = this.ownerLayerInterface as CollidableDestroyableDamageableLayer;
        
        
;
    

    var partInterfaceArray: PartInterface[] = collidableDestroyableDamageableLayer!.getPartInterfaceArray()!;
        
        
;
    

    var size: number = partInterfaceArray!.length
                ;
        
        
;
    

    var nextCountedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart
;
    

    var countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory
;
    




                        for (
    var index: number = this.countedIndex;
        
        
index < size; index++)
        {
nextCountedLayerInterfaceFactory= collidableDestroyableDamageableLayer!.getPartInterfaceArray()[index]! as CountedLayerInterfaceFactoryPart;
    
countedPickedUpLayerInterfaceFactory= nextCountedLayerInterfaceFactory!.getCountedPickedUpLayerInterfaceFactory();
    




                        for (
    var index2: number = pickedUpLayerTypeArray!.length
                ;
        
        
--index2 >= 0; )
        {

                        if(countedPickedUpLayerInterfaceFactory!.getPickedUpLayerType() == pickedUpLayerTypeArray[index2])
                        
                                    {
                                    
                        if(nextCountedLayerInterfaceFactory!.getTotal() > 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nextCountedLayerInterfaceFactory;
    

                                    }
                                

                                    }
                                
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CountedLayerInterfaceFactoryPart.NULL_COUNTED_LAYER_INTERFACE_FACTORY;
    
}


                //@Throws(Error::class)
            
    public getCountedLayerInterfaceFactoryForSlot(slotIndex: number): CountedLayerInterfaceFactoryPart{
var slotIndex = slotIndex

    var currentSlot: number = 0;
        
        
;
    

    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = this.ownerLayerInterface as CollidableDestroyableDamageableLayer;
        
        
;
    

    var partInterfaceArray: PartInterface[] = collidableDestroyableDamageableLayer!.getPartInterfaceArray()!;
        
        
;
    

    var size: number = partInterfaceArray!.length
                ;
        
        
;
    

    var nextCountedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart
;
    




                        for (
    var index: number = this.countedIndex;
        
        
index < size; index++)
        {
nextCountedLayerInterfaceFactory= collidableDestroyableDamageableLayer!.getPartInterfaceArray()[index]! as CountedLayerInterfaceFactoryPart;
    

                        if(nextCountedLayerInterfaceFactory!.getTotal() > 0)
                        
                                    {
                                    
                        if(currentSlot == slotIndex)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nextCountedLayerInterfaceFactory;
    

                                    }
                                
                        else {
                            currentSlot++;
    

                        }
                            

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CountedLayerInterfaceFactoryPart.NULL_COUNTED_LAYER_INTERFACE_FACTORY;
    
}


    public getCountedIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return countedIndex;
    
}


}
                
            

