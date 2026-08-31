
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
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { StreetAddressData } from '../../../../org/allbinary/business/user/address/StreetAddressData.js';
      //not GWT import const StreetAddressData = globalThis.org.allbinary.business.user.address.StreetAddressData;

      
import { BillingAddressesEntity } from '../../../../org/allbinary/data/tables/user/address/billing/BillingAddressesEntity.js';
      //not GWT import const BillingAddressesEntity = globalThis.org.allbinary.data.tables.user.address.billing.BillingAddressesEntity;

      
import { ValidationComponentInterface } from '../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
      //not GWT import const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BillingAddressView } from './BillingAddressView.js';
//not GWT import const  = globalThis.views.generic.address.billing.BillingAddressView;

                
export class EditValidationView extends BillingAddressView implements ValidationComponentInterface {
        

    private value: string;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.value= this.getPageContext()!.getRequest()!.getParameter(StreetAddressData.ID);
    
}


    public isValid(): Boolean{

                        if(this.getWeblisketSession()!.getUserName() != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var billingAddressesEntity: BillingAddressesEntity = new BillingAddressesEntity(this.getWeblisketSession()!.getUserName());;
    
this.streetAddress= billingAddressesEntity!.get(new Integer(this.value));
    

                        if(this.streetAddress == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.streetAddress!.isValid();;
    
}


    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.streetAddress!.validationInfo();;
    
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



