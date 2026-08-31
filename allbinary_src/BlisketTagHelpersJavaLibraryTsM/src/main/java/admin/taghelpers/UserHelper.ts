
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
        



            import { Exception } from '../../java/lang/Exception.js';
        
import { HashMap } from '../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { EntryData } from '../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { Portion } from '../../org/allbinary/business/installer/Portion.js';
      //not GWT import const Portion = globalThis.org.allbinary.business.installer.Portion;

      
import { NewUserFactory } from '../../org/allbinary/business/user/NewUserFactory.js';
      //not GWT import const NewUserFactory = globalThis.org.allbinary.business.user.NewUserFactory;

      
import { UserData } from '../../org/allbinary/business/user/UserData.js';
      //not GWT import const UserData = globalThis.org.allbinary.business.user.UserData;

      
import { UserInterface } from '../../org/allbinary/business/user/UserInterface.js';
      //not GWT import const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

      
import { UserName } from '../../org/allbinary/business/user/username/UserName.js';
      //not GWT import const UserName = globalThis.org.allbinary.business.user.username.UserName;

      
import { UserEntityFactory } from '../../org/allbinary/data/tables/user/UserEntityFactory.js';
      //not GWT import const UserEntityFactory = globalThis.org.allbinary.data.tables.user.UserEntityFactory;

      
import { FREEBLISKET_PATH_GLOBALS } from '../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
      //not GWT import const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
import { URLGLOBALS } from '../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
import { RequestParams } from '../../org/allbinary/logic/communication/http/request/RequestParams.js';
      //not GWT import const RequestParams = globalThis.org.allbinary.logic.communication.http.request.RequestParams;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlTableUtil } from '../../org/allbinary/logic/communication/sql/AbSqlTableUtil.js';
      //not GWT import const AbSqlTableUtil = globalThis.org.allbinary.logic.communication.sql.AbSqlTableUtil;

      
//not plain js import { StringMaker } from '../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { StringValidationUtil } from '../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Table } from './Table.js';

export class UserHelper extends Table {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly hashMap: HashMap<any, any>;

    private readonly pageContext: PageContext;

    private readonly request: HttpServletRequest;

    private readonly path: string;

    private readonly portion: Portion;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        this.hashMap= hashMap;
    
this.pageContext= pageContext;
    
this.request= pageContext!.getRequest() as HttpServletRequest;
    
this.path= URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH;
    
this.portion= new Portion(hashMap);
    
}


    public delete(): string{

        try {
            
    var requestHashMap: HashMap<any, any> = new RequestParams(this.request).toHashMap()!;;
    

    var userName: UserName = new UserName(requestHashMap);;
    
UserEntityFactory.getInstance()!.deleteWhere(UserData.USERNAME, userName!.get());
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Successfully Removed the user with ");
    
stringBuffer!.append(UserData.USERNAME);
    
stringBuffer!.append("=");
    
stringBuffer!.append(userName!.get());
    
stringBuffer!.append(" from to the user table");
    

    var success: string = stringBuffer!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "delete()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to remove user with " +UserData.USERNAME +" from User table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "delete()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(Exception.constructor)
            
    public insert(): string{

        try {
            
    var userInterface: UserInterface = NewUserFactory.getInstance(this.request, hashMap)!;;
    

    var enable: string = this.hashMap!.get(EntryData.getInstance()!.ENABLE) as string;;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(enable))
                        
                                    {
                                    userInterface!.setEnable(enable);
    

                                    }
                                

    var values: Vector = userInterface!.toVector()!;;
    
UserEntityFactory.getInstance()!.insert(values);
    

    var success: string = "New User Successfully added to the Users Table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "add()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to add User";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "add()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public update(): string{

        try {
            
    var user: UserInterface = NewUserFactory.getInstance(this.request, hashMap)!;;
    

    var values: HashMap<any, any> = user.toHashMap()!;;
    
UserEntityFactory.getInstance()!.update(user.getUserName(), values);
    

    var success: string = "New User Successfully added to the Users Table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to add User";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public drop(): string{

        try {
            
    var success: string = UserEntityFactory.getInstance()!.dropTable()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF(success, this, this.commonStrings!.DROP);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to drop user table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.DROP, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public create(): string{

        try {
            
    var success: string = UserEntityFactory.getInstance()!.createTable()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF(success, this, "create()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to create user table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "create()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public restore(): string{

        try {
            
    var success: string = "Restore Successful";;
    

    var result: string = AbSqlTableUtil.getInstance()!.restoreTable(UserEntityFactory.getInstance(), this.portion)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "restore()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to restore backup";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "restore()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public backup(): string{

        try {
            
    var success: string = "Restore Successful";;
    

    var result: string = AbSqlTableUtil.getInstance()!.backupTable(UserEntityFactory.getInstance())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF(success, this, "backup()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to make backup";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backup()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}



