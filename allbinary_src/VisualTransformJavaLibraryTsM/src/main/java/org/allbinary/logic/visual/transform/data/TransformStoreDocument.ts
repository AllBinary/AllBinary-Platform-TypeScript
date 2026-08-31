
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HttpServletRequest } from '../../../../../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { StoreFrontViewFactory } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontViewFactory.js';
      //not GWT import const StoreFrontViewFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontViewFactory;

      
import { RequestParams } from '../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
      //not GWT import const RequestParams = globalThis.org.allbinary.logic.communication.http.request.RequestParams;

      
import { WeblisketSession } from '../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      //not GWT import const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { SearchRequest } from '../../../../../../org/allbinary/logic/control/search/SearchRequest.js';
      //not GWT import const SearchRequest = globalThis.org.allbinary.logic.control.search.SearchRequest;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformHttpRequestDocument } from './TransformHttpRequestDocument.js';
//not GWT import const TransformHttpRequestDocument = globalThis.org.allbinary.logic.visual.transform.data.TransformHttpRequestDocument;

                
export class TransformStoreDocument extends TransformHttpRequestDocument {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (pageContext: PageContext, weblisketSession: WeblisketSession){
            super(pageContext, weblisketSession);
                    

                            //For kotlin this is before the body of the constructor.
                    

        try {
            
    var storeName: string = weblisketSession!.getStoreName()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Using Session StoreName: " +storeName, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.getBaseNode()!.appendChild(StoreFrontViewFactory.getInstance(storeName)!.toXmlNode(this.getDoc()));
    
this.getBaseNode()!.appendChild(new RequestParams(pageContext!.getRequest() as HttpServletRequest).toXmlNode(this.getDoc()));
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e;
                    
}

}


public constructor (searchRequest: SearchRequest){
            super(searchRequest);
                    

                            //For kotlin this is before the body of the constructor.
                    

        try {
            this.getBaseNode()!.appendChild(StoreFrontViewFactory.getInstance(searchRequest!.getStoreFront()!.getName())!.toXmlNode(this.getDoc()));
    
this.getBaseNode()!.appendChild(searchRequest!.getParams()!.getParamsNode(this.getDoc()));
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e;
                    
}

}


}



