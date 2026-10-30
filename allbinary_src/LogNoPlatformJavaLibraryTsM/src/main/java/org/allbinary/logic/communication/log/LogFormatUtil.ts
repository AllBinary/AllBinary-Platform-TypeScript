
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
        
            import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
        
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { ExceptionUtil } 
const ExceptionUtil = globalThis.org.allbinary.logic.java.exception.ExceptionUtil;
type ExceptionUtil<T = any, U = any> = typeof ExceptionUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ExceptionUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { TimeStampUtil } 
const TimeStampUtil = globalThis.org.allbinary.time.TimeStampUtil;
type TimeStampUtil<T = any, U = any> = typeof TimeStampUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof TimeStampUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //NoPlatform
expect export class LogFormatUtil
            extends Object
         {
        

    //private static readonly instance: LogFormatUtil

    public static getInstance(): LogFormatUtil



    public get(className: string, functionName: string, specialMessage: string, exception: any): string

    public getS(className: string, functionName: string, specialMessage: string): string

    public getO(exception: any): string

}

