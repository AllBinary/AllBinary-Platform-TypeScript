
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
        
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { BasicGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { GeographicMapCellHistory } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
//not GWT import const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
import { GeographicMapCellPosition } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCompositeInterface } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
//not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
import { SimpleGeographicMapCellPositionFactory } from '../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.SimpleGeographicMapCellPositionFactory;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LinePathAnimation } from './LinePathAnimation.js';
//not GWT import - same folder const LinePathAnimation = globalThis.org.allbinary.game.layer.LinePathAnimation;

                import { PathFindingLayerInterface } from './PathFindingLayerInterface.js';
//not GWT import - same folder const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

                import { AllBinaryGameLayerManager } from './AllBinaryGameLayerManager.js';
//not GWT import - same folder const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

                import { WaypointBehaviorBase } from './WaypointBehaviorBase.js';
//not GWT import - same folder const WaypointBehaviorBase = globalThis.org.allbinary.game.layer.WaypointBehaviorBase;

                import { AllBinaryTiledLayer } from './AllBinaryTiledLayer.js';
//not GWT import - same folder const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

                
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
            
    var waypointBehaviorBase: WaypointBehaviorBase = this.pathFindingLayer!.getWaypointBehavior()!;;
    

                        if(waypointBehaviorBase != 
                                    null
                                )
                        
                                    {
                                    
    var geographicMapCellHistory: GeographicMapCellHistory = waypointBehaviorBase!.getCurrentGeographicMapCellHistory()!;;
    

    var list: BasicArrayList = geographicMapCellHistory!.getTracked()!;;
    

    var size: number = list.size()!;;
    

                        if(size > 0)
                        
                                    {
                                    
    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    var geographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;;
    

    var nextPoint: GPoint;;
    

    var point: GPoint;;
    

    var start: number = size -2;;
    




                        for (
    var index: number = 0;index < size -1; index++)
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
                                

                //: 
} catch(e) 
            {
this.logUtil!.putF("Cleared Target", this, CanvasStrings.getInstance()!.PAINT);
    
}

}


}



