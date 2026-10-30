
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
import { AllBinaryTiledLayer } from '../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
//not GWT import const AllBinaryTiledLayer

import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { Layer } from '../../../../../../org/allbinary/layer/Layer.js';
//not GWT import const Layer

//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
type MathUtil<T = any, U = any> = typeof MathUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof MathUtil;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SimpleGeographicMap } from './SimpleGeographicMap.js';
//sameFolderImports - not GWT import - same folder const SimpleGeographicMap
import { GeographicMapInterface } from './GeographicMapInterface.js';
//sameFolderImports - not GWT import - same folder const GeographicMapInterface
import { BasicGeographicMapCellPositionFactory } from './BasicGeographicMapCellPositionFactory.js';
//sameFolderImports - not GWT import - same folder const BasicGeographicMapCellPositionFactory
import { GeographicMapCellPositionFactoryInterface } from './GeographicMapCellPositionFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const GeographicMapCellPositionFactoryInterface
import { GeographicMapCellTypeFactory } from './GeographicMapCellTypeFactory.js';
//sameFolderImports - not GWT import - same folder const GeographicMapCellTypeFactory
import { GeographicMapCellPositionBaseFactory } from './GeographicMapCellPositionBaseFactory.js';
//sameFolderImports - not GWT import - same folder const GeographicMapCellPositionBaseFactory
import { GeographicMapCellPosition } from './GeographicMapCellPosition.js';
//sameFolderImports - not GWT import - same folder const GeographicMapCellPosition
import { SimpleGeographicMapCellPositionFactory } from './SimpleGeographicMapCellPositionFactory.js';
//sameFolderImports - not GWT import - same folder const SimpleGeographicMapCellPositionFactory
import { GeographicMapCellType } from './GeographicMapCellType.js';
//sameFolderImports - not GWT import - same folder const GeographicMapCellType

export class BasicGeographicMap extends SimpleGeographicMap implements GeographicMapInterface {
        

    public static readonly NULL_BASIC_GEOGRAPHIC_MAP_ARRAY: BasicGeographicMap[] = [];

    private readonly mathUtil: MathUtil = MathUtil.getInstance()!;

    private readonly geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory;

    private readonly geographicMapCellPositionFactoryInterface: GeographicMapCellPositionFactoryInterface;

    private readonly geographicMapCellTypeFactory: GeographicMapCellTypeFactory;

public constructor (id: Integer, name: string, cellTypeIdToGeographicMapCellType: number[], tiledLayer: AllBinaryTiledLayer, foregroundBasicColor: BasicColor, backgroundBasicColor: BasicColor, geographicMapCellPositionFactoryInterface: GeographicMapCellPositionFactoryInterface, geographicMapCellPositionBaseFactory: GeographicMapCellPositionBaseFactory, geographicMapCellTypeFactory: GeographicMapCellTypeFactory){
            super(id, name, cellTypeIdToGeographicMapCellType, tiledLayer, foregroundBasicColor, backgroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.geographicMapCellPositionFactoryInterface= geographicMapCellPositionFactoryInterface;
    
this.geographicMapCellPositionFactory= geographicMapCellPositionBaseFactory!.getInstance(this);
    
this.geographicMapCellTypeFactory= geographicMapCellTypeFactory;
    
}


                //@Throws(Exception.constructor)
            
    public getCellPosition(direction: number, oldGeographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellPosition{



        switch (direction) {
            case 0: {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionFactory!.getAt(oldGeographicMapCellPosition!.getColumn() -1, oldGeographicMapCellPosition!.getRow());;
    
}
case 1: {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionFactory!.getAt(oldGeographicMapCellPosition!.getColumn() +1, oldGeographicMapCellPosition!.getRow());;
    
}
case 2: {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionFactory!.getAt(oldGeographicMapCellPosition!.getColumn(), oldGeographicMapCellPosition!.getRow() -1);;
    
}
case 3: {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionFactory!.getAt(oldGeographicMapCellPosition!.getColumn(), oldGeographicMapCellPosition!.getRow() +1);;
    
}
default: {


                            throw new Exception("Only Four Directions");
                    
}

        }       
        
    
}


                //@Throws(Exception.constructor)
            
    public getCellPositionNoThrow(direction: number, oldGeographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellPosition{



        switch (direction) {
            case 0: {
                        if(oldGeographicMapCellPosition!.getColumn() -1 >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionFactory!.getAt(oldGeographicMapCellPosition!.getColumn() -1, oldGeographicMapCellPosition!.getRow());;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                        }
                            
}
case 1: {
                        if(oldGeographicMapCellPosition!.getColumn() +1 < this.getAllBinaryTiledLayer()!.getColumns())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionFactory!.getAt(oldGeographicMapCellPosition!.getColumn() +1, oldGeographicMapCellPosition!.getRow());;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                        }
                            
}
case 2: {
                        if(oldGeographicMapCellPosition!.getRow() -1 >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionFactory!.getAt(oldGeographicMapCellPosition!.getColumn(), oldGeographicMapCellPosition!.getRow() -1);;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                        }
                            
}
case 3: {
                        if(oldGeographicMapCellPosition!.getRow() +1 < this.getAllBinaryTiledLayer()!.getRows())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionFactory!.getAt(oldGeographicMapCellPosition!.getColumn(), oldGeographicMapCellPosition!.getRow() +1);;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                        }
                            
}
default: {


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    
}

        }       
        
    
}


                //@Throws(Exception.constructor)
            
    public isOfFourDirections(oldGeographicMapCellPosition: GeographicMapCellPosition, newGeographicMapCellPosition: GeographicMapCellPosition): boolean{




                        for (
    let index: number = 0;index < 4; index++)
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


                //@Throws(Exception.constructor)
            
    public getCellPositionAtXY(x: number, y: number): GeographicMapCellPosition{

    let allBinaryTiledLayer: AllBinaryTiledLayer = this.getAllBinaryTiledLayer()!;;
    

    let i_column: number = this.mathUtil!.abs(x /allBinaryTiledLayer!.getCellHeight())!;;
    

    let i_row: number = this.mathUtil!.abs(y /allBinaryTiledLayer!.getCellWidth())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionFactory!.getAt(i_column, i_row);;
    
}


    public getCellPositionAtXYNoThrow(x: number, y: number): GeographicMapCellPosition{

    let allBinaryTiledLayer: AllBinaryTiledLayer = this.getAllBinaryTiledLayer()!;;
    

    let i_column: number = this.mathUtil!.abs(x /allBinaryTiledLayer!.getCellHeight())!;;
    

    let i_row: number = this.mathUtil!.abs(y /allBinaryTiledLayer!.getCellWidth())!;;
    

                        if(allBinaryTiledLayer!.getColumns() > i_column && allBinaryTiledLayer!.getRows() > i_row)
                        
                                    {
                                    
 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionFactory!.getAt(i_column, i_row);;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

 }
   }
 

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public isOnMap(geographicMapCellPosition: GeographicMapCellPosition): boolean{

    let allBinaryTiledLayer: AllBinaryTiledLayer = this.getAllBinaryTiledLayer()!;;
    

    let i_column: number = geographicMapCellPosition!.getColumn()!;;
    

    let i_row: number = geographicMapCellPosition!.getRow()!;;
    

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


                //@Throws(Exception.constructor)
            
    public getCellPositionAtNoThrow(x: number, y: number, x2: number, y2: number, geographicMapCellPositionList: BasicArrayList): BasicArrayList{
geographicMapCellPositionList!.clear();
    

    let allBinaryTiledLayer: AllBinaryTiledLayer = this.getAllBinaryTiledLayer()!;;
    

    let i_columnMin: number = this.mathUtil!.abs(x /allBinaryTiledLayer!.getCellHeight())!;;
    

    let i_rowMin: number = this.mathUtil!.abs(y /allBinaryTiledLayer!.getCellWidth())!;;
    

    let i_columnMax: number = this.mathUtil!.abs(x2 /allBinaryTiledLayer!.getCellHeight()) +1;;
    

    let i_rowMax: number = this.mathUtil!.abs(y2 /allBinaryTiledLayer!.getCellWidth()) +1;;
    




                        for (
    let columnIndex: number = i_columnMin;columnIndex < i_columnMax; columnIndex++)
        {




                        for (
    let rowIndex: number = i_rowMin;rowIndex < i_rowMax; rowIndex++)
        {

                        if(allBinaryTiledLayer!.getColumns() > columnIndex && allBinaryTiledLayer!.getRows() > rowIndex)
                        
                                    {
                                    geographicMapCellPositionList!.add(this.geographicMapCellPositionFactory!.getAt(columnIndex, rowIndex));
    

                                    }
                                
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionList;
    
}


                //@Throws(Exception.constructor)
            
    public getCellPositionsAt(layer: Layer, currentCellPositionArray: GeographicMapCellPosition[][], cellPositionArray: GeographicMapCellPosition[][]): boolean{

    let hasChanged: boolean = false;;
    

    let size: number = cellPositionArray!.length
                ;;
    

    let size2: number = cellPositionArray[0]!.length
                ;;
    

    let xPortion: number = layer.getXP() /(size -1);;
    

    let yPortion: number = layer.getYP() /(size -1);;
    




                        for (
    let index: number = 0;index < size; index++)
        {




                        for (
    let index2: number = 0;index2 < size2; index2++)
        {

    let x: number = xPortion *index;;
    

    let y: number = yPortion *index;;
    
cellPositionArray[index]![index2]= this.getCellPositionAtXY(x, y);
    

                        if(currentCellPositionArray[index]![index2] != cellPositionArray[index]![index2])
                        
                                    {
                                    hasChanged= true;
    

                                    }
                                
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hasChanged;
    
}


                //@Throws(Exception.constructor)
            
    public getCellTypeAtXY(x: number, y: number): GeographicMapCellType{

    let cellPosition: GeographicMapCellPosition = this.getCellPositionAtXY(x, y)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getCellTypeAt(cellPosition);;
    
}


    public getGeographicMapCellPositionFactory(): BasicGeographicMapCellPositionFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionFactory;
    
}


    public getGeographicMapCellPositionFactoryInterface(): GeographicMapCellPositionFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionFactoryInterface;
    
}


    public getGeographicMapCellTypeFactory(): GeographicMapCellTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellTypeFactory;
    
}


}

