
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
        




export class URLGLOBALS
            extends Object
         {
        

    private urlGlobalsInterface: UrlGlobalsInterface = AppUrlGlobals.NULL_APP_URL_GLOBALS;
        
        

    public static init(urlGlobalsInterface: UrlGlobalsInterface){
var urlGlobalsInterface = urlGlobalsInterface
URLGLOBALS.urlGlobalsInterface= urlGlobalsInterface
}


    public static isTestingMode(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return urlGlobalsInterface!.isTestingMode();
    
}


    public static getWebappPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return urlGlobalsInterface!.getWebappPath();
    
}


    public static getTestHtmlPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return urlGlobalsInterface!.getTestHtmlPath();
    
}


                //@Throws(Error::class)
            
    public static getMainPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return urlGlobalsInterface!.getMainPath();
    
}


}
                
            

