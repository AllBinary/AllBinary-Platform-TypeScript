
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

    
import { HistoryDbInitInfo } from "../../../../org/allbinary/business/init/db/HistoryDbInitInfo.js";

    
import { InventoryDbInitInfo } from "../../../../org/allbinary/business/init/db/InventoryDbInitInfo.js";

    
import { LogDbInitInfo } from "../../../../org/allbinary/business/init/db/LogDbInitInfo.js";

    
import { StaticPagesDbInitInfo } from "../../../../org/allbinary/business/init/db/StaticPagesDbInitInfo.js";

    
import { UserDbInitInfo } from "../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

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
        
        


    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var keys: Set = map.keySet()!;
        
        


    var keyArray: any = {}[] = keys.toArray()!;
        
        


    var size: number = keyArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var key: string = keyArray[index]! as String;
        
        


    var values: string[] = map.get(key) as Array<String?>;
        
        

put(key.toCharArray()
                                        .slice(0, ).join('')
                                    , .toCharArray())
delete(0, stringBuffer!.length())
append("key: ")
append(key)
append(" Value: ")
append(values[0]!)
put(stringBuffer!.toString(), this, "getFormData()")
}

this.getFormData(hashMap)
}

public constructor (initHashMap: HashMap<Any, Any>){

            super();
            var initHashMap = initHashMap
this.getFormData(initHashMap)
}


    public getFormData(hashMap: HashMap<Any, Any>){
var hashMap = hashMap

        try {
            
    var initializerData: InitializerData = InitializerData.getInstance()!;
        
        

userJdbcDriver= hashMap!.get(initializerData!.CUSTOMERJDBCDRIVER) as String
userName= hashMap!.get(initializerData!.CUSTOMERNAME) as String
userUserName= hashMap!.get(initializerData!.CUSTOMERUSERNAME) as String
userPassword= hashMap!.get(initializerData!.CUSTOMERPASSWORD) as String
userSchema= hashMap!.get(initializerData!.CUSTOMERSCHEMA) as String
userServer= hashMap!.get(initializerData!.CUSTOMERSERVER) as String
userPort= hashMap!.get(initializerData!.CUSTOMERPORT) as String
historyJdbcDriver= hashMap!.get(initializerData!.HISTORYJDBCDRIVER) as String
historyName= hashMap!.get(initializerData!.HISTORYNAME) as String
historyUserName= hashMap!.get(initializerData!.HISTORYUSERNAME) as String
historyPassword= hashMap!.get(initializerData!.HISTORYPASSWORD) as String
historySchema= hashMap!.get(initializerData!.HISTORYSCHEMA) as String
historyServer= hashMap!.get(initializerData!.HISTORYSERVER) as String
historyPort= hashMap!.get(initializerData!.HISTORYPORT) as String
logJdbcDriver= hashMap!.get(initializerData!.LOGJDBCDRIVER) as String
logName= hashMap!.get(initializerData!.LOGNAME) as String
logUserName= hashMap!.get(initializerData!.LOGUSERNAME) as String
logPassword= hashMap!.get(initializerData!.LOGPASSWORD) as String
logSchema= hashMap!.get(initializerData!.LOGSCHEMA) as String
logServer= hashMap!.get(initializerData!.LOGSERVER) as String
logPort= hashMap!.get(initializerData!.LOGPORT) as String
inventoryJdbcDriver= hashMap!.get(initializerData!.INVENTORYJDBCDRIVER) as String
inventoryName= hashMap!.get(initializerData!.INVENTORYNAME) as String
inventoryUserName= hashMap!.get(initializerData!.INVENTORYUSERNAME) as String
inventoryPassword= hashMap!.get(initializerData!.INVENTORYPASSWORD) as String
inventorySchema= hashMap!.get(initializerData!.INVENTORYSCHEMA) as String
inventoryServer= hashMap!.get(initializerData!.INVENTORYSERVER) as String
inventoryPort= hashMap!.get(initializerData!.INVENTORYPORT) as String
staticPagesJdbcDriver= hashMap!.get(initializerData!.STATICPAGESJDBCDRIVER) as String
staticPagesName= hashMap!.get(initializerData!.STATICPAGESNAME) as String
staticPagesUserName= hashMap!.get(initializerData!.STATICPAGESUSERNAME) as String
staticPagesPassword= hashMap!.get(initializerData!.STATICPAGESPASSWORD) as String
staticPagesSchema= hashMap!.get(initializerData!.STATICPAGESSCHEMA) as String
staticPagesServer= hashMap!.get(initializerData!.STATICPAGESSERVER) as String
staticPagesPort= hashMap!.get(initializerData!.STATICPAGESPORT) as String
} catch(e: Exception)
            {
put("Unable to get form data", this, "getFormData()", e)
}

}


    isJdbcDriverValid(jdbcDriverClassPathString: string): boolean{
var jdbcDriverClassPathString = jdbcDriverClassPathString

        try {
            newInstance()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, commonStrings!.IS_VALID, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public isValid(): boolean{

    var isValid: boolean = true;
        
        


    
                        if(!this.isJdbcDriverValid(this.userJdbcDriver))
                        
                                    {
                                    isValid= false

                                    }
                                

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    
                        if(!stringValidationUtil!.isValidRequired(userName, MIN, MAXDB))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(userUserName, MIN, MAX))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!stringValidationUtil!.isValidNotRequired(userPassword, MINPASSWORD, MAX))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!this.isJdbcDriverValid(this.historyJdbcDriver))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(historyName, MIN, MAXDB))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(historyUserName, MIN, MAX))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!stringValidationUtil!.isValidNotRequired(historyPassword, MINPASSWORD, MAX))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!this.isJdbcDriverValid(this.logJdbcDriver))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(this.logName, MIN, MAXDB))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(this.logUserName, MIN, MAX))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!stringValidationUtil!.isValidNotRequired(this.logPassword, MINPASSWORD, MAX))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!this.isJdbcDriverValid(this.inventoryJdbcDriver))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(inventoryName, MIN, MAXDB))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(inventoryUserName, MIN, MAX))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!stringValidationUtil!.isValidNotRequired(inventoryPassword, MINPASSWORD, MAX))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!this.isJdbcDriverValid(this.staticPagesJdbcDriver))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(staticPagesName, MIN, MAXDB))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(staticPagesUserName, MIN, MAX))
                        
                                    {
                                    isValid= false

                                    }
                                

    
                        if(!stringValidationUtil!.isValidNotRequired(staticPagesPassword, MINPASSWORD, MAX))
                        
                                    {
                                    isValid= false

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    
}


    getJdbcDriverValidationInfo(jdbcDriver: string): string{
var jdbcDriver = jdbcDriver

    var stringBuffer: StringMaker = new StringMaker();
        
        

append("The JDBC driver (")
append(jdbcDriver)
append(") you have provided is not valid.<br/>")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    getJdbcDriverSolutionInfo(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append("The following describes the possible problems and solutions regarding the Jdbc Driver error(s):<p/>")
append("1. A JDBC driver you specified is not in your classpath.<br/>")
append("Solution 1: Move the JDBC driver into any directory specified in the existing classpath. <br/>")
append("Solution 2: Add the directory that contains the JDBC driver to the classpath.<br/>")
append("Solution 3: Add the JDBC driver to the WEB-INF/lib directory where you installed this webapp.<br/>")
append("2. The JDBC driver you specified does not exit.<br/>")
append("Solution: Get a JDBC driver. <br/>")
append("3. The JDBC driver you specified is not valid.<br/>")
append("Solution: Use a valid JDBC driver.<p/>")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public getInvalidInfo(): string{

    var isJdbcDriversValid: boolean = true;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        


    
                        if(!this.isJdbcDriverValid(this.userJdbcDriver))
                        
                                    {
                                    isJdbcDriversValid= false
append(this.getJdbcDriverValidationInfo(this.userJdbcDriver))

                                    }
                                

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    
                        if(!stringValidationUtil!.isValidRequired(userName, MIN, MAXDB))
                        
                                    {
                                    append("User db name should be < " +MAXDB +" and > " +MIN +" characters in length.<br />")

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(userUserName, MIN, MAX))
                        
                                    {
                                    append("User db username should be < " +MAX +" and > " +MIN +" characters in length.<br />")

                                    }
                                

    
                        if(!stringValidationUtil!.isValidNotRequired(userPassword, MINPASSWORD, MAX))
                        
                                    {
                                    append("User DB password should be < " +MAX +" and > " +MINPASSWORD +" characters in length.<br />")

                                    }
                                

    
                        if(!this.isJdbcDriverValid(this.historyJdbcDriver))
                        
                                    {
                                    isJdbcDriversValid= false
append(this.getJdbcDriverValidationInfo(this.historyJdbcDriver))

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(historyName, MIN, MAXDB))
                        
                                    {
                                    append("History db should be < " +MAXDB +" and > " +MIN +" characters in length.<br />")

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(historyUserName, MIN, MAX))
                        
                                    {
                                    append("History db username should be < " +MAX +" and > " +MIN +" characters in length.<br />")

                                    }
                                

    
                        if(!stringValidationUtil!.isValidNotRequired(historyPassword, MINPASSWORD, MAX))
                        
                                    {
                                    append("History db password should be < " +MAX +" and > " +MINPASSWORD +" characters in length.<br />")

                                    }
                                

    
                        if(!this.isJdbcDriverValid(this.logJdbcDriver))
                        
                                    {
                                    isJdbcDriversValid= false
append(this.getJdbcDriverValidationInfo(this.logJdbcDriver))

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(this.logName, MIN, MAXDB))
                        
                                    {
                                    append("Log db should be < " +MAXDB +" and > " +MIN +" characters in length.<br />")

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(this.logUserName, MIN, MAX))
                        
                                    {
                                    append("Log db username should be < " +MAX +" and > " +MIN +" characters in length.<br />")

                                    }
                                

    
                        if(!stringValidationUtil!.isValidNotRequired(this.logPassword, MINPASSWORD, MAX))
                        
                                    {
                                    append("Log db password should be < " +MAX +" and > " +MINPASSWORD +" characters in length.<br />")

                                    }
                                

    
                        if(!this.isJdbcDriverValid(this.inventoryJdbcDriver))
                        
                                    {
                                    isJdbcDriversValid= false
append(this.getJdbcDriverValidationInfo(this.inventoryJdbcDriver))

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(inventoryName, MIN, MAXDB))
                        
                                    {
                                    append("Inventory db should be < " +MAXDB +" and > " +MIN +" characters in length.<br />")

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(inventoryUserName, MIN, MAX))
                        
                                    {
                                    append("Inventory db username should be < " +MAX +" and > " +MIN +" characters in length.<br />")

                                    }
                                

    
                        if(!stringValidationUtil!.isValidNotRequired(inventoryPassword, MINPASSWORD, MAX))
                        
                                    {
                                    append("Inventory DB password should be < " +MAX +" and > " +MINPASSWORD +" characters in length.<br />")

                                    }
                                

    
                        if(!this.isJdbcDriverValid(this.staticPagesJdbcDriver))
                        
                                    {
                                    isJdbcDriversValid= false
append(this.getJdbcDriverValidationInfo(this.staticPagesJdbcDriver))

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(staticPagesName, MIN, MAXDB))
                        
                                    {
                                    append("Static Pages db should be < " +MAXDB +" and > " +MIN +" characters in length.<br />")

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(staticPagesUserName, MIN, MAX))
                        
                                    {
                                    append("Static Pages db username should be < " +MAX +" and > " +MIN +" characters in length.<br />")

                                    }
                                

    
                        if(!stringValidationUtil!.isValidNotRequired(staticPagesPassword, MINPASSWORD, MAX))
                        
                                    {
                                    append("Static Pages DB password should be < " +MAX +" and > " +MINPASSWORD +" characters in length.<br />")

                                    }
                                

    
                        if(!isJdbcDriversValid)
                        
                                    {
                                    append(getJdbcDriverSolutionInfo())

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


                @Throws(Exception::class)
            
    public set(){
put("Creating DB connection files", this, "set()")

    var userDbInitInfo: UserDbInitInfo = new UserDbInitInfo(false);
        
        

setJdbcDriver(this.userJdbcDriver)
setName(userName)
setUserName(userUserName)
setPassword(userPassword)
setSchema(userSchema)
setServer(userServer)
setPort(userPort)
setHasRead(true)
write()

    var historyDbInitInfo: HistoryDbInitInfo = new HistoryDbInitInfo(false);
        
        

setJdbcDriver(this.historyJdbcDriver)
setName(historyName)
setUserName(historyUserName)
setPassword(historyPassword)
setSchema(historySchema)
setServer(historyServer)
setPort(historyPort)
setHasRead(true)
write()

    var logDbInitInfo: LogDbInitInfo = new LogDbInitInfo(false);
        
        

setJdbcDriver(this.logJdbcDriver)
setName(this.logName)
setUserName(this.logUserName)
setPassword(this.logPassword)
setSchema(this.logSchema)
setServer(this.logServer)
setPort(this.logPort)
setHasRead(true)
write()

    var staticPagesDbInitInfo: StaticPagesDbInitInfo = new StaticPagesDbInitInfo(false);
        
        

setJdbcDriver(this.staticPagesJdbcDriver)
setName(staticPagesName)
setUserName(staticPagesUserName)
setPassword(staticPagesPassword)
setSchema(staticPagesSchema)
setServer(staticPagesServer)
setPort(staticPagesPort)
setHasRead(true)
write()

    var inventoryDbInitInfo: InventoryDbInitInfo = new InventoryDbInitInfo(false);
        
        

setJdbcDriver(this.inventoryJdbcDriver)
setName(inventoryName)
setUserName(inventoryUserName)
setPassword(inventoryPassword)
setSchema(inventorySchema)
setServer(inventoryServer)
setPort(inventoryPort)
setHasRead(true)
write()
put("Created DB connection files", this, "set()")
}


}
                
            

