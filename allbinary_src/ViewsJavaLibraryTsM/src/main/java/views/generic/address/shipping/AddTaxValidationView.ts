
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

import { StoreFrontFactory } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory

import { StoreFrontInterface } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { ShippingAddressData } from '../../../../org/allbinary/business/user/address/ShippingAddressData.js';
//not GWT import const ShippingAddressData

import { StreetAddress } from '../../../../org/allbinary/business/user/address/StreetAddress.js';
//not GWT import const StreetAddress

import { TaxFactory } from '../../../../org/allbinary/business/user/commerce/money/tax/TaxFactory.js';
//not GWT import const TaxFactory

import { TaxModuleInterface } from '../../../../org/allbinary/business/user/commerce/money/tax/modules/TaxModuleInterface.js';
//not GWT import const TaxModuleInterface

import { ShippingAddressesEntity } from '../../../../org/allbinary/data/tables/user/address/shipping/ShippingAddressesEntity.js';
//not GWT import const ShippingAddressesEntity

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { ValidationComponentInterface } from '../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
//not GWT import const ValidationComponentInterface

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { Document } from '../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShippingAddressView } from './ShippingAddressView.js';
//sameFolderImports - not GWT import - same folder const ShippingAddressView

export class AddTaxValidationView extends ShippingAddressView implements ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public isValid(): Boolean{

 try { this.streetAddress= new StreetAddress(this.getRequest());
    

    let storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getTransformInfoInterface()!.getStoreName())!;;
    

    let taxInterface: TaxModuleInterface = TaxFactory.getInstance()!.getInstance(this.abeClientInformation, storeFrontInterface)!;;
    

                        if(taxInterface == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(taxInterface!.isValid(this.streetAddress, storeFrontInterface) == false)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

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
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public validationInfo(): string{

 try { 
    let stringBuffer: StringMaker = new StringMaker();;
    

    let storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getTransformInfoInterface()!.getStoreName())!;;
    

    let taxInterface: TaxModuleInterface = TaxFactory.getInstance()!.getInstance(this.abeClientInformation, storeFrontInterface)!;;
    

                        if(taxInterface == 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("Unable to Load Tax Component<br/>");
    

                                    }
                                
                        else {
                            
                        if(taxInterface!.isValid(this.streetAddress, storeFrontInterface) == false)
                        
                                    {
                                    stringBuffer!.append("Unable to validate address with Tax Component<br/>");
    

                                    }
                                

                        }
                            

    let billingAddressesEntity: ShippingAddressesEntity = new ShippingAddressesEntity(this.getWeblisketSession()!.getUserName());;
    

    let streetAddressList: BasicArrayList = billingAddressesEntity!.get()!;;
    

    let size: number = streetAddressList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let aStreetAddress: StreetAddress = streetAddressList!.get(index) as StreetAddress;;
    

                        if(aStreetAddress!.getName()!.compareTo(ShippingAddressData.TAX) == 0)
                        
                                    {
                                    stringBuffer!.append("Not a valid tax location<br/>");
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to create validateInfo", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Creating ValidationInfo";
    

 }
   }
 
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

