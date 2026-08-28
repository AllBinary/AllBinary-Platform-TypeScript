
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
        
//not game specific package import { HttpServletRequest } from '../../../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { StoreFrontViewFactory } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontViewFactory.js';
      const StoreFrontViewFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontViewFactory;

      
//not game specific package import { RequestParams } from '../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
      const RequestParams = globalThis.org.allbinary.logic.communication.http.request.RequestParams;

      
//not game specific package import { WeblisketSession } from '../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { SearchRequest } from '../../../../../../org/allbinary/logic/control/search/SearchRequest.js';
      const SearchRequest = globalThis.org.allbinary.logic.control.search.SearchRequest;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformHttpRequestDocument } from './TransformHttpRequestDocument.js';

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



