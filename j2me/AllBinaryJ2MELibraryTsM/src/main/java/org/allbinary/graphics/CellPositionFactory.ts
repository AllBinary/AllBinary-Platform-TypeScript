
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
        



            import { Object } from "../../../java/lang/Object.js";


        
            import { Exception } from "../../../java/lang/Exception.js";
        
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CellPosition } from "./CellPosition.js";

export class CellPositionFactory
            extends Object
         {
        

    private static SINGLETON: CellPositionFactory = new CellPositionFactory();

    public static getInstance(): CellPositionFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public readonly NONE: CellPosition = new CellPosition( -1,  -1,  -1,  -1);

    private cellPositionArray: CellPosition[][] = new Array(0) [0]
                                                            ;

    private columns: number= 0

    private rows: number= 0
private constructor (){

            super();
        }


    public init(columns: number, rows: number){
var columns = columns
var rows = rows
this.cellPositionArray= new Array(columns) [rows]
                                                            ;
    
this.columns= columns;
    
this.rows= rows;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append("Init: columns: ");
    
stringBuffer!.appendint(columns);
    
stringBuffer!.append(" rows: ");
    
stringBuffer!.appendint(rows);
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.INIT);
    




                        for (
    var column: number = 0;
column < columns; column++)
        {




                        for (
    var row: number = 0;
row < rows; row++)
        {
this.createInstance(column, row);
    
}

}

}


    public getInstanceColRow(i_column: number, i_row: number): CellPosition{
var i_column = i_column
var i_row = i_row

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cellPositionArray[i_column]![i_row]!;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    
this.logUtil!.put(new StringMaker().
                            append("columns: ")!.appendint(this.getColumns())!.append(" rows: ")!.appendint(this.getRows())!.append(" col: ")!.appendint(i_column)!.append(" row: ")!.appendint(i_row)!.toString(), this, commonStrings!.GET_INSTANCE, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NONE;
    
}

}


    public createInstance(i_column: number, i_row: number): CellPosition{
var i_column = i_column
var i_row = i_row

    var cellPositionCanBeNull: CellPosition = this.cellPositionArray[i_column]![i_row];
;
    

                        if(cellPositionCanBeNull == 
                                    null
                                )
                        
                                    {
                                    cellPositionCanBeNull= new CellPosition(i_column, i_row, this.columns, this.rows);
    
this.cellPositionArray[i_column]![i_row]= cellPositionCanBeNull;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellPositionCanBeNull;
    
}


    public getColumns(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.columns;
    
}


    public getRows(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rows;
    
}


}
                
            

