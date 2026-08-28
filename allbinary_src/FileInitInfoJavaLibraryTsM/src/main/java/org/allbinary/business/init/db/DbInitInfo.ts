
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
        
//not game specific package import { FREEBLISKET_PATH_GLOBALS } from '../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
      const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
//not game specific package import { URLGLOBALS } from '../../../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { HttpData } from '../../../../../org/allbinary/logic/communication/http/HttpData.js';
      const HttpData = globalThis.org.allbinary.logic.communication.http.HttpData;

      
//not game specific package import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { LogConfigTypeFactory } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
      const LogConfigTypeFactory = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory;

      
//not game specific package import { LogConfigTypes } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
      const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;

      
//not game specific package import { AbDataInputStream } from '../../../../../org/allbinary/logic/io/AbDataInputStream.js';
      const AbDataInputStream = globalThis.org.allbinary.logic.io.AbDataInputStream;

      
//not game specific package import { AbDataOutputStream } from '../../../../../org/allbinary/logic/io/AbDataOutputStream.js';
      const AbDataOutputStream = globalThis.org.allbinary.logic.io.AbDataOutputStream;

      
//not game specific package import { AbFileInputStream } from '../../../../../org/allbinary/logic/io/AbFileInputStream.js';
      const AbFileInputStream = globalThis.org.allbinary.logic.io.AbFileInputStream;

      
//not game specific package import { DataOutputStreamFactory } from '../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
      const DataOutputStreamFactory = globalThis.org.allbinary.logic.io.DataOutputStreamFactory;

      
//not game specific package import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
      const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
//not game specific package import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { Directory } from '../../../../../org/allbinary/logic/io/file/directory/Directory.js';
      const Directory = globalThis.org.allbinary.logic.io.file.directory.Directory;

      
//not game specific package import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { DatabaseEncoder } from '../../../../../org/allbinary/logic/system/security/crypt/DatabaseEncoder.js';
      const DatabaseEncoder = globalThis.org.allbinary.logic.system.security.crypt.DatabaseEncoder;

      
//not game specific package import { WeakCrypt } from '../../../../../org/allbinary/logic/system/security/crypt/WeakCrypt.js';
      const WeakCrypt = globalThis.org.allbinary.logic.system.security.crypt.WeakCrypt;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DbConnectionInfo } from './DbConnectionInfo.js';

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



