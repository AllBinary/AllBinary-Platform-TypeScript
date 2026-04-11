
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
        




export class SimpleGeographicMapCellPositionFactory
            extends Object
        
                , GeographicMapCellPositionFactoryInterface {
        

    public static readonly NULL_GEOGRAPHIC_MAP_CELL_POSITION: GeographicMapCellPosition = new GeographicMapCellPosition( -1,  -1,  -1,  -1,  -1,  -1);
        
        

    public getInstance(geographicMapInterface: BasicGeographicMap, i_column: number, i_row: number, columns: number, rows: number, width: number, height: number): GeographicMapCellPosition{
    //var geographicMapInterface = geographicMapInterface
    //var i_column = i_column
    //var i_row = i_row
    //var columns = columns
    //var rows = rows
    //var width = width
    //var height = height



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GeographicMapCellPosition(i_column, i_row, columns, rows, width, height);
    
}


}
                
            

