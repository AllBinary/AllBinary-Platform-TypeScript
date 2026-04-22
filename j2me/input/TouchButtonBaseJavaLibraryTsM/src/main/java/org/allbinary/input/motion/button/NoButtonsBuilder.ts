
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
        



import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BaseTouchInput } from "./BaseTouchInput.js";

export class NoButtonsBuilder extends BaseTouchInput {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public getList(): BasicArrayList{

        try {
            this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

    var list: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_LIST, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();

                        ;
    
}

}


}
                
            

