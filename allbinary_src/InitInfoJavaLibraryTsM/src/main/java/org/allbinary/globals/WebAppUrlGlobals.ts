
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
        



import { InitInfo } from "../../../org/allbinary/business/init/InitInfo.js";

    
import { StringValidationUtil } from "../../../org/allbinary/logic/string/StringValidationUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { UrlGlobalsInterface } from "./UrlGlobalsInterface.js";

export class WebAppUrlGlobals extends UrlGlobalsInterface {
        

    private path: string

    private isWebappPathSet: boolean = false;
        
        

    public isTestingMode(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InitInfo.getInstance()!.isTesting();

                        ;
    
}


    public getWebappPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setWebappPath(path: string){
var path = path
path= path;
    
isWebappPathSet= true;
    
}


    public getTestHtmlPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InitInfo.getInstance()!.getTestHtmlPath();

                        ;
    
}


                //@Throws(Error::class)
            
    public getMainPath(): string{

    var mainPath: string = InitInfo.getInstance()!.getMainPath()!;
        
        
;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(mainPath);

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mainPath;
    

                                    }
                                
                             else 
                        if(isWebappPathSet)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getWebappPath();

                        ;
    

                                    }
                                
                        else {
                            


                            throw new Error("Webapp Path is not set")

                        }
                            
}


}
                
            

