
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2022 AllBinary
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
        
//not game specific package import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
      const ByteArrayOutputStream = globalThis.java.io.ByteArrayOutputStream;

      
//not game specific package import { StreamResult } from '../../../../../javax/xml/transform/stream/StreamResult.js';
      const StreamResult = globalThis.javax.xml.transform.stream.StreamResult;

      
//not game specific package import { StreamSource } from '../../../../../javax/xml/transform/stream/StreamSource.js';
      const StreamSource = globalThis.javax.xml.transform.stream.StreamSource;

      
//not game specific package import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { XslHelper } from './XslHelper.js';

export class AbXslHelper
            extends Object
         {
        

    private static readonly instance: AbXslHelper = new AbXslHelper();

    public static getInstance(): AbXslHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbXslHelper.instance;
    
}


                //@Throws(Exception.constructor)
            
    public translate(xslFile: AbFile, xmlFile: AbFile): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(xslFile!.getAbsolutePath(), xmlFile!.getAbsolutePath());;
    
}


                //@Throws(Exception.constructor)
            
    public translate(xslPath: AbPath, xmlPath: AbPath): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(xslPath!.getPath(), xmlPath!.getPath());;
    
}


                //@Throws(Exception.constructor)
            
    public translate(xsltFilePath: string, xmlFilePath: string): string{

        try {
            
    var outputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return XslHelper.getInstance()!.translate(new StreamSource(xsltFilePath), new StreamSource(xmlFilePath), new StreamResult(outputStream))!.toString();;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


}



