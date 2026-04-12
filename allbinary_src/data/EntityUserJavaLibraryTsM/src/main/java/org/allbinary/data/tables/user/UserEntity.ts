
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
        



            import Vector from "@ohos.util.Vector";
        
import { HashMap } from "../../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../../java/util/Vector.js";

    
import { StoreFrontData } from "../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontInterface } from "../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { EntryData } from "../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserDbInitInfo } from "../../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { CreateUserFactory } from "../../../../../org/allbinary/business/user/CreateUserFactory.js";

    
import { UserData } from "../../../../../org/allbinary/business/user/UserData.js";

    
import { UserInterface } from "../../../../../org/allbinary/business/user/UserInterface.js";

    
import { User } from "../../../../../org/allbinary/business/user/modules/User.js";

    
import { UserRole } from "../../../../../org/allbinary/business/user/role/UserRole.js";

    
import { UserRoleData } from "../../../../../org/allbinary/business/user/role/UserRoleData.js";

    
import { UserRoleFactory } from "../../../../../org/allbinary/business/user/role/UserRoleFactory.js";

    
import { GLOBALS2 } from "../../../../../org/allbinary/globals/GLOBALS2.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { SuperCrypt } from "../../../../../org/allbinary/logic/control/crypt/SuperCrypt.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class UserEntity extends AbSqlBean
                , UserEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly tableName: string = "user";
        
        

    private readonly COMMAND_SUCCESS_FOR_USER: string = "Command Success for user: ";
        
        

    private readonly PASSWORD_LABEL: string = " Password: ";
        
        

    private readonly EQUALS: string = "==";
        
        

    private readonly COMMAND_SUCCESS_BUT_LOGIN_FAILED: string = "Command Success but login failed for user: ";
        
        

    private readonly INVALID_PASSWORD_LABEL: string = " Password: \n\"";
        
        

    private readonly NOT_EQUAL: string = "\"!=\"";
        
        

    private readonly END_QUOTES: string = "\"";
        
        
public constructor ()                        

                            : super(new UserDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName);
    
}


    public insert(values: Vector){
var values = values

        try {
            super.insert(values);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, INSERT);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, INSERT, e);
    

                                    }
                                
}

}


                //@Throws(Error::class)
            
    public getAdministrators(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getUsersWithRole(UserRoleFactory.getInstance()!.ADMINISTRATOR);

                        ;
    
}


                //@Throws(Error::class)
            
    public getStoreManagers(storeFrontInterface: StoreFrontInterface): Vector{
var storeFrontInterface = storeFrontInterface

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var usersVector: Vector = new Vector();
        
        
;
    
keysAndValues!.put(UserRoleData.NAME.toString(), UserRoleFactory.getInstance()!.STOREMANAGER.toString());
    
keysAndValues!.put(UserData.PERMISSIONS, storeFrontInterface!.getName());
    

    var usersHashMapVector: Vector = super.getRows(keysAndValues)!;
        
        
;
    

    var size: number = usersHashMapVector!.length!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var userHashMap: HashMap<any, any> = usersHashMapVector!.get(i as Object);

                         as HashMap<any, any>;
        
        
;
    

                        if(userHashMap != 
                                    null
                                )
                        usersVector!.add(new User(userHashMap));

                        
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return usersVector;
    
}


                //@Throws(Error::class)
            
    public getCustomers(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getUsersWithRole(UserRoleFactory.getInstance()!.CUSTOMER);

                        ;
    
}


                //@Throws(Error::class)
            
    public getUsersWithRole(userRole: UserRole): Vector{
var userRole = userRole

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var usersVector: Vector = new Vector();
        
        
;
    
keysAndValues!.put(UserRoleData.NAME.toString(), userRole!.toString());
    

    var usersHashMapVector: Vector = super.getRows(keysAndValues)!;
        
        
;
    

    var size: number = usersHashMapVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var userHashMap: HashMap<any, any> = usersHashMapVector!.get(index as Object);

                         as HashMap<any, any>;
        
        
;
    

                        if(userHashMap != 
                                    null
                                )
                        usersVector!.add(new User(userHashMap));

                        
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return usersVector;
    
}


                //@Throws(Error::class)
            
    public getUsers(storeFrontInterface: StoreFrontInterface): Vector{
var storeFrontInterface = storeFrontInterface

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var usersVector: Vector = new Vector();
        
        
;
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, storeFrontInterface!.getName());
    

    var usersHashMapVector: Vector = super.getRows(keysAndValues)!;
        
        
;
    

    var size: number = usersHashMapVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var userHashMap: HashMap<any, any> = usersHashMapVector!.get(index as Object);

                         as HashMap<any, any>;
        
        
;
    

                        if(userHashMap != 
                                    null
                                )
                        usersVector!.add(new User(userHashMap));

                        
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return usersVector;
    
}


                //@Throws(Error::class)
            
    public getUser(userName: string): UserInterface{
var userName = userName

    var row: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
row.put(UserData.USERNAME, userName);
    

    var userHashMap: HashMap<any, any> = super.getRow(row)!;
        
        
;
    

                        if(userHashMap != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CreateUserFactory.getInstance(userHashMap);

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public deleteWhere(key: string, value: string){
var key = key
var value = value

        try {
            super.deleteWhere(key, value);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "deleteWhere");
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "deleteWhere", e);
    

                                    }
                                
}

}


    public login(userName: string, password: string): string{
var userName = userName
var password = password

        try {
            
    var isUserNameAndPasswordCorrect: number = 0;
        
        
;
    

    var result: string = super.getField(UserData.USERNAME, userName, UserData.PASSWORD)!;
        
        
;
    

    var encryption: string = super.getField(UserData.USERNAME, userName, EntryData.getInstance()!.ENCRYPTION)!;
        
        
;
    

                        if(encryption != 
                                    null
                                 && encryption.compareTo(this.stringUtil!.EMPTY_STRING) != 0)
                        isUserNameAndPasswordCorrect= result.compareTo(new SuperCrypt(new Integer(encryption).
                            toInt()).
                            encrypt(password))
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Command Success but login failed for user: " +userName +" because user did not exist", this, "login");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GLOBALS2.LOGINFAILED;
    

                        }
                            

                        if(isUserNameAndPasswordCorrect == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(COMMAND_SUCCESS_FOR_USER);
    
stringBuffer!.append(userName);
    
stringBuffer!.append(PASSWORD_LABEL);
    
stringBuffer!.append(password);
    
stringBuffer!.append(EQUALS);
    
stringBuffer!.append(result);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "login");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GLOBALS2.LOGINSUCCESS;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(COMMAND_SUCCESS_BUT_LOGIN_FAILED);
    
stringBuffer!.append(userName);
    
stringBuffer!.append(INVALID_PASSWORD_LABEL);
    
stringBuffer!.append(new SuperCrypt(new Integer(encryption).
                            toInt()).
                            encrypt(password));
    
stringBuffer!.append(NOT_EQUAL);
    
stringBuffer!.append(result);
    
stringBuffer!.append(END_QUOTES);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "login");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GLOBALS2.LOGINFAILED;
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "login", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error";
    
}

}


    public update(userName: string, updatedValues: HashMap<any, any>){
var userName = userName
var updatedValues = updatedValues
super.updateWhere(UserData.USERNAME, userName, updatedValues);
    
}


    public dropTables(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();

                        ;
    
}


    public createTableStatement(): string{

    var entryData: EntryData = EntryData.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(tableName)!.append(this.sqlStrings!.START)!.append(UserData.USERNAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(UserData.PREFIXNAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.FIRSTNAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.LASTNAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.MIDDLENAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.SUFFIXNAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.COMPANY)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.POSITIONATCOMPANY)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.MAINEMAIL)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(UserData.SECONDARYEMAIL)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.HOMEPHONE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.CELLPHONE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.WORKPHONE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.OTHERCONTACT)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.ELECTRONICDEVICE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.FAX)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserRoleData.NAME.toString())!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(UserData.CONFIGURATION)!.append(this.sqlTypeStrings!.BLOB_NOT_NULL)!.append(UserData.PERMISSIONS)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(entryData!.ENCRYPTION)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(UserData.SECRET)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.PASSWORD)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(entryData!.ENABLE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(entryData!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(entryData!.LASTMODIFIED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(UserData.USERNAME)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());

                        ;
    
}


}
                
            

