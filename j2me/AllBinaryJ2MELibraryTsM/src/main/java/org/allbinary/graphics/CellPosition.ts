
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
        



import { V } from "../../../org/allbinary/graph/V.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    

export class CellPosition extends V {
        

    public static toString(basicGeographicMapCellPosition: CellPosition): string{
var basicGeographicMapCellPosition = basicGeographicMapCellPosition



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return toString(basicGeographicMapCellPosition!.getColumn(), basicGeographicMapCellPosition!.getRow());
    
}


    public static toString(i_column: number, i_row: number): string{
var i_column = i_column
var i_row = i_row

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

append(commonSeps!.PARENTHESIS_OPEN)
appendint(i_column)
append(commonSeps!.COMMA)
appendint(i_row)
append(commonSeps!.PARENTHESIS_CLOSE)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    private readonly id: number

    private readonly column: number

    private readonly row: number
public constructor (column: number, row: number, columns: number, rows: number){

            super();
            var column = column
var row = row
var columns = columns
var rows = rows
this.column= column
this.row= row
this.id= (row *columns) +column
}


    public getColumn(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return column;
    
}


    public getRow(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return row;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CellPosition.toString(this.getColumn(), this.getRow());
    
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return id;
    
}


}
                
            

