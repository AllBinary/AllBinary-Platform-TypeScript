
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { SteeringVisitor } from "../../../../../org/allbinary/game/layer/SteeringVisitor.js";

    
import { AdvancedRTSGameLayer } from "../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js";

    
import { CollidableCompositeLayer } from "../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js";

    
import { CollidableRTSBehavior } from "../../../../../org/allbinary/game/layer/CollidableRTSBehavior.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { GameKeyEventFactory } from "../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js";

    
import { AllBinaryTiledLayer } from "../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { TiledLayerUtil } from "../../../../../org/allbinary/game/layer/TiledLayerUtil.js";

    
import { LayerPartialCellPositionsUtil } from "../../../../../org/allbinary/game/layer/geographic/map/LayerPartialCellPositionsUtil.js";

    
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { BooleanFactory } from "../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { AngleInfo } from "../../../../../org/allbinary/math/AngleInfo.js";

    
import { BasicGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCompositeInterface } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    
import { DropCellPositionHistory } from "../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js";

    

export class CollidableUnitBehavior extends CollidableRTSBehavior {
        

    private readonly layerPartialCellPositionsUtil: LayerPartialCellPositionsUtil = LayerPartialCellPositionsUtil.getInstance()!;
        
        
public constructor (ownerLayer: CollidableCompositeLayer, collidable: boolean)                        

                            : super(ownerLayer, collidable){

            super();
                //var ownerLayer = ownerLayer
    //var collidable = collidable


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    collideNone(collidableInterfaceCompositeInterface: CollidableCompositeLayer){
    //var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface
this.chase(collidableInterfaceCompositeInterface);
    

    var rtsLayer: AdvancedRTSGameLayer = collidableInterfaceCompositeInterface as AdvancedRTSGameLayer;
        
        
;
    

                        if(rtsLayer!.getType() == UnitLayer.getStaticType())
                        
                                    {
                                    this.collideUnit(rtsLayer as UnitLayer);
    

                                    }
                                
}


export inner class SimpleSteeringVisitor extends SteeringVisitor {
        

    public visit(anyType: any = {}): any = {}{
    //var anyType = anyType

        try {
            
                        if(this.getList()!.size() > 0)
                        
                                    {
                                    
    var allbinaryLayer: CollidableCompositeLayer = this.getList()!.get(0);

                         as CollidableCompositeLayer;
        
        
;
    

    var clear: boolean = this@CollidableUnitBehavior.steer(allbinaryLayer)!;
        
        
;
    

                        if(clear)
                        
                                    {
                                    this.getList()!.clear();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanFactory.getInstance()!.TRUE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "visit", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}

}


}
                
            
    private readonly simpleSteeringVisitor: SimpleSteeringVisitor = new SimpleSteeringVisitor();
        
        

                //@Throws(Error::class)
            
    steer(collidableInterfaceCompositeInterface: CollidableCompositeLayer): boolean{
    //var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface

    var ownerUnitLayer: UnitLayer = this.ownerLayer as UnitLayer;
        
        
;
    

    var unitLayer: UnitLayer = collidableInterfaceCompositeInterface as UnitLayer;
        
        
;
    

    var angleInfo2: AngleInfo = unitLayer!.getRotationAnimationInterface()!.getAngleInfoP()!;
        
        
;
    

    var angleInfo: AngleInfo = ownerUnitLayer!.getRotationAnimationInterface()!.getAngleInfoP()!;
        
        
;
    

    var angle: number = angleInfo!.getAngle() -angleInfo2!.getAngle();
        
        
;
    

                        if(angle < 90 || angle > 270)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                             else 
                        if(angle >= 90 || angle <= 270)
                        
                                    {
                                    ownerUnitLayer!.getGameKeyEventList()!.add(GameKeyEventFactory.getInstance()!.getInstance(ownerUnitLayer, Canvas.RIGHT));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                            throw Error("Error")
}


                //@Throws(Error::class)
            
    chase(collidableInterfaceCompositeInterface: CollidableCompositeLayer){
    //var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface

    var rtsLayer: AdvancedRTSGameLayer = collidableInterfaceCompositeInterface as AdvancedRTSGameLayer;
        
        
;
    

                        if(rtsLayer!.getType() == UnitLayer.getStaticType())
                        
                                    {
                                    
                        if(!this.simpleSteeringVisitor!.getList()!.contains(collidableInterfaceCompositeInterface);

                        )
                        
                                    {
                                    this.simpleSteeringVisitor!.getList()!.add(collidableInterfaceCompositeInterface);
    

                                    }
                                

    var ownerUnitLayer: UnitLayer = this.ownerLayer as UnitLayer;
        
        
;
    

    var list: BasicArrayList = ownerUnitLayer!.getUnitWaypointBehavior()!.getSteeringVisitorList()!;
        
        
;
    

                        if(!list.contains(this.simpleSteeringVisitor);

                        )
                        
                                    {
                                    list.add(this.simpleSteeringVisitor);
    

                                    }
                                

                                    }
                                
}


                //@Throws(Error::class)
            
    collideUnit(unitLayer: UnitLayer){
    //var unitLayer = unitLayer

    var ownerUnitLayer: UnitLayer = this.ownerLayer as UnitLayer;
        
        
;
    

    var partialPositionList: BasicArrayList = UnitLayer.getPartialpositionlist()!;
        
        
;
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = ownerUnitLayer!.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;
        
        
;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        
;
    

    var basicGeographicMap: BasicGeographicMap = geographicMapInterface;
        
        
;
    

    var dropCellPositionHistory: DropCellPositionHistory = DropCellPositionHistory.getInstance()!;
        
        
;
    

    var tiledLayerUtil: TiledLayerUtil = TiledLayerUtil.getInstance()!;
        
        
;
    

    var tiledLayer: AllBinaryTiledLayer = basicGeographicMap!.getAllBinaryTiledLayer()!;
        
        
;
    

                        if(this.ownerLayer!.getXP() < unitLayer!.getXP() && this.ownerLayer!.getX2() > unitLayer!.getXP())
                        
                                    {
                                    
    var diff: number = this.ownerLayer!.getWidth() +1;
        
        
;
    
this.layerPartialCellPositionsUtil!.getAll(basicGeographicMap, this.ownerLayer,  -diff, 0, partialPositionList);
    

                        if(!dropCellPositionHistory!.anyCellPositionWithDrop(partialPositionList);

                        )
                        
                                    {
                                    
    var x: number = unitLayer!.getXP() -diff;
        
        
;
    

    var y: number = this.ownerLayer!.getYP()!;
        
        
;
    
x= tiledLayerUtil!.keepOnMapX(tiledLayer, x, this.ownerLayer!.getWidth());
    
y= tiledLayerUtil!.keepOnMapY(tiledLayer, y, this.ownerLayer!.getHeight());
    
this.ownerLayer!.setPosition(x, y, this.ownerLayer!.getZP());
    

                                    }
                                
this.layerPartialCellPositionsUtil!.getAll(basicGeographicMap, unitLayer, diff, 0, partialPositionList);
    

                        if(!dropCellPositionHistory!.anyCellPositionWithDrop(partialPositionList);

                        )
                        
                                    {
                                    
    var x: number = unitLayer!.getXP() +diff;
        
        
;
    

    var y: number = unitLayer!.getYP()!;
        
        
;
    
x= tiledLayerUtil!.keepOnMapX(tiledLayer, x, unitLayer!.getWidth());
    
y= tiledLayerUtil!.keepOnMapY(tiledLayer, y, unitLayer!.getHeight());
    
unitLayer!.setPosition(x, y, unitLayer!.getZP());
    

                                    }
                                

                                    }
                                

                        if(this.ownerLayer!.getYP() < unitLayer!.getYP() && this.ownerLayer!.getY2() > unitLayer!.getYP())
                        
                                    {
                                    
    var diff: number = this.ownerLayer!.getHeight() +1;
        
        
;
    
this.layerPartialCellPositionsUtil!.getAll(basicGeographicMap, this.ownerLayer, 0,  -diff, partialPositionList);
    

                        if(!dropCellPositionHistory!.anyCellPositionWithDrop(partialPositionList);

                        )
                        
                                    {
                                    
    var x: number = this.ownerLayer!.getXP()!;
        
        
;
    

    var y: number = unitLayer!.getYP() -diff;
        
        
;
    
x= tiledLayerUtil!.keepOnMapX(tiledLayer, x, this.ownerLayer!.getWidth());
    
y= tiledLayerUtil!.keepOnMapY(tiledLayer, y, this.ownerLayer!.getHeight());
    
this.ownerLayer!.setPosition(x, y, this.ownerLayer!.getZP());
    

                                    }
                                
this.layerPartialCellPositionsUtil!.getAll(basicGeographicMap, unitLayer, 0, diff, partialPositionList);
    

                        if(!dropCellPositionHistory!.anyCellPositionWithDrop(partialPositionList);

                        )
                        
                                    {
                                    
    var x: number = unitLayer!.getXP()!;
        
        
;
    

    var y: number = unitLayer!.getYP() +diff;
        
        
;
    
x= tiledLayerUtil!.keepOnMapX(tiledLayer, x, unitLayer!.getWidth());
    
y= tiledLayerUtil!.keepOnMapY(tiledLayer, y, unitLayer!.getHeight());
    
unitLayer!.setPosition(x, y, unitLayer!.getZP());
    

                                    }
                                

                                    }
                                
}


}
                
            

