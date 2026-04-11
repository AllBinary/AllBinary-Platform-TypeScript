
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

    
import { AbFileLocalInputStream } from "../../../../org/allbinary/logic/io/AbFileLocalInputStream.js";

    
import { DataOutputStreamFactory } from "../../../../org/allbinary/logic/io/DataOutputStreamFactory.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { DatabaseEncoder } from "../../../../org/allbinary/logic/system/security/crypt/DatabaseEncoder.js";

    
import { WeakCrypt } from "../../../../org/allbinary/logic/system/security/crypt/WeakCrypt.js";

    

export class InstallerInfo
            extends Object
         {
        

    private static readonly instance: InstallerInfo = new InstallerInfo();
        
        

    private static readonly INITFILENAME: string = "installerdata.dat";
        
        

    private static readonly PACKAGE: string = PATH_GLOBALS.getInstance()!.INIT_PATH;
        
        

    private userName: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private password: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private hasRead: boolean = false;
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static setHasRead(value: boolean){
var value = value
InstallerInfo.hasRead= value;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
            }


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public write(){

    var FILEABPATH: AbPath = new AbPath(URLGLOBALS.getMainPath() +PACKAGE, INITFILENAME);
        
        
;
    

        try {
            
    var newFile: AbFile = new AbFile(FILEABPATH);
        
        
;
    
newFile!.createNewFile();
    

    var dataOutputStream: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(newFile)!;
        
        
;
    

    var cryptedUserName: number[] = WeakCrypt(1).
                            encrypt(this.getUserName())!.encodeToByteArray()!;
        
        
;
    

    var cryptedPassword: number[] = WeakCrypt(2).
                            encrypt(this.getPassword())!.encodeToByteArray()!;
        
        
;
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedUserName));
    
dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedPassword));
    
hasRead= false;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    logUtil!.put("Failed", this, "write");
    

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    read(){

    var FILEABPATH: AbPath = new AbPath(URLGLOBALS.getMainPath() +PACKAGE, INITFILENAME);
        
        
;
    

        try {
            
    var file: AbFile = new AbFile(FILEABPATH);
        
        
;
    

                        if(file.isFile())
                        
                                    {
                                    
    var iFile: AbFileLocalInputStream = new AbFileLocalInputStream(file);
        
        
;
    

    var iData: AbDataInputStream = new AbDataInputStream(iFile);
        
        
;
    

    var decryptedUserName: string = new decode.toCharArray();
        
        
;
    

    var decryptedPassword: string = new decode.toCharArray();
        
        
;
    
this.setUserName(WeakCrypt(1).
                            decrypt(decryptedUserName));
    
this.setPassword(WeakCrypt(2).
                            decrypt(decryptedPassword));
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    logUtil!.put("Not a File - Failed Loading: " +FILEABPATH.toString(), this, "read");
    

                                    }
                                

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    logUtil!.put("Failed", this, "read");
    

                                    }
                                
}

}


    public setUserName(userName: string){
var userName = userName
InstallerInfo.userName= userName;
    
}


    public setPassword(password: string){
var password = password
InstallerInfo.password= password;
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    updateIfNeeded(){

                        if(!hasRead)
                        
                                    {
                                    hasRead= true;
    
this.read();
    

                        if(InstallerInfo.userName == 
                                    null
                                 || InstallerInfo.password == 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    logUtil!.put("Failed", this, "updateIfNeeded");
    

                                    }
                                

                                    }
                                

                                    }
                                
}


                //@Throws(Error::class)
            
    public getUserName(): string{
this.updateIfNeeded();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InstallerInfo.userName;
    
}


                //@Throws(Error::class)
            
    public getPassword(): string{
this.updateIfNeeded();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InstallerInfo.password;
    
}


                //@Throws(Error::class)
            
    public isValid(userName: string, password: string): boolean{
var userName = userName
var password = password
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
                
            

