
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
        



import { CellPositionFactory } from "../../../../../../../org/allbinary/graphics/CellPositionFactory.js";

    
import { GeographicMapCellPositionTracking } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionTracking.js";

    

export class GeographicMapCellPositionEventUtil
            extends Object
         {
        

    private readonly geographicMapCellPositionEvent: GeographicMapCellPositionEvent

    private readonly geographicMapCellPositionEventHandler: GeographicMapCellPositionEventHandler = GeographicMapCellPositionEventHandler.getInstance()!;
        
        
public constructor (anyType: any = {}){

            super();
            var anyType = anyType
geographicMapCellPositionEvent= GeographicMapCellPositionEvent(anyType, CellPositionFactory.getInstance()!.NONE)
}


                @Throws(Exception::class)
            
    public update(geographicMapCellPositionTracking: GeographicMapCellPositionTracking){
var geographicMapCellPositionTracking = geographicMapCellPositionTracking
setGeographicMapCellPosition(geographicMapCellPositionTracking!.getCurrentGeographicMapCellPosition())
fireEvent(geographicMapCellPositionEvent)
}


                @Throws(Exception::class)
            
    public remove(geographicMapCellPositionTracking: GeographicMapCellPositionTracking){
var geographicMapCellPositionTracking = geographicMapCellPositionTracking
setGeographicMapCellPosition(geographicMapCellPositionTracking!.getCurrentGeographicMapCellPosition())
fireRemoveEvent(geographicMapCellPositionEvent)
}


}
                
            

