
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
        
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { StoreFrontInterface } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { ShippingInterface } from '../../../../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js';
      //not GWT import const ShippingInterface = globalThis.org.allbinary.business.user.commerce.shipping.modules.ShippingInterface;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShippingMethodsInterface } from './ShippingMethodsInterface.js';
//not GWT import const ShippingMethodsInterface = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethodsInterface;

                import { ShippingMethodsFactory } from './ShippingMethodsFactory.js';
//not GWT import const ShippingMethodsFactory = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethodsFactory;

                
export class ShippingMethods
            extends Object
         implements ShippingMethodsInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private shippingVector: BasicArrayList;

    private defaultShippingMethodInterface: ShippingInterface;

public constructor (abeClientInformation: AbeClientInformationInterface, storeFrontInterface: StoreFrontInterface){

            super();
        this.defaultShippingMethodInterface= new ShippingMethodsFactory(abeClientInformation, storeFrontInterface).getDefaultInstance();
    
this.shippingVector= new ShippingMethodsFactory(abeClientInformation, storeFrontInterface).getInstance();
    
}


    public get(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shippingVector;
    
}


                //@Throws(Exception.constructor)
            
    public getShippingInterface(name: string): ShippingInterface{

    var shipping: ShippingInterface;;
    

    var size: number = this.shippingVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
shipping= this.shippingVector!.get(index) as ShippingInterface;
    

                        if(name.compareTo(shipping.getName()) == 0)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return shipping;
    
}


    var error: string = "Error Finding Shipping: " +name;;
    

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



