
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

        


            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { PickedUpLayerInterfaceFactoryInterface } from '../../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js';
//not GWT import const PickedUpLayerInterfaceFactoryInterface = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface;

      
import { AllBinaryGameLayerManager } from '../../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { AllBinaryTiledLayer } from '../../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
//not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
import { DropLayerFactory } from '../../../../../../../../org/allbinary/game/layer/drop/DropLayerFactory.js';
//not GWT import const DropLayerFactory = globalThis.org.allbinary.game.layer.drop.DropLayerFactory;

      
import { PickupLayerCircularStaticPool } from '../../../../../../../../org/allbinary/game/layer/pickup/PickupLayerCircularStaticPool.js';
//not GWT import const PickupLayerCircularStaticPool = globalThis.org.allbinary.game.layer.pickup.PickupLayerCircularStaticPool;

      
import { RaceTrackPickupLayer } from '../../../../../../../../org/allbinary/game/layer/pickup/RaceTrackPickupLayer.js';
//not GWT import const RaceTrackPickupLayer = globalThis.org.allbinary.game.layer.pickup.RaceTrackPickupLayer;

      
//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;

      
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
import { AllBinaryLayerManager } from '../../../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { GeographicMapCellPosition } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RaceTrackDropCellPositionGenerator } from './RaceTrackDropCellPositionGenerator.js';
//not GWT import - same folder const RaceTrackDropCellPositionGenerator = globalThis.org.allbinary.media.graphics.geography.map.racetrack.drop.RaceTrackDropCellPositionGenerator;

                
export class RaceTrackRandomDropCellPositionGenerator extends RaceTrackDropCellPositionGenerator {
        

    private static SINGLETON: RaceTrackRandomDropCellPositionGenerator = new RaceTrackRandomDropCellPositionGenerator();

    public static getInstance(): RaceTrackRandomDropCellPositionGenerator{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RaceTrackRandomDropCellPositionGenerator.SINGLETON;
    
}


    private readonly myRandomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;

    private readonly cellsPerRowOrColumn: number = 3;

    private readonly totalCells: number = this.cellsPerRowOrColumn *this.cellsPerRowOrColumn;

    private readonly rowArray: number[] = [0,1,2,0,1,2,0,1,2];

    private readonly columnArray: number[] = [0,0,0,1,1,1,2,2,2];

    private cellWidth: number= 0;

    private cellHeight: number= 0;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public update(allBinaryGameLayerManager: AllBinaryGameLayerManager, geographicMapInterface: BasicGeographicMap){
super.update(allBinaryGameLayerManager, geographicMapInterface);
    

    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    
this.cellWidth= tiledLayer!.getCellWidth() /this.cellsPerRowOrColumn;
    
this.cellHeight= tiledLayer!.getCellHeight() /this.cellsPerRowOrColumn;
    
}


                //@Throws(Exception.constructor)
            
    drop(allBinaryLayerManager: AllBinaryLayerManager, index: number){

    var geographicMapCellPosition: GeographicMapCellPosition = this.list.get(index) as GeographicMapCellPosition;;
    

    var point: GPoint = geographicMapCellPosition!.getPoint()!;;
    

    var randomCell: number = this.myRandomFactory!.getAbsoluteNextInt(this.totalCells)!;;
    

    var row: number = this.rowArray[randomCell]!;;
    

    var column: number = this.columnArray[randomCell]!;;
    

    var x: number = point.getX() +(row *this.cellWidth);;
    

    var y: number = point.getY() +(column *this.cellHeight);;
    

    var pickedUpLayerInterfaceFactory: PickedUpLayerInterfaceFactoryInterface = DropLayerFactory.getInstance()!.getRandomInstance()!;;
    

    var tiledLayer: AllBinaryTiledLayer = this.raceTrackGeographicMap!.getAllBinaryTiledLayer()!;;
    

    var pickupLayer: RaceTrackPickupLayer = PickupLayerCircularStaticPool.getInstance()!.getInstanceXYZ(pickedUpLayerInterfaceFactory, x, y, tiledLayer!.getZP() +3) as RaceTrackPickupLayer;;
    
pickupLayer!.setTiledLayer(tiledLayer);
    
allBinaryLayerManager!.append(pickupLayer);
    
}


}



