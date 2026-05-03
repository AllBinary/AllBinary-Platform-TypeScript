
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
        



            import { Object } from "../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../java/lang/Exception.js";
        
import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface InitInfoInterface {
        

    isTesting(): boolean

    getTesting(): string

    getTestHtmlPath(): string

    getMainPath(): string

    setTesting(value: string)

    setTestHtmlPath(value: AbPath)

    setMainPath(value: AbPath)

                //@Throws(Exception.constructor)
            
    isTestingValid(testing: string): boolean

    isTestHtmlPathValid(value: AbPath): boolean

    isMainPathValid(value: AbPath): boolean

}
                
            

