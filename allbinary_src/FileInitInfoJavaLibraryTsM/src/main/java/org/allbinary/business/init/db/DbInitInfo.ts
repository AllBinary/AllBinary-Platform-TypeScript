
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { FREEBLISKET_PATH_GLOBALS } from '../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
      //not GWT import const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
import { URLGLOBALS } from '../../../../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not plain js import { HttpData } from '../../../../../org/allbinary/logic/communication/http/HttpData.js';
      const HttpData = globalThis.org.allbinary.logic.communication.http.HttpData;

      
//not plain js import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
import { LogConfigTypeFactory } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
      //not GWT import const LogConfigTypeFactory = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory;

      
import { LogConfigTypes } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
      //not GWT import const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;

      
import { AbDataInputStream } from '../../../../../org/allbinary/logic/io/AbDataInputStream.js';
      //not GWT import const AbDataInputStream = globalThis.org.allbinary.logic.io.AbDataInputStream;

      
import { AbDataOutputStream } from '../../../../../org/allbinary/logic/io/AbDataOutputStream.js';
      //not GWT import const AbDataOutputStream = globalThis.org.allbinary.logic.io.AbDataOutputStream;

      
import { AbFileInputStream } from '../../../../../org/allbinary/logic/io/AbFileInputStream.js';
      //not GWT import const AbFileInputStream = globalThis.org.allbinary.logic.io.AbFileInputStream;

      
import { DataOutputStreamFactory } from '../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
      //not GWT import const DataOutputStreamFactory = globalThis.org.allbinary.logic.io.DataOutputStreamFactory;

      
import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
      //not GWT import const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
      //not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
import { Directory } from '../../../../../org/allbinary/logic/io/file/directory/Directory.js';
      //not GWT import const Directory = globalThis.org.allbinary.logic.io.file.directory.Directory;

      
import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { DatabaseEncoder } from '../../../../../org/allbinary/logic/system/security/crypt/DatabaseEncoder.js';
      //not GWT import const DatabaseEncoder = globalThis.org.allbinary.logic.system.security.crypt.DatabaseEncoder;

      
import { WeakCrypt } from '../../../../../org/allbinary/logic/system/security/crypt/WeakCrypt.js';
      //not GWT import const WeakCrypt = globalThis.org.allbinary.logic.system.security.crypt.WeakCrypt;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DbConnectionInfo } from './DbConnectionInfo.js';
//not GWT import const DbConnectionInfo = globalThis.org.allbinary.business.init.db.DbConnectionInfo;

                
export class DbInitInfo extends DbConnectionInfo {
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly directory: Directory = Directory.getInstance()!;

    private readonly httpData: HttpData = HttpData.getInstance()!;

    private readonly GET_URL: string = "getUrl";

    private readonly PACKAGE: string = FREEBLISKET_PATH_GLOBALS.getInstance()!.DBINITPATH;

    private initFileName: string;

    private hasRead: boolean = false;

public constructor (initFileName: string, read: boolean){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.initFileName= initFileName;
    

                        if(read)
                        
                                    {
                                    this.updateIfNeeded();
    

                                    }
                                
                        else {
                            this.setHasRead(true);
    

                        }
                            
}


    public getUrl(): string{

    var url: string = super.getUrl()!;;
    

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    PreLogUtil.put(this.httpData!.URL_LABEL +url, this, GET_URL);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return url;
    
}


                //@Throws(Exception.constructor)
            
    public write(){

    var PATH: AbPath = new AbPath(URLGLOBALS.getWebappPath() +this.PACKAGE, StringUtil.getInstance()!.EMPTY_STRING);;
    
this.directory.create(PATH);
    

    var FILEABPATH: AbPath = new AbPath(URLGLOBALS.getWebappPath() +this.PACKAGE, this.initFileName);;
    

        try {
            
    var newFile: AbFile = AbFile.createAbFileFromAbPath(FILEABPATH)!;;
    
newFile!.createNewFile();
    

    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(newFile)!;;
    

        try {
            
    var cryptedJdbcDriver: number[] = new WeakCrypt(1).encrypt(this.getJdbcDriver())!.getBytes()!;;
    

    var cryptedName: number[] = new WeakCrypt(2).encrypt(this.getName())!.getBytes()!;;
    

    var cryptedUserName: number[] = new WeakCrypt(3).encrypt(this.getUserName())!.getBytes()!;;
    

    var cryptedPassword: number[] = new WeakCrypt(4).encrypt(this.getPassword())!.getBytes()!;;
    

    var cryptedSchema: number[] = new WeakCrypt(5).encrypt(this.getSchema())!.getBytes()!;;
    

    var cryptedServer: number[] = new WeakCrypt(6).encrypt(this.getServer())!.getBytes()!;;
    

    var cryptedPort: number[] = new WeakCrypt(7).encrypt(this.getPort())!.getBytes()!;;
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedJdbcDriver));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedName));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedUserName));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedPassword));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedSchema));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedServer));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedPort));
    
this.hasRead= false;
    

         finally {
            StreamUtil.getInstance()!.close(dataOutputStream);
    

         }
        

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE("Failed Write: " +FILEABPATH.toString(), this, "write", e);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    load(){

    var FILEABPATH: AbPath = new AbPath(URLGLOBALS.getWebappPath() +this.PACKAGE, this.initFileName);;
    

        try {
            
    var file: AbFile = AbFile.createAbFileFromAbPath(FILEABPATH)!;;
    

                        if(file.isFile())
                        
                                    {
                                    
    var iFile: AbFileInputStream = new AbFileInputStream(file);;
    

    var iData: AbDataInputStream = new AbDataInputStream(iFile);;
    

        try {
            
    var decryptedJdbcDriver: string = decode.toCharArray();;
    

    var decryptedName: string = decode.toCharArray();;
    

    var decryptedUserName: string = decode.toCharArray();;
    

    var decryptedPassword: string = decode.toCharArray();;
    

    var decryptedSchema: string = decode.toCharArray();;
    

    var decryptedServer: string = decode.toCharArray();;
    

    var decryptedPort: string = decode.toCharArray();;
    
this.setJdbcDriver(new WeakCrypt(1).decrypt(decryptedJdbcDriver));
    
this.setName(new WeakCrypt(2).decrypt(decryptedName));
    
this.setUserName(new WeakCrypt(3).decrypt(decryptedUserName));
    
this.setPassword(new WeakCrypt(4).decrypt(decryptedPassword));
    
this.setSchema(new WeakCrypt(5).decrypt(decryptedSchema));
    
this.setServer(new WeakCrypt(6).decrypt(decryptedServer));
    
this.setPort(new WeakCrypt(7).decrypt(decryptedPort));
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    

         finally {
            StreamUtil.getInstance()!.close(iData);
    

         }
        

                                    }
                                
                        else {
                            this.hasRead= false;
    

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    PreLogUtil.put("Not a File - Failed Loading: " +FILEABPATH.toString(), this, this.commonStrings!.LOAD);
    

                                    }
                                

                        }
                            

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE("Failed Loading: " +FILEABPATH.toString(), this, this.commonStrings!.LOAD, e);
    

                                    }
                                
}

}


    public setHasRead(value: boolean){
this.hasRead= value;
    
}


    updateIfNeeded(){

        try {
            
                        if(!this.hasRead)
                        
                                    {
                                    this.hasRead= true;
    
this.load();
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this, "updateIfNeeded", e);
    

                                    }
                                
}

}


    public getName(): string{
this.updateIfNeeded();
    

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    PreLogUtil.put("Name: " +super.getName(), this, "getName");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getName();;
    
}


    public getUserName(): string{
this.updateIfNeeded();
    

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    PreLogUtil.put("Name: " +super.getUserName(), this, "getUserName");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getUserName();;
    
}


    public getPassword(): string{
this.updateIfNeeded();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getPassword();;
    
}


    public getSchema(): string{
this.updateIfNeeded();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getSchema();;
    
}


    public getServer(): string{
this.updateIfNeeded();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getServer();;
    
}


    public getPort(): string{
this.updateIfNeeded();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getPort();;
    
}


}



