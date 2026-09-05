
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
//not GWT import const FileChannel = globalThis.java.nio.channels.FileChannel;

      
import { FileLock } from '../../../../../java/nio/channels/FileLock.js';
//not GWT import const FileLock = globalThis.java.nio.channels.FileLock;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbFileOutputStream } from '../../../../../org/allbinary/logic/io/AbFileOutputStream.js';
//not GWT import const AbFileOutputStream = globalThis.org.allbinary.logic.io.AbFileOutputStream;

      
import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbFile } from './AbFile.js';
//not GWT import - same folder const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

                
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

    var fileLockVector: BasicArrayList = new BasicArrayListD();;
    

    var size: number = vector.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var file: AbFile = vector.get(index) as AbFile;;
    

    var fileLock: FileLock = this.getLock(file)!;;
    

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

    var fileLockVector: BasicArrayList = this.getAll(vector, true)!;;
    

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


                //@Throws(Exception.constructor)
            
    public getLock(file: AbFile): FileLock{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getLock(AbFileOutputStream.createFromAbFileAppend(file, true));;
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Exception returns null", this, "getLock", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

         finally {
            
         }
        
}


                //@Throws(Exception.constructor)
            
    public getLock(fileOutputStream: AbFileOutputStream): FileLock{

        try {
            
    var fileLock: FileLock = this.getLock(fileOutputStream!.getChannel())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileLock;
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Exception returns null", this, "getLock", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

         finally {
            this.logUtil!.putF("Finally - Closing FileOutputStream", this, "getLock");
    
StreamUtil.getInstance()!.close(fileOutputStream);
    

         }
        
}


                //@Throws(Exception.constructor)
            
    public getLock(fileChannel: FileChannel): FileLock{

        try {
            
    var fileLock: FileLock = fileChannel!.tryLock()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileLock;
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Exception returns null", this, "getLock", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

         finally {
            this.logUtil!.putF("Finally - Closing FileChannel", this, "getLock");
    
fileChannel!.close();
    

         }
        
}


}



