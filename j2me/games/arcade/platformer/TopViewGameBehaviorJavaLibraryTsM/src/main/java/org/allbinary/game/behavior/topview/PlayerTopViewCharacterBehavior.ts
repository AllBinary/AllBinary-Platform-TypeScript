
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
      const Direction = globalThis.org.allbinary.direction.Direction;

      
//not game specific package import { AllBinaryTiledLayer } from '../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { TrackingEventCircularStaticPool } from '../../../../../org/allbinary/game/tracking/TrackingEventCircularStaticPool.js';
      const TrackingEventCircularStaticPool = globalThis.org.allbinary.game.tracking.TrackingEventCircularStaticPool;

      
//not game specific package import { TrackingEventHandler } from '../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
      const TrackingEventHandler = globalThis.org.allbinary.game.tracking.TrackingEventHandler;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { BasicGeographicMapUtil } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapUtil.js';
      const BasicGeographicMapUtil = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapUtil;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TopViewCharacterBehavior } from './TopViewCharacterBehavior.js';

export class PlayerTopViewCharacterBehavior extends TopViewCharacterBehavior {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public terrainEvent(layer: AllBinaryLayer, direction: Direction, x: number, y: number, geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellPosition: GeographicMapCellPosition){
TrackingEventHandler.getInstance()!.fireEvent(TrackingEventCircularStaticPool.getInstance()!.getNextInstance(layer));
    
}


    public terrainMove(layer: AllBinaryLayer, geographicMapInterfaceArray: BasicGeographicMap[], x: number, y: number){

    var basicGeographicMapUtil: BasicGeographicMapUtil = BasicGeographicMapUtil.getInstance()!;;
    
basicGeographicMapUtil!.setPosition(geographicMapInterfaceArray, x, y);
    
}


    moveIfOnScreen(layer: AllBinaryLayer, ax: number, ay: number){
}


    isTiledLayerMoveable(terrainTiledLayer: AllBinaryTiledLayer, x: number, y: number): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (terrainTiledLayer!.getXP() +DisplayInfoSingleton.getInstance()!.getLastWidth() < terrainTiledLayer!.getWidth() || x < 0) && (terrainTiledLayer!.getXP() > 0 || x > 0);
    
}


}



