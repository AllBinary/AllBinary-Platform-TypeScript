
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
        



import { HashMap } from "../../../../java/util/HashMap.js";

    
import { Map } from "../../../../java/util/Map.js";

    
import { Set } from "../../../../java/util/Set.js";

    
import { DatabaseConnectionInfoInterface } from "../../../../org/allbinary/business/init/db/DatabaseConnectionInfoInterface.js";

    
import { DbConnectionInfo } from "../../../../org/allbinary/business/init/db/DbConnectionInfo.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { InitializerData } from "./InitializerData.js";

import { Class } from "./Class.js";

export class InitializerDatabase
            extends Object
         {
        

    private static readonly MAXDB: number = 30;
        
        

    private static readonly MAX: number = 16;
        
        

    private static readonly MIN: number = 4;
        
        

    private static readonly MINPASSWORD: number = 0;
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private adminDbUserName: string

    private adminDbPassword: string

    private adminJdbcDriver: string

    private adminSchema: string

    private adminServer: string

    private adminPort: string

    private initDb: DynamicInitDb
public constructor (abeClientInformation: AbeClientInformationInterface, map: Map){

            super();
            //var abeClientInformation = abeClientInformation
    //var map = map

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var keys: Set = map.keySet()!;
        
        
;
    

    var keyArray: any[] = keys.toArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var key: string = keyArray[index]! as String;
        
        
;
    

    var values: string[] = map.get(key); as Array<String?>;
        
        
;
    
hashMap!.put(key.toCharArray()
                                        .slice(0, ).join('')
                                    , .toCharArray());
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("key: ");
    
stringBuffer!.append(key);
    
stringBuffer!.append(" Value: ");
    
stringBuffer!.append(values[0]!);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "getFormData()");
    
}

this.getFormData(abeClientInformation, hashMap);
    
}

public constructor (abeClientInformation: AbeClientInformationInterface, initHashMap: HashMap<any, any>){

            super();
            //var abeClientInformation = abeClientInformation
    //var initHashMap = initHashMap
this.getFormData(abeClientInformation, initHashMap);
    
}


    public getFormData(abeClientInformation: AbeClientInformationInterface, hashMap: HashMap<any, any>){
    //var abeClientInformation = abeClientInformation
    //var hashMap = hashMap

        try {
            
    var initializerData: InitializerData = InitializerData.getInstance()!;
        
        
;
    
setAdminDbUserName(hashMap!.get(initializerData!.DBUSER) as String);
    
setAdminDbPassword(hashMap!.get(initializerData!.DBPASSWORD) as String);
    
setAdminJdbcDriver(hashMap!.get(initializerData!.ADMINJDBCDRIVER) as String);
    
setAdminSchema(hashMap!.get(initializerData!.ADMINSCHEMA) as String);
    
setAdminServer(hashMap!.get(initializerData!.ADMINSERVER) as String);
    
setAdminPort(hashMap!.get(initializerData!.ADMINPORT) as String);
    

    var dbConnectionInfo: DbConnectionInfo = new DbConnectionInfo();
        
        
;
    

    var adminDbName: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    
dbConnectionInfo!.setJdbcDriver(getAdminJdbcDriver());
    
dbConnectionInfo!.setName(adminDbName);
    
dbConnectionInfo!.setUserName(getAdminDbUserName());
    
dbConnectionInfo!.setPassword(getAdminDbPassword());
    
dbConnectionInfo!.setSchema(getAdminSchema());
    
dbConnectionInfo!.setServer(getAdminServer());
    
dbConnectionInfo!.setPort(getAdminPort());
    
this.initDb= new DynamicInitDb(abeClientInformation, dbConnectionInfo as DatabaseConnectionInfoInterface);
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Unable to get form data", this, "getFormData()", e);
    
}

}


    isJdbcDriverValid(jdbcDriverClassPathString: string): boolean{
var jdbcDriverClassPathString = jdbcDriverClassPathString

        try {
            Class.forName(jdbcDriverClassPathString)!.newInstance();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public isValid(): boolean{

    var isValid: boolean = true;
        
        
;
    

                        if(!this.isJdbcDriverValid(this.adminJdbcDriver);)
                        
                                    {
                                    isValid= false;
    

                                    }
                                

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

                        if(!stringValidationUtil!.isValidRequired(this.adminDbUserName, MIN, MAX);)
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.adminDbPassword, MINPASSWORD, MAX);)
                        
                                    {
                                    isValid= false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    
}


    getJdbcDriverValidationInfo(jdbcDriver: string): string{
var jdbcDriver = jdbcDriver

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("The JDBC driver (");
    
stringBuffer!.append(jdbcDriver);
    
stringBuffer!.append(") you have provided is not valid.<br/>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public getInvalidInfo(): string{

    var isValid: boolean = true;
        
        
;
    

    var isJdbcDriversValid: boolean = true;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(!this.isJdbcDriverValid(this.adminJdbcDriver);)
                        
                                    {
                                    isJdbcDriversValid= false;
    
stringBuffer!.append(this.getJdbcDriverValidationInfo(this.getAdminJdbcDriver()));
    

                                    }
                                

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

                        if(!stringValidationUtil!.isValidRequired(this.adminDbUserName, MIN, MAX);)
                        
                                    {
                                    stringBuffer!.append("Admin username should be < " +MAX +" and > " +MIN +" characters in length.<br />");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.adminDbPassword, MINPASSWORD, MAX);)
                        
                                    {
                                    stringBuffer!.append("Admin password should be < " +MAX +" and > " +MINPASSWORD +" characters in length.<br />");
    

                                    }
                                

                        if(!isJdbcDriversValid)
                        
                                    {
                                    stringBuffer!.append(InitializerData.getInstance()!.getJdbcDriverSolutionInfo());
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createUsers(): boolean{

        try {
            this.initDb!.addUsers();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Unable to Create Users", this, "createUsers()", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public createDatabases(): boolean{

        try {
            this.initDb!.addDatabases();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Unable to Create Databases", this, "createDatabases()", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public createTables(): boolean{

        try {
            this.initDb!.addTables();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Unable to Create Tables", this, "createTables()", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public getAdminDbUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adminDbUserName;
    
}


    public setAdminDbUserName(adminDbUserName: string){
var adminDbUserName = adminDbUserName
this.adminDbUserName= adminDbUserName;
    
}


    public getAdminDbPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adminDbPassword;
    
}


    public setAdminDbPassword(adminDbPassword: string){
var adminDbPassword = adminDbPassword
this.adminDbPassword= adminDbPassword;
    
}


    public getAdminJdbcDriver(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adminJdbcDriver;
    
}


    public setAdminJdbcDriver(adminJdbcDriver: string){
var adminJdbcDriver = adminJdbcDriver
this.adminJdbcDriver= adminJdbcDriver;
    
}


    public getAdminSchema(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adminSchema;
    
}


    public setAdminSchema(adminSchema: string){
var adminSchema = adminSchema
this.adminSchema= adminSchema;
    
}


    public getAdminServer(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adminServer;
    
}


    public setAdminServer(adminServer: string){
var adminServer = adminServer
this.adminServer= adminServer;
    
}


    public getAdminPort(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adminPort;
    
}


    public setAdminPort(adminPort: string){
var adminPort = adminPort
this.adminPort= adminPort;
    
}


}
                
            

