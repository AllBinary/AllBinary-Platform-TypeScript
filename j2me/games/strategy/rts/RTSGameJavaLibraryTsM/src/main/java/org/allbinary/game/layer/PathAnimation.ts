
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { Animation } from '../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation

import { GPoint } from '../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory

import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { BasicGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap

import { GeographicMapCellHistory } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
//not GWT import const GeographicMapCellHistory

import { GeographicMapCellPosition } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition

import { GeographicMapCompositeInterface } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
//not GWT import const GeographicMapCompositeInterface

import { SimpleGeographicMapCellPositionFactory } from '../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LinePathAnimation } from './LinePathAnimation.js';
//sameFolderImports - not GWT import - same folder const LinePathAnimation
import { PathFindingLayerInterface } from './PathFindingLayerInterface.js';
//sameFolderImports - not GWT import - same folder const PathFindingLayerInterface
import { AllBinaryGameLayerManager } from './AllBinaryGameLayerManager.js';
//sameFolderImports - not GWT import - same folder const AllBinaryGameLayerManager
import { WaypointBehaviorBase } from './WaypointBehaviorBase.js';
//sameFolderImports - not GWT import - same folder const WaypointBehaviorBase
import { AllBinaryTiledLayer } from './AllBinaryTiledLayer.js';
//sameFolderImports - not GWT import - same folder const AllBinaryTiledLayer

export class PathAnimation extends Animation {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly linePathAnimation: LinePathAnimation;

    private readonly pathFindingLayer: PathFindingLayerInterface;

    allBinaryGameLayerManagerP: AllBinaryGameLayerManager = AllBinaryGameLayerManager.getNullInstance()!;

public constructor (pathFindingLayer: PathFindingLayerInterface, linePathAnimation: LinePathAnimation){

            super();
        this.pathFindingLayer= pathFindingLayer;
    
this.linePathAnimation= linePathAnimation;
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
this.allBinaryGameLayerManagerP= allBinaryGameLayerManager;
    
}


                //@Throws(Exception.constructor)
            
    public nextFrame(){
}


    private readonly startColor: BasicColor = BasicColorFactory.getInstance()!.RED;

    private readonly middleColor: BasicColor = BasicColorFactory.getInstance()!.BLUE;

    private readonly endColor: BasicColor = BasicColorFactory.getInstance()!.GREEN;

    public paintXY(graphics: Graphics, x: number, y: number){

 try { 
    let waypointBehaviorBase: WaypointBehaviorBase = this.pathFindingLayer!.getWaypointBehavior()!;;
    

                        if(waypointBehaviorBase != 
                                    null
                                )
                        
                                    {
                                    
    let geographicMapCellHistory: GeographicMapCellHistory = waypointBehaviorBase!.getCurrentGeographicMapCellHistory()!;;
    

    let list: BasicArrayList = geographicMapCellHistory!.getTracked()!;;
    

    let size: number = list.size()!;;
    

                        if(size > 0)
                        
                                    {
                                    
    let geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;;
    

    let geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

    let tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    let geographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;;
    

    let nextPoint: GPoint;;
    

    let point: GPoint;;
    

    let start: number = size -2;;
    




                        for (
    let index: number = 0;index < size -1; index++)
        {

                        if(index == start)
                        
                                    {
                                    this.setBasicColorP(this.startColor);
    
this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    

                                    }
                                
                             else 
                        if(geographicMapCellHistory!.isVisited(geographicMapCellPosition))
                        
                                    {
                                    this.setBasicColorP(this.endColor);
    
this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    

                                    }
                                
                        else {
                            this.setBasicColorP(this.middleColor);
    
this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    

                        }
                            
geographicMapCellPosition= list.get(index) as GeographicMapCellPosition;
    
point= geographicMapCellPosition!.getMidPoint();
    
geographicMapCellPosition= list.get(index +1) as GeographicMapCellPosition;
    
nextPoint= geographicMapCellPosition!.getMidPoint();
    
this.linePathAnimation!.paint(graphics, point, nextPoint, tiledLayer);
    
}


                                    }
                                

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.putF("Cleared Target", this, CanvasStrings.getInstance()!.PAINT);
    

 }
   }
 
}


}

