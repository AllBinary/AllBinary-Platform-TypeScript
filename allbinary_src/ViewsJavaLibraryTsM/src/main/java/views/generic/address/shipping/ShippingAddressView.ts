
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
        



import { HttpServletRequest } from "../../../../javax/servlet/http/HttpServletRequest.js";

    
import { StreetAddress } from "../../../../org/allbinary/business/user/address/StreetAddress.js";

    
import { StreetAddressData } from "../../../../org/allbinary/business/user/address/StreetAddressData.js";

    
import { DomNodeInterface } from "../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoHttpInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    
import { HttpStoreComponentView } from "../../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    
import { StatesView } from "../../../../views/generic/address/StatesView.js";

    

export class ShippingAddressView extends HttpStoreComponentView
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private request: HttpServletRequest

    streetAddress: StreetAddress
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    

    var httpTransformInfoInterface: TransformInfoHttpInterface = this.getTransformInfoInterface() as TransformInfoHttpInterface;
        
        

this.request= httpTransformInfoInterface!.getPageContext()!.getRequest() as HttpServletRequest
}


    getRequest(): HttpServletRequest{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.request;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

        try {
            
    var formNode: Node = document.createElement(StreetAddressData.FORM)!;
        
        

formNode!.appendChild(streetAddress!.toXmlNode(document))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return formNode;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e)

                                    }
                                



                            throw e
}

}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface)
this.addDomNodeInterface(StatesView() as DomNodeInterface)
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            this.addDomNodeInterfaces()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e)

                                    }
                                



                            throw e
}

}


}
                
            

