
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
        



import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { AllBinaryLayer } from "../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { BasicGeographicMap } from "../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { SimpleGeographicMapCellPositionFactory } from "../../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js";

    

export class LayerPartialCellPositionsUtil
            extends Object
         {
        

    private static readonly instance: LayerPartialCellPositionsUtil = new LayerPartialCellPositionsUtil();
        
        

    public static getInstance(): LayerPartialCellPositionsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public getAll(geographicMapInterface: BasicGeographicMap, layerInterface: AllBinaryLayer, reusableList: BasicArrayList): BasicArrayList{
var geographicMapInterface = geographicMapInterface
var layerInterface = layerInterface
var reusableList = reusableList
reusableList!.clear();
    

    var topLeftGeographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAtNoThrow(layerInterface!.getXP(), layerInterface!.getYP())!;
        
        
;
    

    var topRightGeographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAtNoThrow(layerInterface!.getXP() +layerInterface!.getWidth(), layerInterface!.getYP())!;
        
        
;
    

    var bottomLeftGeographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAtNoThrow(layerInterface!.getXP(), layerInterface!.getYP() +layerInterface!.getHeight())!;
        
        
;
    

    var bottomRightGeographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAtNoThrow(layerInterface!.getXP() +layerInterface!.getWidth(), layerInterface!.getYP() +layerInterface!.getHeight())!;
        
        
;
    

                        if(topLeftGeographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    reusableList!.add(topLeftGeographicMapCellPosition);
    

                                    }
                                

                        if(topRightGeographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION && topLeftGeographicMapCellPosition != topRightGeographicMapCellPosition)
                        
                                    {
                                    reusableList!.add(topRightGeographicMapCellPosition);
    

                                    }
                                

                        if(bottomLeftGeographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION && !reusableList!.contains(bottomLeftGeographicMapCellPosition);

                        )
                        
                                    {
                                    reusableList!.add(bottomLeftGeographicMapCellPosition);
    

                                    }
                                

                        if(bottomRightGeographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION && !reusableList!.contains(bottomRightGeographicMapCellPosition);

                        )
                        
                                    {
                                    reusableList!.add(bottomRightGeographicMapCellPosition);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return reusableList;
    
}


                //@Throws(Error::class)
            
    public getAll(geographicMapInterface: BasicGeographicMap, layerInterface: AllBinaryLayer, dx: number, dy: number, reusableList: BasicArrayList): BasicArrayList{
var geographicMapInterface = geographicMapInterface
var layerInterface = layerInterface
var dx = dx
var dy = dy
var reusableList = reusableList
reusableList!.clear();
    

    var topLeftGeographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAtNoThrow(layerInterface!.getXP() +dx, layerInterface!.getYP() +dy)!;
        
        
;
    

    var topRightGeographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAtNoThrow(layerInterface!.getXP() +layerInterface!.getWidth() +dx, layerInterface!.getYP() +dy)!;
        
        
;
    

    var bottomLeftGeographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAtNoThrow(layerInterface!.getXP() +dx, layerInterface!.getYP() +layerInterface!.getHeight() +dy)!;
        
        
;
    

    var bottomRightGeographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAtNoThrow(layerInterface!.getXP() +layerInterface!.getWidth() +dx, layerInterface!.getYP() +layerInterface!.getHeight() +dy)!;
        
        
;
    

                        if(topLeftGeographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    reusableList!.add(topLeftGeographicMapCellPosition);
    

                                    }
                                

                        if(topRightGeographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION && topLeftGeographicMapCellPosition != topRightGeographicMapCellPosition)
                        
                                    {
                                    reusableList!.add(topRightGeographicMapCellPosition);
    

                                    }
                                

                        if(bottomLeftGeographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION && !reusableList!.contains(bottomLeftGeographicMapCellPosition);

                        )
                        
                                    {
                                    reusableList!.add(bottomLeftGeographicMapCellPosition);
    

                                    }
                                

                        if(bottomRightGeographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION && !reusableList!.contains(bottomRightGeographicMapCellPosition);

                        )
                        
                                    {
                                    reusableList!.add(bottomRightGeographicMapCellPosition);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return reusableList;
    
}


}
                
            

