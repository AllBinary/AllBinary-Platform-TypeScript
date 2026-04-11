
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
        



import { Method } from "../../../../java/lang/reflect/Method.js";

    
import { DbConnectionInfo } from "../../../../org/allbinary/business/init/db/DbConnectionInfo.js";

    
import { LicensingException } from "../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    

export class InitDb
            extends Object
         {
        

    private anyType: any = {}

    private readonly METHOD_CALL_GET_HOST_NAME: string = "getHostName";
        
        

    private readonly METHOD_CALL_ADD_USERS: string = "addUsers";
        
        

    private readonly METHOD_CALL_ADD_DATABASES: string = "addDatabases";
        
        

    private readonly METHOD_CALL_ADD_TABLES: string = "addTables";
        
        

    private readonly METHOD_CALL_TEMP_MAIN_PATH: string = "useTemporaryMainPath";
        
        

    private readonly METHOD_CALL_MAIN_PATH: string = "useNormalMainPath";
        
        
public constructor (){

            super();
            }

public constructor (dbConnectionInfo: DbConnectionInfo){

            super();
            var dbConnectionInfo = dbConnectionInfo
}


    setHelper(anyType: any = {}){
var anyType = anyType
this.anyType= anyType;
    
}


    getHelper(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.anyType;
    
}


    getHostName(): string{

        try {
            
    var dynamicClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = dynamicClass!.getMethod(METHOD_CALL_GET_HOST_NAME, 
                            null)!;
        
        
;
    

    var result: string = method.invoke(anyType, 
                            null);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public addUsers(): boolean{

        try {
            
    var dynamicClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = dynamicClass!.getMethod(METHOD_CALL_ADD_USERS, 
                            null)!;
        
        
;
    

    var result: Boolean = method.invoke(anyType, 
                            null);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;

                        ;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public addDatabases(): boolean{

        try {
            
    var dynamicClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = dynamicClass!.getMethod(METHOD_CALL_ADD_DATABASES, 
                            null)!;
        
        
;
    

    var result: Boolean = method.invoke(anyType, 
                            null);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;

                        ;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public addTables(): boolean{

        try {
            
    var dynamicClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = dynamicClass!.getMethod(METHOD_CALL_ADD_TABLES, 
                            null)!;
        
        
;
    

    var result: Boolean = method.invoke(anyType, 
                            null);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;

                        ;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public useTemporaryMainPath(): boolean{

        try {
            
    var dynamicClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = dynamicClass!.getMethod(METHOD_CALL_TEMP_MAIN_PATH, 
                            null)!;
        
        
;
    

    var result: Boolean = method.invoke(anyType, 
                            null);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;

                        ;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public useNormalMainPath(): boolean{

        try {
            
    var dynamicClass: Function = anyType!constructor!;
        
        
;
    

    var method: Method = dynamicClass!.getMethod(METHOD_CALL_MAIN_PATH, 
                            null)!;
        
        
;
    

    var result: Boolean = method.invoke(anyType, 
                            null);

                         as Boolean;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;

                        ;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


}
                
            

