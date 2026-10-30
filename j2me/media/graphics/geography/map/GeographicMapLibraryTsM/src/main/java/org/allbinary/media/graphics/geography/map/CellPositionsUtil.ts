
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

import { AllBinaryTiledLayer } from '../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
//not GWT import const AllBinaryTiledLayer

//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
type BasicArrayListS<T = any, U = any> = typeof BasicArrayListS extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListS;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicGeographicMapCellPositionFactory } from './BasicGeographicMapCellPositionFactory.js';
//not GWT import - same folder const BasicGeographicMapCellPositionFactory
import { GeographicMapCellPosition } from './GeographicMapCellPosition.js';
//not GWT import - same folder const GeographicMapCellPosition
import { BasicGeographicMap } from './BasicGeographicMap.js';
//not GWT import - same folder const BasicGeographicMap

export class CellPositionsUtil
            extends Object
         {
        

    private static readonly instance: CellPositionsUtil = new CellPositionsUtil();

    public static getInstance(): CellPositionsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CellPositionsUtil.instance;
    
}


                //@Throws(Exception.constructor)
            
    public getAll(geographicMapInterface: BasicGeographicMap, topRightGeographicMapCellPosition: GeographicMapCellPosition, columns: number, rows: number, reusableList: BasicArrayList): BasicArrayList{
reusableList!.clear();
    

    let geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    let lastColumn: number = topRightGeographicMapCellPosition!.getColumn() +columns;;
    

    let lastRow: number = topRightGeographicMapCellPosition!.getRow() +rows;;
    

                        if((columns > 1 && lastColumn > geographicMapInterface!.getAllBinaryTiledLayer()!.getColumns()) || (rows > 1 && lastRow > geographicMapInterface!.getAllBinaryTiledLayer()!.getRows()))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return reusableList;
    

                                    }
                                




                        for (
    let rowIndex: number = 0;rowIndex < rows; rowIndex++)
        {




                        for (
    let columnIndex: number = 0;columnIndex < columns; columnIndex++)
        {

    let geographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(topRightGeographicMapCellPosition!.getColumn() +columnIndex, topRightGeographicMapCellPosition!.getRow() +rowIndex)!;;
    
reusableList!.add(geographicMapCellPosition);
    
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return reusableList;
    
}


    private readonly reusableSingleThreadedSurroundingList: BasicArrayList = new BasicArrayListS(8);

                //@Throws(Exception.constructor)
            
    public getAllSurrounding(geographicMapInterface: BasicGeographicMap, occupyList: BasicArrayList, reusableList: BasicArrayList): BasicArrayList{
reusableList!.clear();
    




                        for (
    let index: number = occupyList!.size() -1;index >= 0; index--)
        {

    let layerGeographicMapCellPosition: GeographicMapCellPosition = occupyList!.get(index) as GeographicMapCellPosition;;
    

    let surroundingGeographicMapCellPositionList: BasicArrayList = this.getAllSurroundingAt(geographicMapInterface, layerGeographicMapCellPosition, this.reusableSingleThreadedSurroundingList)!;;
    




                        for (
    let index2: number = surroundingGeographicMapCellPositionList!.size() -1;index2 >= 0; index2--)
        {

    let geographicMapCellPosition: GeographicMapCellPosition = surroundingGeographicMapCellPositionList!.get(index2) as GeographicMapCellPosition;;
    

                        if(!reusableList!.contains(geographicMapCellPosition) && !occupyList!.contains(geographicMapCellPosition))
                        
                                    {
                                    reusableList!.add(geographicMapCellPosition);
    

                                    }
                                
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return reusableList;
    
}


    private readonly surroundArray: number[][] = 
                                                        [
                                                            [ -1, -1]
,[0, -1]
,[1, -1]
,[ -1,1]
,[0,1]
,[1,1]
,[1,0]
,[ -1,0]

                                                        ];

                //@Throws(Exception.constructor)
            
    public getAllSurroundingAt(geographicMapInterface: BasicGeographicMap, layerGeographicMapCellPosition: GeographicMapCellPosition, reusableSurroundingList: BasicArrayList): BasicArrayList{
reusableSurroundingList!.clear();
    

    let geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    let tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    let row: number= 0;;
    

    let column: number= 0;;
    




                        for (
    let index: number = 0;index < 8; index++)
        {
column= layerGeographicMapCellPosition!.getColumn() +this.surroundArray[index]![0];
    
row= layerGeographicMapCellPosition!.getRow() +this.surroundArray[index]![1];
    

                        if(tiledLayer!.isOnTileLayer(column, row))
                        
                                    {
                                    
    let geographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(column, row)!;;
    
reusableSurroundingList!.add(geographicMapCellPosition);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return reusableSurroundingList;
    
}


}

