
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
        
import { InputStream } from '../../../../../java/io/InputStream.js';
      
import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //J2MEForJ2ME
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



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isDirectory(path: string): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getFilesAsStringArrayForPath(currentDirPath: string): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.getArrayInstance();;
    
}


    public readAsString(fileName: string): string{

    var bytes: number[] = new Array(1000000);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.readAsString(fileName, bytes);;
    
}


    public readAsString(fileName: string, bytes: number[]): string{



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
                
            

