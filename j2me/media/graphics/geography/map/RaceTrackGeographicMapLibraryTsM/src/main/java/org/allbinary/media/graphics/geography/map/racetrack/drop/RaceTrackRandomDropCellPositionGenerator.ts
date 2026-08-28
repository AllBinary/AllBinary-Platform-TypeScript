
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
        
//not game specific package import { PickedUpLayerInterfaceFactoryInterface } from '../../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js';
      const PickedUpLayerInterfaceFactoryInterface = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { AllBinaryTiledLayer } from '../../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { DropLayerFactory } from '../../../../../../../../org/allbinary/game/layer/drop/DropLayerFactory.js';
      const DropLayerFactory = globalThis.org.allbinary.game.layer.drop.DropLayerFactory;

      
//not game specific package import { PickupLayerCircularStaticPool } from '../../../../../../../../org/allbinary/game/layer/pickup/PickupLayerCircularStaticPool.js';
      const PickupLayerCircularStaticPool = globalThis.org.allbinary.game.layer.pickup.PickupLayerCircularStaticPool;

      
//not game specific package import { RaceTrackPickupLayer } from '../../../../../../../../org/allbinary/game/layer/pickup/RaceTrackPickupLayer.js';
      const RaceTrackPickupLayer = globalThis.org.allbinary.game.layer.pickup.RaceTrackPickupLayer;

      
//not game specific package import { MyRandomFactory } from '../../../../../../../../org/allbinary/game/rand/MyRandomFactory.js';
      const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;

      
//not game specific package import { GPoint } from '../../../../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RaceTrackDropCellPositionGenerator } from './RaceTrackDropCellPositionGenerator.js';

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



