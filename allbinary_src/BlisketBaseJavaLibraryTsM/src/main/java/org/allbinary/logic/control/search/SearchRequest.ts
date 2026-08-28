
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { PageContext } from '../../../../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { AbContext } from '../../../../../org/allbinary/business/context/AbContext.js';
      const AbContext = globalThis.org.allbinary.business.context.AbContext;

      
//not game specific package import { StoreFrontInterface } from '../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { ModDomHelper } from '../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { Document } from '../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SearchParams } from './SearchParams.js';
import { SearchData } from './SearchData.js';

export class SearchRequest extends AbContext {
        

    private xslFile: string;

    private pageName: string;

    private contentType: string;

    private searchParams: SearchParams;

    private storeFront: StoreFrontInterface;

public constructor (storeFront: StoreFrontInterface, searchParams: SearchParams, xslFile: string, contentType: string, propertiesHashMap: HashMap<any, any>, pageContext: PageContext){
            super(propertiesHashMap, pageContext);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.storeFront= storeFront;
    
this.searchParams= searchParams;
    
this.xslFile= xslFile;
    
this.pageName= this.pageName;
    
this.contentType= contentType;
    
}


    public setStoreFront(storeFront: StoreFrontInterface){
this.storeFront= storeFront;
    
}


    public setParams(searchParams: SearchParams){
this.searchParams= searchParams;
    
}


    public setXslFile(value: string){
this.xslFile= value;
    
}


    public setFileBaseName(value: string){
this.pageName= value;
    
}


    public setContentType(value: string){
this.contentType= value;
    
}


    public getStoreFront(): StoreFrontInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeFront;
    
}


    public getParams(): SearchParams{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.searchParams;
    
}


    public getXslFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.xslFile;
    
}


    public getFileBaseName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pageName;
    
}


    public getContentType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.contentType;
    
}


                //@Throws(Exception.constructor)
            
    public getFileBaseNameNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, SearchData.FILENAME, this.getFileBaseName());;
    
}


}



