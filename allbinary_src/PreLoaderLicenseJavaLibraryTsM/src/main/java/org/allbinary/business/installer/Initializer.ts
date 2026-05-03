
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
        



            import { Object } from "../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../java/lang/Exception.js";
        
import { HashMap } from "../../../../java/util/HashMap.js";

    
import { Map } from "../../../../java/util/Map.js";

    
import { Set } from "../../../../java/util/Set.js";

    
import { HistoryDbInitInfo } from "../../../../org/allbinary/business/init/db/HistoryDbInitInfo.js";

    
import { InventoryDbInitInfo } from "../../../../org/allbinary/business/init/db/InventoryDbInitInfo.js";

    
import { LogDbInitInfo } from "../../../../org/allbinary/business/init/db/LogDbInitInfo.js";

    
import { StaticPagesDbInitInfo } from "../../../../org/allbinary/business/init/db/StaticPagesDbInitInfo.js";

    
import { UserDbInitInfo } from "../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InitializerData } from "./InitializerData.js";

export class Initializer
            extends Object
         {
        

    private static readonly MAXDB: number = 30;

    private static readonly MAX: number = 16;

    private static readonly MIN: number = 4;

    private static readonly MINPASSWORD: number = 0;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private userJdbcDriver: string

    private userName: string

    private userUserName: string

    private userPassword: string

    private userSchema: string

    private userServer: string

    private userPort: string

    private historyJdbcDriver: string

    private historyName: string

    private historyUserName: string

    private historyPassword: string

    private historySchema: string

    private historyServer: string

    private historyPort: string

    private logJdbcDriver: string

    private logName: string

    private logUserName: string

    private logPassword: string

    private logSchema: string

    private logServer: string

    private logPort: string

    private inventoryJdbcDriver: string

    private inventoryName: string

    private inventoryUserName: string

    private inventoryPassword: string

    private inventorySchema: string

    private inventoryServer: string

    private inventoryPort: string

    private staticPagesJdbcDriver: string

    private staticPagesName: string

    private staticPagesUserName: string

    private staticPagesPassword: string

    private staticPagesSchema: string

    private staticPagesServer: string

    private staticPagesPort: string
public constructor (map: Map){

            super();
        var map = map

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

    var key: string = keyArray[index]! as string;
;
    

    var values: string[] = map.get(key) as Array<String?>;
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

this.getFormData(hashMap);
    
}

public constructor (initHashMap: HashMap<any, any>){

            super();
        var initHashMap = initHashMap
this.getFormData(initHashMap);
    
}


    public getFormData(hashMap: HashMap<any, any>){
var hashMap = hashMap

        try {
            
    var initializerData: InitializerData = InitializerData.getInstance()!;
;
    
this.userJdbcDriver= hashMap!.get(initializerData!.CUSTOMERJDBCDRIVER) as string;
    
this.userName= hashMap!.get(initializerData!.CUSTOMERNAME) as string;
    
this.userUserName= hashMap!.get(initializerData!.CUSTOMERUSERNAME) as string;
    
this.userPassword= hashMap!.get(initializerData!.CUSTOMERPASSWORD) as string;
    
this.userSchema= hashMap!.get(initializerData!.CUSTOMERSCHEMA) as string;
    
this.userServer= hashMap!.get(initializerData!.CUSTOMERSERVER) as string;
    
this.userPort= hashMap!.get(initializerData!.CUSTOMERPORT) as string;
    
this.historyJdbcDriver= hashMap!.get(initializerData!.HISTORYJDBCDRIVER) as string;
    
this.historyName= hashMap!.get(initializerData!.HISTORYNAME) as string;
    
this.historyUserName= hashMap!.get(initializerData!.HISTORYUSERNAME) as string;
    
this.historyPassword= hashMap!.get(initializerData!.HISTORYPASSWORD) as string;
    
this.historySchema= hashMap!.get(initializerData!.HISTORYSCHEMA) as string;
    
this.historyServer= hashMap!.get(initializerData!.HISTORYSERVER) as string;
    
this.historyPort= hashMap!.get(initializerData!.HISTORYPORT) as string;
    
this.logJdbcDriver= hashMap!.get(initializerData!.LOGJDBCDRIVER) as string;
    
this.logName= hashMap!.get(initializerData!.LOGNAME) as string;
    
this.logUserName= hashMap!.get(initializerData!.LOGUSERNAME) as string;
    
this.logPassword= hashMap!.get(initializerData!.LOGPASSWORD) as string;
    
this.logSchema= hashMap!.get(initializerData!.LOGSCHEMA) as string;
    
this.logServer= hashMap!.get(initializerData!.LOGSERVER) as string;
    
this.logPort= hashMap!.get(initializerData!.LOGPORT) as string;
    
this.inventoryJdbcDriver= hashMap!.get(initializerData!.INVENTORYJDBCDRIVER) as string;
    
this.inventoryName= hashMap!.get(initializerData!.INVENTORYNAME) as string;
    
this.inventoryUserName= hashMap!.get(initializerData!.INVENTORYUSERNAME) as string;
    
this.inventoryPassword= hashMap!.get(initializerData!.INVENTORYPASSWORD) as string;
    
this.inventorySchema= hashMap!.get(initializerData!.INVENTORYSCHEMA) as string;
    
this.inventoryServer= hashMap!.get(initializerData!.INVENTORYSERVER) as string;
    
this.inventoryPort= hashMap!.get(initializerData!.INVENTORYPORT) as string;
    
this.staticPagesJdbcDriver= hashMap!.get(initializerData!.STATICPAGESJDBCDRIVER) as string;
    
this.staticPagesName= hashMap!.get(initializerData!.STATICPAGESNAME) as string;
    
this.staticPagesUserName= hashMap!.get(initializerData!.STATICPAGESUSERNAME) as string;
    
this.staticPagesPassword= hashMap!.get(initializerData!.STATICPAGESPASSWORD) as string;
    
this.staticPagesSchema= hashMap!.get(initializerData!.STATICPAGESSCHEMA) as string;
    
this.staticPagesServer= hashMap!.get(initializerData!.STATICPAGESSERVER) as string;
    
this.staticPagesPort= hashMap!.get(initializerData!.STATICPAGESPORT) as string;
    

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
    

                        if(!this.isJdbcDriverValid(this.userJdbcDriver))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
;
    

                        if(!stringValidationUtil!.isValidRequired(this.userName, Initializer.MIN, Initializer.MAXDB))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.userUserName, Initializer.MIN, Initializer.MAX))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.userPassword, Initializer.MINPASSWORD, Initializer.MAX))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!this.isJdbcDriverValid(this.historyJdbcDriver))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.historyName, Initializer.MIN, Initializer.MAXDB))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.historyUserName, Initializer.MIN, Initializer.MAX))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.historyPassword, Initializer.MINPASSWORD, Initializer.MAX))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!this.isJdbcDriverValid(this.logJdbcDriver))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.logName, Initializer.MIN, Initializer.MAXDB))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.logUserName, Initializer.MIN, Initializer.MAX))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.logPassword, Initializer.MINPASSWORD, Initializer.MAX))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!this.isJdbcDriverValid(this.inventoryJdbcDriver))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.inventoryName, Initializer.MIN, Initializer.MAXDB))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.inventoryUserName, Initializer.MIN, Initializer.MAX))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.inventoryPassword, Initializer.MINPASSWORD, Initializer.MAX))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!this.isJdbcDriverValid(this.staticPagesJdbcDriver))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.staticPagesName, Initializer.MIN, Initializer.MAXDB))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.staticPagesUserName, Initializer.MIN, Initializer.MAX))
                        
                                    {
                                    isValid= false;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.staticPagesPassword, Initializer.MINPASSWORD, Initializer.MAX))
                        
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


    getJdbcDriverSolutionInfo(): string{

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append("The following describes the possible problems and solutions regarding the Jdbc Driver error(s):<p/>");
    
stringBuffer!.append("1. A JDBC driver you specified is not in your classpath.<br/>");
    
stringBuffer!.append("Solution 1: Move the JDBC driver into any directory specified in the existing classpath. <br/>");
    
stringBuffer!.append("Solution 2: Add the directory that contains the JDBC driver to the classpath.<br/>");
    
stringBuffer!.append("Solution 3: Add the JDBC driver to the WEB-INF/lib directory where you installed this webapp.<br/>");
    
stringBuffer!.append("2. The JDBC driver you specified does not exit.<br/>");
    
stringBuffer!.append("Solution: Get a JDBC driver. <br/>");
    
stringBuffer!.append("3. The JDBC driver you specified is not valid.<br/>");
    
stringBuffer!.append("Solution: Use a valid JDBC driver.<p/>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public getInvalidInfo(): string{

    var isJdbcDriversValid: boolean = true;
;
    

    var stringBuffer: StringMaker = new StringMaker();
;
    

                        if(!this.isJdbcDriverValid(this.userJdbcDriver))
                        
                                    {
                                    isJdbcDriversValid= false;
    
stringBuffer!.append(this.getJdbcDriverValidationInfo(this.userJdbcDriver));
    

                                    }
                                

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
;
    

                        if(!stringValidationUtil!.isValidRequired(this.userName, Initializer.MIN, Initializer.MAXDB))
                        
                                    {
                                    stringBuffer!.append("User db name should be < " +MAXDB +" and > " +MIN +" characters in length.<br />");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.userUserName, Initializer.MIN, Initializer.MAX))
                        
                                    {
                                    stringBuffer!.append("User db username should be < " +MAX +" and > " +MIN +" characters in length.<br />");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.userPassword, Initializer.MINPASSWORD, Initializer.MAX))
                        
                                    {
                                    stringBuffer!.append("User DB password should be < " +MAX +" and > " +MINPASSWORD +" characters in length.<br />");
    

                                    }
                                

                        if(!this.isJdbcDriverValid(this.historyJdbcDriver))
                        
                                    {
                                    isJdbcDriversValid= false;
    
stringBuffer!.append(this.getJdbcDriverValidationInfo(this.historyJdbcDriver));
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.historyName, Initializer.MIN, Initializer.MAXDB))
                        
                                    {
                                    stringBuffer!.append("History db should be < " +MAXDB +" and > " +MIN +" characters in length.<br />");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.historyUserName, Initializer.MIN, Initializer.MAX))
                        
                                    {
                                    stringBuffer!.append("History db username should be < " +MAX +" and > " +MIN +" characters in length.<br />");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.historyPassword, Initializer.MINPASSWORD, Initializer.MAX))
                        
                                    {
                                    stringBuffer!.append("History db password should be < " +MAX +" and > " +MINPASSWORD +" characters in length.<br />");
    

                                    }
                                

                        if(!this.isJdbcDriverValid(this.logJdbcDriver))
                        
                                    {
                                    isJdbcDriversValid= false;
    
stringBuffer!.append(this.getJdbcDriverValidationInfo(this.logJdbcDriver));
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.logName, Initializer.MIN, Initializer.MAXDB))
                        
                                    {
                                    stringBuffer!.append("Log db should be < " +MAXDB +" and > " +MIN +" characters in length.<br />");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.logUserName, Initializer.MIN, Initializer.MAX))
                        
                                    {
                                    stringBuffer!.append("Log db username should be < " +MAX +" and > " +MIN +" characters in length.<br />");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.logPassword, Initializer.MINPASSWORD, Initializer.MAX))
                        
                                    {
                                    stringBuffer!.append("Log db password should be < " +MAX +" and > " +MINPASSWORD +" characters in length.<br />");
    

                                    }
                                

                        if(!this.isJdbcDriverValid(this.inventoryJdbcDriver))
                        
                                    {
                                    isJdbcDriversValid= false;
    
stringBuffer!.append(this.getJdbcDriverValidationInfo(this.inventoryJdbcDriver));
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.inventoryName, Initializer.MIN, Initializer.MAXDB))
                        
                                    {
                                    stringBuffer!.append("Inventory db should be < " +MAXDB +" and > " +MIN +" characters in length.<br />");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.inventoryUserName, Initializer.MIN, Initializer.MAX))
                        
                                    {
                                    stringBuffer!.append("Inventory db username should be < " +MAX +" and > " +MIN +" characters in length.<br />");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.inventoryPassword, Initializer.MINPASSWORD, Initializer.MAX))
                        
                                    {
                                    stringBuffer!.append("Inventory DB password should be < " +MAX +" and > " +MINPASSWORD +" characters in length.<br />");
    

                                    }
                                

                        if(!this.isJdbcDriverValid(this.staticPagesJdbcDriver))
                        
                                    {
                                    isJdbcDriversValid= false;
    
stringBuffer!.append(this.getJdbcDriverValidationInfo(this.staticPagesJdbcDriver));
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.staticPagesName, Initializer.MIN, Initializer.MAXDB))
                        
                                    {
                                    stringBuffer!.append("Static Pages db should be < " +MAXDB +" and > " +MIN +" characters in length.<br />");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.staticPagesUserName, Initializer.MIN, Initializer.MAX))
                        
                                    {
                                    stringBuffer!.append("Static Pages db username should be < " +MAX +" and > " +MIN +" characters in length.<br />");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.staticPagesPassword, Initializer.MINPASSWORD, Initializer.MAX))
                        
                                    {
                                    stringBuffer!.append("Static Pages DB password should be < " +MAX +" and > " +MINPASSWORD +" characters in length.<br />");
    

                                    }
                                

                        if(!isJdbcDriversValid)
                        
                                    {
                                    stringBuffer!.append(getJdbcDriverSolutionInfo());
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


                //@Throws(Exception.constructor)
            
    public set(){
this.logUtil!.putF("Creating DB connection files", this, "set()");
    

    var userDbInitInfo: UserDbInitInfo = new UserDbInitInfo(false);
;
    
userDbInitInfo!.setJdbcDriver(this.userJdbcDriver);
    
userDbInitInfo!.setName(this.userName);
    
userDbInitInfo!.setUserName(this.userUserName);
    
userDbInitInfo!.setPassword(this.userPassword);
    
userDbInitInfo!.setSchema(this.userSchema);
    
userDbInitInfo!.setServer(this.userServer);
    
userDbInitInfo!.setPort(this.userPort);
    
userDbInitInfo!.setHasRead(true);
    
userDbInitInfo!.write();
    

    var historyDbInitInfo: HistoryDbInitInfo = new HistoryDbInitInfo(false);
;
    
historyDbInitInfo!.setJdbcDriver(this.historyJdbcDriver);
    
historyDbInitInfo!.setName(this.historyName);
    
historyDbInitInfo!.setUserName(this.historyUserName);
    
historyDbInitInfo!.setPassword(this.historyPassword);
    
historyDbInitInfo!.setSchema(this.historySchema);
    
historyDbInitInfo!.setServer(this.historyServer);
    
historyDbInitInfo!.setPort(this.historyPort);
    
historyDbInitInfo!.setHasRead(true);
    
historyDbInitInfo!.write();
    

    var logDbInitInfo: LogDbInitInfo = new LogDbInitInfo(false);
;
    
logDbInitInfo!.setJdbcDriver(this.logJdbcDriver);
    
logDbInitInfo!.setName(this.logName);
    
logDbInitInfo!.setUserName(this.logUserName);
    
logDbInitInfo!.setPassword(this.logPassword);
    
logDbInitInfo!.setSchema(this.logSchema);
    
logDbInitInfo!.setServer(this.logServer);
    
logDbInitInfo!.setPort(this.logPort);
    
logDbInitInfo!.setHasRead(true);
    
logDbInitInfo!.write();
    

    var staticPagesDbInitInfo: StaticPagesDbInitInfo = new StaticPagesDbInitInfo(false);
;
    
staticPagesDbInitInfo!.setJdbcDriver(this.staticPagesJdbcDriver);
    
staticPagesDbInitInfo!.setName(this.staticPagesName);
    
staticPagesDbInitInfo!.setUserName(this.staticPagesUserName);
    
staticPagesDbInitInfo!.setPassword(this.staticPagesPassword);
    
staticPagesDbInitInfo!.setSchema(this.staticPagesSchema);
    
staticPagesDbInitInfo!.setServer(this.staticPagesServer);
    
staticPagesDbInitInfo!.setPort(this.staticPagesPort);
    
staticPagesDbInitInfo!.setHasRead(true);
    
staticPagesDbInitInfo!.write();
    

    var inventoryDbInitInfo: InventoryDbInitInfo = new InventoryDbInitInfo(false);
;
    
inventoryDbInitInfo!.setJdbcDriver(this.inventoryJdbcDriver);
    
inventoryDbInitInfo!.setName(this.inventoryName);
    
inventoryDbInitInfo!.setUserName(this.inventoryUserName);
    
inventoryDbInitInfo!.setPassword(this.inventoryPassword);
    
inventoryDbInitInfo!.setSchema(this.inventorySchema);
    
inventoryDbInitInfo!.setServer(this.inventoryServer);
    
inventoryDbInitInfo!.setPort(this.inventoryPort);
    
inventoryDbInitInfo!.setHasRead(true);
    
inventoryDbInitInfo!.write();
    
this.logUtil!.putF("Created DB connection files", this, "set()");
    
}


}
                
            

