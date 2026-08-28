
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { BufferedReader } from '../../../../java/io/BufferedReader.js';
      const BufferedReader = globalThis.java.io.BufferedReader;

      
//not game specific package import { BufferedWriter } from '../../../../java/io/BufferedWriter.js';
      const BufferedWriter = globalThis.java.io.BufferedWriter;

      
//not game specific package import { FileReader } from '../../../../java/io/FileReader.js';
      const FileReader = globalThis.java.io.FileReader;

      
//not game specific package import { FileWriter } from '../../../../java/io/FileWriter.js';
      const FileWriter = globalThis.java.io.FileWriter;

      
//not game specific package import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
      const AbFileNativeUtil = globalThis.org.allbinary.logic.io.file.AbFileNativeUtil;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BufferedIOUtil
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static copy(backupFile: AbFile, backupFileBak: AbFile){

    var line: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

    var tmpOut: BufferedWriter = new BufferedWriter(new FileWriter(AbFileNativeUtil.get(backupFileBak)));;
    

    var tmpIn: BufferedReader = new BufferedReader(new FileReader(AbFileNativeUtil.get(backupFile)));;
    

        while(true)
        {
line= tmpIn!.readLine();
    

                        if(line == 
                                    null
                                )
                        
                                    {
                                    break;

                    

                                    }
                                
tmpOut!.write(line, 0, line.length);
    
tmpOut!.newLine();
    
}

tmpOut!.flush();
    
}


}



