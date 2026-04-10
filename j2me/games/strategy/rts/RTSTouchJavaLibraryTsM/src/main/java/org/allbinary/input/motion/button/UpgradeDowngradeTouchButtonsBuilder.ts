
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
        



import { TouchButtonDowngradeResource } from "../../../../../org/allbinary/game/input/resource/TouchButtonDowngradeResource.js";

    
import { TouchButtonUpgradeResource } from "../../../../../org/allbinary/game/input/resource/TouchButtonUpgradeResource.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CellPositionFactory } from "../../../../../org/allbinary/graphics/CellPositionFactory.js";

    

export class UpgradeDowngradeTouchButtonsBuilder extends BaseTouchInput {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public getList(): BasicArrayList{

        try {
            put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR)

    var list: BasicArrayList = new BasicArrayList();
        
        


    var touchButtonLocationHelper: TouchButtonLocationHelper = new TouchButtonLocationHelper();
        
        


    var cellPositionFactory: CellPositionFactory = CellPositionFactory.getInstance()!;
        
        


    var basicTouchButtonCellPositionFactory: BasicTouchButtonCellPositionFactory = new BasicTouchButtonCellPositionFactory();
        
        


    
                        if(basicTouchButtonCellPositionFactory!.SECOND_FROM_TOP_LEFT != cellPositionFactory!.NONE && basicTouchButtonCellPositionFactory!.SECOND_FROM_TOP_RIGHT != cellPositionFactory!.NONE)
                        
                                    {
                                    
    var commonButtons: CommonButtons = CommonButtons.getInstance()!;
        
        


    var UP: TouchButton = new TouchButton(BasicTouchInputFactory.getInstance()!.SPECIAL_BUTTON_TWO, TouchButtonUpgradeResource.getInstance(), commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.SECOND_FROM_TOP_LEFT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf());
        
        


    var DOWN: TouchButton = new TouchButton(BasicTouchInputFactory.getInstance()!.SPECIAL_BUTTON_ONE, TouchButtonDowngradeResource.getInstance(), commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.SECOND_FROM_TOP_RIGHT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf());
        
        

add(UP)
add(DOWN)

                                    }
                                



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
                
            

