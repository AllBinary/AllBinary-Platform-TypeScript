
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
        



import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    

export class AppUrlGlobals extends UrlGlobalsInterface {
        

    public static readonly NULL_APP_URL_GLOBALS: AppUrlGlobals = new AppUrlGlobals();
        
        

    private path: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    public isTestingMode(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getWebappPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.path;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setWebappPath(path: string){
var path = path
this.path= path

    
                        if(!(this.path.endsWith("\\") || this.path.endsWith("/")))
                        
                                    {
                                    this.path= this.path +"\\"

                                    }
                                
}


    public getTestHtmlPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


                @Throws(Exception::class)
            
    public getMainPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.path;
    
}


}
                
            

