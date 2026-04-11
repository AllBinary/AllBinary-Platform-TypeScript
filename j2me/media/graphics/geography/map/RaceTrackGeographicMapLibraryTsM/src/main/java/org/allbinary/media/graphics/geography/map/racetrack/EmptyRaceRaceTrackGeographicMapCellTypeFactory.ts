
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
        



import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { PathFindingNodeCostInfoData } from "../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNodeCostInfoData.js";

    

export class EmptyRaceRaceTrackGeographicMapCellTypeFactory extends RaceTrackGeographicMapCellTypeFactory {
        

    private static readonly instance: EmptyRaceRaceTrackGeographicMapCellTypeFactory = new EmptyRaceRaceTrackGeographicMapCellTypeFactory();
        
        

    public static getInstance(): EmptyRaceRaceTrackGeographicMapCellTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.EMPTY_CELL_TYPE= RaceTrackGeographicMapCellType(commonStrings!.EMPTY, 0, PathFindingNodeCostInfoData.getInstance()!.MAX_NODE_COST, 1);
    
this.EASY_CELL_TYPE= RaceTrackGeographicMapCellType("Easy", 19, 1);
    
this.FINISH_LINE_ROAD_CELL_TYPE= this.DEFAULT_FINISH_LINE_ROAD_CELL_TYPE;
    
}


}
                
            

