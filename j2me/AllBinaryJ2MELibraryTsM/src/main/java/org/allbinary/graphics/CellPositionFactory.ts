
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
        



import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class CellPositionFactory
            extends Object
         {
        

    private SINGLETON: CellPositionFactory = new CellPositionFactory();
        
        

    public static getInstance(): CellPositionFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly NONE: CellPosition = new CellPosition( -1,  -1,  -1,  -1);
        
        

    private cellPositionArray: CellPosition[][] = Array(0) { arrayOfNulls<CellPosition?>(0) }
                                                            ;
        
        

    private columns: number= 0

    private rows: number= 0
private constructor (){

            super();
            }


    public init(columns: number, rows: number){
var columns = columns
var rows = rows
this.cellPositionArray= Array(columns) { arrayOfNulls<CellPosition?>(rows) }
                                                            
this.columns= columns
this.rows= rows

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Init: columns: ")
stringBuffer!.appendint(columns)
stringBuffer!.append(" rows: ")
stringBuffer!.appendint(rows)
logUtil!.put(stringBuffer!.toString(), this, commonStrings!.INIT)




                        for (
    var column: number = 0;
        
        
column < columns; column++)
        {




                        for (
    var row: number = 0;
        
        
row < rows; row++)
        {
this.this.createInstance(column, row)
}

}

}


    public getInstance(i_column: number, i_row: number): CellPosition{
var i_column = i_column
var i_row = i_row

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellPositionArray[i_column]![i_row]!;
    
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(StringMaker().
                            append("columns: ")!.appendint(this.getColumns())!.append(" rows: ")!.appendint(this.getRows())!.append(" col: ")!.appendint(i_column)!.append(" row: ")!.appendint(i_row)!.toString(), this, commonStrings!.GET_INSTANCE, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NONE;
    
}

}


    public createInstance(i_column: number, i_row: number): CellPosition{
var i_column = i_column
var i_row = i_row

    var cellPositionCanBeNull: CellPosition? = cellPositionArray[i_column]![i_row];
        
        


                        if(cellPositionCanBeNull == 
                                    null
                                )
                        
                                    {
                                    cellPositionCanBeNull= CellPosition(i_column, i_row, this.columns, this.rows)
cellPositionArray[i_column]![i_row]= cellPositionCanBeNull

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellPositionCanBeNull;
    
}


    public getColumns(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return columns;
    
}


    public getRows(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rows;
    
}


}
                
            

