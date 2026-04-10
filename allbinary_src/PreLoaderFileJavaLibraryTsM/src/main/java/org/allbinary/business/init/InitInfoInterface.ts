
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
        



import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    

interface InitInfoInterface {
        

    public isTesting(): boolean

    public getTesting(): string

    public getTestHtmlPath(): string

    public getMainPath(): string

    public setTesting(value: string)

    public setTestHtmlPath(value: AbPath)

    public setMainPath(value: AbPath)

                //@Throws(Error::class)
            
    public isTestingValid(testing: string): boolean

    public isTestHtmlPathValid(value: AbPath): boolean

    public isMainPathValid(value: AbPath): boolean

}
                
            

