
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
        



import { Direction } from "../../../../../org/allbinary/direction/Direction.js";

    
import { AllBinaryTiledLayer } from "../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { TrackingEventCircularStaticPool } from "../../../../../org/allbinary/game/tracking/TrackingEventCircularStaticPool.js";

    
import { TrackingEventHandler } from "../../../../../org/allbinary/game/tracking/TrackingEventHandler.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BasicGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { BasicGeographicMapUtil } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapUtil.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    

export class PlayerTopViewCharacterBehavior extends TopViewCharacterBehavior {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

                @Throws(Exception::class)
            
    public terrainEvent(layer: AllBinaryLayer, direction: Direction, x: number, y: number, geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellPosition: GeographicMapCellPosition){
    //var layer = layer
    //var direction = direction
    //var x = x
    //var y = y
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var geographicMapCellPosition = geographicMapCellPosition
fireEvent(TrackingEventCircularStaticPool.getInstance()!.getInstance(layer))
}


    public terrainMove(layer: AllBinaryLayer, geographicMapInterfaceArray: BasicGeographicMap[], x: number, y: number){
    //var layer = layer
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var x = x
    //var y = y

    var basicGeographicMapUtil: BasicGeographicMapUtil = BasicGeographicMapUtil.getInstance()!;
        
        

setPosition(geographicMapInterfaceArray, x, y)
}


    moveIfOnScreen(layer: AllBinaryLayer, ax: number, ay: number){
    //var layer = layer
    //var ax = ax
    //var ay = ay
}


    isTiledLayerMoveable(terrainTiledLayer: AllBinaryTiledLayer, x: number, y: number): boolean{
    //var terrainTiledLayer = terrainTiledLayer
    //var x = x
    //var y = y



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (terrainTiledLayer!.getXP() +DisplayInfoSingleton.getInstance()!.getLastWidth() < terrainTiledLayer!.getWidth() || x < 0) && (terrainTiledLayer!.getXP() > 0 || x > 0);
    
}


}
                
            

