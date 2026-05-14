
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


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SoundsFactoryInterface } from './SoundsFactoryInterface.js';

export class AllBinaryMediaManagerShutdown
            extends Object
         {
        

    private static readonly instance: AllBinaryMediaManagerShutdown = new AllBinaryMediaManagerShutdown();

                //@Throws(Exception.constructor)
            
    public static shutdown(soundsFactoryInterface: SoundsFactoryInterface){
var soundsFactoryInterface = soundsFactoryInterface

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    
logUtil!.putF("No Media Shutdown for Android Process", AllBinaryMediaManagerShutdown.instance, "shutdown");
    
}


}
                
            

