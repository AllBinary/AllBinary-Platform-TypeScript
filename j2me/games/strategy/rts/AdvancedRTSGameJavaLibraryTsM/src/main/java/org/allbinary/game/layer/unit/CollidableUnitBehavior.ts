
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas

import { SteeringVisitor } from '../../../../../org/allbinary/game/layer/SteeringVisitor.js';
//not GWT import const SteeringVisitor

import { AdvancedRTSGameLayer } from '../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js';
//not GWT import const AdvancedRTSGameLayer

import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
//not GWT import const CollidableCompositeLayer

import { CollidableRTSBehavior } from '../../../../../org/allbinary/game/layer/CollidableRTSBehavior.js';
//not GWT import const CollidableRTSBehavior

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
//not GWT import const GameKeyEventFactory

import { AllBinaryTiledLayer } from '../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
//not GWT import const AllBinaryTiledLayer

import { TiledLayerUtil } from '../../../../../org/allbinary/game/layer/TiledLayerUtil.js';
//not GWT import const TiledLayerUtil

import { LayerPartialCellPositionsUtil } from '../../../../../org/allbinary/game/layer/geographic/map/LayerPartialCellPositionsUtil.js';
//not GWT import const LayerPartialCellPositionsUtil

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory

import { AngleInfo } from '../../../../../org/allbinary/math/AngleInfo.js';
//not GWT import const AngleInfo

import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap

import { GeographicMapCompositeInterface } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
//not GWT import const GeographicMapCompositeInterface

import { DropCellPositionHistory } from '../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
//not GWT import const DropCellPositionHistory

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UnitLayer } from './UnitLayer.js';
//not GWT import - same folder const UnitLayer
//import { SimpleSteeringVisitor } from './SimpleSteeringVisitor.js';
//not GWT import - same folder const SimpleSteeringVisitor
type SimpleSteeringVisitor = InstanceType<CollidableUnitBehavior['SimpleSteeringVisitor']>;

export class CollidableUnitBehavior extends CollidableRTSBehavior {
        

//inner= member=true isStatic=
SimpleSteeringVisitor = (() => { const outer$CollidableUnitBehavior = this; return class extends SteeringVisitor {
        

    public visit(anyType: any): any{

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

 try { 
    let ownerLayer: CollidableCompositeLayer = anyType as CollidableCompositeLayer;;
    

                        if(this.getList()!.size() > 0)
                        
                                    {
                                    
    let allbinaryLayer: CollidableCompositeLayer = this.getList()!.get(0) as CollidableCompositeLayer;;
    

    let clear: boolean = outer$CollidableUnitBehavior.steer(ownerLayer, allbinaryLayer)!;;
    

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
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, this, "visit", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    

 }
   }
 
}


}; })();
    private readonly layerPartialCellPositionsUtil: LayerPartialCellPositionsUtil = LayerPartialCellPositionsUtil.getInstance()!;

public constructor (collidable: boolean){
            super(collidable);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    collideNone(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer){
this.chase(ownerLayer, collidableInterfaceCompositeInterface);
    

    let rtsLayer: AdvancedRTSGameLayer = collidableInterfaceCompositeInterface as AdvancedRTSGameLayer;;
    

                        if(rtsLayer!.getType() == UnitLayer.getStaticType())
                        
                                    {
                                    this.collideUnit(ownerLayer, rtsLayer as UnitLayer);
    

                                    }
                                
}


    private readonly simpleSteeringVisitor = new this.SimpleSteeringVisitor();

                //@Throws(Exception.constructor)
            
    steer(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer): boolean{

    let ownerUnitLayer: UnitLayer = ownerLayer as UnitLayer;;
    

    let unitLayer: UnitLayer = collidableInterfaceCompositeInterface as UnitLayer;;
    

    let angleInfo2: AngleInfo = unitLayer!.getRotationAnimationInterface()!.getAngleInfoP()!;;
    

    let angleInfo: AngleInfo = ownerUnitLayer!.getRotationAnimationInterface()!.getAngleInfoP()!;;
    

    let angle: number = angleInfo!.getAngle() -angleInfo2!.getAngle();;
    

                        if(angle < 90 || angle > 270)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                             else 
                        if(angle >= 90 || angle <= 270)
                        
                                    {
                                    ownerUnitLayer!.getGameKeyEventList()!.add(GameKeyEventFactory.getInstance()!.getInstanceForKey(ownerUnitLayer, Canvas.RIGHT));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                            throw new Exception("Error");
                    
}


                //@Throws(Exception.constructor)
            
    chase(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer){

    let rtsLayer: AdvancedRTSGameLayer = collidableInterfaceCompositeInterface as AdvancedRTSGameLayer;;
    

                        if(rtsLayer!.getType() == UnitLayer.getStaticType())
                        
                                    {
                                    
                        if(!this.simpleSteeringVisitor!.getList()!.contains(collidableInterfaceCompositeInterface))
                        
                                    {
                                    this.simpleSteeringVisitor!.getList()!.add(collidableInterfaceCompositeInterface);
    

                                    }
                                

    let ownerUnitLayer: UnitLayer = ownerLayer as UnitLayer;;
    

    let list: BasicArrayList = ownerUnitLayer!.getUnitWaypointBehavior()!.getSteeringVisitorList()!;;
    

                        if(!list.contains(this.simpleSteeringVisitor))
                        
                                    {
                                    list.add(this.simpleSteeringVisitor);
    

                                    }
                                

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    collideUnit(ownerLayer: CollidableCompositeLayer, unitLayer: UnitLayer){

    let ownerUnitLayer: UnitLayer = ownerLayer as UnitLayer;;
    

    let partialPositionList: BasicArrayList = UnitLayer.getPartialpositionlist()!;;
    

    let geographicMapCompositeInterface: GeographicMapCompositeInterface = ownerUnitLayer!.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;;
    

    let geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

    let basicGeographicMap: BasicGeographicMap = geographicMapInterface;;
    

    let dropCellPositionHistory: DropCellPositionHistory = DropCellPositionHistory.getInstance()!;;
    

    let tiledLayerUtil: TiledLayerUtil = TiledLayerUtil.getInstance()!;;
    

    let tiledLayer: AllBinaryTiledLayer = basicGeographicMap!.getAllBinaryTiledLayer()!;;
    

                        if(ownerLayer!.getXP() < unitLayer!.getXP() && ownerLayer!.getX2() > unitLayer!.getXP())
                        
                                    {
                                    
    let diff: number = ownerLayer!.getWidth() +1;;
    
this.layerPartialCellPositionsUtil!.getAllDXY(basicGeographicMap, ownerLayer,  -diff, 0, partialPositionList);
    

                        if(!dropCellPositionHistory!.anyCellPositionWithDrop(partialPositionList))
                        
                                    {
                                    
    let x: number = unitLayer!.getXP() -diff;;
    

    let y: number = ownerLayer!.getYP()!;;
    
x= tiledLayerUtil!.keepOnMapX(tiledLayer, x, ownerLayer!.getWidth());
    
y= tiledLayerUtil!.keepOnMapY(tiledLayer, y, ownerLayer!.getHeight());
    
ownerLayer!.setPosition(x, y, ownerLayer!.getZP());
    

                                    }
                                
this.layerPartialCellPositionsUtil!.getAllDXY(basicGeographicMap, unitLayer, diff, 0, partialPositionList);
    

                        if(!dropCellPositionHistory!.anyCellPositionWithDrop(partialPositionList))
                        
                                    {
                                    
    let x: number = unitLayer!.getXP() +diff;;
    

    let y: number = unitLayer!.getYP()!;;
    
x= tiledLayerUtil!.keepOnMapX(tiledLayer, x, unitLayer!.getWidth());
    
y= tiledLayerUtil!.keepOnMapY(tiledLayer, y, unitLayer!.getHeight());
    
unitLayer!.setPosition(x, y, unitLayer!.getZP());
    

                                    }
                                

                                    }
                                

                        if(ownerLayer!.getYP() < unitLayer!.getYP() && ownerLayer!.getY2() > unitLayer!.getYP())
                        
                                    {
                                    
    let diff: number = ownerLayer!.getHeight() +1;;
    
this.layerPartialCellPositionsUtil!.getAllDXY(basicGeographicMap, ownerLayer, 0,  -diff, partialPositionList);
    

                        if(!dropCellPositionHistory!.anyCellPositionWithDrop(partialPositionList))
                        
                                    {
                                    
    let x: number = ownerLayer!.getXP()!;;
    

    let y: number = unitLayer!.getYP() -diff;;
    
x= tiledLayerUtil!.keepOnMapX(tiledLayer, x, ownerLayer!.getWidth());
    
y= tiledLayerUtil!.keepOnMapY(tiledLayer, y, ownerLayer!.getHeight());
    
ownerLayer!.setPosition(x, y, ownerLayer!.getZP());
    

                                    }
                                
this.layerPartialCellPositionsUtil!.getAllDXY(basicGeographicMap, unitLayer, 0, diff, partialPositionList);
    

                        if(!dropCellPositionHistory!.anyCellPositionWithDrop(partialPositionList))
                        
                                    {
                                    
    let x: number = unitLayer!.getXP()!;;
    

    let y: number = unitLayer!.getYP() +diff;;
    
x= tiledLayerUtil!.keepOnMapX(tiledLayer, x, unitLayer!.getWidth());
    
y= tiledLayerUtil!.keepOnMapY(tiledLayer, y, unitLayer!.getHeight());
    
unitLayer!.setPosition(x, y, unitLayer!.getZP());
    

                                    }
                                

                                    }
                                
}


}

