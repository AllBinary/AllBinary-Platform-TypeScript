
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';


        
            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
import { Image } from '../../../../../../../javax/microedition/lcdui/Image.js';
      
import { NullImage } from '../../../../../../../javax/microedition/lcdui/NullImage.js';
      
import { CellPosition } from '../../../../../../../org/allbinary/graphics/CellPosition.js';
      
import { NullUtil } from '../../../../../../../org/allbinary/logic/NullUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RaceTrackData
            extends Object
         {
        

    private tileSetImage: Image = NullImage.NULL_IMAGE;

    private miniTileSetImage: Image = NullImage.NULL_IMAGE;

    private cellWidth: number = 0;

    private cellHeight: number = 0;

    private miniCellWidth: number = 0;

    private miniCellHeight: number = 0;

    private mapArray: number[][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY;

    private cellTypeIdToGeographicMapCellTypeArray: number[] = NullUtil.getInstance()!.NULL_INT_ARRAY;

    private NO_OVER_PASSES_ARRAY: CellPosition[] = [];

    private overPassGeographicMapCellPositionArray: CellPosition[] = this.NO_OVER_PASSES_ARRAY;

    private id: Integer
public constructor (id: Integer, cellWidth: number, cellHeight: number, miniCellWidth: number, miniCellHeight: number, cellTypeIdToGeographicMapCellTypeArray: number[], mapArray: number[][]){

            super();
        this.id= id;
    
this.cellWidth= cellWidth;
    
this.cellHeight= cellHeight;
    
this.miniCellWidth= miniCellWidth;
    
this.miniCellHeight= miniCellHeight;
    
this.mapArray= mapArray;
    
this.cellTypeIdToGeographicMapCellTypeArray= cellTypeIdToGeographicMapCellTypeArray;
    
}


    setMapArray(mapArray: number[][]){
this.mapArray= mapArray;
    
}


    public getMapArray(): number[][]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mapArray;
    
}


    setCellTypeIdToGeographicMapCellTypeArray(cellTypeIdToGeographicMapCellTypeArray: number[]){
this.cellTypeIdToGeographicMapCellTypeArray= cellTypeIdToGeographicMapCellTypeArray;
    
}


    public getCellTypeIdToGeographicMapCellTypeArray(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cellTypeIdToGeographicMapCellTypeArray;
    
}


    setCellWidth(cellWidth: number){
this.cellWidth= cellWidth;
    
}


    public getCellWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cellWidth;
    
}


    setCellHeight(cellHeight: number){
this.cellHeight= cellHeight;
    
}


    public getCellHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cellHeight;
    
}


    public getOverPassGeographicMapCellPositionArray(): CellPosition[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.overPassGeographicMapCellPositionArray;
    
}


    public setOverPassGeographicMapCellPositionArray(overPassGeographicMapCellPositionArray: CellPosition[]){
this.overPassGeographicMapCellPositionArray= overPassGeographicMapCellPositionArray;
    
}


    public getTileSetImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tileSetImage;
    
}


    public setTileSetImage(tileSetImage: Image){
this.tileSetImage= tileSetImage;
    
}


    public getMiniTileSetImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.miniTileSetImage;
    
}


    public setMiniTileSetImage(miniTileSetImage: Image){
this.miniTileSetImage= miniTileSetImage;
    
}


    public getMiniCellWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.miniCellWidth;
    
}


    public setMiniCellWidth(miniCellWidth: number){
this.miniCellWidth= miniCellWidth;
    
}


    public getMiniCellHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.miniCellHeight;
    
}


    public setMiniCellHeight(miniCellHeight: number){
this.miniCellHeight= miniCellHeight;
    
}


    public setId(id: Integer){
this.id= id;
    
}


    public getId(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


}
                
            

