
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { FtpConfigurationInterface } from "./FtpConfigurationInterface.js";

import { FtpConfigurationData } from "./FtpConfigurationData.js";

export class FtpConfiguration
            extends Object
         implements FtpConfigurationInterface {
        

    private ftpServer: string

    private ftpPath: string

    private ftpUserName: string

    private ftpPassword: string
public constructor (){

            super();
        }

public constructor (hashMap: HashMap){

            super();
        var hashMap = hashMap
this.ftpServer=  as StringhashMap!.get(FtpConfigurationData.SERVER);;
    
this.ftpPath=  as StringhashMap!.get(FtpConfigurationData.PATH);;
    
this.ftpUserName=  as StringhashMap!.get(FtpConfigurationData.USERNAME);;
    
this.ftpPassword=  as StringhashMap!.get(FtpConfigurationData.PASSWORD);;
    
}


    public getServer(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ftpServer;
    
}


    public getPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ftpPath;
    
}


    public getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ftpUserName;
    
}


    public getPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ftpPassword;
    
}


    public setServer(value: string){
var value = value
this.ftpServer= value;
    
}


    public setPath(value: string){
var value = value
this.ftpPath= value;
    
}


    public setUserName(value: string){
var value = value
this.ftpUserName= value;
    
}


    public setPassword(value: string){
var value = value
this.ftpPassword= value;
    
}


}
                
            

