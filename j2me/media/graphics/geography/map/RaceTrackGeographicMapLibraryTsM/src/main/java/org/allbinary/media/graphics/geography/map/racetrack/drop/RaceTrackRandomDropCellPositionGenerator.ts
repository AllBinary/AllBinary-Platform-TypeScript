
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
        



import { PickedUpLayerInterfaceFactoryInterface } from "../../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js";

    
import { AllBinaryGameLayerManager } from "../../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { AllBinaryTiledLayer } from "../../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { DropLayerFactory } from "../../../../../../../../org/allbinary/game/layer/drop/DropLayerFactory.js";

    
import { PickupLayerCircularStaticPool } from "../../../../../../../../org/allbinary/game/layer/pickup/PickupLayerCircularStaticPool.js";

    
import { RaceTrackPickupLayer } from "../../../../../../../../org/allbinary/game/layer/pickup/RaceTrackPickupLayer.js";

    
import { MyRandomFactory } from "../../../../../../../../org/allbinary/game/rand/MyRandomFactory.js";

    
import { GPoint } from "../../../../../../../../org/allbinary/graphics/GPoint.js";

    
import { AllBinaryLayerManager } from "../../../../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { BasicGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { RaceTrackDropCellPositionGenerator } from "./RaceTrackDropCellPositionGenerator.js";

export class RaceTrackRandomDropCellPositionGenerator extends RaceTrackDropCellPositionGenerator {
        

    private SINGLETON: RaceTrackRandomDropCellPositionGenerator = new RaceTrackRandomDropCellPositionGenerator();
        
        

    public static getInstance(): RaceTrackRandomDropCellPositionGenerator{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    private readonly myRandomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;
        
        

    private readonly cellsPerRowOrColumn: number = 3;
        
        

    private readonly totalCells: number = cellsPerRowOrColumn *cellsPerRowOrColumn;
        
        

    private readonly rowArray: number[] = intArrayOf(0,1,2,0,1,2,0,1,2);
        
        

    private readonly columnArray: number[] = intArrayOf(0,0,0,1,1,1,2,2,2);
        
        

    private cellWidth: number= 0

    private cellHeight: number= 0
private constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public update(allBinaryGameLayerManager: AllBinaryGameLayerManager, geographicMapInterface: BasicGeographicMap){
var allBinaryGameLayerManager = allBinaryGameLayerManager
var geographicMapInterface = geographicMapInterface
super.update(allBinaryGameLayerManager, geographicMapInterface);
    

    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    
this.cellWidth= tiledLayer!.getCellWidth() /this.cellsPerRowOrColumn;
    
this.cellHeight= tiledLayer!.getCellHeight() /this.cellsPerRowOrColumn;
    
}


                //@Throws(Error::class)
            
    drop(allBinaryLayerManager: AllBinaryLayerManager, index: number){
var allBinaryLayerManager = allBinaryLayerManager
var index = index

    var geographicMapCellPosition: GeographicMapCellPosition = this.list.get(index);

                         as GeographicMapCellPosition;
        
        
;
    

    var point: GPoint = geographicMapCellPosition!.getPoint()!;
        
        
;
    

    var randomCell: number = this.myRandomFactory!.getAbsoluteNextInt(this.totalCells)!;
        
        
;
    

    var row: number = this.rowArray[randomCell]!;
        
        
;
    

    var column: number = this.columnArray[randomCell]!;
        
        
;
    

    var x: number = point.getX() +(row *this.cellWidth);
        
        
;
    

    var y: number = point.getY() +(column *this.cellHeight);
        
        
;
    

    var pickedUpLayerInterfaceFactory: PickedUpLayerInterfaceFactoryInterface = DropLayerFactory.getInstance()!.getRandomInstance()!;
        
        
;
    

    var tiledLayer: AllBinaryTiledLayer = this.raceTrackGeographicMap!.getAllBinaryTiledLayer()!;
        
        
;
    

    var pickupLayer: RaceTrackPickupLayer = PickupLayerCircularStaticPool.getInstance()!.getInstance(pickedUpLayerInterfaceFactory, x, y, tiledLayer!.getZP() +3);

                         as RaceTrackPickupLayer;
        
        
;
    
pickupLayer!.setTiledLayer(tiledLayer);
    
allBinaryLayerManager!.append(pickupLayer);
    
}


}
                
            

