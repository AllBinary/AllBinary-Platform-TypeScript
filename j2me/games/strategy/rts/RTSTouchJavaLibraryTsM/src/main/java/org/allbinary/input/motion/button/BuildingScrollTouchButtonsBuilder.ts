
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

    
import { BasicArrayListD } from "../../../../../org/allbinary/util/BasicArrayListD.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BaseTouchInput } from "./BaseTouchInput.js";

import { CommonButtons } from "./CommonButtons.js";

import { TouchButton } from "./TouchButton.js";

import { BasicTouchInputFactory } from "./BasicTouchInputFactory.js";

import { TouchButtonStrafeLeftResource } from "./TouchButtonStrafeLeftResource.js";

import { TouchButtonStrafeRightResource } from "./TouchButtonStrafeRightResource.js";

export class BuildingScrollTouchButtonsBuilder extends BaseTouchInput {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public getList(): BasicArrayList{

        try {
            this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

    var list: BasicArrayList = new BasicArrayListD();
        
        
;
    

    var touchButtonLocationHelper: TouchButtonLocationHelper = new TouchButtonLocationHelper();
        
        
;
    

    var commonButtons: CommonButtons = CommonButtons.getInstance()!;
        
        
;
    

    var basicTouchButtonCellPositionFactory: BasicTouchButtonCellPositionFactory = new BasicTouchButtonCellPositionFactory();
        
        
;
    

    var LEFT: TouchButton = TouchButton.create(BasicTouchInputFactory.getInstance()!.LEFT, TouchButtonStrafeLeftResource.getInstance(), commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.TOP_LEFT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf())!;
        
        
;
    

    var RIGHT: TouchButton = TouchButton.create(BasicTouchInputFactory.getInstance()!.RIGHT, TouchButtonStrafeRightResource.getInstance(), commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.TOP_RIGHT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf())!;
        
        
;
    
list.add(LEFT);
    
list.add(RIGHT);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicArrayListUtil.getInstance()!.getImmutableInstance();;
    
}

}


}
                
            

