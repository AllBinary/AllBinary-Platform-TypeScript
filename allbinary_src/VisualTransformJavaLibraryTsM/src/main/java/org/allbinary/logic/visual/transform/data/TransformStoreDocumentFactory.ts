
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { WeblisketSession } from '../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      //not GWT import const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
import { SearchRequest } from '../../../../../../org/allbinary/logic/control/search/SearchRequest.js';
      //not GWT import const SearchRequest = globalThis.org.allbinary.logic.control.search.SearchRequest;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformStoreDocument } from './TransformStoreDocument.js';
//not GWT import const TransformStoreDocument = globalThis.org.allbinary.logic.visual.transform.data.TransformStoreDocument;

                import { TransformDocumentInterface } from './TransformDocumentInterface.js';
//not GWT import const TransformDocumentInterface = globalThis.org.allbinary.logic.visual.transform.data.TransformDocumentInterface;

                
export class TransformStoreDocumentFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(pageContext: PageContext, weblisketSession: WeblisketSession): TransformDocumentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformStoreDocument(pageContext, weblisketSession) as TransformDocumentInterface;
    
}


                //@Throws(Exception.constructor)
            
    public static getInstance(searchRequest: SearchRequest): TransformDocumentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformStoreDocument(searchRequest) as TransformDocumentInterface;
    
}


private constructor (){

            super();
        }


}



