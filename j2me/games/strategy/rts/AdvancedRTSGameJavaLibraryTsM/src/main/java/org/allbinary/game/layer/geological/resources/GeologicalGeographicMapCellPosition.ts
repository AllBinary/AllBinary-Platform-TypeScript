
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

    

export class GeologicalGeographicMapCellPosition extends GeographicMapCellPosition {
        

    private readonly geologicalResource: GeologicalResource
public constructor (column: number, row: number, columns: number, rows: number, width: number, height: number, geologicalResource: GeologicalResource)                        

                            : super(column, row, columns, rows, width, height){

            super();
                //var column = column
    //var row = row
    //var columns = columns
    //var rows = rows
    //var width = width
    //var height = height
    //var geologicalResource = geologicalResource


                            //For kotlin this is before the body of the constructor.
                    
this.geologicalResource= geologicalResource;
    
}


    public getGeologicalResource(): GeologicalResource{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geologicalResource;
    
}


}
                
            

