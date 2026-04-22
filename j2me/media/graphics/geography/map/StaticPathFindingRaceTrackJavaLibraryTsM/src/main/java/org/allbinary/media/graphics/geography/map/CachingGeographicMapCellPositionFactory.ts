
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
        



import { Hashtable } from "../../../../../../java/util/Hashtable.js";

    
import { CellPosition } from "../../../../../../org/allbinary/graphics/CellPosition.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicGeographicMapCellPositionFactory } from "./BasicGeographicMapCellPositionFactory.js";

import { BasicGeographicMap } from "./BasicGeographicMap.js";

import { GeographicMapCellPositionFactory } from "./GeographicMapCellPositionFactory.js";

import { GeographicMapCellPosition } from "./GeographicMapCellPosition.js";

export class CachingGeographicMapCellPositionFactory extends BasicGeographicMapCellPositionFactory {
        
protected constructor (geographicMapInterface: BasicGeographicMap){
            super(geographicMapInterface);
                    var geographicMapInterface = geographicMapInterface


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public createInstance(i_column: number, i_row: number, width: number, height: number): GeographicMapCellPosition{
    //var i_column = i_column
    //var i_row = i_row
    //var width = width
    //var height = height

    var hashtable: Hashtable<any, any> = GeographicMapCellPositionFactory.getHashtable()!;
        
        
;
    

    var cellPositionKey: string = CellPosition.toString(i_column, i_row)!;
        
        
;
    

    var cellPositionCanBeNull: any? = hashtable.get(cellPositionKey as Object);
        
        
;
    

                        if(cellPositionCanBeNull == 
                                    null
                                )
                        
                                    {
                                    cellPositionCanBeNull= this.geographicMapCellPositionFactoryInterface!.getInstance(this.geographicMapInterface, i_column, i_row, this.getColumns(), this.getRows(), width, height);
    
geographicMapCellPositionArray[i_row]![i_column]= cellPositionCanBeNull as GeographicMapCellPosition;
    
hashtable.put(cellPositionKey, cellPositionCanBeNull);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellPositionCanBeNull as GeographicMapCellPosition;
    
}


}
                
            

