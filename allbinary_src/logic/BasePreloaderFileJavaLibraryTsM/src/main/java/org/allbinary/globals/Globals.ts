
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
        
        


    var appUrlGlobals: AppUrlGlobals = new AppUrlGlobals();
        
        

setWebappPath(pathString)
init(appUrlGlobals)
setLoader(classLoader)

    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Setting Up AllBinary System Configuration Args: ")
append(pathString)
append(" ClassLoader: ")
append(classLoader!::class.toString()!)
put(stringBuffer!.toString(), this, commonStrings!.INIT)

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    
                        if(stringValidationUtil!.isEmpty(pathString))
                        
                                    {
                                    delete(0, stringBuffer!.length())
append("No Path Provided. Using Process Path: ")
append(pathString)
append(CommonSeps.getInstance()!.SPACE)
append(CommonSeps.getInstance()!.EQUALS)
append(CommonSeps.getInstance()!.SPACE)
append(URLGLOBALS.getWebappPath())
put(stringBuffer!.toString(), this, commonStrings!.INIT)

                                    }
                                
delete(0, stringBuffer!.length())
append("Webapp Path Set To: ")
append(URLGLOBALS.getWebappPath())
put(stringBuffer!.toString(), this, commonStrings!.INIT)
}


}
                
            

