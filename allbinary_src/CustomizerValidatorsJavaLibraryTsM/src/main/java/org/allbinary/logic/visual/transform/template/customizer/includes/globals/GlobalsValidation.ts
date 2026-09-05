
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

        


            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { StoreFrontFactory } from '../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { StoreFrontView } from '../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontView.js';
//not GWT import const StoreFrontView = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontView;

      
import { DomNodeInterface } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { Validation } from '../../../../../../../../../org/allbinary/logic/control/validate/Validation.js';
//not GWT import const Validation = globalThis.org.allbinary.logic.control.validate.Validation;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GlobalsData } from './GlobalsData.js';
//not GWT import - same folder const GlobalsData = globalThis.org.allbinary.logic.visual.transform.template.customizer.includes.globals.GlobalsData;

                
export class GlobalsValidation extends Validation implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private storeFrontInterface: StoreFrontInterface;

public constructor (storeName: string){

            super();
        this.storeFrontInterface= StoreFrontFactory.getInstance(storeName);
    
}


public constructor (document: Document){

            super();
        


                            throw new Exception(CommonStrings.getInstance()!.NOT_IMPLEMENTED);
                    
}


    public isValid(): Boolean{

        try {
            
    var valid: Boolean = Boolean.TRUE;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    
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


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = document.createElement(GlobalsData.NAME)!;;
    
node.appendChild(new StoreFrontView(this.storeFrontInterface).toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



