
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { StringBufferInputStream } from '../../../../../java/io/StringBufferInputStream.js';
      //not GWT import const StringBufferInputStream = globalThis.java.io.StringBufferInputStream;

      
import { StreamSource } from '../../../../../javax/xml/transform/stream/StreamSource.js';
      //not GWT import const StreamSource = globalThis.javax.xml.transform.stream.StreamSource;

      
import { DomDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { AbFileLocalInputStream } from '../../../../../org/allbinary/logic/io/AbFileLocalInputStream.js';
      //not GWT import const AbFileLocalInputStream = globalThis.org.allbinary.logic.io.AbFileLocalInputStream;

      
import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
      //not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
import { Document } from '../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { XslHelper } from './XslHelper.js';
//not GWT import const  = globalThis.org.allbinary.data.tree.dom.XslHelper;

                
export class SimpleTransform
            extends Object
         {
        

    private readonly xsltFilePath: AbPath;

    private readonly dataFilePath: AbPath;

public constructor (xsltFilePath: AbPath, dataFilePath: AbPath){

            super();
        this.xsltFilePath= xsltFilePath;
    
this.dataFilePath= dataFilePath;
    
}


                //@Throws(Exception.constructor)
            
    public transform(): string{

    var inputStream: AbFileLocalInputStream = new AbFileLocalInputStream(AbFile.createAbFileFromAbPath(this.xsltFilePath));;
    

    var document: Document = DomDocumentHelper.create(new AbFileLocalInputStream(AbFile.createAbFileFromAbPath(this.dataFilePath)))!;;
    

    var result: string = XslHelper.getInstance()!.translate(new StreamSource(inputStream), new StreamSource(new StringBufferInputStream(DomDocumentHelper.toString(document))))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


}



