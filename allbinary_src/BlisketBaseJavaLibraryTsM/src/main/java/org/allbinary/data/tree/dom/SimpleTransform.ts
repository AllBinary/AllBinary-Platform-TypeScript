
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
        



import { StringBufferInputStream } from "../../../../../java/io/StringBufferInputStream.js";

    
import { StreamSource } from "../../../../../javax/xml/transform/stream/StreamSource.js";

    
import { DomDocumentHelper } from "../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { AbFileLocalInputStream } from "../../../../../org/allbinary/logic/io/AbFileLocalInputStream.js";

    
import { AbFile } from "../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    

import { XslHelper } from "./XslHelper.js";

export class SimpleTransform
            extends Object
         {
        

    private readonly xsltFilePath: AbPath

    private readonly dataFilePath: AbPath
public constructor (xsltFilePath: AbPath, dataFilePath: AbPath){

            super();
            var xsltFilePath = xsltFilePath
var dataFilePath = dataFilePath
this.xsltFilePath= xsltFilePath;
    
this.dataFilePath= dataFilePath;
    
}


                //@Throws(Error::class)
            
    public transform(): string{

    var inputStream: AbFileLocalInputStream = new AbFileLocalInputStream(new AbFile(xsltFilePath));
        
        
;
    

    var document: Document = DomDocumentHelper.create(new AbFileLocalInputStream(new AbFile(dataFilePath)))!;
        
        
;
    

    var result: string = XslHelper.getInstance()!.translate(new StreamSource(inputStream), new StreamSource(new StringBufferInputStream(DomDocumentHelper.toString(document))))!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


}
                
            

