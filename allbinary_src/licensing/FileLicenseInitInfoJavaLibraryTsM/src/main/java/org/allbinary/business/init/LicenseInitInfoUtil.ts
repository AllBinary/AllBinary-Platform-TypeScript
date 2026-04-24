
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LicenseInitInfo } from "./LicenseInitInfo.js";

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
this.filePath= filePath;
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public write(initData: LicenseInitInfo){
var initData = initData

                        if(this.filePath == this.stringUtil!.EMPTY_STRING)
                        
                                    {
                                    this.filePath= URLGLOBALS.getMainPath() +PATH_GLOBALS.getInstance()!.INIT_PATH;
    

                                    }
                                

        try {
            
    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(this.filePath, INITFILENAME)!;
        
        
;
    

    var licenseIdCrypted: number[] = new WeakCrypt(1).
                            encrypt(initData!.getLicenseId())!.encodeToByteArray()!;
        
        
;
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(licenseIdCrypted));
    

    var numberOfLicenseServers: number = initData!.getNumberOfServers()!;
        
        
;
    
dataOutputStream!.writeInt(numberOfLicenseServers);
    

    var licenseServerCrypted: number[]
;
    




                        for (
    var index: number = 0;
        
        
index < numberOfLicenseServers; index++)
        {
licenseServerCrypted= new WeakCrypt(3).
                            encrypt(initData!.getServer(index))!.encodeToByteArray();
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(licenseServerCrypted));
    
}


                //: 
} catch(e) 
            {
this.logUtil!.put("Command Failed: " +INITFILENAME, this, "write", e);
    
FileStreamFactory.getInstance()!.delete(this.filePath, INITFILENAME);
    



                            throw e
}

}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public read(): LicenseInitInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return readAgain(0);;
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public readAgain(initializeCounter: number): LicenseInitInfo{
var initializeCounter = initializeCounter

    var METHOD_NAME: string = "readAgain";
        
        
;
    

                        if(this.filePath == this.stringUtil!.EMPTY_STRING)
                        
                                    {
                                    this.filePath= URLGLOBALS.getMainPath() +PATH_GLOBALS.getInstance()!.INIT_PATH;
    

                                    }
                                

        try {
            this.logUtil!.putF("LicenseInitInfo File: " +this.INITFILENAME, this, METHOD_NAME);
    

    var fileStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;
        
        
;
    

    var iFile: AbFileInputStream = fileStreamFactory!.getFileInputStreamInstance(this.filePath, INITFILENAME)!;
        
        
;
    

                        if(iFile != 
                                    null
                                )
                        
                                    {
                                    
    var iData: AbDataInputStream = new AbDataInputStream(iFile);
        
        
;
    

    var initInfo: LicenseInitInfo = new LicenseInitInfo();
        
        
;
    

    var decodedByteArray: number[] = DatabaseEncoder.decode(iData!.readUTF())!;
        
        
;
    

    var licenseIdDecoded: string = decodedByteArray.decodeToString();
        
        
;
    
initInfo!.setLicenseId(new WeakCrypt(1).
                            decrypt(licenseIdDecoded));
    

    var numberOfLicenseServers: number = iData!.readInt()!;
        
        
;
    

    var NEXT_FILE: string = "Next License Server From File: ";
        
        
;
    

    var licenseServerDecoded: string
;
    




                        for (
    var index: number = 0;
        
        
index < numberOfLicenseServers; index++)
        {
decodedByteArray= DatabaseEncoder.decode(iData!.readUTF());
    
licenseServerDecoded= decodedByteArray.decodeToString();
    
initInfo!.setServer(new WeakCrypt(3).
                            decrypt(licenseServerDecoded), index);
    
this.logUtil!.putF(NEXT_FILE +initInfo!.getServer(index), this, METHOD_NAME);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return initInfo;
    

                                    }
                                
                        else {
                            


                            throw new Error("Could Not Load License InitInfo: " +INITFILENAME)

                        }
                            

                //: 
} catch(e) 
            {

        try {
            this.logUtil!.put("Command Failed: " +INITFILENAME, this, METHOD_NAME, e);
    

                //: 
} catch(e2) 
            {
this.logUtil!.put("LicenseInitInfo Read Retry: " +INITFILENAME, this, "readAgain()", e2);
    
}




                            throw new Error("LicenseInitInfo Read Error: " +INITFILENAME)
}

}


    public getFilePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return filePath;
    
}


}
                
            

