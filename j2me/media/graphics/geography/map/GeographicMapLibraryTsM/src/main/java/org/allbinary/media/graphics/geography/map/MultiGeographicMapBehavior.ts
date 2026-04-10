
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
        




export class MultiGeographicMapBehavior
            extends Object
         {
        

                @Throws(Exception::class)
            
    public getCellTypeAt(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], geographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellType[]{
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var geographicMapCellTypeArray = geographicMapCellTypeArray
    //var geographicMapCellPosition = geographicMapCellPosition

    var size: number = geographicMapInterfaceArray!.length
                ;
        
        


    var cellType: GeographicMapCellType = GeographicMapCellType.NULL_GEOGRAPHIC_MAP_CELL_TYPE;
        
        





                        for (
    var index: number = size;
        
        
--index >= 0; )
        {
cellType= geographicMapInterfaceArray[index]!.getCellTypeAt(geographicMapCellPosition)
geographicMapCellTypeArray[index]= cellType
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellTypeArray;
    
}


}
                
            

