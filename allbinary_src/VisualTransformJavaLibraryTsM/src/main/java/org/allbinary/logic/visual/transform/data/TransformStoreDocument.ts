
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
        



import { HttpServletRequest } from "../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { StoreFrontViewFactory } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontViewFactory.js";

    
import { RequestParams } from "../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js";

    
import { WeblisketSession } from "../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SearchRequest } from "../../../../../../org/allbinary/logic/control/search/SearchRequest.js";

    

export class TransformStoreDocument extends TransformHttpRequestDocument {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (pageContext: PageContext, weblisketSession: WeblisketSession)                        

                            : super(pageContext, weblisketSession){

            super();
            var pageContext = pageContext
var weblisketSession = weblisketSession


                            //For kotlin this is before the body of the constructor.
                    

        try {
            
    var storeName: string = weblisketSession!.getStoreName()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Using Session StoreName: " +storeName, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.getBaseNode()!.appendChild(StoreFrontViewFactory.getInstance(storeName)!.toXmlNode(this.getDoc()));
    
this.getBaseNode()!.appendChild(new RequestParams(pageContext!.getRequest();

                         as HttpServletRequest).
                            toXmlNode(this.getDoc()));
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e
}

}

public constructor (searchRequest: SearchRequest)                        

                            : super(searchRequest){

            super();
            var searchRequest = searchRequest


                            //For kotlin this is before the body of the constructor.
                    

        try {
            this.getBaseNode()!.appendChild(StoreFrontViewFactory.getInstance(searchRequest!.getStoreFront()!.getName())!.toXmlNode(this.getDoc()));
    
this.getBaseNode()!.appendChild(searchRequest!.getParams()!.getParamsNode(this.getDoc()));
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e
}

}


}
                
            

