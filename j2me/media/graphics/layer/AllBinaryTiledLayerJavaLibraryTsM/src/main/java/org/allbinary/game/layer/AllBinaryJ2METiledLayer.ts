
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
        



import { Font } from "../../../../javax/microedition/lcdui/Font.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { TiledLayer } from "../../../../javax/microedition/lcdui/game/TiledLayer.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    

export class AllBinaryJ2METiledLayer extends AllBinaryTiledLayer {
        

    readonly tiledLayerP: TiledLayer

    readonly debugColor: number
public constructor (dataId: Integer, tiledLayer: TiledLayer, mapTwoDArray: IntArray[], debugColor: number)                        

                            : super(dataId, tiledLayer!.getWidth(), tiledLayer!.getHeight(), tiledLayer!.getCellWidth(), tiledLayer!.getCellHeight()){

            super();
                //var dataId = dataId
    //var tiledLayer = tiledLayer
    //var mapTwoDArray = mapTwoDArray
    //var debugColor = debugColor


                            //For kotlin this is before the body of the constructor.
                    
this.tiledLayerP= tiledLayer
this.debugColor= debugColor
this.setCells(mapTwoDArray)
}


    public paint(graphics: Graphics){
    //var graphics = graphics
this.tiledLayerP!.paint(graphics)
}


    readonly font2: Font = Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, 4)!;
        
        

    public paintDebug(graphics: Graphics){
    //var graphics = graphics

    var font: Font = graphics.getFont()!;
        
        

graphics.setFont(font2)
graphics.setColor(debugColor)

    var x: number = this.tiledLayerP!.getX()!;
        
        


    var y: number = this.tiledLayerP!.getY()!;
        
        


    var firstColumn: number = 0;
        
        


    var firstRow: number = 0;
        
        


    var totalColumns: number = this.tiledLayerP!.getColumns()!;
        
        


    var totalRows: number = this.tiledLayerP!.getRows()!;
        
        


    var x0: number = x;
        
        


    var tile: number = 0;
        
        


    var tileHeight: number = this.tiledLayerP!.getCellHeight()!;
        
        


    var tileWidth: number = this.tiledLayerP!.getCellWidth()!;
        
        


    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        


    var stringMaker: StringMaker = new StringMaker();
        
        





                        for (
    var rowIndex: number = firstRow;
        
        
rowIndex < totalRows; rowIndex++)
        {
x= x0




                        for (
    var columnIndex: number = firstColumn;
        
        
columnIndex < totalColumns; columnIndex++)
        {
tile= this.tiledLayerP!.getCell(columnIndex, rowIndex)

                        if(tile < 0)
                        
                                    {
                                    tile= this.tiledLayerP!.getAnimatedTile(tile)

                                    }
                                

                        if(tile == 0)
                        
                                    {
                                    

                        continue
                    

                                    }
                                
tile--
stringMaker!.delete(0, stringMaker!.length())
graphics.drawString(stringMaker!.appendint(columnIndex)!.append(commonSeps!.COMMA)!.appendint(rowIndex)!.append(commonSeps!.COLON)!.appendint(tile)!.toString(), x +5, y +10, 0)
}

}

graphics.setFont(font)
}


    public move(dx: number, dy: number){
    //var dx = dx
    //var dy = dy
this.tiledLayerP!.move(dx, dy)
super.move( -dx,  -dy)
}


    public setPosition(x: number, y: number, z: number){
    //var x = x
    //var y = y
    //var z = z
this.tiledLayerP!.setPosition(x, y)
super.setPosition( -x,  -y, z)
}


    public getTiledLayer(): TiledLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tiledLayerP;
    
}


    public getCellWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayerP!.getCellWidth();
    
}


    public getCellHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayerP!.getCellHeight();
    
}


    public getCell(col: number, row: number): number{
    //var col = col
    //var row = row



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayerP!.getCell(col, row);
    
}


    public getColumns(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayerP!.getColumns();
    
}


    public getRows(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayerP!.getRows();
    
}


    public setCell(col: number, row: number, index: number){
    //var col = col
    //var row = row
    //var index = index
this.tiledLayerP!.setCell(col, row, index)
}


    public getAnimatedTile(animationTileIndex: number): number{
    //var animationTileIndex = animationTileIndex



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayerP!.getAnimatedTile(animationTileIndex);
    
}


}
                
            

