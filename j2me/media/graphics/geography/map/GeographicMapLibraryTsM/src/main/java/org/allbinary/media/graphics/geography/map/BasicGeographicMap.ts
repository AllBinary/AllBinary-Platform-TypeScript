
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
        



            import { Integer } from "../../../../../../java/lang/Integer.js";
        
import { AllBinaryTiledLayer } from "../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { Layer } from "../../../../../../org/allbinary/layer/Layer.js";

    
import { MathUtil } from "../../../../../../org/allbinary/logic/math/MathUtil.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { SimpleGeographicMap } from "./SimpleGeographicMap.js";

import { GeographicMapInterface } from "./GeographicMapInterface.js";

import { GeographicMapCellPositionFactoryInterface } from "./GeographicMapCellPositionFactoryInterface.js";

import { GeographicMapCellPositionBaseFactory } from "./GeographicMapCellPositionBaseFactory.js";

import { GeographicMapCellTypeFactory } from "./GeographicMapCellTypeFactory.js";

import { GeographicMapCellPosition } from "./GeographicMapCellPosition.js";

import { SimpleGeographicMapCellPositionFactory } from "./SimpleGeographicMapCellPositionFactory.js";

import { GeographicMapCellType } from "./GeographicMapCellType.js";

import { BasicGeographicMapCellPositionFactory } from "./BasicGeographicMapCellPositionFactory.js";

export class BasicGeographicMap extends SimpleGeographicMap implements GeographicMapInterface {
        

    public static readonly NULL_BASIC_GEOGRAPHIC_MAP_ARRAY: BasicGeographicMap[] = [];
        
        

    private readonly mathUtil: MathUtil = MathUtil.getInstance()!;
        
        

    private readonly geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory

    private readonly geographicMapCellPositionFactoryInterface: GeographicMapCellPositionFactoryInterface

    private readonly geographicMapCellTypeFactory: GeographicMapCellTypeFactory
public constructor (id: Integer, name: string, cellTypeIdToGeographicMapCellType: number[], tiledLayer: AllBinaryTiledLayer, foregroundBasicColor: BasicColor, backgroundBasicColor: BasicColor, geographicMapCellPositionFactoryInterface: GeographicMapCellPositionFactoryInterface, geographicMapCellPositionBaseFactory: GeographicMapCellPositionBaseFactory, geographicMapCellTypeFactory: GeographicMapCellTypeFactory){
            super(id, name, cellTypeIdToGeographicMapCellType, tiledLayer, foregroundBasicColor, backgroundBasicColor);
                        //var id = id
    //var name = name
    //var cellTypeIdToGeographicMapCellType = cellTypeIdToGeographicMapCellType
    //var tiledLayer = tiledLayer
    //var foregroundBasicColor = foregroundBasicColor
    //var backgroundBasicColor = backgroundBasicColor
    //var geographicMapCellPositionFactoryInterface = geographicMapCellPositionFactoryInterface
    //var geographicMapCellPositionBaseFactory = geographicMapCellPositionBaseFactory
    //var geographicMapCellTypeFactory = geographicMapCellTypeFactory


                            //For kotlin this is before the body of the constructor.
                    
this.geographicMapCellPositionFactoryInterface= geographicMapCellPositionFactoryInterface;
    
this.geographicMapCellPositionFactory= geographicMapCellPositionBaseFactory!.getInstance(this);
    
this.geographicMapCellTypeFactory= geographicMapCellTypeFactory;
    
}


                //@Throws(Error::class)
            
    public getCellPosition(direction: number, oldGeographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellPosition{
    //var direction = direction
    //var oldGeographicMapCellPosition = oldGeographicMapCellPosition


        when (direction) {
            0 -> {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactory!.getInstance(oldGeographicMapCellPosition!.getColumn() -1, oldGeographicMapCellPosition!.getRow());

                        ;
    
}
1 -> {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactory!.getInstance(oldGeographicMapCellPosition!.getColumn() +1, oldGeographicMapCellPosition!.getRow());

                        ;
    
}
2 -> {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactory!.getInstance(oldGeographicMapCellPosition!.getColumn(), oldGeographicMapCellPosition!.getRow() -1);

                        ;
    
}
3 -> {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactory!.getInstance(oldGeographicMapCellPosition!.getColumn(), oldGeographicMapCellPosition!.getRow() +1);

                        ;
    
}
else -> {


                            throw new Error("Only Four Directions")
}

        }       
        
    
}


                //@Throws(Error::class)
            
    public getCellPositionNoThrow(direction: number, oldGeographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellPosition{
    //var direction = direction
    //var oldGeographicMapCellPosition = oldGeographicMapCellPosition


        when (direction) {
            0 -> {
                        if(oldGeographicMapCellPosition!.getColumn() -1 >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactory!.getInstance(oldGeographicMapCellPosition!.getColumn() -1, oldGeographicMapCellPosition!.getRow());

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                        }
                            
}
1 -> {
                        if(oldGeographicMapCellPosition!.getColumn() +1 < this.getAllBinaryTiledLayer()!.getColumns())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactory!.getInstance(oldGeographicMapCellPosition!.getColumn() +1, oldGeographicMapCellPosition!.getRow());

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                        }
                            
}
2 -> {
                        if(oldGeographicMapCellPosition!.getRow() -1 >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactory!.getInstance(oldGeographicMapCellPosition!.getColumn(), oldGeographicMapCellPosition!.getRow() -1);

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                        }
                            
}
3 -> {
                        if(oldGeographicMapCellPosition!.getRow() +1 < this.getAllBinaryTiledLayer()!.getRows())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactory!.getInstance(oldGeographicMapCellPosition!.getColumn(), oldGeographicMapCellPosition!.getRow() +1);

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                        }
                            
}
else -> {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    
}

        }       
        
    
}


                //@Throws(Error::class)
            
    public isOfFourDirections(oldGeographicMapCellPosition: GeographicMapCellPosition, newGeographicMapCellPosition: GeographicMapCellPosition): boolean{
    //var oldGeographicMapCellPosition = oldGeographicMapCellPosition
    //var newGeographicMapCellPosition = newGeographicMapCellPosition




                        for (
    var index: number = 0;
        
        
index < 4; index++)
        {

                        if(newGeographicMapCellPosition == this.getCellPositionNoThrow(index, oldGeographicMapCellPosition))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    public getCellPositionAt(x: number, y: number): GeographicMapCellPosition{
    //var x = x
    //var y = y

    var allBinaryTiledLayer: AllBinaryTiledLayer = this.getAllBinaryTiledLayer()!;
        
        
;
    

    var i_column: number = this.mathUtil!.abs(x /allBinaryTiledLayer!.getCellHeight())!;
        
        
;
    

    var i_row: number = this.mathUtil!.abs(y /allBinaryTiledLayer!.getCellWidth())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactory!.getInstance(i_column, i_row);

                        ;
    
}


    public getCellPositionAtNoThrow(x: number, y: number): GeographicMapCellPosition{
    //var x = x
    //var y = y

    var allBinaryTiledLayer: AllBinaryTiledLayer = this.getAllBinaryTiledLayer()!;
        
        
;
    

    var i_column: number = this.mathUtil!.abs(x /allBinaryTiledLayer!.getCellHeight())!;
        
        
;
    

    var i_row: number = this.mathUtil!.abs(y /allBinaryTiledLayer!.getCellWidth())!;
        
        
;
    

                        if(allBinaryTiledLayer!.getColumns() > i_column && allBinaryTiledLayer!.getRows() > i_row)
                        
                                    {
                                    
        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactory!.getInstance(i_column, i_row);

                        ;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    
}


                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                        }
                            
}


                //@Throws(Error::class)
            
    public isOnMap(geographicMapCellPosition: GeographicMapCellPosition): boolean{
    //var geographicMapCellPosition = geographicMapCellPosition

    var allBinaryTiledLayer: AllBinaryTiledLayer = this.getAllBinaryTiledLayer()!;
        
        
;
    

    var i_column: number = geographicMapCellPosition!.getColumn()!;
        
        
;
    

    var i_row: number = geographicMapCellPosition!.getRow()!;
        
        
;
    

                        if(allBinaryTiledLayer!.getColumns() > i_column && allBinaryTiledLayer!.getRows() > i_row)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


                //@Throws(Error::class)
            
    public getCellPositionAtNoThrow(x: number, y: number, x2: number, y2: number, geographicMapCellPositionList: BasicArrayList): BasicArrayList{
    //var x = x
    //var y = y
    //var x2 = x2
    //var y2 = y2
    //var geographicMapCellPositionList = geographicMapCellPositionList
geographicMapCellPositionList!.clear();
    

    var allBinaryTiledLayer: AllBinaryTiledLayer = this.getAllBinaryTiledLayer()!;
        
        
;
    

    var i_columnMin: number = this.mathUtil!.abs(x /allBinaryTiledLayer!.getCellHeight())!;
        
        
;
    

    var i_rowMin: number = this.mathUtil!.abs(y /allBinaryTiledLayer!.getCellWidth())!;
        
        
;
    

    var i_columnMax: number = this.mathUtil!.abs(x2 /allBinaryTiledLayer!.getCellHeight()) +1;
        
        
;
    

    var i_rowMax: number = this.mathUtil!.abs(y2 /allBinaryTiledLayer!.getCellWidth()) +1;
        
        
;
    




                        for (
    var columnIndex: number = i_columnMin;
        
        
columnIndex < i_columnMax; columnIndex++)
        {




                        for (
    var rowIndex: number = i_rowMin;
        
        
rowIndex < i_rowMax; rowIndex++)
        {

                        if(allBinaryTiledLayer!.getColumns() > columnIndex && allBinaryTiledLayer!.getRows() > rowIndex)
                        
                                    {
                                    geographicMapCellPositionList!.add(geographicMapCellPositionFactory!.getInstance(columnIndex, rowIndex));
    

                                    }
                                
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionList;
    
}


                //@Throws(Error::class)
            
    public getCellPositionsAt(layer: Layer, currentCellPositionArray: GeographicMapCellPosition[][], cellPositionArray: GeographicMapCellPosition[][]): boolean{
    //var layer = layer
    //var currentCellPositionArray = currentCellPositionArray
    //var cellPositionArray = cellPositionArray

    var hasChanged: boolean = false;
        
        
;
    

    var size: number = cellPositionArray!.length
                ;
        
        
;
    

    var size2: number = cellPositionArray[0]!.length
                ;
        
        
;
    

    var xPortion: number = layer.getXP() /(size -1);
        
        
;
    

    var yPortion: number = layer.getYP() /(size -1);
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {




                        for (
    var index2: number = 0;
        
        
index2 < size2; index2++)
        {

    var x: number = xPortion *index;
        
        
;
    

    var y: number = yPortion *index;
        
        
;
    
cellPositionArray[index]![index2]= this.getCellPositionAt(x, y);
    

                        if(currentCellPositionArray[index]![index2] != cellPositionArray[index]![index2])
                        
                                    {
                                    hasChanged= true;
    

                                    }
                                
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hasChanged;
    
}


                //@Throws(Error::class)
            
    public getCellTypeAt(x: number, y: number): GeographicMapCellType{
var x = x
var y = y

    var cellPosition: GeographicMapCellPosition = this.getCellPositionAt(x, y)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getCellTypeAt(cellPosition);

                        ;
    
}


    public getGeographicMapCellPositionFactory(): BasicGeographicMapCellPositionFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactory;
    
}


    public getGeographicMapCellPositionFactoryInterface(): GeographicMapCellPositionFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactoryInterface;
    
}


    public getGeographicMapCellTypeFactory(): GeographicMapCellTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellTypeFactory;
    
}


}
                
            

