
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
        
import { HttpServletRequest } from '../../../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

import { XmlDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/XmlDocumentHelper.js';
//not GWT import const XmlDocumentHelper

import { AcceptableResponseGenerator } from '../../../../../../org/allbinary/logic/communication/http/AcceptableResponseGenerator.js';
//not GWT import const AcceptableResponseGenerator

import { WeblisketSession } from '../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
//not GWT import const WeblisketSession

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { SearchRequest } from '../../../../../../org/allbinary/logic/control/search/SearchRequest.js';
//not GWT import const SearchRequest

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformDocumentInterface } from './TransformDocumentInterface.js';
//sameFolderImports - not GWT import - same folder const TransformDocumentInterface

export class TransformHttpRequestDocument
            extends Object
         implements TransformDocumentInterface {
        

    private static readonly language: string = "en";

    private static readonly local: string = "US";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private baseNode: Node;

    private document: Document;

    public constructor(...args: any[]) {
        super();if(args.length === 2) {
            
            this.constructor$0(args[0], args[1]);
            
        }
        else if(args.length === 1) {
            
            this.constructor$1(args[0]);
            
        }
        
    }
    
    private constructor$0(pageContext: PageContext, weblisketSession: WeblisketSession): void {
        
 try { 
    let contentType: string = AcceptableResponseGenerator.getInstance()!.get(pageContext!.getRequest() as HttpServletRequest)!;;
    
this.document= DomDocumentHelper.create();
    

    let contentTypeNode: Node = this.document.createElement(contentType)!;;
    

    let languageTypeNode: Node = this.document.createElement(language)!;;
    

    let localTypeNode: Node = this.document.createElement(local)!;;
    
this.baseNode= localTypeNode;
    
languageTypeNode!.appendChild(localTypeNode);
    
contentTypeNode!.appendChild(languageTypeNode);
    
this.document.appendChild(contentTypeNode);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.putF(this.log(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 

    }
    
    private constructor$1(searchRequest: SearchRequest): void {
        
 try { 
    let contentType: string = searchRequest!.getContentType()!;;
    
this.document= DomDocumentHelper.create();
    

    let contentTypeNode: Node = this.document.createElement(contentType)!;;
    

    let languageTypeNode: Node = this.document.createElement(language)!;;
    

    let localTypeNode: Node = this.document.createElement(local)!;;
    
this.baseNode= localTypeNode;
    
languageTypeNode!.appendChild(localTypeNode);
    
contentTypeNode!.appendChild(languageTypeNode);
    
this.document.appendChild(contentTypeNode);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e;
                    

 }
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

    let stringBuffer: StringMaker = new StringMaker();;
    

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
    
stringBuffer!.append(XmlDocumentHelper.toString(this.document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

