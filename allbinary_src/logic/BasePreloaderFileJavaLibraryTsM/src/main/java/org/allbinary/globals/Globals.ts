
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { ClassLoader } from '../../../java/lang/ClassLoader.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { WebappClassLoaderInfo } from '../../../org/allbinary/logic/system/loader/WebappClassLoaderInfo.js';
//not GWT import const WebappClassLoaderInfo

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AppUrlGlobals } from './AppUrlGlobals.js';
//sameFolderImports - not GWT import - same folder const AppUrlGlobals
import { URLGLOBALS } from './URLGLOBALS.js';
//sameFolderImports - not GWT import - same folder const URLGLOBALS

export class Globals
            extends Object
         {
        

    private static readonly instance: Globals = new Globals();

    public static getInstance(): Globals{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Globals.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


    public init(classLoader: ClassLoader, pathString: string){

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    let appUrlGlobals: AppUrlGlobals = new AppUrlGlobals();;
    
appUrlGlobals!.setWebappPath(pathString);
    
URLGLOBALS.init(appUrlGlobals);
    
WebappClassLoaderInfo.setLoader(classLoader);
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Setting Up AllBinary System Configuration Args: ");
    
stringBuffer!.append(pathString);
    
stringBuffer!.append(" ClassLoader: ");
    
stringBuffer!.append(classLoader!.constructor.name.toString()!);
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.INIT);
    

    let stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

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

