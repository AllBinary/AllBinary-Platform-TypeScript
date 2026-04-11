
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
        



            import Vector from "@ohos.util.Vector";
        
import { FileChannel } from "../../../../../java/nio/channels/FileChannel.js";

    
import { FileLock } from "../../../../../java/nio/channels/FileLock.js";

    

//import { Vector } from "../../../../../java/util/Vector.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbFileOutputStream } from "../../../../../org/allbinary/logic/io/AbFileOutputStream.js";

    
import { StreamUtil } from "../../../../../org/allbinary/logic/io/StreamUtil.js";

    

export class FileLockUtil
            extends Object
         {
        

    private static readonly instance: FileLockUtil = new FileLockUtil();
        
        

    public static getInstance(): FileLockUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getAll(vector: Vector, isReturnOnFailure: boolean): Vector{
var vector = vector
var isReturnOnFailure = isReturnOnFailure

    var fileLockVector: Vector = new Vector();
        
        
;
    

    var size: number = vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var file: AbFile = vector.get(index);

                         as AbFile;
        
        
;
    

    var fileLock: FileLock = getLock(file)!;
        
        
;
    

                        if(fileLock != 
                                    null
                                )
                        
                                    {
                                    logUtil!.put("File Lock Obtained: " +file.getAbsolutePath(), this, "getAll");
    
fileLockVector!.add(fileLock);
    

                                    }
                                
                             else 
                        if(isReturnOnFailure)
                        
                                    {
                                    logUtil!.put("Total Locks Obtained: " +fileLockVector!.length, this, "getAll");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileLockVector;
    

                                    }
                                
}

logUtil!.put("Total Locks Obtained: " +fileLockVector!.length, this, "getAll");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileLockVector;
    
}


                //@Throws(Error::class)
            
    public getAllPossible(vector: Vector): Vector{
var vector = vector



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getAll(vector, false);

                        ;
    
}


                //@Throws(Error::class)
            
    public getAllOrNone(vector: Vector): Vector{
var vector = vector

    var fileLockVector: Vector = getAll(vector, true)!;
        
        
;
    

                        if(vector.length != fileLockVector!.length)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Vector();
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileLockVector;
    

                        }
                            
}


                //@Throws(Error::class)
            
    public getLock(file: AbFile): FileLock{
var file = file

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getLock(AbFileOutputStream(file, true));

                        ;
    

                //: 
} catch(e) 
            {
logUtil!.put("Exception returns null", this, "getLock", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

         finally {
            
         }
        
}


                //@Throws(Error::class)
            
    public getLock(fileOutputStream: AbFileOutputStream): FileLock{
var fileOutputStream = fileOutputStream

        try {
            
    var fileLock: FileLock = getLock(fileOutputStream!.getChannel())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileLock;
    

                //: 
} catch(e) 
            {
logUtil!.put("Exception returns null", this, "getLock", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

         finally {
            logUtil!.put("Finally - Closing FileOutputStream", this, "getLock");
    
StreamUtil.getInstance()!.close(fileOutputStream);
    

         }
        
}


                //@Throws(Error::class)
            
    public getLock(fileChannel: FileChannel): FileLock{
var fileChannel = fileChannel

        try {
            
    var fileLock: FileLock = fileChannel!.tryLock()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileLock;
    

                //: 
} catch(e) 
            {
logUtil!.put("Exception returns null", this, "getLock", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

         finally {
            logUtil!.put("Finally - Closing FileChannel", this, "getLock");
    
fileChannel!.close();
    

         }
        
}


}
                
            

