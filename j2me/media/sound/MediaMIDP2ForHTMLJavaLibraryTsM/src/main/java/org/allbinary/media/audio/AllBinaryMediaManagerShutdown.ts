
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
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryMediaManager } from './AllBinaryMediaManager.js';
//not GWT import - same folder const AllBinaryMediaManager = globalThis.org.allbinary.media.audio.AllBinaryMediaManager;

                import { SoundsFactoryInterface } from './SoundsFactoryInterface.js';
//not GWT import - same folder const SoundsFactoryInterface = globalThis.org.allbinary.media.audio.SoundsFactoryInterface;

                
export class AllBinaryMediaManagerShutdown
            extends Object
         {
        

    private static readonly instance: AllBinaryMediaManagerShutdown = new AllBinaryMediaManagerShutdown();

                //@Throws(Exception.constructor)
            
    public static shutdown(soundsFactoryInterface: SoundsFactoryInterface){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF(commonStrings!.START, instance, "shutdown");
    
AllBinaryMediaManager.shutdown(soundsFactoryInterface);
    
}


}



