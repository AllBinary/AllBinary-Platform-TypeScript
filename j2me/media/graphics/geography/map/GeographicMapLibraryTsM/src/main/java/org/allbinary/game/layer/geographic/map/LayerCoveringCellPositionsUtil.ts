
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
        
import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { BasicGeographicMap } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      
import { CellPositionsUtil } from '../../../../../../org/allbinary/media/graphics/geography/map/CellPositionsUtil.js';
      
import { GeographicMapCellPosition } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LayerCoveringCellPositionsUtil
            extends Object
         {
        

    private static readonly instance: LayerCoveringCellPositionsUtil = new LayerCoveringCellPositionsUtil();

    public static getInstance(): LayerCoveringCellPositionsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LayerCoveringCellPositionsUtil.instance;
    
}


    private readonly cellPositionsUtil: CellPositionsUtil = CellPositionsUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getAllXY(geographicMapInterface: BasicGeographicMap, layerInterface: AllBinaryLayer, x: number, y: number, reusableList: BasicArrayList): BasicArrayList{

    var topLeftGeographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAtXY(x, y)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getAll(geographicMapInterface, topLeftGeographicMapCellPosition, layerInterface, reusableList);;
    
}


                //@Throws(Exception.constructor)
            
    public getAll(geographicMapInterface: BasicGeographicMap, topLeftGeographicMapCellPosition: GeographicMapCellPosition, layerInterface: AllBinaryLayer, reusableList: BasicArrayList): BasicArrayList{
reusableList!.clear();
    

    var columns: number = layerInterface!.getWidth() /geographicMapInterface!.getAllBinaryTiledLayer()!.getCellWidth();;
    

    var rows: number = layerInterface!.getHeight() /geographicMapInterface!.getAllBinaryTiledLayer()!.getCellHeight();;
    

                        if(columns == 0)
                        columns= 1

                        if(rows == 0)
                        rows= 1



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cellPositionsUtil!.getAll(geographicMapInterface, topLeftGeographicMapCellPosition, columns, rows, reusableList);;
    
}


}
                
            

