
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
//not GWT import const FREEBLISKET_PATH_GLOBALS

import { URLGLOBALS } from '../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

//not plain js import { HttpData } 
const HttpData = globalThis.org.allbinary.logic.communication.http.HttpData;
type HttpData<T = any, U = any> = typeof HttpData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof HttpData;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

import { LogConfigTypeFactory } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory

import { LogConfigTypes } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes

import { AbDataInputStream } from '../../../../../org/allbinary/logic/io/AbDataInputStream.js';
//not GWT import const AbDataInputStream

import { AbDataOutputStream } from '../../../../../org/allbinary/logic/io/AbDataOutputStream.js';
//not GWT import const AbDataOutputStream

import { AbFileInputStream } from '../../../../../org/allbinary/logic/io/AbFileInputStream.js';
//not GWT import const AbFileInputStream

import { DataOutputStreamFactory } from '../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
//not GWT import const DataOutputStreamFactory

import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil

import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { Directory } from '../../../../../org/allbinary/logic/io/file/directory/Directory.js';
//not GWT import const Directory

import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { DatabaseEncoder } from '../../../../../org/allbinary/logic/system/security/crypt/DatabaseEncoder.js';
//not GWT import const DatabaseEncoder

import { WeakCrypt } from '../../../../../org/allbinary/logic/system/security/crypt/WeakCrypt.js';
//not GWT import const WeakCrypt

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DbConnectionInfo } from './DbConnectionInfo.js';
//sameFolderImports - not GWT import - same folder const DbConnectionInfo

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

    let url: string = super.getUrl()!;;
    

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    PreLogUtil.put(this.httpData!.URL_LABEL +url, this, GET_URL);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return url;
    
}


                //@Throws(Exception.constructor)
            
    public write(){

    let PATH: AbPath = new AbPath(URLGLOBALS.getWebappPath() +this.PACKAGE, StringUtil.getInstance()!.EMPTY_STRING);;
    
this.directory.create(PATH);
    

    let FILEABPATH: AbPath = new AbPath(URLGLOBALS.getWebappPath() +this.PACKAGE, this.initFileName);;
    

 try { 
    let newFile: AbFile = AbFile.createAbFileFromAbPath(FILEABPATH)!;;
    
newFile!.createNewFile();
    

    let dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(newFile)!;;
    

 try { 
    let cryptedJdbcDriver: number[] = Array.from(new TextEncoder().encode(new WeakCrypt(1).encrypt(this.getJdbcDriver())!), byte => (byte << 24) >> 24)!;;
    

    let cryptedName: number[] = Array.from(new TextEncoder().encode(new WeakCrypt(2).encrypt(this.getName())!), byte => (byte << 24) >> 24)!;;
    

    let cryptedUserName: number[] = Array.from(new TextEncoder().encode(new WeakCrypt(3).encrypt(this.getUserName())!), byte => (byte << 24) >> 24)!;;
    

    let cryptedPassword: number[] = Array.from(new TextEncoder().encode(new WeakCrypt(4).encrypt(this.getPassword())!), byte => (byte << 24) >> 24)!;;
    

    let cryptedSchema: number[] = Array.from(new TextEncoder().encode(new WeakCrypt(5).encrypt(this.getSchema())!), byte => (byte << 24) >> 24)!;;
    

    let cryptedServer: number[] = Array.from(new TextEncoder().encode(new WeakCrypt(6).encrypt(this.getServer())!), byte => (byte << 24) >> 24)!;;
    

    let cryptedPort: number[] = Array.from(new TextEncoder().encode(new WeakCrypt(7).encrypt(this.getPort())!), byte => (byte << 24) >> 24)!;;
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedJdbcDriver));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedName));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedUserName));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedPassword));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedSchema));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedServer));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedPort));
    
this.hasRead= false;
    
 }
 finally { StreamUtil.getInstance()!.close(dataOutputStream);
    
 }
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE("Failed Write: " +FILEABPATH.toString(), this, "write", e);
    

                                    }
                                

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    load(){

    let FILEABPATH: AbPath = new AbPath(URLGLOBALS.getWebappPath() +this.PACKAGE, this.initFileName);;
    

 try { 
    let file: AbFile = AbFile.createAbFileFromAbPath(FILEABPATH)!;;
    

                        if(file.isFile())
                        
                                    {
                                    
    let iFile: AbFileInputStream = new AbFileInputStream(file);;
    

    let iData: AbDataInputStream = new AbDataInputStream(iFile);;
    

 try { 
    let decryptedJdbcDriver: string = decode.toCharArray();;
    

    let decryptedName: string = decode.toCharArray();;
    

    let decryptedUserName: string = decode.toCharArray();;
    

    let decryptedPassword: string = decode.toCharArray();;
    

    let decryptedSchema: string = decode.toCharArray();;
    

    let decryptedServer: string = decode.toCharArray();;
    

    let decryptedPort: string = decode.toCharArray();;
    
this.setJdbcDriver(new WeakCrypt(1).decrypt(decryptedJdbcDriver));
    
this.setName(new WeakCrypt(2).decrypt(decryptedName));
    
this.setUserName(new WeakCrypt(3).decrypt(decryptedUserName));
    
this.setPassword(new WeakCrypt(4).decrypt(decryptedPassword));
    
this.setSchema(new WeakCrypt(5).decrypt(decryptedSchema));
    
this.setServer(new WeakCrypt(6).decrypt(decryptedServer));
    
this.setPort(new WeakCrypt(7).decrypt(decryptedPort));
    

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    
 }
 finally { StreamUtil.getInstance()!.close(iData);
    
 }

                                    }
                                
                        else {
                            this.hasRead= false;
    

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    PreLogUtil.put("Not a File - Failed Loading: " +FILEABPATH.toString(), this, this.commonStrings!.LOAD);
    

                                    }
                                

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE("Failed Loading: " +FILEABPATH.toString(), this, this.commonStrings!.LOAD, e);
    

                                    }
                                

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
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this, "updateIfNeeded", e);
    

                                    }
                                

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

