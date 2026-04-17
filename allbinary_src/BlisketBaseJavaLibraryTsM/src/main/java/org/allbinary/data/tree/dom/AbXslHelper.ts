
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
        



import { ByteArrayOutputStream } from "../../../../../java/io/ByteArrayOutputStream.js";

    
import { StreamResult } from "../../../../../javax/xml/transform/stream/StreamResult.js";

    
import { StreamSource } from "../../../../../javax/xml/transform/stream/StreamSource.js";

    
import { AbFile } from "../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { XslHelper } from "./XslHelper.js";

export class AbXslHelper
            extends Object
         {
        

    private static readonly instance: AbXslHelper = new AbXslHelper();
        
        

    public static getInstance(): AbXslHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public translate(xslFile: AbFile, xmlFile: AbFile): string{
    //var xslFile = xslFile
    //var xmlFile = xmlFile



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(xslFile!.getAbsolutePath(), xmlFile!.getAbsolutePath());

                        ;
    
}


                //@Throws(Error::class)
            
    public translate(xslPath: AbPath, xmlPath: AbPath): string{
    //var xslPath = xslPath
    //var xmlPath = xmlPath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(xslPath!.getPath(), xmlPath!.getPath());

                        ;
    
}


                //@Throws(Error::class)
            
    public translate(xsltFilePath: string, xmlFilePath: string): string{
    //var xsltFilePath = xsltFilePath
    //var xmlFilePath = xmlFilePath

        try {
            
    var outputStream: ByteArrayOutputStream = new ByteArrayOutputStream();
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return XslHelper.getInstance()!.translate(new StreamSource(xsltFilePath), new StreamSource(xmlFilePath), new StreamResult(outputStream))!.toString();

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

}


}
                
            

