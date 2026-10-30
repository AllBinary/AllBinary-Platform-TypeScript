
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { ShippingAddressData } from '../../../../org/allbinary/business/user/address/ShippingAddressData.js';
//not GWT import const ShippingAddressData

import { StreetAddress } from '../../../../org/allbinary/business/user/address/StreetAddress.js';
//not GWT import const StreetAddress

import { ShippingAddressesEntity } from '../../../../org/allbinary/data/tables/user/address/shipping/ShippingAddressesEntity.js';
//not GWT import const ShippingAddressesEntity

import { ValidationComponentInterface } from '../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
//not GWT import const ValidationComponentInterface

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { Document } from '../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShippingAddressView } from './ShippingAddressView.js';
//not GWT import - same folder const ShippingAddressView

export class TaxValidationView extends ShippingAddressView implements ValidationComponentInterface {
        

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public isValid(): Boolean{

    let billingAddressesEntity: ShippingAddressesEntity = new ShippingAddressesEntity(this.getWeblisketSession()!.getUserName());;
    

    let streetAddressList: BasicArrayList = billingAddressesEntity!.get()!;;
    

                        if(streetAddressList == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    let size: number = streetAddressList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let aStreetAddress: StreetAddress = streetAddressList!.get(index) as StreetAddress;;
    

                        if(aStreetAddress!.getName()!.compareTo(ShippingAddressData.TAX) == 0)
                        
                                    {
                                    this.streetAddress= aStreetAddress;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}

