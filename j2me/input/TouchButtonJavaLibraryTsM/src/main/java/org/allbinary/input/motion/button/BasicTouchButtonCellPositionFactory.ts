
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
        



import { CellPosition } from "../../../../../org/allbinary/graphics/CellPosition.js";

    
import { CellPositionFactory } from "../../../../../org/allbinary/graphics/CellPositionFactory.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class BasicTouchButtonCellPositionFactory
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    public readonly TOP_RIGHT: CellPosition

    public readonly TOP_LEFT: CellPosition

    public readonly SECOND_FROM_TOP_LEFT: CellPosition

    public readonly SECOND_FROM_TOP_RIGHT: CellPosition

    public readonly TOP_SECOND_FROM_LEFT: CellPosition

    public readonly TOP_SECOND_FROM_RIGHT: CellPosition

    public readonly BOTTOM_RIGHT: CellPosition

    public readonly BOTTOM_SECOND_FROM_RIGHT: CellPosition

    public readonly SECOND_FROM_BOTTOM_RIGHT: CellPosition

    public readonly THIRD_FROM_BOTTOM_RIGHT: CellPosition

    public readonly FOURTH_FROM_BOTTOM_RIGHT: CellPosition

    public readonly SECOND_FROM_BOTTOM_SECOND_FROM_RIGHT: CellPosition

    public readonly SECOND_FROM_BOTTOM_THIRD_FROM_RIGHT: CellPosition

    public readonly SECOND_FROM_BOTTOM_FOURTH_FROM_RIGHT: CellPosition

    public readonly BOTTOM_THIRD_FROM_RIGHT: CellPosition

    public readonly BOTTOM_FOURTH_FROM_RIGHT: CellPosition

    public readonly BOTTOM_SECOND_FROM_LEFT: CellPosition

    public readonly SECOND_FROM_BOTTOM_LEFT: CellPosition

    public readonly THIRD_FROM_BOTTOM_LEFT: CellPosition

    public readonly BOTTOM_LEFT: CellPosition

    public readonly SECOND_FROM_BOTTOM_SECOND_FROM_LEFT: CellPosition
public constructor (){

            super();
            put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR)

    var touchButtonLocationHelper: TouchButtonLocationHelper = new TouchButtonLocationHelper();
        
        


    var cellPositionFactory: CellPositionFactory = CellPositionFactory.getInstance()!;
        
        

init(touchButtonLocationHelper!.getTotalColumns(), touchButtonLocationHelper!.getTotalRows())
TOP_LEFT= cellPositionFactory!.getInstance(0, 0)
TOP_RIGHT= cellPositionFactory!.getInstance(touchButtonLocationHelper!.getTotalColumns() -1, 0)
BOTTOM_LEFT= cellPositionFactory!.getInstance(0, touchButtonLocationHelper!.getTotalRows() -1)
BOTTOM_RIGHT= cellPositionFactory!.getInstance(touchButtonLocationHelper!.getTotalColumns() -1, touchButtonLocationHelper!.getTotalRows() -1)
BOTTOM_SECOND_FROM_RIGHT= cellPositionFactory!.getInstance(touchButtonLocationHelper!.getTotalColumns() -2, touchButtonLocationHelper!.getTotalRows() -1)
SECOND_FROM_BOTTOM_RIGHT= cellPositionFactory!.getInstance(touchButtonLocationHelper!.getTotalColumns() -1, touchButtonLocationHelper!.getTotalRows() -2)
SECOND_FROM_BOTTOM_SECOND_FROM_RIGHT= cellPositionFactory!.getInstance(touchButtonLocationHelper!.getTotalColumns() -2, touchButtonLocationHelper!.getTotalRows() -2)
BOTTOM_SECOND_FROM_LEFT= cellPositionFactory!.getInstance(1, touchButtonLocationHelper!.getTotalRows() -1)
SECOND_FROM_BOTTOM_LEFT= cellPositionFactory!.getInstance(0, touchButtonLocationHelper!.getTotalRows() -2)
SECOND_FROM_BOTTOM_SECOND_FROM_LEFT= cellPositionFactory!.getInstance(1, touchButtonLocationHelper!.getTotalRows() -2)

    
                        if(touchButtonLocationHelper!.getTotalRows() > 2)
                        
                                    {
                                    SECOND_FROM_TOP_LEFT= cellPositionFactory!.getInstance(0, 1)
SECOND_FROM_TOP_RIGHT= cellPositionFactory!.getInstance(touchButtonLocationHelper!.getTotalColumns() -1, 1)

                                    }
                                
                        else {
                            SECOND_FROM_TOP_LEFT= cellPositionFactory!.NONE
SECOND_FROM_TOP_RIGHT= cellPositionFactory!.NONE

                        }
                            

    
                        if(touchButtonLocationHelper!.getTotalRows() >= 4)
                        
                                    {
                                    THIRD_FROM_BOTTOM_RIGHT= cellPositionFactory!.getInstance(touchButtonLocationHelper!.getTotalColumns() -1, touchButtonLocationHelper!.getTotalRows() -3)
FOURTH_FROM_BOTTOM_RIGHT= cellPositionFactory!.getInstance(touchButtonLocationHelper!.getTotalColumns() -1, touchButtonLocationHelper!.getTotalRows() -4)
THIRD_FROM_BOTTOM_LEFT= cellPositionFactory!.getInstance(0, touchButtonLocationHelper!.getTotalRows() -3)

                                    }
                                
                        else {
                            THIRD_FROM_BOTTOM_RIGHT= cellPositionFactory!.NONE
FOURTH_FROM_BOTTOM_RIGHT= cellPositionFactory!.NONE
THIRD_FROM_BOTTOM_LEFT= cellPositionFactory!.NONE

                        }
                            

    
                        if(touchButtonLocationHelper!.getTotalColumns() >= 4)
                        
                                    {
                                    SECOND_FROM_BOTTOM_THIRD_FROM_RIGHT= cellPositionFactory!.getInstance(touchButtonLocationHelper!.getTotalColumns() -3, touchButtonLocationHelper!.getTotalRows() -2)
SECOND_FROM_BOTTOM_FOURTH_FROM_RIGHT= cellPositionFactory!.getInstance(touchButtonLocationHelper!.getTotalColumns() -4, touchButtonLocationHelper!.getTotalRows() -2)
BOTTOM_THIRD_FROM_RIGHT= cellPositionFactory!.getInstance(touchButtonLocationHelper!.getTotalColumns() -3, touchButtonLocationHelper!.getTotalRows() -1)
BOTTOM_FOURTH_FROM_RIGHT= cellPositionFactory!.getInstance(touchButtonLocationHelper!.getTotalColumns() -4, touchButtonLocationHelper!.getTotalRows() -1)
TOP_SECOND_FROM_LEFT= cellPositionFactory!.getInstance(1, 0)
TOP_SECOND_FROM_RIGHT= cellPositionFactory!.getInstance(touchButtonLocationHelper!.getTotalColumns() -2, 0)

                                    }
                                
                        else {
                            SECOND_FROM_BOTTOM_THIRD_FROM_RIGHT= cellPositionFactory!.NONE
SECOND_FROM_BOTTOM_FOURTH_FROM_RIGHT= cellPositionFactory!.NONE
BOTTOM_THIRD_FROM_RIGHT= cellPositionFactory!.NONE
BOTTOM_FOURTH_FROM_RIGHT= cellPositionFactory!.NONE
TOP_SECOND_FROM_LEFT= cellPositionFactory!.NONE
TOP_SECOND_FROM_RIGHT= cellPositionFactory!.NONE

                        }
                            
}


}
                
            

