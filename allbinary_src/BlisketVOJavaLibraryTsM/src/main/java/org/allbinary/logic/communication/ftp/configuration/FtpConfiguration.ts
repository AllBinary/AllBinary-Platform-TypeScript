
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
import { HashMap } from '../../../../../../java/util/HashMap.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { FtpConfigurationInterface } from './FtpConfigurationInterface.js';
import { FtpConfigurationData } from './FtpConfigurationData.js';

export class FtpConfiguration
            extends Object
         implements FtpConfigurationInterface {
        

    private ftpServer: string;

    private ftpPath: string;

    private ftpUserName: string;

    private ftpPassword: string;

public constructor (){

            super();
        }


public constructor (hashMap: HashMap<any, any>){

            super();
        this.ftpServer= hashMap!.get(FtpConfigurationData.SERVER) as string;
    
this.ftpPath= hashMap!.get(FtpConfigurationData.PATH) as string;
    
this.ftpUserName= hashMap!.get(FtpConfigurationData.USERNAME) as string;
    
this.ftpPassword= hashMap!.get(FtpConfigurationData.PASSWORD) as string;
    
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
this.ftpServer= value;
    
}


    public setPath(value: string){
this.ftpPath= value;
    
}


    public setUserName(value: string){
this.ftpUserName= value;
    
}


    public setPassword(value: string){
this.ftpPassword= value;
    
}


}
                
            

