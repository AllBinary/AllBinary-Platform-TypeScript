
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { HealthInterfaceCompositeInterface } from '../../../../../org/allbinary/game/health/HealthInterfaceCompositeInterface.js';
//not GWT import const HealthInterfaceCompositeInterface = globalThis.org.allbinary.game.health.HealthInterfaceCompositeInterface;

      
import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
//not GWT import const CollidableCompositeLayer = globalThis.org.allbinary.game.layer.CollidableCompositeLayer;

      
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
import { CountedLayerInterfaceFactoryPart } from '../../../../../org/allbinary/game/part/CountedLayerInterfaceFactoryPart.js';
//not GWT import const CountedLayerInterfaceFactoryPart = globalThis.org.allbinary.game.part.CountedLayerInterfaceFactoryPart;

      
import { PartInterface } from '../../../../../org/allbinary/game/part/PartInterface.js';
//not GWT import const PartInterface = globalThis.org?.allbinary?.game?.part?.PartInterface;

      
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PickupBehaviorInterface } from './PickupBehaviorInterface.js';
//not GWT import - same folder const PickupBehaviorInterface = globalThis.org.allbinary.game.layer.pickup.PickupBehaviorInterface;

                import { PickupProcessorInterface } from './PickupProcessorInterface.js';
//not GWT import - same folder const PickupProcessorInterface = globalThis.org.allbinary.game.layer.pickup.PickupProcessorInterface;

                import { PickedUpLayerInterfaceFactoryInterface } from './PickedUpLayerInterfaceFactoryInterface.js';
//not GWT import - same folder const PickedUpLayerInterfaceFactoryInterface = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface;

                import { PickedUpLayerType } from './PickedUpLayerType.js';
//not GWT import - same folder const PickedUpLayerType = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerType;

                import { PickedUpLayerTypeFactory } from './PickedUpLayerTypeFactory.js';
//not GWT import - same folder const PickedUpLayerTypeFactory = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerTypeFactory;

                import { CountedPickedUpLayerInterfaceFactoryInterface } from './CountedPickedUpLayerInterfaceFactoryInterface.js';
//not GWT import - same folder const CountedPickedUpLayerInterfaceFactoryInterface = globalThis.org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactoryInterface;

                import { PickedUpLayerInterface } from './PickedUpLayerInterface.js';
//not GWT import - same folder const PickedUpLayerInterface = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterface;

                import { CountedPickedUpLayerInterfaceFactory } from './CountedPickedUpLayerInterfaceFactory.js';
//not GWT import - same folder const CountedPickedUpLayerInterfaceFactory = globalThis.org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactory;

                
export class PickupBehavior
            extends Object
         implements PickupBehaviorInterface {
        

    public static NULL_PICKUP_BEHAVIOR: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getNullInstance(): PickupBehavior{

                        if(PickupBehavior.NULL_PICKUP_BEHAVIOR == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    PickupBehavior.NULL_PICKUP_BEHAVIOR= new PickupBehavior(CollidableCompositeLayer.getNullInstance(), 0);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PickupBehavior.NULL_PICKUP_BEHAVIOR as PickupBehavior;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly countedIndex: number;

    private readonly ownerLayerInterface: CollidableCompositeLayer;

public constructor (ownerLayerInterface: CollidableCompositeLayer, countedIndex: number){

            super();
        this.ownerLayerInterface= ownerLayerInterface;
    
this.countedIndex= countedIndex;
    
}


    public doPickup(pickupProcessorInterface: PickupProcessorInterface){

        try {
            
    var healthInterfaceCompositeInterface: HealthInterfaceCompositeInterface = this.ownerLayerInterface as unknown  as HealthInterfaceCompositeInterface;;
    

                        if(healthInterfaceCompositeInterface!.getHealthInterface()!.isAlive())
                        
                                    {
                                    pickupProcessorInterface!.process(this.ownerLayerInterface);
    

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "doPickup", e);
    
}

}


    public doPickupLayer(pickupLayerInterface: PickedUpLayerInterface){

        try {
            
    var pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface = pickupLayerInterface!.getPickedUpLayerInterfaceFactoryInterface()!;;
    

    var pickedUpLayerType: PickedUpLayerType = pickedUpLayerInterfaceFactoryInterface!.getPickedUpLayerType()!;;
    

    var pickedUpLayerTypeFactory: PickedUpLayerTypeFactory = PickedUpLayerTypeFactory.getInstance()!;;
    

                        if(pickedUpLayerType == pickedUpLayerTypeFactory!.BEAM || pickedUpLayerType == pickedUpLayerTypeFactory!.MINE || pickedUpLayerType == pickedUpLayerTypeFactory!.PROJECTILE || pickedUpLayerType == pickedUpLayerTypeFactory!.ENHANCEMENT)
                        
                                    {
                                    this.add(pickedUpLayerInterfaceFactoryInterface as CountedPickedUpLayerInterfaceFactoryInterface);
    

                                    }
                                
                             else 
                        if(pickedUpLayerInterfaceFactoryInterface!.getPickedUpLayerType() == pickedUpLayerTypeFactory!.PART)
                        
                                    {
                                    
    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = this.ownerLayerInterface as CollidableDestroyableDamageableLayer;;
    
collidableDestroyableDamageableLayer!.addPart(pickedUpLayerInterfaceFactoryInterface);
    

                                    }
                                
                             else 
                        if(pickedUpLayerType == pickedUpLayerTypeFactory!.NONE)
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    var pickupProcessorInterface: PickupProcessorInterface = pickedUpLayerInterfaceFactoryInterface as unknown  as PickupProcessorInterface;;
    
this.doPickup(pickupProcessorInterface);
    

                        }
                            
pickupLayerInterface!.setPickedUp();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "doPickup", e);
    
}

}


    add(countedPickedUpLayerInterfaceFactoryInterface: CountedPickedUpLayerInterfaceFactoryInterface){

    var partIndex: number = countedPickedUpLayerInterfaceFactoryInterface!.getId() +this.countedIndex;;
    
this.addAt(countedPickedUpLayerInterfaceFactoryInterface, partIndex);
    
}


    addAt(countedPickedUpLayerInterfaceFactoryInterface: CountedPickedUpLayerInterfaceFactoryInterface, partIndex: number){

    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = this.ownerLayerInterface as CollidableDestroyableDamageableLayer;;
    

    var countedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart = collidableDestroyableDamageableLayer!.getPartInterfaceArray()[partIndex]! as CountedLayerInterfaceFactoryPart;;
    
countedLayerInterfaceFactory!.setTotal(countedLayerInterfaceFactory!.getTotal() +countedPickedUpLayerInterfaceFactoryInterface!.getTotal());
    
}


    public getFirstAvailableCountedLayerInterfaceFactory(pickedUpLayerTypeArray: PickedUpLayerType[]): CountedLayerInterfaceFactoryPart{

    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = this.ownerLayerInterface as CollidableDestroyableDamageableLayer;;
    

    var partInterfaceArray: PartInterface[] = collidableDestroyableDamageableLayer!.getPartInterfaceArray()!;;
    

    var size: number = partInterfaceArray!.length
                ;;
    

    var nextCountedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart;;
    

    var countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory;;
    




                        for (
    var index: number = this.countedIndex;index < size; index++)
        {
nextCountedLayerInterfaceFactory= collidableDestroyableDamageableLayer!.getPartInterfaceArray()[index]! as CountedLayerInterfaceFactoryPart;
    
countedPickedUpLayerInterfaceFactory= nextCountedLayerInterfaceFactory!.getCountedPickedUpLayerInterfaceFactory();
    




                        for (
    var index2: number = pickedUpLayerTypeArray!.length
                ;--index2 >= 0; )
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


                //@Throws(Exception.constructor)
            
    public getCountedLayerInterfaceFactoryForSlot(slotIndex: number): CountedLayerInterfaceFactoryPart{

    var currentSlot: number = 0;;
    

    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = this.ownerLayerInterface as CollidableDestroyableDamageableLayer;;
    

    var partInterfaceArray: PartInterface[] = collidableDestroyableDamageableLayer!.getPartInterfaceArray()!;;
    

    var size: number = partInterfaceArray!.length
                ;;
    

    var nextCountedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart;;
    




                        for (
    var index: number = this.countedIndex;index < size; index++)
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
                        return this.countedIndex;
    
}


}



