
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
        



import { CellPosition } from "../../../../../../org/allbinary/graphics/CellPosition.js";

    
import { GPoint } from "../../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../../org/allbinary/graphics/PointFactory.js";

    

export class GeographicMapCellPosition extends CellPosition {
        

    private point: GPoint

    private midPoint: GPoint
public constructor (column: number, row: number, columns: number, rows: number, width: number, height: number)                        

                            : super(column, row, columns, rows){

            super();
            var column = column
var row = row
var columns = columns
var rows = rows
var width = width
var height = height


                            //For kotlin this is before the body of the constructor.
                    

    var x: number = this.getColumn() *width;
        
        
;
    

    var y: number = this.getRow() *height;
        
        
;
    

    var pointFactory: PointFactory = PointFactory.getInstance()!;
        
        
;
    
this.point= pointFactory!.getInstance(x, y);
    
this.midPoint= pointFactory!.getInstance(x +(width shr 1), y +(height shr 1));
    
}


    public getPoint(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return point;
    
}


    public getMidPoint(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return midPoint;
    
}


    public setMidPoint(midPoint: GPoint){
var midPoint = midPoint
this.midPoint= midPoint;
    
}


}
                
            

