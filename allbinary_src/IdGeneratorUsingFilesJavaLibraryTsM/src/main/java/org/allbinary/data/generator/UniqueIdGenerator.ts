
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
        



import { IOException } from "../../../../java/io/IOException.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbDataInputStream } from "../../../../org/allbinary/logic/io/AbDataInputStream.js";

    
import { AbDataOutputStream } from "../../../../org/allbinary/logic/io/AbDataOutputStream.js";

    
import { AbFileInputStream } from "../../../../org/allbinary/logic/io/AbFileInputStream.js";

    
import { AbFileOutputStream } from "../../../../org/allbinary/logic/io/AbFileOutputStream.js";

    
import { DataOutputStreamFactory } from "../../../../org/allbinary/logic/io/DataOutputStreamFactory.js";

    
import { StreamUtil } from "../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { IdGeneratorInterface } from "./IdGeneratorInterface.js";

export class UniqueIdGenerator
            extends Object
         implements IdGeneratorInterface {
        

    public static readonly EXT: string = ".unq";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private newFile: AbFile

    private id: number = 0;
        
        
public constructor (){

            super();
        }


    public initialize(value: number){
var value = value

        try {
            this.newFile!.createNewFile();
    

    var idData: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(this.newFile)!;
        
        
;
    
idData!.writeLong(value);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.IDLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "initialize", e);
    

                                    }
                                
}

}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setFile(filePathName: string, name: string){
var filePathName = filePathName
var name = name
this.newFile= new AbFile(filePathName);
    
}


                //@Throws(IOException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getNext(): string{

    var idData: AbDataInputStream = 
                null
            ;
        
        
;
    

    var idOutData: AbDataOutputStream = 
                null
            ;
        
        
;
    

        try {
            
    var idFile: AbFileInputStream = new AbFileInputStream(this.newFile);
        
        
;
    
idData= new AbDataInputStream(idFile);
    
this.id= idData!.readLong();
    

    var idOutFile: AbFileOutputStream = new AbFileOutputStream(this.newFile);
        
        
;
    
idOutData= new AbDataOutputStream(idOutFile);
    
idOutData!.writeLong(this.id +1);
    

    var idLong: Long = this.id as Long;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return idLong!.toString();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.IDLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "getNext", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error";
    
}

         finally {
            StreamUtil.getInstance()!.close(idData);
    
StreamUtil.getInstance()!.close(idOutData);
    

         }
        
}


}
                
            

