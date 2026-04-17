
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
        



import { HashMap } from "../../java/util/HashMap.js";

    
import { Vector } from "../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { EntryData } from "../../org/allbinary/business/entry/EntryData.js";

    
import { Portion } from "../../org/allbinary/business/installer/Portion.js";

    
import { NewUserFactory } from "../../org/allbinary/business/user/NewUserFactory.js";

    
import { UserData } from "../../org/allbinary/business/user/UserData.js";

    
import { UserInterface } from "../../org/allbinary/business/user/UserInterface.js";

    
import { UserName } from "../../org/allbinary/business/user/username/UserName.js";

    
import { UserEntityFactory } from "../../org/allbinary/data/tables/user/UserEntityFactory.js";

    
import { FREEBLISKET_PATH_GLOBALS } from "../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../org/allbinary/globals/URLGLOBALS.js";

    
import { RequestParams } from "../../org/allbinary/logic/communication/http/request/RequestParams.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlTableUtil } from "../../org/allbinary/logic/communication/sql/AbSqlTableUtil.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../org/allbinary/logic/string/StringValidationUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Table } from "./Table.js";

export class UserHelper extends Table {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly hashMap: HashMap<any, any>

    private readonly pageContext: PageContext

    private readonly request: HttpServletRequest

    private readonly path: string

    private readonly portion: Portion
public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
this.hashMap= hashMap;
    
this.pageContext= pageContext;
    
this.request= pageContext!.getRequest();

                         as HttpServletRequest;
    
this.path= URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH;
    
this.portion= new Portion(hashMap);
    
}


    public delete(): string{

        try {
            
    var requestHashMap: HashMap<any, any> = new RequestParams(this.request).
                            toHashMap()!;
        
        
;
    

    var userName: UserName = new UserName(requestHashMap);
        
        
;
    
UserEntityFactory.getInstance()!.deleteWhere(UserData.USERNAME, userName!.get());
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Successfully Removed the user with ");
    
stringBuffer!.append(UserData.USERNAME);
    
stringBuffer!.append("=");
    
stringBuffer!.append(userName!.get());
    
stringBuffer!.append(" from to the user table");
    

    var success: string = stringBuffer!.toString()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "delete()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to remove user with " +UserData.USERNAME +" from User table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "delete()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


                //@Throws(Error::class)
            
    public insert(): string{

        try {
            
    var userInterface: UserInterface = NewUserFactory.getInstance(this.request, hashMap)!;
        
        
;
    

    var enable: string = this.hashMap!.get(EntryData.getInstance()!.ENABLE);

                         as String;
        
        
;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(enable);

                        )
                        
                                    {
                                    userInterface!.setEnable(enable);
    

                                    }
                                

    var values: Vector = userInterface!.toVector()!;
        
        
;
    
UserEntityFactory.getInstance()!.insert(values);
    

    var success: string = "New User Successfully added to the Users Table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "add()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to add User";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "add()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public update(): string{

        try {
            
    var user: UserInterface = NewUserFactory.getInstance(this.request, hashMap)!;
        
        
;
    

    var values: HashMap<any, any> = user.toHashMap()!;
        
        
;
    
UserEntityFactory.getInstance()!.update(user.getUserName(), values);
    

    var success: string = "New User Successfully added to the Users Table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to add User";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public drop(): string{

        try {
            
    var success: string = UserEntityFactory.getInstance()!.dropTable()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF(success, this, commonStrings!.DROP);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to drop user table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.DROP, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public create(): string{

        try {
            
    var success: string = UserEntityFactory.getInstance()!.createTable()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF(success, this, "create()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to create user table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "create()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public restore(): string{

        try {
            
    var success: string = "Restore Successful";
        
        
;
    

    var result: string = AbSqlTableUtil.getInstance()!.restoreTable(UserEntityFactory.getInstance(), this.portion)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "restore()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to restore backup";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "restore()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public backup(): string{

        try {
            
    var success: string = "Restore Successful";
        
        
;
    

    var result: string = AbSqlTableUtil.getInstance()!.backupTable(UserEntityFactory.getInstance())!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF(success, this, "backup()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to make backup";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "backup()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

