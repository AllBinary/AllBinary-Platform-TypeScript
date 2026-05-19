
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { Vector } from '../../../../../../java/util/Vector.js';
      
import { StoreFrontInterface } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      
import { ShippingInterface } from '../../../../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js';
      
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShippingMethodsInterface } from './ShippingMethodsInterface.js';
import { ShippingMethodsFactory } from './ShippingMethodsFactory.js';

export class ShippingMethods
            extends Object
         implements ShippingMethodsInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private shippingVector: Vector

    private defaultShippingMethodInterface: ShippingInterface
public constructor (abeClientInformation: AbeClientInformationInterface, storeFrontInterface: StoreFrontInterface){

            super();
        this.defaultShippingMethodInterface= new ShippingMethodsFactory(abeClientInformation, storeFrontInterface).
                            getDefaultInstance();
    
this.shippingVector= new ShippingMethodsFactory(abeClientInformation, storeFrontInterface).
                            getInstance();
    
}


    public get(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shippingVector;
    
}


                //@Throws(Exception.constructor)
            
    public getShippingInterface(name: string): ShippingInterface{

    var shipping: ShippingInterface
;
    

    var size: number = this.shippingVector!.length!;
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
shipping= this.shippingVector!.get(index) as ShippingInterface;
    

                        if(name.compareTo(shipping.getName()) == 0)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return shipping;
    
}


    var error: string = "Error Finding Shipping: " +name;
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SHIPPINGERROR))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.EXCEPTION, this, "getShippingInterface(String name)");
    

                                    }
                                



                            throw new Exception(error);
                    
}


                //@Throws(Exception.constructor)
            
    public getDefault(): ShippingInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.defaultShippingMethodInterface;
    
}


}
                
            

