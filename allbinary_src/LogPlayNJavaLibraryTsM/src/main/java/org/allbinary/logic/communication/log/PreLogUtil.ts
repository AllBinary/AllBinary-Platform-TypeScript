
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
        
            import { Throwable } from '../../../../../java/lang/Throwable.js';
        
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { PlayN } from '../../../../../playn/core/PlayN.js';
      //not GWT import const PlayN = globalThis.playn.core.PlayN;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LogFormatUtil } from './LogFormatUtil.js';
//ActualPlatform
/*actual*/ export class PreLogUtil
            extends Object
         {
        

    /*actual*/ public static put(specialMessage: string, anyType: any = {}, functionName: string){

    var className: string = PreLogUtil.getClassName(anyType)!;;
    

                        if(className == 
                                    null
                                )
                        
                                    {
                                    className= CommonStrings.getInstance()!.EMPTY;
    

                                    }
                                
className= new StringMaker().append(className)!.append(CommonSeps.getInstance()!.FORWARD_SLASH)!.append(StringUtil.getInstance()!.toString(anyType))!.toString();
    

    var message: string = LogFormatUtil.getInstance()!.getS(className, functionName, specialMessage)!;;
    
PlayN.log()!.debug(PreLogUtil.LOG_SUCCESS +message);
    
}


    private static readonly LOG_SUCCESS: string = "org.allbinary: ";

    /*actual*/ public static putOE(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){

    var className: string = PreLogUtil.getClassName(anyType)!;;
    

                        if(className == 
                                    null
                                )
                        
                                    {
                                    className= CommonStrings.getInstance()!.EMPTY;
    

                                    }
                                
className= new StringMaker().append(className)!.append(CommonSeps.getInstance()!.FORWARD_SLASH)!.append(StringUtil.getInstance()!.toString(anyType))!.toString();
    

    var message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;;
    
PlayN.log()!.error(PreLogUtil.LOG_SUCCESS +message, exception as Throwable);
    
}


    /*actual*/ public static putS(specialMessage: string, className: string, functionName: string){

    var message: string = LogFormatUtil.getInstance()!.getS(className, functionName, specialMessage)!;;
    
PlayN.log()!.debug(PreLogUtil.LOG_SUCCESS +message);
    
}


    /*actual*/ public static putSE(specialMessage: string, className: string, functionName: string, exception: any = {}){

    var message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;;
    
PlayN.log()!.error(PreLogUtil.LOG_SUCCESS +message, exception as Throwable);
    
}


    /*actual*/ public static getClassName(anyType: any = {}): string
                //native - START
                {
                    
                }



                //native - END
                

public constructor (){

            super();
        }


}



