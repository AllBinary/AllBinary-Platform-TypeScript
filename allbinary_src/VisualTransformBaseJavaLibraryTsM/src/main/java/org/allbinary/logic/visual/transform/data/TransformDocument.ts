
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
        



import { DomDocumentHelper } from "../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

export class TransformDocument
            extends Object
        
                , TransformDocumentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private baseNode: Node

    private document: Document
public constructor (){

            super();
            
        try {
            this.document= DomDocumentHelper.create()

    var allbinaryNode: Node = document.createElement("allbinary")!;
        
        

this.baseNode= allbinaryNode
document.appendChild(this.baseNode)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(this.log(), this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e)

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
        
        


                        if(this.baseNode != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append("BaseNode: ")
stringBuffer!.append(this.baseNode!.getNodeName())

                                    }
                                
                        else {
                            stringBuffer!.append("Log-Error: BaseNode is Null")

                        }
                            
stringBuffer!.append("\nDocument: ")
stringBuffer!.append(DomDocumentHelper.toString(document))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

