
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
        



import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { AllBinaryTiledLayer } from "../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    

export class CellPositionsUtil
            extends Object
         {
        

    private static readonly instance: CellPositionsUtil = new CellPositionsUtil();
        
        

    public static getInstance(): CellPositionsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public getAll(geographicMapInterface: BasicGeographicMap, topRightGeographicMapCellPosition: GeographicMapCellPosition, columns: number, rows: number, reusableList: BasicArrayList): BasicArrayList{
    //var geographicMapInterface = geographicMapInterface
    //var topRightGeographicMapCellPosition = topRightGeographicMapCellPosition
    //var columns = columns
    //var rows = rows
    //var reusableList = reusableList
reusableList!.clear();
    

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;
        
        
;
    

    var lastColumn: number = topRightGeographicMapCellPosition!.getColumn() +columns;
        
        
;
    

    var lastRow: number = topRightGeographicMapCellPosition!.getRow() +rows;
        
        
;
    

                        if((columns > 1 && lastColumn > geographicMapInterface!.getAllBinaryTiledLayer()!.getColumns()) || (rows > 1 && lastRow > geographicMapInterface!.getAllBinaryTiledLayer()!.getRows()))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return reusableList;
    

                                    }
                                




                        for (
    var rowIndex: number = 0;
        
        
rowIndex < rows; rowIndex++)
        {




                        for (
    var columnIndex: number = 0;
        
        
columnIndex < columns; columnIndex++)
        {

    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getInstance(topRightGeographicMapCellPosition!.getColumn() +columnIndex, topRightGeographicMapCellPosition!.getRow() +rowIndex)!;
        
        
;
    
reusableList!.add(geographicMapCellPosition);
    
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return reusableList;
    
}


    private readonly reusableSingleThreadedSurroundingList: BasicArrayList = new BasicArrayList(8);
        
        

                //@Throws(Error::class)
            
    public getAllSurrounding(geographicMapInterface: BasicGeographicMap, occupyList: BasicArrayList, reusableList: BasicArrayList): BasicArrayList{
    //var geographicMapInterface = geographicMapInterface
    //var occupyList = occupyList
    //var reusableList = reusableList
reusableList!.clear();
    




                        for (
    var index: number = occupyList!.size() -1;
        
        
index >= 0; index--)
        {

    var layerGeographicMapCellPosition: GeographicMapCellPosition = occupyList!.get(index);

                         as GeographicMapCellPosition;
        
        
;
    

    var surroundingGeographicMapCellPositionList: BasicArrayList = getAllSurrounding(geographicMapInterface, layerGeographicMapCellPosition, reusableSingleThreadedSurroundingList)!;
        
        
;
    




                        for (
    var index2: number = surroundingGeographicMapCellPositionList!.size() -1;
        
        
index2 >= 0; index2--)
        {

    var geographicMapCellPosition: GeographicMapCellPosition = surroundingGeographicMapCellPositionList!.get(index2);

                         as GeographicMapCellPosition;
        
        
;
    

                        if(!reusableList!.contains(geographicMapCellPosition);

                         && !occupyList!.contains(geographicMapCellPosition);

                        )
                        
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
                                                            intArrayOf( -1, -1)
,intArrayOf(0, -1)
,intArrayOf(1, -1)
,intArrayOf( -1,1)
,intArrayOf(0,1)
,intArrayOf(1,1)
,intArrayOf(1,0)
,intArrayOf( -1,0)

                                                        ];
        
        

                //@Throws(Error::class)
            
    public getAllSurrounding(geographicMapInterface: BasicGeographicMap, layerGeographicMapCellPosition: GeographicMapCellPosition, reusableSurroundingList: BasicArrayList): BasicArrayList{
    //var geographicMapInterface = geographicMapInterface
    //var layerGeographicMapCellPosition = layerGeographicMapCellPosition
    //var reusableSurroundingList = reusableSurroundingList
reusableSurroundingList!.clear();
    

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;
        
        
;
    

    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    

    var row: number= 0
;
    

    var column: number= 0
;
    




                        for (
    var index: number = 0;
        
        
index < 8; index++)
        {
column= layerGeographicMapCellPosition!.getColumn() +surroundArray[index]![0];
    
row= layerGeographicMapCellPosition!.getRow() +surroundArray[index]![1];
    

                        if(tiledLayer!.isOnTileLayer(column, row))
                        
                                    {
                                    
    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getInstance(column, row)!;
        
        
;
    
reusableSurroundingList!.add(geographicMapCellPosition);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return reusableSurroundingList;
    
}


}
                
            

