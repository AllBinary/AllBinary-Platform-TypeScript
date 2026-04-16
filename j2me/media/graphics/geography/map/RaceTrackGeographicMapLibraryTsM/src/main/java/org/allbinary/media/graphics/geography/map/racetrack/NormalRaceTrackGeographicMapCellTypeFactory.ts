
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
        




import { EmptyRaceRaceTrackGeographicMapCellTypeFactory } from "./EmptyRaceRaceTrackGeographicMapCellTypeFactory.js";

export class NormalRaceTrackGeographicMapCellTypeFactory extends RaceTrackGeographicMapCellTypeFactory {
        

    private static readonly instance: NormalRaceTrackGeographicMapCellTypeFactory = new NormalRaceTrackGeographicMapCellTypeFactory();
        
        

    public static getInstance(): NormalRaceTrackGeographicMapCellTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            this.EMPTY_CELL_TYPE= EmptyRaceRaceTrackGeographicMapCellTypeFactory.getInstance()!.EMPTY_CELL_TYPE;
    
this.EASY_CELL_TYPE= this.EMPTY_CELL_TYPE;
    
this.FINISH_LINE_ROAD_CELL_TYPE= this.DEFAULT_FINISH_LINE_ROAD_CELL_TYPE;
    
}


}
                
            

