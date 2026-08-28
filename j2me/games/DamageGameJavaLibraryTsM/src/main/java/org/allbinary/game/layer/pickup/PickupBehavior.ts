
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
        
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { HealthInterfaceCompositeInterface } from '../../../../../org/allbinary/game/health/HealthInterfaceCompositeInterface.js';
      const HealthInterfaceCompositeInterface = globalThis.org.allbinary.game.health.HealthInterfaceCompositeInterface;

      
//not game specific package import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
      const CollidableCompositeLayer = globalThis.org.allbinary.game.layer.CollidableCompositeLayer;

      
//not game specific package import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
//not game specific package import { CountedLayerInterfaceFactoryPart } from '../../../../../org/allbinary/game/part/CountedLayerInterfaceFactoryPart.js';
      const CountedLayerInterfaceFactoryPart = globalThis.org.allbinary.game.part.CountedLayerInterfaceFactoryPart;

      
//not game specific package import { PartInterface } from '../../../../../org/allbinary/game/part/PartInterface.js';
      const PartInterface = globalThis.org?.allbinary?.game?.part?.PartInterface;

      
//not game specific package import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PickupBehaviorInterface } from './PickupBehaviorInterface.js';
import { PickupProcessorInterface } from './PickupProcessorInterface.js';
import { PickedUpLayerInterfaceFactoryInterface } from './PickedUpLayerInterfaceFactoryInterface.js';
import { PickedUpLayerType } from './PickedUpLayerType.js';
import { PickedUpLayerTypeFactory } from './PickedUpLayerTypeFactory.js';
import { CountedPickedUpLayerInterfaceFactoryInterface } from './CountedPickedUpLayerInterfaceFactoryInterface.js';
import { PickedUpLayerInterface } from './PickedUpLayerInterface.js';
import { CountedPickedUpLayerInterfaceFactory } from './CountedPickedUpLayerInterfaceFactory.js';

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



