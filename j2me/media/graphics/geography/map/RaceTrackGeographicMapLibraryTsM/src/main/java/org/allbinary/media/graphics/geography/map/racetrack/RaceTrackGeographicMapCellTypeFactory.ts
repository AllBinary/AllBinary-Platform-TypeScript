
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
        



import { GeographicMapCellType } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { GeographicMapCellTypeFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { RaceTrackGeographicMapCellTypes } from "./RaceTrackGeographicMapCellTypes.js";

export class RaceTrackGeographicMapCellTypeFactory extends GeographicMapCellTypeFactory {
        

    private static readonly instance: RaceTrackGeographicMapCellTypeFactory = new RaceTrackGeographicMapCellTypeFactory();
        
        

    public static getInstance(): RaceTrackGeographicMapCellTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public EMPTY_CELL_TYPE: GeographicMapCellType = new GeographicMapCellType(0,  -1);
        
        

    public EASY_CELL_TYPE: GeographicMapCellType = EMPTY_CELL_TYPE;
        
        

    public readonly BOTTOM_LEFT_TURN_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public readonly BOTTOM_RIGHT_TURN_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public readonly TOP_LEFT_TURN_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public readonly TOP_RIGHT_TURN_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public readonly HORIZONTAL_STRAIGHT_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public readonly VERTICAL_STRAIGHT_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public readonly START_LINE_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public readonly DEFAULT_FINISH_LINE_ROAD_CELL_TYPE: RaceTrackGeographicMapCellType

    public FINISH_LINE_ROAD_CELL_TYPE: GeographicMapCellType = GeographicMapCellType.NULL_GEOGRAPHIC_MAP_CELL_TYPE;
        
        
public constructor (){

            super();
            
    var raceTrackGeographicMapCellTypes: RaceTrackGeographicMapCellTypes = RaceTrackGeographicMapCellTypes.getInstance()!;
        
        
;
    
BOTTOM_LEFT_TURN_ROAD_CELL_TYPE= raceTrackGeographicMapCellTypes!.BOTTOM_LEFT_TURN_ROAD_CELL_TYPE;
    
BOTTOM_RIGHT_TURN_ROAD_CELL_TYPE= raceTrackGeographicMapCellTypes!.BOTTOM_RIGHT_TURN_ROAD_CELL_TYPE;
    
TOP_LEFT_TURN_ROAD_CELL_TYPE= raceTrackGeographicMapCellTypes!.TOP_LEFT_TURN_ROAD_CELL_TYPE;
    
TOP_RIGHT_TURN_ROAD_CELL_TYPE= raceTrackGeographicMapCellTypes!.TOP_RIGHT_TURN_ROAD_CELL_TYPE;
    
HORIZONTAL_STRAIGHT_ROAD_CELL_TYPE= raceTrackGeographicMapCellTypes!.HORIZONTAL_STRAIGHT_ROAD_CELL_TYPE;
    
VERTICAL_STRAIGHT_ROAD_CELL_TYPE= raceTrackGeographicMapCellTypes!.VERTICAL_STRAIGHT_ROAD_CELL_TYPE;
    
START_LINE_ROAD_CELL_TYPE= raceTrackGeographicMapCellTypes!.START_LINE_ROAD_CELL_TYPE;
    
DEFAULT_FINISH_LINE_ROAD_CELL_TYPE= raceTrackGeographicMapCellTypes!.DEFAULT_FINISH_LINE_ROAD_CELL_TYPE;
    
}


    public getStartType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.START_LINE_ROAD_CELL_TYPE.getType();

                        ;
    
}


    public getEndType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.FINISH_LINE_ROAD_CELL_TYPE.getType();

                        ;
    
}


    public getEmptyType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.EMPTY_CELL_TYPE.getType();

                        ;
    
}


    public isPath(cellType: GeographicMapCellType): boolean{
    //var cellType = cellType

                        if(cellType != this.EMPTY_CELL_TYPE && cellType != this.EASY_CELL_TYPE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

