
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
        
import { FileNotFoundException } from '../../../../../java/io/FileNotFoundException.js';
//not GWT import const FileNotFoundException

import { Context } from '../../../../../android/content/Context.js';
//not GWT import const Context

//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
type ResourceUtil<T = any, U = any> = typeof ResourceUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ResourceUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbFile } from './AbFile.js';
//sameFolderImports - not GWT import - same folder const AbFile

export class FileFactory
            extends Object
         {
        

    private static readonly SINGLETON: FileFactory = new FileFactory(ResourceUtil.getInstance()!.getContext());
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 2 && typeof args[1] === 'string') return this.getInstance$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): FileFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileFactory.SINGLETON;
    
}


    private context: Context;

private constructor (context: Context){

            super();
        this.context= context;
    
}


                //@Throws(Exception.constructor)
            
    public isFile(path: string): boolean{

 try { this.context.openFileInput(path);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 if (caught instanceof FileNotFoundException) {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
  else { throw caught; } }
 
}


    public getContext(): Context{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.context;
    
}


                //@Throws(Exception.constructor)
            
    public getFile(filePath: string): AbFile{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFile.createAbFileFromRawPath(filePath);;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(file: AbFile, childFilePath: string): AbFile{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFile.createAbFileWithChild(file, childFilePath);;
    
}


}

