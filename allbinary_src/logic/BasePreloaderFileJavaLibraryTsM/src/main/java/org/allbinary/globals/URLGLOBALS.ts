
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


        
            import { Exception } from '../../../java/lang/Exception.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AppUrlGlobals } from './AppUrlGlobals.js';
import { UrlGlobalsInterface } from './UrlGlobalsInterface.js';

export class URLGLOBALS
            extends Object
         {
        

    private static urlGlobalsInterface: UrlGlobalsInterface = AppUrlGlobals.NULL_APP_URL_GLOBALS;

    public static init(urlGlobalsInterface: UrlGlobalsInterface){
URLGLOBALS.urlGlobalsInterface= urlGlobalsInterface;
    
}


    public static isTestingMode(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return URLGLOBALS.urlGlobalsInterface!.isTestingMode();;
    
}


    public static getWebappPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return URLGLOBALS.urlGlobalsInterface!.getWebappPath();;
    
}


    public static getTestHtmlPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return URLGLOBALS.urlGlobalsInterface!.getTestHtmlPath();;
    
}


                //@Throws(Exception.constructor)
            
    public static getMainPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return URLGLOBALS.urlGlobalsInterface!.getMainPath();;
    
}


}
                
            

