
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2026 AllBinary 
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TrackedStrings
            extends Object
         {
        

    private static readonly instance: TrackedStrings = new TrackedStrings();

    public static getInstance(): TrackedStrings{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly TARGET_PATH_WINDOWS: string = "\\target\\";

    public readonly TARGET_PATH_UNIX: string = "/target/";

    public readonly HTML_TEMP: string = "HTMLTemp";

    public readonly APPLICATION: string = "Application";

    public readonly APP: string = "\\app";

    public readonly GIT_COMMAND: string = "git";

    public readonly CHANGE_DIRECTORY_OPTION: string = "-C";

    public readonly LIST_FILES_COMMAND: string = "ls-files";

    public readonly ERROR_UNMATCH_OPTION: string = "--error-unmatch";

    public readonly PATHSPEC_SEPARATOR: string = "--";

}



