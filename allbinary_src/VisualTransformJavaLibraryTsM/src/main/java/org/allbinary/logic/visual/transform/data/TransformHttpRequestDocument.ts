
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

    
import { DomDocumentHelper } from "../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { AcceptableResponseGenerator } from "../../../../../../org/allbinary/logic/communication/http/AcceptableResponseGenerator.js";

    
import { WeblisketSession } from "../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SearchRequest } from "../../../../../../org/allbinary/logic/control/search/SearchRequest.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class TransformHttpRequestDocument
            extends Object
        
                , TransformDocumentInterface {
        

    private static readonly language: string = "en";
        
        

    private static readonly local: string = "US";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private baseNode: Node

    private document: Document
public constructor (pageContext: PageContext, weblisketSession: WeblisketSession){

            super();
            var pageContext = pageContext
var weblisketSession = weblisketSession

        try {
            
    var contentType: string = AcceptableResponseGenerator.getInstance()!.get(pageContext!.getRequest();

                         as HttpServletRequest)!;
        
        
;
    
this.document= DomDocumentHelper.create();
    

    var contentTypeNode: Node = document.createElement(contentType)!;
        
        
;
    

    var languageTypeNode: Node = document.createElement(language)!;
        
        
;
    

    var localTypeNode: Node = document.createElement(local)!;
        
        
;
    
this.baseNode= localTypeNode;
    
languageTypeNode!.appendChild(localTypeNode);
    
contentTypeNode!.appendChild(languageTypeNode);
    
document.appendChild(contentTypeNode);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.putF(this.log(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e
}

}

public constructor (searchRequest: SearchRequest){

            super();
            var searchRequest = searchRequest

        try {
            
    var contentType: string = searchRequest!.getContentType()!;
        
        
;
    
this.document= DomDocumentHelper.create();
    

    var contentTypeNode: Node = document.createElement(contentType)!;
        
        
;
    

    var languageTypeNode: Node = document.createElement(language)!;
        
        
;
    

    var localTypeNode: Node = document.createElement(local)!;
        
        
;
    
this.baseNode= localTypeNode;
    
languageTypeNode!.appendChild(localTypeNode);
    
contentTypeNode!.appendChild(languageTypeNode);
    
document.appendChild(contentTypeNode);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e
}

}


    public getBaseNode(): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.baseNode;
    
}


    public getDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.document;
    
}


                //@Throws(Error::class)
            
    public log(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(this.baseNode != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("BaseNode: ");
    
stringBuffer!.append(this.baseNode!.getNodeName());
    

                                    }
                                
                        else {
                            stringBuffer!.append("Log-Error: BaseNode is Null");
    

                        }
                            
stringBuffer!.append("\nDocument: ");
    
stringBuffer!.append(DomDocumentHelper.toString(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

