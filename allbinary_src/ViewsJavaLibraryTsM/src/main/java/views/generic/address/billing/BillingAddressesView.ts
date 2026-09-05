
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { HttpServletRequest } from '../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { BillingAddressData } from '../../../../org/allbinary/business/user/address/BillingAddressData.js';
//not GWT import const BillingAddressData = globalThis.org.allbinary.business.user.address.BillingAddressData;

      
import { StreetAddress } from '../../../../org/allbinary/business/user/address/StreetAddress.js';
//not GWT import const StreetAddress = globalThis.org.allbinary.business.user.address.StreetAddress;

      
import { StreetAddressData } from '../../../../org/allbinary/business/user/address/StreetAddressData.js';
//not GWT import const StreetAddressData = globalThis.org.allbinary.business.user.address.StreetAddressData;

      
import { DomNodeInterface } from '../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { ModDomHelper } from '../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { TransformInfoHttpInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
//not GWT import const TransformInfoHttpInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpInterface;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { HttpStoreComponentView } from '../../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
//not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BillingAddressesView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private request: HttpServletRequest;

    streetAddresses: BasicArrayList;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var httpTransformInfoInterface: TransformInfoHttpInterface = this.getTransformInfoInterface() as TransformInfoHttpInterface;;
    
this.request= httpTransformInfoInterface!.getPageContext()!.getRequest() as HttpServletRequest;
    
}


    getRequest(): HttpServletRequest{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.request;
    
}


    public toXmlNode(document: Document): Node{

        try {
            
    var billingAddressesNode: Node = document.createElement(BillingAddressData.MULTIPLE)!;;
    

    var size: number = this.streetAddresses!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var streetAddress: StreetAddress = this.streetAddresses!.get(index) as StreetAddress;;
    
billingAddressesNode!.appendChild(streetAddress!.toXmlNode(document));
    
}

billingAddressesNode!.appendChild(ModDomHelper.createNameValueNodes(document, StreetAddressData.NUMBEROFADDRESSES, new Integer(streetAddresses!.size()).toString()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return billingAddressesNode;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface);
    
}


                //@Throws(Exception.constructor)
            
    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



