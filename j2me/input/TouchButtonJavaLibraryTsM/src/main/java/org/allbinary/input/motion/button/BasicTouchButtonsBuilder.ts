
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

    

export class BasicTouchButtonsBuilder extends BaseTouchInput {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public getList(): BasicArrayList{

        try {
            put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR)

    var list: BasicArrayList = new BasicArrayList();
        
        


    var commonButtons: CommonButtons = CommonButtons.getInstance()!;
        
        


    var touchButtonLocationHelper: TouchButtonLocationHelper = new TouchButtonLocationHelper();
        
        


    var basicTouchButtonCellPositionFactory: BasicTouchButtonCellPositionFactory = new BasicTouchButtonCellPositionFactory();
        
        


    var UP: TouchButton = new TouchButton(BasicTouchInputFactory.getInstance()!.UP, TouchButtonUpResource.getInstance(), commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.SECOND_FROM_BOTTOM_LEFT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf());
        
        


    var DOWN: TouchButton = new TouchButton(BasicTouchInputFactory.getInstance()!.DOWN, TouchButtonDownResource.getInstance(), commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.BOTTOM_LEFT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf());
        
        


    var LEFT: TouchButton = new TouchButton(BasicTouchInputFactory.getInstance()!.SPECIAL_BUTTON_FOUR, TouchButtonTurnLeftResource.getInstance(), commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.BOTTOM_SECOND_FROM_RIGHT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf());
        
        


    var RIGHT: TouchButton = new TouchButton(BasicTouchInputFactory.getInstance()!.SPECIAL_BUTTON_THREE, TouchButtonTurnRightResource.getInstance(), commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.BOTTOM_RIGHT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf());
        
        

add(UP)
add(LEFT)
add(RIGHT)
add(DOWN)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.GET_LIST, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();
    
}

}


}
                
            

