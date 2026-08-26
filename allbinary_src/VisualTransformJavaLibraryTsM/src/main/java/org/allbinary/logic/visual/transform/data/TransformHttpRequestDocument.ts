
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
        
//not game specific package import { HttpServletRequest } from '../../../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { AcceptableResponseGenerator } from '../../../../../../org/allbinary/logic/communication/http/AcceptableResponseGenerator.js';
      const AcceptableResponseGenerator = globalThis.org.allbinary.logic.communication.http.AcceptableResponseGenerator;

      
//not game specific package import { WeblisketSession } from '../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { SearchRequest } from '../../../../../../org/allbinary/logic/control/search/SearchRequest.js';
      const SearchRequest = globalThis.org.allbinary.logic.control.search.SearchRequest;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { Document } from '../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformDocumentInterface } from './TransformDocumentInterface.js';

export class TransformHttpRequestDocument
            extends Object
         implements TransformDocumentInterface {
        

    private static readonly language: string = "en";

    private static readonly local: string = "US";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private baseNode: Node;

    private document: Document;

public constructor (pageContext: PageContext, weblisketSession: WeblisketSession){

            super();
        
        try {
            
    var contentType: string = AcceptableResponseGenerator.getInstance()!.get(pageContext!.getRequest() as HttpServletRequest)!;;
    
this.document= DomDocumentHelper.create();
    

    var contentTypeNode: Node = this.document.createElement(contentType)!;;
    

    var languageTypeNode: Node = this.document.createElement(language)!;;
    

    var localTypeNode: Node = this.document.createElement(local)!;;
    
this.baseNode= localTypeNode;
    
languageTypeNode!.appendChild(localTypeNode);
    
contentTypeNode!.appendChild(languageTypeNode);
    
this.document.appendChild(contentTypeNode);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.putF(this.log(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e;
                    
}

}


public constructor (searchRequest: SearchRequest){

            super();
        
        try {
            
    var contentType: string = searchRequest!.getContentType()!;;
    
this.document= DomDocumentHelper.create();
    

    var contentTypeNode: Node = this.document.createElement(contentType)!;;
    

    var languageTypeNode: Node = this.document.createElement(language)!;;
    

    var localTypeNode: Node = this.document.createElement(local)!;;
    
this.baseNode= localTypeNode;
    
languageTypeNode!.appendChild(localTypeNode);
    
contentTypeNode!.appendChild(languageTypeNode);
    
this.document.appendChild(contentTypeNode);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e;
                    
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


                //@Throws(Exception.constructor)
            
    public log(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    

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
    
stringBuffer!.append(DomDocumentHelper.toString(this.document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

