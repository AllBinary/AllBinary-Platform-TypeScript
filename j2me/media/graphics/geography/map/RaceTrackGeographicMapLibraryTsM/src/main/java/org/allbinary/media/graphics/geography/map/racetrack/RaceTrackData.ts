
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { Image } from "../../../../../../../javax/microedition/lcdui/Image.js";

    
import { NullCanvas } from "../../../../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { CellPosition } from "../../../../../../../org/allbinary/graphics/CellPosition.js";

    
import { NullUtil } from "../../../../../../../org/allbinary/logic/NullUtil.js";

    

export class RaceTrackData
            extends Object
         {
        

    private tileSetImage: Image = NullCanvas.NULL_IMAGE;
        
        

    private miniTileSetImage: Image = NullCanvas.NULL_IMAGE;
        
        

    private cellWidth: number = 0;
        
        

    private cellHeight: number = 0;
        
        

    private miniCellWidth: number = 0;
        
        

    private miniCellHeight: number = 0;
        
        

    private mapArray: number[][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY;
        
        

    private cellTypeIdToGeographicMapCellTypeArray: number[] = NullUtil.getInstance()!.NULL_INT_ARRAY;
        
        

    private NO_OVER_PASSES_ARRAY: CellPosition[] = [];
        
        

    private overPassGeographicMapCellPositionArray: CellPosition[] = NO_OVER_PASSES_ARRAY;
        
        

    private id: Integer
public constructor (id: Integer, cellWidth: number, cellHeight: number, miniCellWidth: number, miniCellHeight: number)                        

                            : this(id, cellWidth, cellHeight, miniCellWidth, miniCellHeight, NullUtil.getInstance()!.NULL_INT_ARRAY, NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY){

            super();
                //var id = id
    //var cellWidth = cellWidth
    //var cellHeight = cellHeight
    //var miniCellWidth = miniCellWidth
    //var miniCellHeight = miniCellHeight


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (id: Integer, cellWidth: number, cellHeight: number, miniCellWidth: number, miniCellHeight: number, cellTypeIdToGeographicMapCellTypeArray: number[], mapArray: number[][]){

            super();
                //var id = id
    //var cellWidth = cellWidth
    //var cellHeight = cellHeight
    //var miniCellWidth = miniCellWidth
    //var miniCellHeight = miniCellHeight
    //var cellTypeIdToGeographicMapCellTypeArray = cellTypeIdToGeographicMapCellTypeArray
    //var mapArray = mapArray
this.id= id;
    
this.cellWidth= cellWidth;
    
this.cellHeight= cellHeight;
    
this.miniCellWidth= miniCellWidth;
    
this.miniCellHeight= miniCellHeight;
    
this.mapArray= mapArray;
    
this.cellTypeIdToGeographicMapCellTypeArray= cellTypeIdToGeographicMapCellTypeArray;
    
}


    setMapArray(mapArray: number[][]){
var mapArray = mapArray
this.mapArray= mapArray;
    
}


    public getMapArray(): number[][]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mapArray;
    
}


    setCellTypeIdToGeographicMapCellTypeArray(cellTypeIdToGeographicMapCellTypeArray: number[]){
var cellTypeIdToGeographicMapCellTypeArray = cellTypeIdToGeographicMapCellTypeArray
this.cellTypeIdToGeographicMapCellTypeArray= cellTypeIdToGeographicMapCellTypeArray;
    
}


    public getCellTypeIdToGeographicMapCellTypeArray(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellTypeIdToGeographicMapCellTypeArray;
    
}


    setCellWidth(cellWidth: number){
var cellWidth = cellWidth
this.cellWidth= cellWidth;
    
}


    public getCellWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellWidth;
    
}


    setCellHeight(cellHeight: number){
var cellHeight = cellHeight
this.cellHeight= cellHeight;
    
}


    public getCellHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellHeight;
    
}


    public getOverPassGeographicMapCellPositionArray(): CellPosition[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return overPassGeographicMapCellPositionArray;
    
}


    public setOverPassGeographicMapCellPositionArray(overPassGeographicMapCellPositionArray: CellPosition[]){
var overPassGeographicMapCellPositionArray = overPassGeographicMapCellPositionArray
this.overPassGeographicMapCellPositionArray= overPassGeographicMapCellPositionArray;
    
}


    public getTileSetImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tileSetImage;
    
}


    public setTileSetImage(tileSetImage: Image){
var tileSetImage = tileSetImage
this.tileSetImage= tileSetImage;
    
}


    public getMiniTileSetImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return miniTileSetImage;
    
}


    public setMiniTileSetImage(miniTileSetImage: Image){
var miniTileSetImage = miniTileSetImage
this.miniTileSetImage= miniTileSetImage;
    
}


    public getMiniCellWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return miniCellWidth;
    
}


    public setMiniCellWidth(miniCellWidth: number){
var miniCellWidth = miniCellWidth
this.miniCellWidth= miniCellWidth;
    
}


    public getMiniCellHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return miniCellHeight;
    
}


    public setMiniCellHeight(miniCellHeight: number){
var miniCellHeight = miniCellHeight
this.miniCellHeight= miniCellHeight;
    
}


    public setId(id: Integer){
var id = id
this.id= id;
    
}


    public getId(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return id;
    
}


}
                
            

