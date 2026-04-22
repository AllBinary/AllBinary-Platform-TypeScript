
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { NullAnimationFactory } from "../../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PickedUpLayerInterfaceFactory } from "./PickedUpLayerInterfaceFactory.js";

import { CountedPickedUpLayerInterfaceFactoryInterface } from "./CountedPickedUpLayerInterfaceFactoryInterface.js";

import { PickedUpLayerTypeFactory } from "./PickedUpLayerTypeFactory.js";

import { IconLayer } from "./IconLayer.js";

import { CountedPickedUpLayerInterfaceFactoryPool } from "./CountedPickedUpLayerInterfaceFactoryPool.js";

import { PickedUpLayerType } from "./PickedUpLayerType.js";

export class CountedPickedUpLayerInterfaceFactory extends PickedUpLayerInterfaceFactory implements CountedPickedUpLayerInterfaceFactoryInterface {
        

    public static readonly NULL_COUNTED_PICKUP_LAYER_FACTORY: CountedPickedUpLayerInterfaceFactory = new CountedPickedUpLayerInterfaceFactory(PickedUpLayerTypeFactory.getInstance()!.NONE, IconLayer.NULL_ICON_LAYER, NullAnimationFactory.getFactoryInstance()!.getInstance(0));
        
        

    private readonly id: number
public constructor (pickeUpLayerType: PickedUpLayerType, iconLayer: IconLayer, animationInterface: Animation){
            super(pickeUpLayerType, iconLayer, animationInterface);
                    var pickeUpLayerType = pickeUpLayerType
var iconLayer = iconLayer
var animationInterface = animationInterface


                            //For kotlin this is before the body of the constructor.
                    

    var list: BasicArrayList = CountedPickedUpLayerInterfaceFactoryPool.getInstance()!.getList()!;
        
        
;
    
this.id= list.size();
    
list.add(this);
    
}


                //@Throws(Error::class)
            
    public getInstance(hashtable: Hashtable<any, any>, x: number, y: number, z: number): AllBinaryLayer{
var hashtable = hashtable
var x = x
var y = y
var z = z



                            throw new Error(CommonStrings.getInstance()!.NOT_IMPLEMENTED)
}


    public getTotal(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return id;
    
}


}
                
            

