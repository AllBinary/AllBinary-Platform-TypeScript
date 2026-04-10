
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
        



import { Init } from "../../../../org/allbinary/init/Init.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class KeyFactoryInitializer extends Init {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public init(){
logUtil!.put(this.commonStrings!.START, this, this.commonStrings!.INIT)
}


}
                
            

