
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
        
import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformDocumentInterface } from './TransformDocumentInterface.js';
//not GWT import const  = globalThis.org.allbinary.logic.visual.transform.data.TransformDocumentInterface;

                
export class TransformDocument
            extends Object
         implements TransformDocumentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private baseNode: Node;

    private document: Document;

public constructor (){

            super();
        
        try {
            this.document= DomDocumentHelper.create();
    

    var allbinaryNode: Node = this.document.createElement("allbinary")!;;
    
this.baseNode= allbinaryNode;
    
this.document.appendChild(this.baseNode);
    

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



