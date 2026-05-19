
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
        



            import hilog from '@ohos.hilog';
        
            import { Object } from '../../../../../java/lang/Object.js';


        
import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      
import { LogFormatUtil } from '../../../../../org/allbinary/logic/communication/log/LogFormatUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        //ActualPlatform
/*actual*/ export class PreLogUtil
            extends Object
         {
        

            static readonly PUBLIC: string = '%{public}s';
            

    /*actual*/ public static put(specialMessage: string, anyType: any = {}, functionName: string){
PreLogUtil.putOE(specialMessage, anyType, functionName, NullUtil.getInstance()!.NULL_OBJECT);
    
}


    private static readonly LABEL: string = "org.allbinary";

    /*actual*/ public static putOE(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){

    var className: string = PreLogUtil.LABEL;
;
    

    var actualClassName: string = anyType!.constructor.name.toString()!!;
;
    

                        if(actualClassName != 
                                    null
                                )
                        
                                    {
                                    className= actualClassName;
    

                                    }
                                

    var message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;
;
    
hilog.info(0x0000, className, PreLogUtil.PUBLIC, message);
    
}


    /*actual*/ public static putS(specialMessage: string, className: string, functionName: string){
PreLogUtil.putSE(specialMessage, className, functionName, NullUtil.getInstance()!.NULL_OBJECT);
    
}


    /*actual*/ public static putSE(specialMessage: string, className: string, functionName: string, exception: any = {}){

    var message: string = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception)!;
;
    
hilog.info(0x0000, className, PreLogUtil.PUBLIC, message);
    
}

public constructor (){

            super();
        }


}
                
            

