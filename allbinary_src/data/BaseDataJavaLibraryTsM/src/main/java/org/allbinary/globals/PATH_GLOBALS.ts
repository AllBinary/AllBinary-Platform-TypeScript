
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
        



import { AbPathData } from "../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class PATH_GLOBALS
            extends Object
         {
        

    private static readonly instance: PATH_GLOBALS = new PATH_GLOBALS();
        
        

    public static getInstance(): PATH_GLOBALS{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            
    var stringBuffer: StringMaker = new StringMaker();
        
        


    var abPathData: AbPathData = AbPathData.getInstance()!;
        
        

append("data")
append(abPathData!.SEPARATOR)
this.DATA_PATH= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(DATA_PATH)
append(CommonStrings.getInstance()!.INIT)
append(abPathData!.SEPARATOR)
this.INIT_PATH= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(DATA_PATH)
append("log")
append(abPathData!.SEPARATOR)
this.LOG_PATH= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(DATA_PATH)
append("backup")
append(abPathData!.SEPARATOR)
this.BACKUP_PATH= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(INIT_PATH)
append("views")
append(abPathData!.SEPARATOR)
this.VIEWS_PATH= stringBuffer!.toString()
}


    public readonly DATA_PATH: string

    public readonly INIT_PATH: string

    public readonly VIEWS_PATH: string

    public readonly LOG_PATH: string

    public readonly BACKUP_PATH: string

}
                
            

