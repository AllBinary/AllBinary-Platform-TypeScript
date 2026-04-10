
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
        



import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { WeblisketSession } from "../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    

export class TransformHttpRequestDocumentFactory
            extends Object
         {
        

                @Throws(Exception::class)
            
    public static getInstance(pageContext: PageContext, weblisketSession: WeblisketSession): TransformDocumentInterface{
var pageContext = pageContext
var weblisketSession = weblisketSession



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformHttpRequestDocument(pageContext, weblisketSession) as TransformDocumentInterface;
    
}

private constructor (){

            super();
            }


}
                
            

