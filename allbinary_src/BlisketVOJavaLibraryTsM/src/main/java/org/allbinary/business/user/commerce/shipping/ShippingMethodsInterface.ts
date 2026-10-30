
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { ShippingInterface } from '../../../../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js';
//not GWT import const ShippingInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface ShippingMethodsInterface {
        

    get(): BasicArrayList;

                //@Throws(Exception.constructor)
            
    getShippingInterface(name: string): ShippingInterface;

                //@Throws(Exception.constructor)
            
    getDefault(): ShippingInterface;

}

