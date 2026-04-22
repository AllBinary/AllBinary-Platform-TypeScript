
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageUnifierCell } from "./ImageUnifierCell.js";

export class ImageUnifierProperties
            extends Object
         {
        

    private rows: Integer

    private columns: Integer

    private imageUnifierCell: ImageUnifierCell
public constructor (){

            super();
        }


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getColumns()!.toInt() *this.getImageUnifierCell()!.getWidth()!.toInt();
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getRows()!.toInt() *this.getImageUnifierCell()!.getHeight()!.toInt();
    
}


    public getRows(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rows;
    
}


    public setRows(rows: Integer){
var rows = rows
this.rows= rows;
    
}


    public getColumns(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return columns;
    
}


    public setColumns(columns: Integer){
var columns = columns
this.columns= columns;
    
}


    public getImageUnifierCell(): ImageUnifierCell{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageUnifierCell;
    
}


    public setImageUnifierCell(imageUnifierCell: ImageUnifierCell){
var imageUnifierCell = imageUnifierCell
this.imageUnifierCell= imageUnifierCell;
    
}


}
                
            

