
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
//not GWT import const PageContext

import { WeblisketSession } from '../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
//not GWT import const WeblisketSession

import { SearchRequest } from '../../../../../../org/allbinary/logic/control/search/SearchRequest.js';
//not GWT import const SearchRequest

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformStoreDocument } from './TransformStoreDocument.js';
//sameFolderImports - not GWT import - same folder const TransformStoreDocument
import { TransformDocumentInterface } from './TransformDocumentInterface.js';
//sameFolderImports - not GWT import - same folder const TransformDocumentInterface

export class TransformStoreDocumentFactory
            extends Object
         {
        
static getInstance(...args: any[]): any {
   
    if (args.length === 2) return this.getInstance$overload1(args[0], args[1]);
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
                //@Throws(Exception.constructor)
            
    public static getInstance$overload1(pageContext: PageContext, weblisketSession: WeblisketSession): TransformDocumentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformStoreDocument(pageContext, weblisketSession) as TransformDocumentInterface;
    
}


                //@Throws(Exception.constructor)
            
    public static getInstance$overload2(searchRequest: SearchRequest): TransformDocumentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformStoreDocument(searchRequest) as TransformDocumentInterface;
    
}


private constructor (){

            super();
        }


}

