
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
        
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const ByteArrayOutputStream

import { StreamResult } from '../../../../../javax/xml/transform/stream/StreamResult.js';
//not GWT import const StreamResult

import { StreamSource } from '../../../../../javax/xml/transform/stream/StreamSource.js';
//not GWT import const StreamSource

import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { XslHelper } from './XslHelper.js';
//sameFolderImports - not GWT import - same folder const XslHelper

export class AbXslHelper
            extends Object
         {
        

    private static readonly instance: AbXslHelper = new AbXslHelper();

    public static getInstance(): AbXslHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbXslHelper.instance;
    
}

translate(...args: any[]): any {
   
    if (args.length === 2) return this.translate$overload1(args[0], args[1]);
   
    if (args.length === 2) return this.translate$overload2(args[0], args[1]);
   
    if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string') return this.translate$overload3(args[0], args[1]);
   
   throw new TypeError('No matching overload: translate'); }
  
                //@Throws(Exception.constructor)
            
    public translate$overload1(xslFile: AbFile, xmlFile: AbFile): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(xslFile!.getAbsolutePath(), xmlFile!.getAbsolutePath());;
    
}


                //@Throws(Exception.constructor)
            
    public translate$overload2(xslPath: AbPath, xmlPath: AbPath): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.translate(xslPath!.getPath(), xmlPath!.getPath());;
    
}


                //@Throws(Exception.constructor)
            
    public translate$overload3(xsltFilePath: string, xmlFilePath: string): string{

 try { 
    let outputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return XslHelper.getInstance()!.translate(new StreamSource(xsltFilePath), new StreamSource(xmlFilePath), new StreamResult(outputStream))!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


}

