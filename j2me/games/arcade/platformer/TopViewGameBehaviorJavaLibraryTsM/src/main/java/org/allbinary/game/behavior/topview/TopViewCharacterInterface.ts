
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      //not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCellType } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
      //not GWT import const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface TopViewCharacterInterface {
        

    terrainMove(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], x: number, y: number)

                //@Throws(Exception.constructor)
            
    terrainEvent(x: number, y: number, geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], geographicMapCellPosition: GeographicMapCellPosition)

    move()

    upp()

    leftp()

    rightp()

                //@Throws(Exception.constructor)
            
    reset()

}



