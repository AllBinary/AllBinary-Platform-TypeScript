
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
        
import { HealthInterfaceCompositeInterface } from '../../../../../org/allbinary/game/health/HealthInterfaceCompositeInterface.js';
//not GWT import const HealthInterfaceCompositeInterface

import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
//not GWT import const CollidableCompositeLayer

import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const CollidableDestroyableDamageableLayer

import { CountedLayerInterfaceFactoryPart } from '../../../../../org/allbinary/game/part/CountedLayerInterfaceFactoryPart.js';
//not GWT import const CountedLayerInterfaceFactoryPart

import { PartInterface } from '../../../../../org/allbinary/game/part/PartInterface.js';
//not GWT import const PartInterface

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PickupBehaviorInterface } from './PickupBehaviorInterface.js';
//sameFolderImports - not GWT import - same folder const PickupBehaviorInterface
import { PickupProcessorInterface } from './PickupProcessorInterface.js';
//sameFolderImports - not GWT import - same folder const PickupProcessorInterface
import { PickedUpLayerInterfaceFactoryInterface } from './PickedUpLayerInterfaceFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const PickedUpLayerInterfaceFactoryInterface
import { PickedUpLayerType } from './PickedUpLayerType.js';
//sameFolderImports - not GWT import - same folder const PickedUpLayerType
import { PickedUpLayerTypeFactory } from './PickedUpLayerTypeFactory.js';
//sameFolderImports - not GWT import - same folder const PickedUpLayerTypeFactory
import { CountedPickedUpLayerInterfaceFactoryInterface } from './CountedPickedUpLayerInterfaceFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const CountedPickedUpLayerInterfaceFactoryInterface
import { PickedUpLayerInterface } from './PickedUpLayerInterface.js';
//sameFolderImports - not GWT import - same folder const PickedUpLayerInterface
import { CountedPickedUpLayerInterfaceFactory } from './CountedPickedUpLayerInterfaceFactory.js';
//sameFolderImports - not GWT import - same folder const CountedPickedUpLayerInterfaceFactory

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
    let healthInterfaceCompositeInterface: HealthInterfaceCompositeInterface = this.ownerLayerInterface as unknown  as HealthInterfaceCompositeInterface;;
    

                        if(healthInterfaceCompositeInterface!.getHealthInterface()!.isAlive())
                        
                                    {
                                    pickupProcessorInterface!.process(this.ownerLayerInterface);
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "doPickup", e);
    

 }
   }
 
}


    public doPickupLayer(pickupLayerInterface: PickedUpLayerInterface){

 try { 
    let pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface = pickupLayerInterface!.getPickedUpLayerInterfaceFactoryInterface()!;;
    

    let pickedUpLayerType: PickedUpLayerType = pickedUpLayerInterfaceFactoryInterface!.getPickedUpLayerType()!;;
    

    let pickedUpLayerTypeFactory: PickedUpLayerTypeFactory = PickedUpLayerTypeFactory.getInstance()!;;
    

                        if(pickedUpLayerType == pickedUpLayerTypeFactory!.BEAM || pickedUpLayerType == pickedUpLayerTypeFactory!.MINE || pickedUpLayerType == pickedUpLayerTypeFactory!.PROJECTILE || pickedUpLayerType == pickedUpLayerTypeFactory!.ENHANCEMENT)
                        
                                    {
                                    this.add(pickedUpLayerInterfaceFactoryInterface as CountedPickedUpLayerInterfaceFactoryInterface);
    

                                    }
                                
                             else 
                        if(pickedUpLayerInterfaceFactoryInterface!.getPickedUpLayerType() == pickedUpLayerTypeFactory!.PART)
                        
                                    {
                                    
    let collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = this.ownerLayerInterface as CollidableDestroyableDamageableLayer;;
    
collidableDestroyableDamageableLayer!.addPart(pickedUpLayerInterfaceFactoryInterface);
    

                                    }
                                
                             else 
                        if(pickedUpLayerType == pickedUpLayerTypeFactory!.NONE)
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    let pickupProcessorInterface: PickupProcessorInterface = pickedUpLayerInterfaceFactoryInterface as unknown  as PickupProcessorInterface;;
    
this.doPickup(pickupProcessorInterface);
    

                        }
                            
pickupLayerInterface!.setPickedUp();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "doPickup", e);
    

 }
   }
 
}


    add(countedPickedUpLayerInterfaceFactoryInterface: CountedPickedUpLayerInterfaceFactoryInterface){

    let partIndex: number = countedPickedUpLayerInterfaceFactoryInterface!.getId() +this.countedIndex;;
    
this.addAt(countedPickedUpLayerInterfaceFactoryInterface, partIndex);
    
}


    addAt(countedPickedUpLayerInterfaceFactoryInterface: CountedPickedUpLayerInterfaceFactoryInterface, partIndex: number){

    let collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = this.ownerLayerInterface as CollidableDestroyableDamageableLayer;;
    

    let countedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart = collidableDestroyableDamageableLayer!.getPartInterfaceArray()[partIndex]! as CountedLayerInterfaceFactoryPart;;
    
countedLayerInterfaceFactory!.setTotal(countedLayerInterfaceFactory!.getTotal() +countedPickedUpLayerInterfaceFactoryInterface!.getTotal());
    
}


    public getFirstAvailableCountedLayerInterfaceFactory(pickedUpLayerTypeArray: PickedUpLayerType[]): CountedLayerInterfaceFactoryPart{

    let collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = this.ownerLayerInterface as CollidableDestroyableDamageableLayer;;
    

    let partInterfaceArray: PartInterface[] = collidableDestroyableDamageableLayer!.getPartInterfaceArray()!;;
    

    let size: number = partInterfaceArray!.length
                ;;
    

    let nextCountedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart;;
    

    let countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory;;
    




                        for (
    let index: number = this.countedIndex;index < size; index++)
        {
nextCountedLayerInterfaceFactory= collidableDestroyableDamageableLayer!.getPartInterfaceArray()[index]! as CountedLayerInterfaceFactoryPart;
    
countedPickedUpLayerInterfaceFactory= nextCountedLayerInterfaceFactory!.getCountedPickedUpLayerInterfaceFactory();
    




                        for (
    let index2: number = pickedUpLayerTypeArray!.length
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

    let currentSlot: number = 0;;
    

    let collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = this.ownerLayerInterface as CollidableDestroyableDamageableLayer;;
    

    let partInterfaceArray: PartInterface[] = collidableDestroyableDamageableLayer!.getPartInterfaceArray()!;;
    

    let size: number = partInterfaceArray!.length
                ;;
    

    let nextCountedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart;;
    




                        for (
    let index: number = this.countedIndex;index < size; index++)
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

