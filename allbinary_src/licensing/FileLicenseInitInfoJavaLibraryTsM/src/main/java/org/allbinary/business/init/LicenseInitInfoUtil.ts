
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil

import { PATH_GLOBALS } from '../../../../org/allbinary/globals/PATH_GLOBALS.js';
//not GWT import const PATH_GLOBALS

import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbDataInputStream } from '../../../../org/allbinary/logic/io/AbDataInputStream.js';
//not GWT import const AbDataInputStream

import { AbDataOutputStream } from '../../../../org/allbinary/logic/io/AbDataOutputStream.js';
//not GWT import const AbDataOutputStream

import { AbFileInputStream } from '../../../../org/allbinary/logic/io/AbFileInputStream.js';
//not GWT import const AbFileInputStream

import { DataOutputStreamFactory } from '../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
//not GWT import const DataOutputStreamFactory

import { FileStreamFactory } from '../../../../org/allbinary/logic/io/FileStreamFactory.js';
//not GWT import const FileStreamFactory

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { DatabaseEncoder } from '../../../../org/allbinary/logic/system/security/crypt/DatabaseEncoder.js';
//not GWT import const DatabaseEncoder

import { WeakCrypt } from '../../../../org/allbinary/logic/system/security/crypt/WeakCrypt.js';
//not GWT import const WeakCrypt

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LicenseInitInfo } from './LicenseInitInfo.js';
//sameFolderImports - not GWT import - same folder const LicenseInitInfo

export class LicenseInitInfoUtil
            extends Object
         {
        

    private static readonly instance: LicenseInitInfoUtil = new LicenseInitInfoUtil();

    public static getInstance(): LicenseInitInfoUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LicenseInitInfoUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;

    public readonly INITFILENAME: string = "licenseinitdata.dat";

    public readonly ABOUT: string = "about";

    public readonly PRIVACY_POLICY: string = "privacy_policy";

    private filePath: string = this.stringUtil!.EMPTY_STRING;
//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public setFilePath(filePath: string){
this.filePath= filePath;
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public write(initData: LicenseInitInfo){

                        if(this.filePath == this.stringUtil!.EMPTY_STRING)
                        
                                    {
                                    this.filePath= URLGLOBALS.getMainPath() +PATH_GLOBALS.getInstance()!.INIT_PATH;
    

                                    }
                                

 try { 
    let tsUtil: TsUtil = TsUtil.getInstance()!;;
    

    let dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(this.filePath, this.INITFILENAME)!;;
    

    let licenseIdCrypted: number[] = tsUtil!.getByteArray(new WeakCrypt(1).encrypt(initData!.getLicenseId()))!;;
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(licenseIdCrypted));
    

    let numberOfLicenseServers: number = initData!.getNumberOfServers()!;;
    
dataOutputStream!.writeInt(numberOfLicenseServers);
    

    let licenseServerCrypted: number[];;
    




                        for (
    let index: number = 0;index < numberOfLicenseServers; index++)
        {
licenseServerCrypted= tsUtil!.getByteArray(new WeakCrypt(3).encrypt(initData!.getServer(index)));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(licenseServerCrypted));
    
}

 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put("Command Failed: " +this.INITFILENAME, this, "write", e);
    
FileStreamFactory.getInstance()!.delete(this.filePath, this.INITFILENAME);
    



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public read(): LicenseInitInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.readAgain(0);;
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public readAgain(initializeCounter: number): LicenseInitInfo{

    let METHOD_NAME: string = "readAgain";;
    

                        if(this.filePath == this.stringUtil!.EMPTY_STRING)
                        
                                    {
                                    this.filePath= URLGLOBALS.getMainPath() +PATH_GLOBALS.getInstance()!.INIT_PATH;
    

                                    }
                                

 try { this.logUtil!.putF("LicenseInitInfo File: " +this.INITFILENAME, this, METHOD_NAME);
    

    let fileStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;;
    

    let iFile: AbFileInputStream = fileStreamFactory!.getFileInputStreamInstance(this.filePath, this.INITFILENAME)!;;
    

                        if(iFile != 
                                    null
                                )
                        
                                    {
                                    
    let iData: AbDataInputStream = new AbDataInputStream(iFile);;
    

    let initInfo: LicenseInitInfo = new LicenseInitInfo();;
    

    let decodedByteArray: number[] = DatabaseEncoder.decode(iData!.readUTF())!;;
    

    let licenseIdDecoded: string = String.fromCharCode(...decodedByteArray);;
    
initInfo!.setLicenseId(new WeakCrypt(1).decrypt(licenseIdDecoded));
    

    let numberOfLicenseServers: number = iData!.readInt()!;;
    

    let NEXT_FILE: string = new StringMaker().append(CommonLabels.getInstance()!.NEXT)!.append(" License Server From File: ")!.toString()!;;
    

    let licenseServerDecoded: string;;
    




                        for (
    let index: number = 0;index < numberOfLicenseServers; index++)
        {
decodedByteArray= DatabaseEncoder.decode(iData!.readUTF());
    
licenseServerDecoded= String.fromCharCode(...decodedByteArray);
    
initInfo!.setServer(new WeakCrypt(3).decrypt(licenseServerDecoded), index);
    
this.logUtil!.putF(NEXT_FILE +initInfo!.getServer(index), this, METHOD_NAME);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return initInfo;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Could Not Load License InitInfo: " +this.INITFILENAME);
                    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

 try { this.logUtil!.put("Command Failed: " +this.INITFILENAME, this, METHOD_NAME, e);
    
 }
 catch (caught: any) {
 {
  const e2 = caught;
  
this.logUtil!.put("LicenseInitInfo Read Retry: " +this.INITFILENAME, this, "readAgain()", e2);
    

 }
   }
 



                            throw new Exception("LicenseInitInfo Read Error: " +this.INITFILENAME);
                    

 }
   }
 
}


    public getFilePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.filePath;
    
}


}

