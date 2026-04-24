
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
        



import { Transformer } from "../../../../../../javax/xml/transform/Transformer.js";

    
import { TransformerFactory } from "../../../../../../javax/xml/transform/TransformerFactory.js";

    
import { DOMSource } from "../../../../../../javax/xml/transform/dom/DOMSource.js";

    
import { StreamResult } from "../../../../../../javax/xml/transform/stream/StreamResult.js";

    
import { AbDataOutputStream } from "../../../../../../org/allbinary/logic/io/AbDataOutputStream.js";

    
import { AbFileInputStream } from "../../../../../../org/allbinary/logic/io/AbFileInputStream.js";

    
import { DataOutputStreamFactory } from "../../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js";

    
import { StreamUtil } from "../../../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbFile } from "../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DomDocumentHelper } from "./DomDocumentHelper.js";

export class DomDocumentFileHelper
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static create(xmlFile: AbFile): Document{
var xmlFile = xmlFile

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomDocumentHelper.create(new AbFileInputStream(xmlFile));;
    

                //: 
} catch(e) 
            {



                            throw e
}

}


                //@Throws(Error::class)
            
    public static save(file: AbFile, document: Document){
var file = file
var document = document

    var dataOutputStream: AbDataOutputStream = 
                null
            ;
        
        
;
    

        try {
            
    var copyTransformerFactory: TransformerFactory = TransformerFactory.newInstance()!;
        
        
;
    

    var copyTransformer: Transformer = copyTransformerFactory!.newTransformer()!;
        
        
;
    

    var domSource: DOMSource = new DOMSource(document);
        
        
;
    

                        if(file.isFile())
                        
                                    {
                                    file.delete();
    

                                    }
                                
file.createNewFile();
    
dataOutputStream= DataOutputStreamFactory.getInstance()!.getInstance(file);
    

    var streamResult: StreamResult = new StreamResult(dataOutputStream);
        
        
;
    
copyTransformer!.transform(domSource, streamResult);
    
dataOutputStream!.flush();
    

                //: 
} catch(e) 
            {



                            throw e
}

         finally {
            StreamUtil.getInstance()!.close(dataOutputStream);
    

         }
        
}

private constructor (){

            super();
        }


}
                
            

