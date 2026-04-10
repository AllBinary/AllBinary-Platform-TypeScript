
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
        



import { ShippingMethodData } from "../../../../../../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js";

    
import { DomNodeInterface } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

export class PickUpShippingModuleView extends PickUpShippingModule
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
            }


    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoDoc(): org.w3c.dom.Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: org.w3c.dom.Document): org.w3c.dom.Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toXmlDoc(): org.w3c.dom.Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toXmlNode(document: org.w3c.dom.Document): org.w3c.dom.Node{
var document = document

        try {
            
    var shippingMethodNode: Node = document.createElement(ShippingMethodData.NAME)!;
        
        

appendChild(ModDomHelper.createNameValueNodes(document, ShippingMethodData.NAME, this.getName()))
appendChild(ModDomHelper.createNameValueNodes(document, ShippingMethodData.DESCRIPTION, this.getDescription()))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return shippingMethodNode;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.EXCEPTION, this, "toXmlNode", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public view(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

