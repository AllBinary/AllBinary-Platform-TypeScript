
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
        



import { FREEBLISKET_PATH_GLOBALS } from "../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { HttpData } from "../../../../../org/allbinary/logic/communication/http/HttpData.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { LogConfigTypeFactory } from "../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js";

    
import { LogConfigTypes } from "../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js";

    
import { AbDataInputStream } from "../../../../../org/allbinary/logic/io/AbDataInputStream.js";

    
import { AbDataOutputStream } from "../../../../../org/allbinary/logic/io/AbDataOutputStream.js";

    
import { AbFileInputStream } from "../../../../../org/allbinary/logic/io/AbFileInputStream.js";

    
import { DataOutputStreamFactory } from "../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js";

    
import { StreamUtil } from "../../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbFile } from "../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { Directory } from "../../../../../org/allbinary/logic/io/file/directory/Directory.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { DatabaseEncoder } from "../../../../../org/allbinary/logic/system/security/crypt/DatabaseEncoder.js";

    
import { WeakCrypt } from "../../../../../org/allbinary/logic/system/security/crypt/WeakCrypt.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class DbInitInfo extends DbConnectionInfo {
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly directory: Directory = Directory.getInstance()!;
        
        

    private readonly httpData: HttpData = HttpData.getInstance()!;
        
        

    private readonly GET_URL: string = "getUrl";
        
        

    private readonly PACKAGE: string = FREEBLISKET_PATH_GLOBALS.getInstance()!.DBINITPATH;
        
        

    private initFileName: string

    private hasRead: boolean = false;
        
        
public constructor (initFileName: string, read: boolean)                        

                            : super(){

            super();
            var initFileName = initFileName
var read = read


                            //For kotlin this is before the body of the constructor.
                    
this.initFileName= initFileName

    
                        if(read)
                        
                                    {
                                    this.updateIfNeeded()

                                    }
                                
                        else {
                            this.setHasRead(true)

                        }
                            
}


    public getUrl(): string{

    var url: string = super.getUrl()!;
        
        


    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    put(this.httpData!.URL_LABEL +url, this, GET_URL)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return url;
    
}


                @Throws(Exception::class)
            
    public write(){

    var PATH: AbPath = new AbPath(URLGLOBALS.getWebappPath() +PACKAGE);
        
        

create(PATH)

    var FILEABPATH: AbPath = new AbPath(URLGLOBALS.getWebappPath() +PACKAGE, this.initFileName);
        
        


        try {
            
    var newFile: AbFile = new AbFile(FILEABPATH);
        
        

createNewFile()

    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(newFile)!;
        
        


        try {
            
    var cryptedJdbcDriver: ByteArray = WeakCrypt(1).
                            encrypt(this.getJdbcDriver())!.encodeToByteArray()!;
        
        


    var cryptedName: ByteArray = WeakCrypt(2).
                            encrypt(this.getName())!.encodeToByteArray()!;
        
        


    var cryptedUserName: ByteArray = WeakCrypt(3).
                            encrypt(this.getUserName())!.encodeToByteArray()!;
        
        


    var cryptedPassword: ByteArray = WeakCrypt(4).
                            encrypt(this.getPassword())!.encodeToByteArray()!;
        
        


    var cryptedSchema: ByteArray = WeakCrypt(5).
                            encrypt(this.getSchema())!.encodeToByteArray()!;
        
        


    var cryptedServer: ByteArray = WeakCrypt(6).
                            encrypt(this.getServer())!.encodeToByteArray()!;
        
        


    var cryptedPort: ByteArray = WeakCrypt(7).
                            encrypt(this.getPort())!.encodeToByteArray()!;
        
        

writeUTF(DatabaseEncoder.encode(cryptedJdbcDriver))
writeUTF(DatabaseEncoder.encode(cryptedName))
writeUTF(DatabaseEncoder.encode(cryptedUserName))
writeUTF(DatabaseEncoder.encode(cryptedPassword))
writeUTF(DatabaseEncoder.encode(cryptedSchema))
writeUTF(DatabaseEncoder.encode(cryptedServer))
writeUTF(DatabaseEncoder.encode(cryptedPort))
hasRead= false

         finally {
            close(dataOutputStream)

         }
        
} catch(e: Exception)
            {

    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    put("Failed Write: " +FILEABPATH.toString(), this, "write", e)

                                    }
                                
}

}


                @Throws(Exception::class)
            
    load(){

    var FILEABPATH: AbPath = new AbPath(URLGLOBALS.getWebappPath() +PACKAGE, this.initFileName);
        
        


        try {
            
    var file: AbFile = new AbFile(FILEABPATH);
        
        


    
                        if(file.isFile())
                        
                                    {
                                    
    var iFile: AbFileInputStream = new AbFileInputStream(file);
        
        


    var iData: AbDataInputStream = new AbDataInputStream(iFile);
        
        


        try {
            
    var decryptedJdbcDriver: string = new decode.toCharArray();
        
        


    var decryptedName: string = new decode.toCharArray();
        
        


    var decryptedUserName: string = new decode.toCharArray();
        
        


    var decryptedPassword: string = new decode.toCharArray();
        
        


    var decryptedSchema: string = new decode.toCharArray();
        
        


    var decryptedServer: string = new decode.toCharArray();
        
        


    var decryptedPort: string = new decode.toCharArray();
        
        

this.setJdbcDriver(WeakCrypt(1).
                            decrypt(decryptedJdbcDriver))
this.setName(WeakCrypt(2).
                            decrypt(decryptedName))
this.setUserName(WeakCrypt(3).
                            decrypt(decryptedUserName))
this.setPassword(WeakCrypt(4).
                            decrypt(decryptedPassword))
this.setSchema(WeakCrypt(5).
                            decrypt(decryptedSchema))
this.setServer(WeakCrypt(6).
                            decrypt(decryptedServer))
this.setPort(WeakCrypt(7).
                            decrypt(decryptedPort))

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        


         finally {
            close(iData)

         }
        

                                    }
                                
                        else {
                            hasRead= false

    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    put("Not a File - Failed Loading: " +FILEABPATH.toString(), this, commonStrings!.LOAD)

                                    }
                                

                        }
                            
} catch(e: Exception)
            {

    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    put("Failed Loading: " +FILEABPATH.toString(), this, commonStrings!.LOAD, e)

                                    }
                                
}

}


    public setHasRead(value: boolean){
var value = value
this.hasRead= value
}


    updateIfNeeded(){

        try {
            
    
                        if(!hasRead)
                        
                                    {
                                    hasRead= true
this.load()

                                    }
                                
} catch(e: Exception)
            {

    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "updateIfNeeded", e)

                                    }
                                
}

}


    public getName(): string{
this.updateIfNeeded()

    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    put("Name: " +super.getName(), this, "getName")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getName();
    
}


    public getUserName(): string{
this.updateIfNeeded()

    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    put("Name: " +super.getUserName(), this, "getUserName")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getUserName();
    
}


    public getPassword(): string{
this.updateIfNeeded()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getPassword();
    
}


    public getSchema(): string{
this.updateIfNeeded()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getSchema();
    
}


    public getServer(): string{
this.updateIfNeeded()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getServer();
    
}


    public getPort(): string{
this.updateIfNeeded()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getPort();
    
}


}
                
            

