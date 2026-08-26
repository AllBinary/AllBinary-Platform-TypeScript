
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
        



//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { V } from '../../../org/allbinary/graph/V.js';
      const V = globalThis.org.allbinary.graph.V;

      
//not game specific package import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CellPosition extends V {
        

    public static toStringCellPosition(basicGeographicMapCellPosition: CellPosition): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CellPosition.toStringColRow(basicGeographicMapCellPosition!.getColumn(), basicGeographicMapCellPosition!.getRow());;
    
}


    public static toStringColRow(i_column: number, i_row: number): string{

    var stringBuffer: StringMaker = new StringMaker();;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    
stringBuffer!.append(commonSeps!.PARENTHESIS_OPEN);
    
stringBuffer!.appendint(i_column);
    
stringBuffer!.append(commonSeps!.COMMA);
    
stringBuffer!.appendint(i_row);
    
stringBuffer!.append(commonSeps!.PARENTHESIS_CLOSE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    private readonly id: number;

    private readonly column: number;

    private readonly row: number;

public constructor (column: number, row: number, columns: number, rows: number){

            super();
        this.column= column;
    
this.row= row;
    
this.id= (row *columns) +column;
    
}


    public getColumn(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.column;
    
}


    public getRow(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.row;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CellPosition.toStringColRow(this.getColumn(), this.getRow());;
    
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


}
                
            

