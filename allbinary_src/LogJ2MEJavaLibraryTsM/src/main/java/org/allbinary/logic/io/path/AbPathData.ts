
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
//not plain js import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;
type FilePathData<T = any, U = any> = typeof FilePathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof FilePathData;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AbPathData
            extends Object
         {
        

    private static readonly instance: AbPathData = new AbPathData();

    public static getInstance(): AbPathData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPathData.instance;
    
}


    public readonly EXTENSION_SEP: string = CommonSeps.getInstance()!.PERIOD;

    public readonly SEPARATORCHAR: string = '/';

    public readonly SEPARATOR: string = CommonSeps.getInstance()!.FORWARD_SLASH;

private constructor (){

            super();
        }


}

