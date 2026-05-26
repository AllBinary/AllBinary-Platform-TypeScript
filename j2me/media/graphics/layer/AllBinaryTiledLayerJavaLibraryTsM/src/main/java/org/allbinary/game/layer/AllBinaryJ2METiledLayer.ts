
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { TiledLayer } from '../../../../javax/microedition/lcdui/game/TiledLayer.js';
      
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryTiledLayer } from './AllBinaryTiledLayer.js';

export class AllBinaryJ2METiledLayer extends AllBinaryTiledLayer {
        

    readonly tiledLayerP: TiledLayer;

    readonly debugColor: number;

public constructor (dataId: Integer, tiledLayer: TiledLayer, mapTwoDArray: number[][], debugColor: number){
            super(dataId, tiledLayer!.getWidth(), tiledLayer!.getHeight(), tiledLayer!.getCellWidth(), tiledLayer!.getCellHeight());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.tiledLayerP= tiledLayer;
    
this.debugColor= debugColor;
    
this.setCells(mapTwoDArray);
    
}


    public paint(graphics: Graphics){
this.tiledLayerP!.paint(graphics);
    
}


    readonly font2: Font = Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, 4)!;

    public paintDebug(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
graphics.setFont(this.font2);
    
graphics.setColor(this.debugColor);
    

    var x: number = this.tiledLayerP!.getX()!;;
    

    var y: number = this.tiledLayerP!.getY()!;;
    

    var firstColumn: number = 0;;
    

    var firstRow: number = 0;;
    

    var totalColumns: number = this.tiledLayerP!.getColumns()!;;
    

    var totalRows: number = this.tiledLayerP!.getRows()!;;
    

    var x0: number = x;;
    

    var tile: number = 0;;
    

    var tileHeight: number = this.tiledLayerP!.getCellHeight()!;;
    

    var tileWidth: number = this.tiledLayerP!.getCellWidth()!;;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    var stringMaker: StringMaker = new StringMaker();;
    




                        for (
    var rowIndex: number = firstRow;rowIndex < totalRows; rowIndex++)
        {
x= x0;
    




                        for (
    var columnIndex: number = firstColumn;columnIndex < totalColumns; columnIndex++)
        {
tile= this.tiledLayerP!.getCell(columnIndex, rowIndex);
    

                        if(tile < 0)
                        
                                    {
                                    tile= this.tiledLayerP!.getAnimatedTile(tile);
    

                                    }
                                

                        if(tile == 0)
                        
                                    {
                                    

                        continue
                    

                                    }
                                
tile--;
    
stringMaker!.delete(0, stringMaker!.length());
    
graphics.drawString(stringMaker!.appendint(columnIndex)!.append(commonSeps!.COMMA)!.appendint(rowIndex)!.append(commonSeps!.COLON)!.appendint(tile)!.toString(), x +5, y +10, 0);
    
}

}

graphics.setFont(font);
    
}


    public moveDXY(dx: number, dy: number){
this.tiledLayerP!.move(dx, dy);
    
super.moveDXY( -dx,  -dy);
    
}


    public setPosition(x: number, y: number, z: number){
this.tiledLayerP!.setPosition(x, y);
    
super.setPosition( -x,  -y, z);
    
}


    public getTiledLayer(): TiledLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayerP;
    
}


    public getCellWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayerP!.getCellWidth();;
    
}


    public getCellHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayerP!.getCellHeight();;
    
}


    public getCell(col: number, row: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayerP!.getCell(col, row);;
    
}


    public getColumns(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayerP!.getColumns();;
    
}


    public getRows(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayerP!.getRows();;
    
}


    public setCell(col: number, row: number, index: number){
this.tiledLayerP!.setCell(col, row, index);
    
}


    public getAnimatedTile(animationTileIndex: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tiledLayerP!.getAnimatedTile(animationTileIndex);;
    
}


}
                
            

