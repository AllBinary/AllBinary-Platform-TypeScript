
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
        
import { Vector } from '../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { StoreFrontFactory } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      //not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { ShippingAddressData } from '../../../../org/allbinary/business/user/address/ShippingAddressData.js';
      //not GWT import const ShippingAddressData = globalThis.org.allbinary.business.user.address.ShippingAddressData;

      
import { StreetAddress } from '../../../../org/allbinary/business/user/address/StreetAddress.js';
      //not GWT import const StreetAddress = globalThis.org.allbinary.business.user.address.StreetAddress;

      
import { TaxFactory } from '../../../../org/allbinary/business/user/commerce/money/tax/TaxFactory.js';
      //not GWT import const TaxFactory = globalThis.org.allbinary.business.user.commerce.money.tax.TaxFactory;

      
import { ShippingAddressesEntity } from '../../../../org/allbinary/data/tables/user/address/shipping/ShippingAddressesEntity.js';
      //not GWT import const ShippingAddressesEntity = globalThis.org.allbinary.data.tables.user.address.shipping.ShippingAddressesEntity;

      
import { ValidationComponentInterface } from '../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
      //not GWT import const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShippingAddressView } from './ShippingAddressView.js';
//not GWT import const  = globalThis.views.generic.address.shipping.ShippingAddressView;

                
export class UpdateTaxValidationView extends ShippingAddressView implements ValidationComponentInterface {
        

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public isValid(): Boolean{
this.streetAddress= new StreetAddress(this.getRequest());
    

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getTransformInfoInterface()!.getStoreName())!;;
    

                        if(TaxFactory.getInstance()!.getInstance(this.abeClientInformation, storeFrontInterface)!.isValid(this.streetAddress, storeFrontInterface) == Boolean.FALSE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var billingAddressesEntity: ShippingAddressesEntity = new ShippingAddressesEntity(this.getWeblisketSession()!.getUserName());;
    

    var streetAddressList: Vector = billingAddressesEntity!.get()!;;
    

                        if(streetAddressList == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var count: number = 0;;
    

    var size: number = streetAddressList!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var aStreetAddress: StreetAddress = streetAddressList!.get(index) as StreetAddress;;
    

                        if(aStreetAddress!.getName()!.compareTo(ShippingAddressData.TAX) == 0)
                        
                                    {
                                    count++;
    

                                    }
                                
}


                        if(count != 1)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Unable to update tax location.";
    
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



