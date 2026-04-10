
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
        



import { PATH_GLOBALS } from "../../../../org/allbinary/globals/PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbDataInputStream } from "../../../../org/allbinary/logic/io/AbDataInputStream.js";

    
import { AbDataOutputStream } from "../../../../org/allbinary/logic/io/AbDataOutputStream.js";

    
import { AbFileInputStream } from "../../../../org/allbinary/logic/io/AbFileInputStream.js";

    
import { DataOutputStreamFactory } from "../../../../org/allbinary/logic/io/DataOutputStreamFactory.js";

    
import { FileStreamFactory } from "../../../../org/allbinary/logic/io/FileStreamFactory.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { DatabaseEncoder } from "../../../../org/allbinary/logic/system/security/crypt/DatabaseEncoder.js";

    
import { WeakCrypt } from "../../../../org/allbinary/logic/system/security/crypt/WeakCrypt.js";

    

export class LicenseInitInfoUtil
            extends Object
         {
        

    private static readonly instance: LicenseInitInfoUtil = new LicenseInitInfoUtil();
        
        

    public static getInstance(): LicenseInitInfoUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    public readonly INITFILENAME: string = "licenseinitdata.dat";
        
        

    public readonly ABOUT: string = "about";
        
        

    public readonly PRIVACY_POLICY: string = "privacy_policy";
        
        

    private filePath: string = stringUtil!.EMPTY_STRING;
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setFilePath(filePath: string){
var filePath = filePath
this.filePath= filePath
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public write(initData: LicenseInitInfo){
var initData = initData

    
                        if(this.filePath == stringUtil!.EMPTY_STRING)
                        
                                    {
                                    this.filePath= URLGLOBALS.getMainPath() +PATH_GLOBALS.getInstance()!.INIT_PATH

                                    }
                                

        try {
            
    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(this.filePath, INITFILENAME)!;
        
        


    var licenseIdCrypted: ByteArray = WeakCrypt(1).
                            encrypt(initData!.getLicenseId())!.encodeToByteArray()!;
        
        

writeUTF(DatabaseEncoder.encode(licenseIdCrypted))

    var numberOfLicenseServers: number = initData!.getNumberOfServers()!;
        
        

writeInt(numberOfLicenseServers)

    var licenseServerCrypted: ByteArray





                        for (
    var index: number = 0;
        
        
index < numberOfLicenseServers; index++)
        {
licenseServerCrypted= WeakCrypt(3).
                            encrypt(initData!.getServer(index))!.encodeToByteArray()
writeUTF(DatabaseEncoder.encode(licenseServerCrypted))
}

} catch(e: Exception)
            {
put("Command Failed: " +INITFILENAME, this, "write", e)
delete(this.filePath, INITFILENAME)



                            throw e
}

}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public read(): LicenseInitInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return readAgain(0);
    
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public readAgain(initializeCounter: number): LicenseInitInfo{
var initializeCounter = initializeCounter

    var METHOD_NAME: string = "readAgain";
        
        


    
                        if(this.filePath == stringUtil!.EMPTY_STRING)
                        
                                    {
                                    this.filePath= URLGLOBALS.getMainPath() +PATH_GLOBALS.getInstance()!.INIT_PATH

                                    }
                                

        try {
            put("LicenseInitInfo File: " +INITFILENAME, this, METHOD_NAME)

    var fileStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;
        
        


    var iFile: AbFileInputStream = fileStreamFactory!.getFileInputStreamInstance(this.filePath, INITFILENAME)!;
        
        


    
                        if(iFile != 
                                    null
                                )
                        
                                    {
                                    
    var iData: AbDataInputStream = new AbDataInputStream(iFile);
        
        


    var initInfo: LicenseInitInfo = new LicenseInitInfo();
        
        


    var decodedByteArray: ByteArray = DatabaseEncoder.decode(iData!.readUTF())!;
        
        


    var licenseIdDecoded: string = new decodedByteArray.decodeToString();
        
        

setLicenseId(WeakCrypt(1).
                            decrypt(licenseIdDecoded))

    var numberOfLicenseServers: number = iData!.readInt()!;
        
        


    var NEXT_FILE: string = "Next License Server From File: ";
        
        


    var licenseServerDecoded: string





                        for (
    var index: number = 0;
        
        
index < numberOfLicenseServers; index++)
        {
decodedByteArray= DatabaseEncoder.decode(iData!.readUTF())
licenseServerDecoded= decodedByteArray.decodeToString()
setServer(WeakCrypt(3).
                            decrypt(licenseServerDecoded), index)
put(NEXT_FILE +initInfo!.getServer(index), this, METHOD_NAME)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return initInfo;
    

                                    }
                                
                        else {
                            


                            throw Exception("Could Not Load License InitInfo: " +INITFILENAME)

                        }
                            
} catch(e: Exception)
            {

        try {
            put("Command Failed: " +INITFILENAME, this, METHOD_NAME, e)
} catch(se: Exception)
            {
put("LicenseInitInfo Read Retry: " +INITFILENAME, this, "readAgain()", se)
}




                            throw Exception("LicenseInitInfo Read Error: " +INITFILENAME)
}

}


    public getFilePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return filePath;
    
}


}
                
            

