
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
        



import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InitializerData
            extends Object
         {
        

    private static readonly instance: InitializerData = new InitializerData();
        
        

    public static getInstance(): InitializerData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly DBUSER: string = "DBUSER";
        
        

    public readonly DBPASSWORD: string = "DBPASSWORD";
        
        

    public readonly ADMINJDBCDRIVER: string = "ADMIN_JDBCDRIVER";
        
        

    public readonly ADMINSCHEMA: string = "ADMINSCHEMA";
        
        

    public readonly ADMINSERVER: string = "ADMINSERVER";
        
        

    public readonly ADMINPORT: string = "ADMINPORT";
        
        

    public readonly CUSTOMERJDBCDRIVER: string = "CUSTOMER_JDBCDRIVER";
        
        

    public readonly CUSTOMERNAME: string = "CUSTOMERNAME";
        
        

    public readonly CUSTOMERUSERNAME: string = "CUSTOMERUSERNAME";
        
        

    public readonly CUSTOMERPASSWORD: string = "CUSTOMERPASSWORD";
        
        

    public readonly CUSTOMERSCHEMA: string = "CUSTOMERSCHEMA";
        
        

    public readonly CUSTOMERSERVER: string = "CUSTOMERSERVER";
        
        

    public readonly CUSTOMERPORT: string = "CUSTOMERPORT";
        
        

    public readonly HISTORYJDBCDRIVER: string = "HISTORY_JDBCDRIVER";
        
        

    public readonly HISTORYNAME: string = "HISTORYNAME";
        
        

    public readonly HISTORYUSERNAME: string = "HISTORYUSERNAME";
        
        

    public readonly HISTORYPASSWORD: string = "HISTORYPASSWORD";
        
        

    public readonly HISTORYSCHEMA: string = "HISTORYSCHEMA";
        
        

    public readonly HISTORYSERVER: string = "HISTORYSERVER";
        
        

    public readonly HISTORYPORT: string = "HISTORYPORT";
        
        

    public readonly LOGJDBCDRIVER: string = "LOG_JDBCDRIVER";
        
        

    public readonly LOGNAME: string = "LOGNAME";
        
        

    public readonly LOGUSERNAME: string = "LOGUSERNAME";
        
        

    public readonly LOGPASSWORD: string = "LOGPASSWORD";
        
        

    public readonly LOGSCHEMA: string = "LOGSCHEMA";
        
        

    public readonly LOGSERVER: string = "LOGSERVER";
        
        

    public readonly LOGPORT: string = "LOGPORT";
        
        

    public readonly INVENTORYJDBCDRIVER: string = "INVENTORY_JDBCDRIVER";
        
        

    public readonly INVENTORYNAME: string = "INVENTORYNAME";
        
        

    public readonly INVENTORYUSERNAME: string = "INVENTORYUSERNAME";
        
        

    public readonly INVENTORYPASSWORD: string = "INVENTORYPASSWORD";
        
        

    public readonly INVENTORYSCHEMA: string = "INVENTORYSCHEMA";
        
        

    public readonly INVENTORYSERVER: string = "INVENTORYSERVER";
        
        

    public readonly INVENTORYPORT: string = "INVENTORYPORT";
        
        

    public readonly STATICPAGESJDBCDRIVER: string = "STATICPAGES_JDBCDRIVER";
        
        

    public readonly STATICPAGESNAME: string = "STATICPAGESNAME";
        
        

    public readonly STATICPAGESUSERNAME: string = "STATICPAGESUSERNAME";
        
        

    public readonly STATICPAGESPASSWORD: string = "STATICPAGESPASSWORD";
        
        

    public readonly STATICPAGESSCHEMA: string = "STATICPAGESSCHEMA";
        
        

    public readonly STATICPAGESSERVER: string = "STATICPAGESSERVER";
        
        

    public readonly STATICPAGESPORT: string = "STATICPAGESPORT";
        
        

    public getJdbcDriverSolutionInfo(): string{

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
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

