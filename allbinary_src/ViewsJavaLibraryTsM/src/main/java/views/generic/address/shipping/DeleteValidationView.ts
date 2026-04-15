
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { StreetAddressData } from "../../../../org/allbinary/business/user/address/StreetAddressData.js";

    
import { ShippingAddressesEntity } from "../../../../org/allbinary/data/tables/user/address/shipping/ShippingAddressesEntity.js";

    
import { ValidationComponentInterface } from "../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { TransformInfoHttpInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    

export class DeleteValidationView extends ShippingAddressView
                , ValidationComponentInterface {
        

    private value: string
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    

    var httpTransformInfoInterface: TransformInfoHttpInterface = this.getTransformInfoInterface();

                         as TransformInfoHttpInterface;
        
        
;
    
this.value= httpTransformInfoInterface!.getPageContext()!.getRequest()!.getParameter(StreetAddressData.ID);
    
}


    public isValid(): Boolean{

                        if(this.getWeblisketSession()!.getUserName() != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var billingAddressesEntity: ShippingAddressesEntity = new ShippingAddressesEntity(this.getWeblisketSession()!.getUserName());
        
        
;
    
this.streetAddress= billingAddressesEntity!.get(new Integer(value));
    

                        if(this.streetAddress == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.streetAddress!.isValid();

                        ;
    
}


    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.streetAddress!.validationInfo();

                        ;
    
}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

