
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
        



import { BasicArrayList } from "../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { AllBinaryGameLayerManager } from "../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { AllBinaryTiledLayer } from "../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { MyRandomFactory } from "../../../../../../../org/allbinary/game/rand/MyRandomFactory.js";

    
import { AllBinaryLayerManager } from "../../../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { NullUtil } from "../../../../../../../org/allbinary/logic/NullUtil.js";

    
import { BasicGeographicMapCellPositionFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js";

    
import { GeographicMapCellPosition } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { BasicGeographicMap } from "../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    

export class AnyRandomDropCellPositionGenerator extends BaseDropCellPositionGenerator {
        

    readonly list: BasicArrayList = new BasicArrayList();
        
        

    geographicMapInterface: any = {} = NullUtil.getInstance()!.NULL_OBJECT;
        
        

                //@Throws(Error::class)
            
    public update(allBinaryGameLayerManager: AllBinaryGameLayerManager, geographicMapInterface: BasicGeographicMap){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
    //var geographicMapInterface = geographicMapInterface
this.geographicMapInterface= geographicMapInterface;
    

    var basicGeographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;
        
        
;
    

    var randomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;
        
        
;
    

    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    

    var total: number = tiledLayer!.getColumns() *tiledLayer!.getRows();
        
        
;
    

    var randomColumn: number= 0
;
    

    var randomRow: number= 0
;
    

    var geographicMapCellPosition: GeographicMapCellPosition
;
    




                        for (
    var index: number = total;
        
        
--index >= 0; )
        {
randomColumn= randomFactory!.getAbsoluteNextInt(tiledLayer!.getColumns());
    
randomRow= randomFactory!.getAbsoluteNextInt(tiledLayer!.getRows());
    
geographicMapCellPosition= basicGeographicMapCellPositionFactory!.getInstance(randomColumn, randomRow);
    

                        if(this.isDropAllowedAt(geographicMapCellPosition))
                        
                                    {
                                    this.list.add(geographicMapCellPosition);
    

                                    }
                                
}

}


                //@Throws(Error::class)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager
}


}
                
            

