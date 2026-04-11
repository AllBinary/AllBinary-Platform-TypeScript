
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
        



import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { ExceptionUtil } from "../../../../../org/allbinary/logic/java/exception/ExceptionUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { TimeStampUtil } from "../../../../../org/allbinary/time/TimeStampUtil.js";

    

expect export class LogFormatUtil
            extends Object
         {
        

    //private static readonly instance: LogFormatUtil
    public static getInstance(): LogFormatUtil


    public get(className: string, functionName: string, specialMessage: string, exception: any = {}): string

    public getS(className: string, functionName: string, specialMessage: string): string

    public getO(exception: any = {}): string

}
                
            

