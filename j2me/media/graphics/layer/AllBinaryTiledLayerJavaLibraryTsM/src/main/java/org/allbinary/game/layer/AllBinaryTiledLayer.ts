
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PaintableInterface } from "../../../../org/allbinary/graphics/paint/PaintableInterface.js";

    
import { Layer } from "../../../../org/allbinary/layer/Layer.js";

    
import { NamedInterface } from "../../../../org/allbinary/layer/NamedInterface.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class AllBinaryTiledLayer extends Layer
                , NamedInterface
                , PaintableInterface {
        

    private cellWidth: number

    private cellHeight: number

    private readonly halfWidth: number

    private readonly halfHeight: number

    private readonly halfCellWidth: number

    private readonly halfCellHeight: number

    private readonly dataId: Integer
public constructor (dataId: Integer, width: number, height: number, cellWidth: number, cellHeight: number)                        

                            : super(0, 0){

            super();
                //var dataId = dataId
    //var width = width
    //var height = height
    //var cellWidth = cellWidth
    //var cellHeight = cellHeight


                            //For kotlin this is before the body of the constructor.
                    
this.dataId= dataId
this.setLayerWidth(width)
this.setLayerHeight(height)
setPosition(0, 0, 0)
this.cellWidth= cellWidth
this.cellHeight= cellHeight
this.halfWidth= (this.getWidth() shr 1)
this.halfHeight= (this.getHeight() shr 1)
this.halfCellWidth= (cellWidth shr 1)
this.halfCellHeight= (cellHeight shr 1)
}


    public setCells(mapTwoDArray: IntArray[]){
    //var mapTwoDArray = mapTwoDArray

    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Start: r: ")
appendint(mapTwoDArray!.length)
append(" c: ")
appendint(mapTwoDArray[0]!.length)
append(" rows: ")
appendint(this.getRows())
append(" columns: ")
appendint(this.getColumns())
put(stringBuffer!.toString(), this, "setCells")

    var rows: number = this.getRows()!;
        
        


    var columns: number = this.getColumns()!;
        
        





                        for (
    var col: number = 0;
        
        
col < columns; col++)
        {




                        for (
    var row: number = 0;
        
        
row < rows; row++)
        {
this.setCell(col, row, mapTwoDArray[row]![col]!)
}

}

}


    public updateCells(mapTwoDArray: IntArray[], fromTileId: number, toTileId: number){
    //var mapTwoDArray = mapTwoDArray
    //var fromTileId = fromTileId
    //var toTileId = toTileId

    var rows: number = this.getRows()!;
        
        


    var columns: number = this.getColumns()!;
        
        





                        for (
    var col: number = 0;
        
        
col < columns; col++)
        {




                        for (
    var row: number = 0;
        
        
row < rows; row++)
        {

    
                        if(fromTileId == mapTwoDArray[row]![col])
                        
                                    {
                                    mapTwoDArray[row]![col]= toTileId
this.setCell(col, row, mapTwoDArray[row]![col]!)

                                    }
                                
}

}

}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this::class.toString()!;
    
}


    public paint(graphics: Graphics){
    //var graphics = graphics
}


    public paintThreed(graphics: Graphics){
    //var graphics = graphics
}


    public getX2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.x +this.getWidth();
    
}


    public getY2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.y +this.getHeight();
    
}


    public getZ2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (this.z +this.getDepth()).toInt();
    
}


    public getCellWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellWidth;
    
}


    public getCellHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellHeight;
    
}


    public getCell(col: number, row: number): number{
    //var col = col
    //var row = row



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public getColumns(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public getRows(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public setCell(col: number, row: number, tileIndex: number){
    //var col = col
    //var row = row
    //var tileIndex = tileIndex
}


    public getHalfWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return halfWidth;
    
}


    public getHalfHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return halfHeight;
    
}


    public getDataId(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dataId;
    
}


    public getHalfCellWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return halfCellWidth;
    
}


    public getHalfCellHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return halfCellHeight;
    
}


    public isOnTileLayer(column: number, row: number): boolean{
    //var column = column
    //var row = row

    
                        if(this.getColumns() > column && this.getRows() > row && row >= 0 && column >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public getAnimatedTile(animationTileIndex: number): number{
    //var animationTileIndex = animationTileIndex



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationTileIndex;
    
}


}
                
            

