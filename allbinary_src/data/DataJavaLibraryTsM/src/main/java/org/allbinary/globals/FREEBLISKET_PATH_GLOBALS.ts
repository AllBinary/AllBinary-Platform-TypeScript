
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

    

import { PATH_GLOBALS } from "./PATH_GLOBALS.js";

import { PATH_GLOBALS } from "./PATH_GLOBALS.js";

import { PATH_GLOBALS } from "./PATH_GLOBALS.js";

export class FREEBLISKET_PATH_GLOBALS
            extends Object
         {
        

    private static readonly instance: FREEBLISKET_PATH_GLOBALS = new FREEBLISKET_PATH_GLOBALS();
        
        

    public static getInstance(): FREEBLISKET_PATH_GLOBALS{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly INSTALLPATH: string

    public readonly XSLPATH: string

    public readonly TEMPLATEPATH: string = "template" +AbPathData.getInstance()!.SEPARATOR;
        
        

    public readonly STYLEPATH: string = TEMPLATEPATH +"style" +AbPathData.getInstance()!.SEPARATOR;
        
        

    public readonly THEMEPATH: string = STYLEPATH +"theme" +AbPathData.getInstance()!.SEPARATOR;
        
        

    public readonly DBINITPATH: string = PATH_GLOBALS.getInstance()!.INIT_PATH +"db" +AbPathData.getInstance()!.SEPARATOR;
        
        

    public readonly LINEDATAPATH: string = PATH_GLOBALS.getInstance()!.INIT_PATH +"lineData" +AbPathData.getInstance()!.SEPARATOR;
        
        

    public readonly CONFIGURATIONPATH: string

    public readonly USERCONFIGURATIONPATH: string

    public readonly CONTEXTCONFIGURATIONPATH: string

    public readonly LICENSEERRORPAGE: string = "LicensingError.jsp";
        
        

    public readonly ERRORPAGE: string = "Error.jsp";
        
        
private constructor (){

            super();
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("install");
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
this.INSTALLPATH= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.INIT_PATH);
    
stringBuffer!.append("views");
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
this.XSLPATH= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(XSLPATH);
    
stringBuffer!.append("configuration");
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
this.CONFIGURATIONPATH= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(CONFIGURATIONPATH);
    
stringBuffer!.append("user");
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
this.USERCONFIGURATIONPATH= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(CONFIGURATIONPATH);
    
stringBuffer!.append("context");
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
this.CONTEXTCONFIGURATIONPATH= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
}


}
                
            

