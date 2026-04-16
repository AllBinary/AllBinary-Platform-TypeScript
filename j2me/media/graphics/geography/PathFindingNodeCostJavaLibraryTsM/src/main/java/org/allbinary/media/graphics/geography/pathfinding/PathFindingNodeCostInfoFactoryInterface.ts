
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2006 AllBinary
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

    

export interface PathFindingNodeCostInfoFactoryInterface extends PathFindingNodeCostInfoFactoryBaseInterface {
        

                //@Throws(Error::class)
            
    public getInstance(comingFromGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition, costFromStart: number, costToEnd: number): PathFindingNodeCostInfo

    public getInstance(comingFromGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition): PathFindingNodeCostInfo

    public getTotalCost(comingFromGeographicMapCellPosition: GeographicMapCellPosition, geographicMapCellPosition: GeographicMapCellPosition): number

}
                
            

