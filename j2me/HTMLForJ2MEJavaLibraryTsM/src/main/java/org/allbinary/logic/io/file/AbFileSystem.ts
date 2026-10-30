
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
//not GWT import const InputStream

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //HTMLForJ2ME
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

readAsString(...args: any[]): any {
   
    if (args.length === 1 && typeof args[0] === 'string') return this.readAsString$overload1(args[0]);
   
    if (args.length === 2 && typeof args[0] === 'string') return this.readAsString$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: readAsString'); }
  
    public readAsString$overload1(fileName: string): string{

    let bytes: number[] = new Array(1000000);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.readAsString(fileName, bytes);;
    
}


    public readAsString$overload2(fileName: string, bytes: number[]): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public close(closeable: any): boolean{

 try { 
                        if(closeable != 
                                    null
                                )
                        
                                    {
                                    
    let inputStream: InputStream = (closeable as InputStream);;
    
inputStream!.close();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CLOSE, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


}

