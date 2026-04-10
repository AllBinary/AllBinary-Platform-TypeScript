
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
        



import { PersistentInputMapping } from "../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class PlatformInputMappingFactory
            extends Object
         {
        

    private static readonly instance: PlatformInputMappingFactory = new PlatformInputMappingFactory();
        
        

    public static getInstance(): PlatformInputMappingFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private SINGLETON: PersistentInputMapping = PersistentInputMapping.NULL_PERSISTENT_INPUT_MAPPING;
        
        

    public getPersistentInputMappingInstance(): PersistentInputMapping{

        try {
            
    
                        if(SINGLETON == PersistentInputMapping.NULL_PERSISTENT_INPUT_MAPPING)
                        
                                    {
                                    SINGLETON= MotionJ2MEGameInputMapping()

                                    }
                                
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


}
                
            

