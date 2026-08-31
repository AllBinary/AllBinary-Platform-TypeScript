
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { StoreFrontData } from '../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { StoreFrontInterface } from '../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { EntryData } from '../../../../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { UserDbInitInfo } from '../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
      //not GWT import const UserDbInitInfo = globalThis.org.allbinary.business.init.db.UserDbInitInfo;

      
import { CreateUserFactory } from '../../../../../org/allbinary/business/user/CreateUserFactory.js';
      //not GWT import const CreateUserFactory = globalThis.org.allbinary.business.user.CreateUserFactory;

      
import { UserData } from '../../../../../org/allbinary/business/user/UserData.js';
      //not GWT import const UserData = globalThis.org.allbinary.business.user.UserData;

      
import { UserInterface } from '../../../../../org/allbinary/business/user/UserInterface.js';
      //not GWT import const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
import { User } from '../../../../../org/allbinary/business/user/modules/User.js';
      //not GWT import const User = globalThis.org.allbinary.business.user.modules.User;

      
import { UserRole } from '../../../../../org/allbinary/business/user/role/UserRole.js';
      //not GWT import const UserRole = globalThis.org.allbinary.business.user.role.UserRole;

      
import { UserRoleData } from '../../../../../org/allbinary/business/user/role/UserRoleData.js';
      //not GWT import const UserRoleData = globalThis.org.allbinary.business.user.role.UserRoleData;

      
import { UserRoleFactory } from '../../../../../org/allbinary/business/user/role/UserRoleFactory.js';
      //not GWT import const UserRoleFactory = globalThis.org.allbinary.business.user.role.UserRoleFactory;

      
import { GLOBALS2 } from '../../../../../org/allbinary/globals/GLOBALS2.js';
      //not GWT import const GLOBALS2 = globalThis.org.allbinary.globals.GLOBALS2;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlBean } from '../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
      //not GWT import const AbSqlBean = globalThis.org.allbinary.logic.communication.sql.AbSqlBean;

      
import { SuperCrypt } from '../../../../../org/allbinary/logic/control/crypt/SuperCrypt.js';
      //not GWT import const SuperCrypt = globalThis.org.allbinary.logic.control.crypt.SuperCrypt;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserEntityInterface } from './UserEntityInterface.js';
//not GWT import const UserEntityInterface = globalThis.org.allbinary.data.tables.user.UserEntityInterface;

                
export class UserEntity extends AbSqlBean implements UserEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly tableName: string = "user";

    private readonly COMMAND_SUCCESS_FOR_USER: string = "Command Success for user: ";

    private readonly PASSWORD_LABEL: string = " Password: ";

    private readonly EQUALS: string = "==";

    private readonly COMMAND_SUCCESS_BUT_LOGIN_FAILED: string = "Command Success but login failed for user: ";

    private readonly INVALID_PASSWORD_LABEL: string = " Password: \n\"";

    private readonly NOT_EQUAL: string = "\"!=\"";

    private readonly END_QUOTES: string = CommonSeps.getInstance()!.QUOTE;

public constructor (){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
}


    public insert(values: Vector){

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


                //@Throws(Exception.constructor)
            
    public getAdministrators(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getUsersWithRole(UserRoleFactory.getInstance()!.ADMINISTRATOR);;
    
}


                //@Throws(Exception.constructor)
            
    public getStoreManagers(storeFrontInterface: StoreFrontInterface): Vector{

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();;
    

    var usersVector: Vector = new Vector();;
    
keysAndValues!.put(UserRoleData.NAME.toString(), UserRoleFactory.getInstance()!.STOREMANAGER.toString());
    
keysAndValues!.put(UserData.PERMISSIONS, storeFrontInterface!.getName());
    

    var usersHashMapVector: Vector = super.getRows(keysAndValues)!;;
    

    var size: number = usersHashMapVector!.length!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var userHashMap: HashMap<any, any> = usersHashMapVector!.get(i) as HashMap<any, any>;;
    

                        if(userHashMap != 
                                    null
                                )
                        usersVector!.add(new User(userHashMap))
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return usersVector;
    
}


                //@Throws(Exception.constructor)
            
    public getCustomers(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getUsersWithRole(UserRoleFactory.getInstance()!.CUSTOMER);;
    
}


                //@Throws(Exception.constructor)
            
    public getUsersWithRole(userRole: UserRole): Vector{

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();;
    

    var usersVector: Vector = new Vector();;
    
keysAndValues!.put(UserRoleData.NAME.toString(), userRole!.toString());
    

    var usersHashMapVector: Vector = super.getRows(keysAndValues)!;;
    

    var size: number = usersHashMapVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var userHashMap: HashMap<any, any> = usersHashMapVector!.get(index) as HashMap<any, any>;;
    

                        if(userHashMap != 
                                    null
                                )
                        usersVector!.add(new User(userHashMap))
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return usersVector;
    
}


                //@Throws(Exception.constructor)
            
    public getUsers(storeFrontInterface: StoreFrontInterface): Vector{

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();;
    

    var usersVector: Vector = new Vector();;
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, storeFrontInterface!.getName());
    

    var usersHashMapVector: Vector = super.getRows(keysAndValues)!;;
    

    var size: number = usersHashMapVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var userHashMap: HashMap<any, any> = usersHashMapVector!.get(index) as HashMap<any, any>;;
    

                        if(userHashMap != 
                                    null
                                )
                        usersVector!.add(new User(userHashMap))
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return usersVector;
    
}


                //@Throws(Exception.constructor)
            
    public getUser(userName: string): UserInterface{

    var row: HashMap<any, any> = new HashMap<any, any>();;
    
row.put(UserData.USERNAME, userName);
    

    var userHashMap: HashMap<any, any> = super.getRow(row)!;;
    

                        if(userHashMap != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CreateUserFactory.getInstance(userHashMap);;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public deleteWhere(key: string, value: string){

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

        try {
            
    var isUserNameAndPasswordCorrect: number = 0;;
    

    var result: string = super.getField(UserData.USERNAME, userName, UserData.PASSWORD)!;;
    

    var encryption: string = super.getField(UserData.USERNAME, userName, EntryData.getInstance()!.ENCRYPTION)!;;
    

                        if(encryption != 
                                    null
                                 && encryption.compareTo(this.stringUtil!.EMPTY_STRING) != 0)
                        isUserNameAndPasswordCorrect= result.compareTo(new SuperCrypt(new Integer(encryption).intValue()).encrypt(password))
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
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.COMMAND_SUCCESS_FOR_USER);
    
stringBuffer!.append(userName);
    
stringBuffer!.append(this.PASSWORD_LABEL);
    
stringBuffer!.append(password);
    
stringBuffer!.append(this.EQUALS);
    
stringBuffer!.append(result);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "login");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GLOBALS2.LOGINSUCCESS;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.COMMAND_SUCCESS_BUT_LOGIN_FAILED);
    
stringBuffer!.append(userName);
    
stringBuffer!.append(this.INVALID_PASSWORD_LABEL);
    
stringBuffer!.append(new SuperCrypt(new Integer(encryption).intValue()).encrypt(password));
    
stringBuffer!.append(this.NOT_EQUAL);
    
stringBuffer!.append(result);
    
stringBuffer!.append(this.END_QUOTES);
    
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
super.updateWhere(UserData.USERNAME, userName, updatedValues);
    
}


    public dropTables(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();;
    
}


    public createTableStatement(): string{

    var entryData: EntryData = EntryData.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(tableName)!.append(this.sqlStrings!.START)!.append(UserData.USERNAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(UserData.PREFIXNAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.FIRSTNAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.LASTNAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.MIDDLENAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.SUFFIXNAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.COMPANY)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.POSITIONATCOMPANY)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.MAINEMAIL)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(UserData.SECONDARYEMAIL)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.HOMEPHONE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.CELLPHONE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.WORKPHONE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.OTHERCONTACT)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.ELECTRONICDEVICE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.FAX)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserRoleData.NAME.toString())!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(UserData.CONFIGURATION)!.append(this.sqlTypeStrings!.BLOB_NOT_NULL)!.append(UserData.PERMISSIONS)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(entryData!.ENCRYPTION)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(UserData.SECRET)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(UserData.PASSWORD)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(entryData!.ENABLE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(entryData!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(entryData!.LASTMODIFIED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(UserData.USERNAME)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());;
    
}


}



