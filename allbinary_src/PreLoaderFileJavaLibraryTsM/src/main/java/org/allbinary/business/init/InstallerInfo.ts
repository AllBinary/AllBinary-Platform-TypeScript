
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
        
//not game specific package import { PATH_GLOBALS } from '../../../../org/allbinary/globals/PATH_GLOBALS.js';
      const PATH_GLOBALS = globalThis.org.allbinary.globals.PATH_GLOBALS;

      
//not game specific package import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbDataInputStream } from '../../../../org/allbinary/logic/io/AbDataInputStream.js';
      const AbDataInputStream = globalThis.org.allbinary.logic.io.AbDataInputStream;

      
//not game specific package import { AbDataOutputStream } from '../../../../org/allbinary/logic/io/AbDataOutputStream.js';
      const AbDataOutputStream = globalThis.org.allbinary.logic.io.AbDataOutputStream;

      
//not game specific package import { AbFileLocalInputStream } from '../../../../org/allbinary/logic/io/AbFileLocalInputStream.js';
      const AbFileLocalInputStream = globalThis.org.allbinary.logic.io.AbFileLocalInputStream;

      
//not game specific package import { DataOutputStreamFactory } from '../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
      const DataOutputStreamFactory = globalThis.org.allbinary.logic.io.DataOutputStreamFactory;

      
//not game specific package import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { DatabaseEncoder } from '../../../../org/allbinary/logic/system/security/crypt/DatabaseEncoder.js';
      const DatabaseEncoder = globalThis.org.allbinary.logic.system.security.crypt.DatabaseEncoder;

      
//not game specific package import { WeakCrypt } from '../../../../org/allbinary/logic/system/security/crypt/WeakCrypt.js';
      const WeakCrypt = globalThis.org.allbinary.logic.system.security.crypt.WeakCrypt;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InstallerInfo
            extends Object
         {
        

    private static readonly instance: InstallerInfo = new InstallerInfo();

    private static readonly INITFILENAME: string = "installerdata.dat";

    private static readonly PACKAGE: string = PATH_GLOBALS.getInstance()!.INIT_PATH;

    private static userName: string = StringUtil.getInstance()!.EMPTY_STRING;

    private static password: string = StringUtil.getInstance()!.EMPTY_STRING;

    private static hasRead: boolean = false;
//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static setHasRead(value: boolean){
InstallerInfo.hasRead= value;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public write(){

    var FILEABPATH: AbPath = new AbPath(URLGLOBALS.getMainPath() +InstallerInfo.PACKAGE, InstallerInfo.INITFILENAME);;
    

        try {
            
    var newFile: AbFile = AbFile.createAbFileFromAbPath(FILEABPATH)!;;
    
newFile!.createNewFile();
    

    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(newFile)!;;
    

    var cryptedUserName: number[] = new WeakCrypt(1).encrypt(this.getUserName())!.getBytes()!;;
    

    var cryptedPassword: number[] = new WeakCrypt(2).encrypt(this.getPassword())!.getBytes()!;;
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedUserName));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedPassword));
    
InstallerInfo.hasRead= false;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    this.logUtil!.putF("Failed", this, "write");
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    read(){

    var FILEABPATH: AbPath = new AbPath(URLGLOBALS.getMainPath() +InstallerInfo.PACKAGE, InstallerInfo.INITFILENAME);;
    

        try {
            
    var file: AbFile = AbFile.createAbFileFromAbPath(FILEABPATH)!;;
    

                        if(file.isFile())
                        
                                    {
                                    
    var iFile: AbFileLocalInputStream = new AbFileLocalInputStream(file);;
    

    var iData: AbDataInputStream = new AbDataInputStream(iFile);;
    

    var decryptedUserName: string = decode.toCharArray();;
    

    var decryptedPassword: string = decode.toCharArray();;
    
this.setUserName(new WeakCrypt(1).decrypt(decryptedUserName));
    
this.setPassword(new WeakCrypt(2).decrypt(decryptedPassword));
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    this.logUtil!.putF("Not a File - Failed Loading: " +FILEABPATH.toString(), this, "read");
    

                                    }
                                

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    this.logUtil!.putF("Failed", this, "read");
    

                                    }
                                
}

}


    public setUserName(userName: string){
InstallerInfo.userName= userName;
    
}


    public setPassword(password: string){
InstallerInfo.password= password;
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    updateIfNeeded(){

                        if(!InstallerInfo.hasRead)
                        
                                    {
                                    InstallerInfo.hasRead= true;
    
this.read();
    

                        if(InstallerInfo.userName == 
                                    null
                                 || InstallerInfo.password == 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    this.logUtil!.putF("Failed", this, "updateIfNeeded");
    

                                    }
                                

                                    }
                                

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public getUserName(): string{
this.updateIfNeeded();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InstallerInfo.userName;
    
}


                //@Throws(Exception.constructor)
            
    public getPassword(): string{
this.updateIfNeeded();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InstallerInfo.password;
    
}


                //@Throws(Exception.constructor)
            
    public isValid(userName: string, password: string): boolean{
this.updateIfNeeded();
    

                        if(this.userName != 
                                    null
                                 && this.userName!.compareTo(userName) == 0 && this.password != 
                                    null
                                 && this.password.compareTo(password) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}



