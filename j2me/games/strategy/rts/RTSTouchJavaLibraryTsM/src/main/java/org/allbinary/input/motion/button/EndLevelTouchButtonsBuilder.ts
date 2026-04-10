
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

    

export class EndLevelTouchButtonsBuilder extends TouchButtonsListBuilder {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public getList(): BasicArrayList{

        try {
            put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR)

    var list: BasicArrayList = new BasicArrayList();
        
        

addAll(BasicTouchButtonsBuilder().
                            getList())
addAll(BuildingScrollTouchButtonsBuilder().
                            getList())
addAll(UpgradeDowngradeTouchButtonsBuilder().
                            getList())
this.add(list)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();
    
}

}


}
                
            

