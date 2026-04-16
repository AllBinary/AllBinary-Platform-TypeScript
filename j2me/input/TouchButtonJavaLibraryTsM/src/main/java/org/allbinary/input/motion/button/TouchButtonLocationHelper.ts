
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
        



import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    

import { CommonButtons } from "./CommonButtons.js";

export class TouchButtonLocationHelper
            extends Object
         {
        

    private readonly totalColumns: number

    private readonly totalRows: number

    private columnsRemainder: number

    private rowsRemainder: number

    private columnsRemainderHalf: number

    private rowsRemainderHalf: number
public constructor (){

            super();
            
    var buttonSize: number = CommonButtons.getInstance()!.STANDARD_BUTTON_SIZE;
        
        
;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    
this.totalColumns= displayInfo!.getLastWidth() /buttonSize;
    
this.totalRows= displayInfo!.getLastHeight() /buttonSize;
    
this.columnsRemainder= displayInfo!.getLastWidth() % buttonSize;
    
this.columnsRemainderHalf= (this.columnsRemainder shr 1);
    
this.rowsRemainder= displayInfo!.getLastHeight() % buttonSize;
    
this.rowsRemainderHalf= (this.rowsRemainder shr 1);
    
}


    public getTotalColumns(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return totalColumns;
    
}


    public getTotalRows(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return totalRows;
    
}


    public getColumnsRemainder(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return columnsRemainder;
    
}


    public getRowsRemainder(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rowsRemainder;
    
}


    public getColumnsRemainderHalf(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return columnsRemainderHalf;
    
}


    public getRowsRemainderHalf(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rowsRemainderHalf;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("totalColumns: ");
    
stringBuffer!.appendint(totalColumns);
    
stringBuffer!.append(" totalRows: ");
    
stringBuffer!.appendint(totalRows);
    
stringBuffer!.append(" columnsRemainder: ");
    
stringBuffer!.appendint(columnsRemainder);
    
stringBuffer!.append(" rowsRemainder: ");
    
stringBuffer!.appendint(rowsRemainder);
    
stringBuffer!.append(" columnsRemainderHalf: ");
    
stringBuffer!.appendint(columnsRemainderHalf);
    
stringBuffer!.append(" rowsRemainderHalf: ");
    
stringBuffer!.appendint(rowsRemainderHalf);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

