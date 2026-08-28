
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
        
//not game specific package import { Transformer } from '../../../../../../javax/xml/transform/Transformer.js';
      const Transformer = globalThis.javax.xml.transform.Transformer;

      
//not game specific package import { TransformerFactory } from '../../../../../../javax/xml/transform/TransformerFactory.js';
      const TransformerFactory = globalThis.javax.xml.transform.TransformerFactory;

      
//not game specific package import { DOMSource } from '../../../../../../javax/xml/transform/dom/DOMSource.js';
      const DOMSource = globalThis.javax.xml.transform.dom.DOMSource;

      
//not game specific package import { StreamResult } from '../../../../../../javax/xml/transform/stream/StreamResult.js';
      const StreamResult = globalThis.javax.xml.transform.stream.StreamResult;

      
//not game specific package import { AbDataOutputStream } from '../../../../../../org/allbinary/logic/io/AbDataOutputStream.js';
      const AbDataOutputStream = globalThis.org.allbinary.logic.io.AbDataOutputStream;

      
//not game specific package import { AbFileInputStream } from '../../../../../../org/allbinary/logic/io/AbFileInputStream.js';
      const AbFileInputStream = globalThis.org.allbinary.logic.io.AbFileInputStream;

      
//not game specific package import { DataOutputStreamFactory } from '../../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
      const DataOutputStreamFactory = globalThis.org.allbinary.logic.io.DataOutputStreamFactory;

      
//not game specific package import { StreamUtil } from '../../../../../../org/allbinary/logic/io/StreamUtil.js';
      const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
//not game specific package import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { Document } from '../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DomDocumentHelper } from './DomDocumentHelper.js';

export class DomDocumentFileHelper
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static createDocument(xmlFile: AbFile): Document{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomDocumentHelper.create(new AbFileInputStream(xmlFile));;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public static save(file: AbFile, document: Document){

    var dataOutputStream: AbDataOutputStream = 
                null
            ;;
    

        try {
            
    var copyTransformerFactory: TransformerFactory = TransformerFactory.newInstance()!;;
    

    var copyTransformer: Transformer = copyTransformerFactory!.newTransformer()!;;
    

    var domSource: DOMSource = new DOMSource(document);;
    

                        if(file.isFile())
                        
                                    {
                                    file.delete();
    

                                    }
                                
file.createNewFile();
    
dataOutputStream= DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(file);
    

    var streamResult: StreamResult = new StreamResult(dataOutputStream);;
    
copyTransformer!.transform(domSource, streamResult);
    
dataOutputStream!.flush();
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

         finally {
            StreamUtil.getInstance()!.close(dataOutputStream);
    

         }
        
}


private constructor (){

            super();
        }


}



