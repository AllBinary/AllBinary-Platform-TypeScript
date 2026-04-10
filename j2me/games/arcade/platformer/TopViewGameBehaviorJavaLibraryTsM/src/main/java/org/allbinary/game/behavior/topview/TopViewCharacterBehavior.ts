
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { Direction } from "../../../../../org/allbinary/direction/Direction.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { BasicGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellType } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { BasicTopViewGeographicMapCellTypeFactory } from "../../../../../org/allbinary/media/graphics/geography/map/topview/BasicTopViewGeographicMapCellTypeFactory.js";

    

export class TopViewCharacterBehavior
            extends Object
         {
        

                //@Throws(Error::class)
            
    public terrainEvent(layer: AllBinaryLayer, direction: Direction, x: number, y: number, geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellPosition: GeographicMapCellPosition){
    //var layer = layer
    //var direction = direction
    //var x = x
    //var y = y
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var geographicMapCellPosition = geographicMapCellPosition
}


    public terrainMove(layer: AllBinaryLayer, geographicMapInterfaceArray: BasicGeographicMap[], x: number, y: number){
    //var layer = layer
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var x = x
    //var y = y
}


    public hasSolidBlock(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[]): boolean{
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var geographicMapCellTypeArray = geographicMapCellTypeArray

    var size: number = geographicMapInterfaceArray!.length
                ;
        
        


    var basicTopViewGeographicMapCellTypeFactory: BasicTopViewGeographicMapCellTypeFactory





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
basicTopViewGeographicMapCellTypeFactory= geographicMapInterfaceArray[index]!.getGeographicMapCellTypeFactory() as BasicTopViewGeographicMapCellTypeFactory

                        if(basicTopViewGeographicMapCellTypeFactory!.BLOCK_CELL_TYPE.isType(geographicMapCellTypeArray[index]!))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

