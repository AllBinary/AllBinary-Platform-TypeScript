
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
        
            //import { Class } from '../../../../java/lang/Class.js';
            const Class = (globalThis.java?.lang?.Class ?? class {}) as typeof globalThis.java.lang.Class;
            type Class<T = any, U = any> = typeof Class extends abstract new (...args: any[]) => infer Instance ? Instance : typeof Class;
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { Map } from '../../../../java/util/Map.js';
//not GWT import const Map

import { Set } from '../../../../java/util/Set.js';
//not GWT import const Set

import { DatabaseConnectionInfoInterface } from '../../../../org/allbinary/business/init/db/DatabaseConnectionInfoInterface.js';
//not GWT import const DatabaseConnectionInfoInterface

import { DbConnectionInfo } from '../../../../org/allbinary/business/init/db/DbConnectionInfo.js';
//not GWT import const DbConnectionInfo

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { StringValidationUtil } from '../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DynamicInitDb } from './DynamicInitDb.js';
//sameFolderImports - not GWT import - same folder const DynamicInitDb
import { InitializerData } from './InitializerData.js';
//sameFolderImports - not GWT import - same folder const InitializerData

export class InitializerDatabase
            extends Object
         {
        

    private static readonly MAXDB: number = 30;

    private static readonly MAX: number = 16;

    private static readonly MIN: number = 4;

    private static readonly MINPASSWORD: number = 0;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private adminDbUserName: string;

    private adminDbPassword: string;

    private adminJdbcDriver: string;

    private adminSchema: string;

    private adminServer: string;

    private adminPort: string;

    private initDb: DynamicInitDb;

    public constructor(...args: any[]) {
        super();if(args.length === 2 && args[0] instanceof AbeClientInformationInterface && args[1] instanceof Map) {
            
            this.constructor$0(args[0], args[1]);
            
        }
        else if(args.length === 2) {
            
            this.constructor$1(args[0], args[1]);
            
        }
        
    }
    
    private constructor$0(abeClientInformation: AbeClientInformationInterface, map: Map): void {
        
    let stringBuffer: StringMaker = new StringMaker();;
    

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    let keys: Set = map.keySet()!;;
    

    let keyArray: any[] = keys.toArray()!;;
    

    let size: number = keyArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let key: string = keyArray[index]! as string;;
    

    let values: string[] = map.get(key) as string[];;
    
hashMap!.put(key.toCharArray().slice(0, ).join(''), .toCharArray());
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("key: ");
    
stringBuffer!.append(key);
    
stringBuffer!.append(" Value: ");
    
stringBuffer!.append(values[0]!);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "getFormData()");
    
}

this.getFormData(abeClientInformation, hashMap);
    

    }
    
    private constructor$1(abeClientInformation: AbeClientInformationInterface, initHashMap: HashMap<any, any>): void {
        this.getFormData(abeClientInformation, initHashMap);
    

    }
    
    public getFormData(abeClientInformation: AbeClientInformationInterface, hashMap: HashMap<any, any>){

 try { 
    let initializerData: InitializerData = InitializerData.getInstance()!;;
    
this.setAdminDbUserName(hashMap!.get(initializerData!.DBUSER) as string);
    
this.setAdminDbPassword(hashMap!.get(initializerData!.DBPASSWORD) as string);
    
this.setAdminJdbcDriver(hashMap!.get(initializerData!.ADMINJDBCDRIVER) as string);
    
this.setAdminSchema(hashMap!.get(initializerData!.ADMINSCHEMA) as string);
    
this.setAdminServer(hashMap!.get(initializerData!.ADMINSERVER) as string);
    
this.setAdminPort(hashMap!.get(initializerData!.ADMINPORT) as string);
    

    let dbConnectionInfo: DbConnectionInfo = new DbConnectionInfo();;
    

    let adminDbName: string = StringUtil.getInstance()!.EMPTY_STRING;;
    
dbConnectionInfo!.setJdbcDriver(getAdminJdbcDriver());
    
dbConnectionInfo!.setName(adminDbName);
    
dbConnectionInfo!.setUserName(getAdminDbUserName());
    
dbConnectionInfo!.setPassword(getAdminDbPassword());
    
dbConnectionInfo!.setSchema(getAdminSchema());
    
dbConnectionInfo!.setServer(getAdminServer());
    
dbConnectionInfo!.setPort(getAdminPort());
    
this.initDb= new DynamicInitDb(abeClientInformation, dbConnectionInfo as DatabaseConnectionInfoInterface);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put("Unable to get form data", this, "getFormData()", e);
    

 }
   }
 
}


    isJdbcDriverValid(jdbcDriverClassPathString: string): boolean{

 try { Class.forName(jdbcDriverClassPathString)!.newInstance();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public isValid(): boolean{

    let isValid: boolean = true;;
    

                        if(!this.isJdbcDriverValid(this.adminJdbcDriver))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

    let stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(!stringValidationUtil!.isValidRequired(this.adminDbUserName, InitializerDatabase.MIN, InitializerDatabase.MAX))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.adminDbPassword, InitializerDatabase.MINPASSWORD, InitializerDatabase.MAX))
                        
                                    {
                                    isValid= false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    
}


    getJdbcDriverValidationInfo(jdbcDriver: string): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("The JDBC driver (");
    
stringBuffer!.append(jdbcDriver);
    
stringBuffer!.append(") you have provided is not valid.<br/>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public getInvalidInfo(): string{

    let isValid: boolean = true;;
    

    let isJdbcDriversValid: boolean = true;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

                        if(!this.isJdbcDriverValid(this.adminJdbcDriver))
                        
                                    {
                                    isJdbcDriversValid= false;
    
stringBuffer!.append(this.getJdbcDriverValidationInfo(this.getAdminJdbcDriver()));
    

                                    }
                                

    let stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(!stringValidationUtil!.isValidRequired(this.adminDbUserName, InitializerDatabase.MIN, InitializerDatabase.MAX))
                        
                                    {
                                    stringBuffer!.append("Admin username should be < " +InitializerDatabase.MAX +" and > " +InitializerDatabase.MIN +" characters in length.<br />");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.adminDbPassword, InitializerDatabase.MINPASSWORD, InitializerDatabase.MAX))
                        
                                    {
                                    stringBuffer!.append("Admin password should be < " +InitializerDatabase.MAX +" and > " +InitializerDatabase.MINPASSWORD +" characters in length.<br />");
    

                                    }
                                

                        if(!isJdbcDriversValid)
                        
                                    {
                                    stringBuffer!.append(InitializerData.getInstance()!.getJdbcDriverSolutionInfo());
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createUsers(): boolean{

 try { this.initDb!.addUsers();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put("Unable to Create Users", this, "createUsers()", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public createDatabases(): boolean{

 try { this.initDb!.addDatabases();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put("Unable to Create Databases", this, "createDatabases()", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public createTables(): boolean{

 try { this.initDb!.addTables();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put("Unable to Create Tables", this, "createTables()", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public getAdminDbUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.adminDbUserName;
    
}


    public setAdminDbUserName(adminDbUserName: string){
this.adminDbUserName= adminDbUserName;
    
}


    public getAdminDbPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.adminDbPassword;
    
}


    public setAdminDbPassword(adminDbPassword: string){
this.adminDbPassword= adminDbPassword;
    
}


    public getAdminJdbcDriver(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.adminJdbcDriver;
    
}


    public setAdminJdbcDriver(adminJdbcDriver: string){
this.adminJdbcDriver= adminJdbcDriver;
    
}


    public getAdminSchema(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.adminSchema;
    
}


    public setAdminSchema(adminSchema: string){
this.adminSchema= adminSchema;
    
}


    public getAdminServer(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.adminServer;
    
}


    public setAdminServer(adminServer: string){
this.adminServer= adminServer;
    
}


    public getAdminPort(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.adminPort;
    
}


    public setAdminPort(adminPort: string){
this.adminPort= adminPort;
    
}


}

