
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
        



import { ErrorData } from "../../../../../org/allbinary/business/error/ErrorData.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

export class BasicErrorNodeUtil
            extends Object
         {
        

                @Throws(Exception::class)
            
    public static get(document: Document, errorText: string): Node{
var document = document
var errorText = errorText

        try {
            
    var node: Node = document.createElement(ErrorData.getInstance()!.NAME)!;
        
        

appendChild(ModDomHelper.createNameValueNodes(document, ErrorData.getInstance()!.TEXT, errorText))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
} catch(e: Exception)
            {



                            throw Exception("Error Node Creation Failure")
}

}

private constructor (){

            super();
            }


}
                
            

