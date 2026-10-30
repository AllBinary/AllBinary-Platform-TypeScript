
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { StoreFrontInterface } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { ShippingInterface } from '../../../../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js';
//not GWT import const ShippingInterface

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShippingMethodsInterface } from './ShippingMethodsInterface.js';
//sameFolderImports - not GWT import - same folder const ShippingMethodsInterface
import { ShippingMethodsFactory } from './ShippingMethodsFactory.js';
//sameFolderImports - not GWT import - same folder const ShippingMethodsFactory

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

    let shipping: ShippingInterface;;
    

    let size: number = this.shippingVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
shipping= this.shippingVector!.get(index) as ShippingInterface;
    

                        if(name.compareTo(shipping.getName()) == 0)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return shipping;
    
}


    let error: string = "Error Finding Shipping: " +name;;
    

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

