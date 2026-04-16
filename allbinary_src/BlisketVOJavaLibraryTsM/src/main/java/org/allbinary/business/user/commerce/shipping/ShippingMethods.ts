
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
        



import { Vector } from "../../../../../../java/util/Vector.js";

    
import { StoreFrontInterface } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { ShippingInterface } from "../../../../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeClientInformationInterface } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class ShippingMethods
            extends Object
        
                , ShippingMethodsInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private shippingVector: Vector

    private defaultShippingMethodInterface: ShippingInterface
public constructor (abeClientInformation: AbeClientInformationInterface, storeFrontInterface: StoreFrontInterface){

            super();
                //var abeClientInformation = abeClientInformation
    //var storeFrontInterface = storeFrontInterface
this.defaultShippingMethodInterface= new ShippingMethodsFactory(abeClientInformation, storeFrontInterface).
                            getDefaultInstance();
    
this.shippingVector= new ShippingMethodsFactory(abeClientInformation, storeFrontInterface).
                            getInstance();
    
}


    public get(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return shippingVector;
    
}


                //@Throws(Error::class)
            
    public getShippingInterface(name: string): ShippingInterface{
var name = name

    var shipping: ShippingInterface
;
    

    var size: number = shippingVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
shipping= shippingVector!.get(index);

                         as ShippingInterface;
    

                        if(name.compareTo(shipping.getName()) == 0)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return shipping;
    
}


    var error: string = "Error Finding Shipping: " +name;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SHIPPINGERROR))
                        
                                    {
                                    this.logUtil!.putF(commonStrings!.EXCEPTION, this, "getShippingInterface(String name)");
    

                                    }
                                



                            throw new Error(error)
}


                //@Throws(Error::class)
            
    public getDefault(): ShippingInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultShippingMethodInterface;
    
}


}
                
            

