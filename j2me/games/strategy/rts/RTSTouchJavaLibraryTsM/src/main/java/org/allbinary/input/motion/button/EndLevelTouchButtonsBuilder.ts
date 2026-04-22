
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2007 AllBinary 
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
        



import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TouchButtonsListBuilder } from "./TouchButtonsListBuilder.js";

export class EndLevelTouchButtonsBuilder extends TouchButtonsListBuilder {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public getList(): BasicArrayList{

        try {
            this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

    var list: BasicArrayList = new BasicArrayList();
        
        
;
    
list.addAll(new BasicTouchButtonsBuilder().
                            getList());
    
list.addAll(new BuildingScrollTouchButtonsBuilder().
                            getList());
    
list.addAll(new UpgradeDowngradeTouchButtonsBuilder().
                            getList());
    
this.add(list);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();

                        ;
    
}

}


}
                
            

