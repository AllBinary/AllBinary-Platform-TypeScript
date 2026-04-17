
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
        



import { GeographicMapCellPosition } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { SimpleGeographicMapCellPositionFactory } from "../../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GeographicMapCellPathHistoryInfo
            extends Object
         {
        

    private previousGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        

    private previousOnPathGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        

    private nextUnvisitedOnPathGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        

    private nextOnPathGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        

    private nextChosenOnPathGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        

    public getPreviousGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return previousGeographicMapCellPosition;
    
}


    public setPreviousGeographicMapCellPosition(previousGeographicMapCellPosition: GeographicMapCellPosition){
var previousGeographicMapCellPosition = previousGeographicMapCellPosition
this.previousGeographicMapCellPosition= previousGeographicMapCellPosition;
    
}


    public getPreviousOnPathGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return previousOnPathGeographicMapCellPosition;
    
}


    public setPreviousOnPathGeographicMapCellPosition(previousOnPathGeographicMapCellPosition: GeographicMapCellPosition){
var previousOnPathGeographicMapCellPosition = previousOnPathGeographicMapCellPosition
this.previousOnPathGeographicMapCellPosition= previousOnPathGeographicMapCellPosition;
    
}


    public getNextUnvisitedOnPathGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nextUnvisitedOnPathGeographicMapCellPosition;
    
}


    public setNextUnvisitedOnPathGeographicMapCellPosition(nextUnvisitedOnPathGeographicMapCellPosition: GeographicMapCellPosition){
var nextUnvisitedOnPathGeographicMapCellPosition = nextUnvisitedOnPathGeographicMapCellPosition
this.nextUnvisitedOnPathGeographicMapCellPosition= nextUnvisitedOnPathGeographicMapCellPosition;
    
}


    public getNextOnPathGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nextOnPathGeographicMapCellPosition;
    
}


    public setNextOnPathGeographicMapCellPosition(nextOnPathGeographicMapCellPosition: GeographicMapCellPosition){
var nextOnPathGeographicMapCellPosition = nextOnPathGeographicMapCellPosition
this.nextOnPathGeographicMapCellPosition= nextOnPathGeographicMapCellPosition;
    
}


    public getNextChosenOnPathGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nextChosenOnPathGeographicMapCellPosition;
    
}


    public setNextChosenOnPathGeographicMapCellPosition(nextChosenOnPathGeographicMapCellPosition: GeographicMapCellPosition){
var nextChosenOnPathGeographicMapCellPosition = nextChosenOnPathGeographicMapCellPosition
this.nextChosenOnPathGeographicMapCellPosition= nextChosenOnPathGeographicMapCellPosition;
    
}


}
                
            

