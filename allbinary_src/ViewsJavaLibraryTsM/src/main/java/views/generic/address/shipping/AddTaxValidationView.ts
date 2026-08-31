
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

      
import { TaxModuleInterface } from '../../../../org/allbinary/business/user/commerce/money/tax/modules/TaxModuleInterface.js';
      //not GWT import const TaxModuleInterface = globalThis.org.allbinary.business.user.commerce.money.tax.modules.TaxModuleInterface;

      
import { ShippingAddressesEntity } from '../../../../org/allbinary/data/tables/user/address/shipping/ShippingAddressesEntity.js';
      //not GWT import const ShippingAddressesEntity = globalThis.org.allbinary.data.tables.user.address.shipping.ShippingAddressesEntity;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { ValidationComponentInterface } from '../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
      //not GWT import const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShippingAddressView } from './ShippingAddressView.js';
//not GWT import const  = globalThis.views.generic.address.shipping.ShippingAddressView;

                
export class AddTaxValidationView extends ShippingAddressView implements ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public isValid(): Boolean{

        try {
            this.streetAddress= new StreetAddress(this.getRequest());
    

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getTransformInfoInterface()!.getStoreName())!;;
    

    var taxInterface: TaxModuleInterface = TaxFactory.getInstance()!.getInstance(this.abeClientInformation, storeFrontInterface)!;;
    

                        if(taxInterface == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(taxInterface!.isValid(this.streetAddress, storeFrontInterface) == Boolean.FALSE)
                        
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
                                

    var size: number = streetAddressList!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var aStreetAddress: StreetAddress = streetAddressList!.get(index) as StreetAddress;;
    

                        if(aStreetAddress!.getName()!.compareTo(ShippingAddressData.TAX) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


                //@Throws(Exception.constructor)
            
    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getTransformInfoInterface()!.getStoreName())!;;
    

    var taxInterface: TaxModuleInterface = TaxFactory.getInstance()!.getInstance(this.abeClientInformation, storeFrontInterface)!;;
    

                        if(taxInterface == 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("Unable to Load Tax Component<br/>");
    

                                    }
                                
                        else {
                            
                        if(taxInterface!.isValid(this.streetAddress, storeFrontInterface) == Boolean.FALSE)
                        
                                    {
                                    stringBuffer!.append("Unable to validate address with Tax Component<br/>");
    

                                    }
                                

                        }
                            

    var billingAddressesEntity: ShippingAddressesEntity = new ShippingAddressesEntity(this.getWeblisketSession()!.getUserName());;
    

    var streetAddressList: Vector = billingAddressesEntity!.get()!;;
    

    var size: number = streetAddressList!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var aStreetAddress: StreetAddress = streetAddressList!.get(index) as StreetAddress;;
    

                        if(aStreetAddress!.getName()!.compareTo(ShippingAddressData.TAX) == 0)
                        
                                    {
                                    stringBuffer!.append("Not a valid tax location<br/>");
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to create validateInfo", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Creating ValidationInfo";
    
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



