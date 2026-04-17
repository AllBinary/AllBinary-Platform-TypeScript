
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RaceTrackGeographicMapCellTypes
            extends Object
         {
        

    private static readonly instance: RaceTrackGeographicMapCellTypes = new RaceTrackGeographicMapCellTypes();
        
        

    public static getInstance(): RaceTrackGeographicMapCellTypes{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly BOTTOM_LEFT_TURN_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public readonly BOTTOM_RIGHT_TURN_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public readonly TOP_LEFT_TURN_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public readonly TOP_RIGHT_TURN_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public readonly HORIZONTAL_STRAIGHT_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public readonly VERTICAL_STRAIGHT_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public readonly START_LINE_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public readonly DEFAULT_FINISH_LINE_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType
public constructor (){

            super();
            BOTTOM_LEFT_TURN_ROAD_CELL_TYPE= new RaceTrackGeographicMapCellType("Bottom Left Turn", 1, 1);
    
BOTTOM_RIGHT_TURN_ROAD_CELL_TYPE= new RaceTrackGeographicMapCellType("Bottom Right Turn", 2, 1);
    
TOP_LEFT_TURN_ROAD_CELL_TYPE= new RaceTrackGeographicMapCellType("Top Left Turn", 3, 1);
    
TOP_RIGHT_TURN_ROAD_CELL_TYPE= new RaceTrackGeographicMapCellType("Top Right Turne", 4, 1);
    
HORIZONTAL_STRAIGHT_ROAD_CELL_TYPE= new RaceTrackGeographicMapCellType("Horizontal Straight", 5, 1);
    
VERTICAL_STRAIGHT_ROAD_CELL_TYPE= new RaceTrackGeographicMapCellType("Vertical Straight", 6, 1);
    
START_LINE_ROAD_CELL_TYPE= new RaceTrackGeographicMapCellType("Start Line", 7, 1);
    
DEFAULT_FINISH_LINE_ROAD_CELL_TYPE= new RaceTrackGeographicMapCellType("Finish Line", 8, 1);
    
}


}
                
            

