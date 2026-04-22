
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
        



import { AbPathData } from "../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DatabaseConnectionInfoInterface } from "./DatabaseConnectionInfoInterface.js";

export class DbConnectionInfo
            extends Object
         implements DatabaseConnectionInfoInterface {
        

    private jdbcDriver: string

    private name: string

    private userName: string

    private password: string

    private schema: string

    private server: string

    private port: string

    private url: string

    private host: string

    private readonly SCHEMA_SEP: string = "://";
        
        

    private readonly USER_NAME_KEY: string = "?user=";
        
        

    private readonly PASSWORD_KEY: string = "&password=";
        
        
public constructor (){

            super();
        }


    updateUrl(){
this.updateHost();
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.getHost());
    
stringBuffer!.append(this.getName());
    
stringBuffer!.append(this.getUserNameKey());
    
stringBuffer!.append(this.getUserName());
    
stringBuffer!.append(this.getPasswordKey());
    
stringBuffer!.append(this.getPassword());
    
this.url= stringBuffer!.toString();
    
}


    public getUrl(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.url;
    
}


    public getJdbcDriver(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.jdbcDriver;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userName;
    
}


    public getPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.password;
    
}


    updateHost(){

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.getSchema());
    
stringBuffer!.append(this.SCHEMA_SEP);
    
stringBuffer!.append(this.getServer());
    

                        if(this.getPort() != 
                                    null
                                 && this.getPort()!.length() > 1)
                        
                                    {
                                    stringBuffer!.append(CommonSeps.getInstance()!.COLON);
    
stringBuffer!.append(this.getPort());
    

                                    }
                                
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
this.host= stringBuffer!.toString();
    
}


    public getHost(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.host;
    
}


    public getSchema(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.schema;
    
}


    public getServer(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.server;
    
}


    public getPort(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.port;
    
}


    public setJdbcDriver(value: string){
var value = value
this.jdbcDriver= value;
    
}


    public setName(value: string){
var value = value
this.name= value;
    
this.updateUrl();
    
}


    public setUserName(value: string){
var value = value
this.userName= value;
    
this.updateUrl();
    
}


    public setPassword(value: string){
var value = value
this.password= value;
    
this.updateUrl();
    
}


    public setSchema(value: string){
var value = value
this.schema= value;
    
this.updateUrl();
    
}


    public setServer(value: string){
var value = value
this.server= value;
    
this.updateUrl();
    
}


    public setPort(value: string){
var value = value
this.port= value;
    
this.updateUrl();
    
}


    public getUserNameKey(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return USER_NAME_KEY;
    
}


    public getPasswordKey(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PASSWORD_KEY;
    
}


}
                
            

