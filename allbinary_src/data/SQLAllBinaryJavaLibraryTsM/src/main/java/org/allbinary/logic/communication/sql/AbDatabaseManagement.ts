
        /*
                *  
                *  To change this license header, choose License Headers in Project Properties. 
                *  To change this template file, choose Tools | Templates  and open the template in the editor.  
        */
        
        /* Generated Code Do Not Modify */
        



import { InetAddress } from "../../../../../java/net/InetAddress.js";

    
import { DatabaseConnectionInfoInterface } from "../../../../../org/allbinary/business/init/db/DatabaseConnectionInfoInterface.js";

    
import { DbConnectionInfo } from "../../../../../org/allbinary/business/init/db/DbConnectionInfo.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class AbDatabaseManagement extends AbSqlBean {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly sqlCommandLog: StringMaker = new StringMaker();
        
        

    private readonly GRANT_ALL: string = "GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER ON ";
        
        

    private readonly DOT_STAR: string = ".*";
        
        

    private readonly TO: string = " TO ";
        
        

    private readonly AT_LOCALHOST: string = "@localhost";
        
        

    private readonly IDENTIFIED_BY: string = " IDENTIFIED BY '";
        
        

    private readonly WITH_GRANT_OPTION: string = "' WITH GRANT OPTION";
        
        

    private readonly FAILED: string = "Failed";
        
        

    private readonly GET_HOST_NAME: string = "getHostName()";
        
        

    private readonly METHOD_ADD_USER: string = "addUser()";
        
        

    readonly METHOD_ADD_USERS: string = "addUsers()";
        
        

    private readonly METHOD_ADD_DB: string = "addDb()";
        
        

    readonly METHOD_ADD_DATABASES: string = "addDatabases()";
        
        

    readonly METHOD_ADD_TABLES: string = "addTables()";
        
        

    readonly UNABLE_TO_CREATE_USER: string = "Unable to Create User: ";
        
        

    readonly UNABLE_TO_CREATE_DATABASE: string = "Unable to Create Database: ";
        
        

    readonly UNABLE_TO_CREATE_TABLES: string = "Unable to Create Tables";
        
        

    readonly ADD_TABLES_RESULTS_LABEL: string = "Add Table Results: ";
        
        
public constructor (databaseConnectionInfoInterface: DatabaseConnectionInfoInterface)                        

                            : super(databaseConnectionInfoInterface as DbConnectionInfo){

            super();
            var databaseConnectionInfoInterface = databaseConnectionInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (connectionInfo: DbConnectionInfo)                        

                            : super(connectionInfo){

            super();
            var connectionInfo = connectionInfo


                            //For kotlin this is before the body of the constructor.
                    
}


    getHostName(): string{

        try {
            
    var addr: InetAddress = InetAddress.getLocalHost()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return addr.getHostName();
    
} catch(e: Exception)
            {
logUtil!.put(this.FAILED, this, GET_HOST_NAME, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


                //@Throws(Error::class)
            
    addDbUser(hostName: string, db: string, userName: string, password: string): boolean{
var hostName = hostName
var db = db
var userName = userName
var password = password

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(this.GRANT_ALL)
stringBuffer!.append(db)
stringBuffer!.append(this.DOT_STAR)
stringBuffer!.append(this.TO)
stringBuffer!.append(userName)
stringBuffer!.append(hostName)
stringBuffer!.append(this.IDENTIFIED_BY)
stringBuffer!.append(password)
stringBuffer!.append(this.WITH_GRANT_OPTION)

    var sqlStatement: string = stringBuffer!.toString()!;
        
        

this.sqlCommandLog!.append(sqlStatement)
this.sqlCommandLog!.append(this.commonSeps!.NEW_LINE)
super.executeSQLStatement(sqlStatement)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    addDbUser(db: string, userName: string, password: string): boolean{
var db = db
var userName = userName
var password = password

        try {
            this.this.addDbUser(this.AT_LOCALHOST, db, userName, password)

    var hostName: string = this.getHostName()!;
        
        


                        if(hostName != 
                                    null
                                )
                        
                                    {
                                    this.this.addDbUser(hostName, db, userName, password)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
} catch(e: Exception)
            {
logUtil!.put(this.UNABLE_TO_CREATE_USER +userName, this, this.METHOD_ADD_USER, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    addDb(db: string): Boolean{
var db = db

        try {
            
    var sqlStatement: string = this.sqlStrings!.CREATE_DATABASE +db;
        
        

this.sqlCommandLog!.append(sqlStatement)
this.sqlCommandLog!.append(this.commonSeps!.NEW_LINE)
super.executeSQLStatement(sqlStatement)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
} catch(e: Exception)
            {
logUtil!.put(UNABLE_TO_CREATE_DATABASE +db, this, this.METHOD_ADD_DB, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


}
                
            

