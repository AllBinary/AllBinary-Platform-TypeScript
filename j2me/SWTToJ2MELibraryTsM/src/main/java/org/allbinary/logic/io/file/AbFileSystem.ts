
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2026 AllBinary 
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
        
//not game specific package import { File } from '../../../../../java/io/File.js';
      const File = globalThis.java.io.File;

      
//not game specific package import { FileInputStream } from '../../../../../java/io/FileInputStream.js';
      const FileInputStream = globalThis.java.io.FileInputStream;

      
//not game specific package import { InputStream } from '../../../../../java/io/InputStream.js';
      const InputStream = globalThis.java.io.InputStream;

      
//not game specific package import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //SWTToJ2ME
export class AbFileSystem
            extends Object
         {
        

    private static readonly instance: AbFileSystem = new AbFileSystem();

    public static getInstance(): AbFileSystem{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFileSystem.instance;
    
}


    private readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    public isDirectoryOrFile(path: string): boolean{

    var file: File = new File(path);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return file.isDirectory() || file.isFile();
    
}


    public isDirectory(path: string): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new File(path).isDirectory();;
    
}


    public getFilesAsStringArrayForPath(currentDirPath: string): string[]{

    var file: File = new File(currentDirPath);;
    

                        if(file.exists())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return file.list();;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.getArrayInstance();;
    

                        }
                            
}


    public readAsString(fileName: string): string{

    var bytes: number[] = new Array(1000000);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.readAsString(fileName, bytes);;
    
}


    public readAsString(fileName: string, bytes: number[]): string{

    var closeable: any = NullUtil.getInstance()!.NULL_OBJECT;;
    

        try {
            
    var idFile: InputStream = new FileInputStream(fileName);;
    
closeable= idFile;
    

    var size: number = idFile!.read(bytes)!;;
    

                        if(size > 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return String.fromCharCode(...bytes);
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "readAsString", e);
    
}

         finally {
            this.close(closeable);
    

         }
        



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public close(closeable: any = {}): boolean{

        try {
            
                        if(closeable != 
                                    null
                                )
                        
                                    {
                                    
    var inputStream: InputStream = (closeable as InputStream);;
    
inputStream!.close();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CLOSE, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


}
                
            

