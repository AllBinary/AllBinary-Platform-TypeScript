
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
        



import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { WebappClassLoaderInfo } from "../../../org/allbinary/logic/system/loader/WebappClassLoaderInfo.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

import { URLGLOBALS } from "./URLGLOBALS.js";

import { URLGLOBALS } from "./URLGLOBALS.js";

import { URLGLOBALS } from "./URLGLOBALS.js";

export class Globals
            extends Object
         {
        

    private static readonly instance: Globals = new Globals();
        
        

    public static getInstance(): Globals{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    public init(classLoader: ClassLoader, pathString: string){
var classLoader = classLoader
var pathString = pathString

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var appUrlGlobals: AppUrlGlobals = new AppUrlGlobals();
        
        
;
    
appUrlGlobals!.setWebappPath(pathString);
    
URLGLOBALS.init(appUrlGlobals);
    
WebappClassLoaderInfo.setLoader(classLoader);
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Setting Up AllBinary System Configuration Args: ");
    
stringBuffer!.append(pathString);
    
stringBuffer!.append(" ClassLoader: ");
    
stringBuffer!.append(classLoader!.constructor.name.toString()!);
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.INIT);
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

                        if(stringValidationUtil!.isEmpty(pathString))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("No Path Provided. Using Process Path: ");
    
stringBuffer!.append(pathString);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(CommonSeps.getInstance()!.EQUALS);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.INIT);
    

                                    }
                                
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Webapp Path Set To: ");
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.INIT);
    
}


}
                
            

