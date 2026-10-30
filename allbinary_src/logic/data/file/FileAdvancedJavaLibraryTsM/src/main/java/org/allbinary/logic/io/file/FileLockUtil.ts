
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
        
import { FileChannel } from '../../../../../java/nio/channels/FileChannel.js';
//not GWT import const FileChannel

import { FileLock } from '../../../../../java/nio/channels/FileLock.js';
//not GWT import const FileLock

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbFileOutputStream } from '../../../../../org/allbinary/logic/io/AbFileOutputStream.js';
//not GWT import const AbFileOutputStream

import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbFile } from './AbFile.js';
//sameFolderImports - not GWT import - same folder const AbFile

export class FileLockUtil
            extends Object
         {
        

    private static readonly instance: FileLockUtil = new FileLockUtil();

    public static getInstance(): FileLockUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileLockUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getAll(vector: BasicArrayList, isReturnOnFailure: boolean): BasicArrayList{

    let fileLockVector: BasicArrayList = new BasicArrayListD();;
    

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let file: AbFile = vector.get(index) as AbFile;;
    

    let fileLock: FileLock = this.getLock(file)!;;
    

                        if(fileLock != 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF("File Lock Obtained: " +file.getAbsolutePath(), this, "getAll");
    
fileLockVector!.add(fileLock);
    

                                    }
                                
                             else 
                        if(isReturnOnFailure)
                        
                                    {
                                    this.logUtil!.putF("Total Locks Obtained: " +fileLockVector!.size(), this, "getAll");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileLockVector;
    

                                    }
                                
}

this.logUtil!.putF("Total Locks Obtained: " +fileLockVector!.size(), this, "getAll");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileLockVector;
    
}


                //@Throws(Exception.constructor)
            
    public getAllPossible(vector: BasicArrayList): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getAll(vector, false);;
    
}


                //@Throws(Exception.constructor)
            
    public getAllOrNone(vector: BasicArrayList): BasicArrayList{

    let fileLockVector: BasicArrayList = this.getAll(vector, true)!;;
    

                        if(vector.size() != fileLockVector!.size())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicArrayListD();
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileLockVector;
    

                        }
                            
}

getLock(...args: any[]): any {
   
    if (args.length === 1) return this.getLock$overload1(args[0]);
   
    if (args.length === 1) return this.getLock$overload2(args[0]);
   
    if (args.length === 1) return this.getLock$overload3(args[0]);
   
   throw new TypeError('No matching overload: getLock'); }
  
                //@Throws(Exception.constructor)
            
    public getLock$overload1(file: AbFile): FileLock{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getLock(AbFileOutputStream.createFromAbFileAppend(file, true));;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put("Exception returns null", this, "getLock", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 finally {  }
}


                //@Throws(Exception.constructor)
            
    public getLock$overload2(fileOutputStream: AbFileOutputStream): FileLock{

 try { 
    let fileLock: FileLock = this.getLock(fileOutputStream!.getChannel())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileLock;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put("Exception returns null", this, "getLock", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 finally { this.logUtil!.putF("Finally - Closing FileOutputStream", this, "getLock");
    
StreamUtil.getInstance()!.close(fileOutputStream);
    
 }
}


                //@Throws(Exception.constructor)
            
    public getLock$overload3(fileChannel: FileChannel): FileLock{

 try { 
    let fileLock: FileLock = fileChannel!.tryLock()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileLock;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put("Exception returns null", this, "getLock", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 finally { this.logUtil!.putF("Finally - Closing FileChannel", this, "getLock");
    
fileChannel!.close();
    
 }
}


}

