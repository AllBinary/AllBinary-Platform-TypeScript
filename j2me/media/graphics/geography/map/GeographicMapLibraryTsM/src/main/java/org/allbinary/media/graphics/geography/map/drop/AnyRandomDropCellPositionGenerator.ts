
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
        



            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { AllBinaryGameLayerManager } from '../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { AllBinaryTiledLayer } from '../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      //not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not plain js import { MyRandomFactory } from '../../../../../../../org/allbinary/game/rand/MyRandomFactory.js';
      const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;

      
import { AllBinaryLayerManager } from '../../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not plain js import { NullUtil } from '../../../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
import { BasicGeographicMapCellPositionFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
      //not GWT import const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
import { GeographicMapCellPosition } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { BasicGeographicMap } from '../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      //not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseDropCellPositionGenerator } from './BaseDropCellPositionGenerator.js';

export class AnyRandomDropCellPositionGenerator extends BaseDropCellPositionGenerator {
        

    readonly list: BasicArrayList = new BasicArrayListD();

    geographicMapInterface: any = NullUtil.getInstance()!.NULL_OBJECT;

                //@Throws(Exception.constructor)
            
    public update(allBinaryGameLayerManager: AllBinaryGameLayerManager, geographicMapInterface: BasicGeographicMap){
this.geographicMapInterface= geographicMapInterface;
    

    var basicGeographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    var randomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;;
    

    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    var total: number = tiledLayer!.getColumns() *tiledLayer!.getRows();;
    

    var randomColumn: number= 0;;
    

    var randomRow: number= 0;;
    

    var geographicMapCellPosition: GeographicMapCellPosition;;
    




                        for (
    var index: number = total;--index >= 0; )
        {
randomColumn= randomFactory!.getAbsoluteNextInt(tiledLayer!.getColumns());
    
randomRow= randomFactory!.getAbsoluteNextInt(tiledLayer!.getRows());
    
geographicMapCellPosition= basicGeographicMapCellPositionFactory!.getAt(randomColumn, randomRow);
    

                        if(this.isDropAllowedAt(geographicMapCellPosition))
                        
                                    {
                                    this.list.add(geographicMapCellPosition);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
}


}



