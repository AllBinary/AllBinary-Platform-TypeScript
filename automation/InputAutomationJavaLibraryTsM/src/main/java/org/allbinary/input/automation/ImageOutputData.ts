
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { System } from '../../../../java/lang/System.js';
        
//not plain js import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageOutputData
            extends Object
         {
        

    public static readonly SAVE_PATH: string = new StringMaker().append(System.getProperty("user.dir"))!.appendchar(FilePathData.getInstance()!.SEPARATORCHAR)!.append("saves")!.appendchar(FilePathData.getInstance()!.SEPARATORCHAR)!.toString()!;

private constructor (){

            super();
        }


}



