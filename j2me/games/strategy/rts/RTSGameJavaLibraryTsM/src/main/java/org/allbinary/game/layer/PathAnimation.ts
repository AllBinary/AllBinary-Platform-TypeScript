
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { GPoint } from "../../../../org/allbinary/graphics/GPoint.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BasicGeographicMap } from "../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellHistory } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { GeographicMapCellPosition } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCompositeInterface } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    
import { SimpleGeographicMapCellPositionFactory } from "../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class PathAnimation extends Animation {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly linePathAnimation: LinePathAnimation

    private readonly pathFindingLayer: PathFindingLayerInterface

    allBinaryGameLayerManagerP: AllBinaryGameLayerManager = AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER;
        
        
public constructor (pathFindingLayer: PathFindingLayerInterface, linePathAnimation: LinePathAnimation){

            super();
                //var pathFindingLayer = pathFindingLayer
    //var linePathAnimation = linePathAnimation
this.pathFindingLayer= pathFindingLayer;
    
this.linePathAnimation= linePathAnimation;
    
}


                //@Throws(Error::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
this.allBinaryGameLayerManagerP= allBinaryGameLayerManager;
    
}


                //@Throws(Error::class)
            
    public nextFrame(){
}


    private readonly startColor: BasicColor = BasicColorFactory.getInstance()!.RED;
        
        

    private readonly middleColor: BasicColor = BasicColorFactory.getInstance()!.BLUE;
        
        

    private readonly endColor: BasicColor = BasicColorFactory.getInstance()!.GREEN;
        
        

    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y

        try {
            
    var waypointBehaviorBase: WaypointBehaviorBase = this.pathFindingLayer!.getWaypointBehavior()!;
        
        
;
    

                        if(waypointBehaviorBase != 
                                    null
                                )
                        
                                    {
                                    
    var geographicMapCellHistory: GeographicMapCellHistory = waypointBehaviorBase!.getCurrentGeographicMapCellHistory()!;
        
        
;
    

    var list: BasicArrayList = geographicMapCellHistory!.getTracked()!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    

                        if(size > 0)
                        
                                    {
                                    
    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;
        
        
;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        
;
    

    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    

    var geographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        
;
    

    var nextPoint: GPoint
;
    

    var point: GPoint
;
    

    var start: number = size -2;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size -1; index++)
        {

                        if(index == start)
                        
                                    {
                                    this.setBasicColorP(this.startColor);
    
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP(), this.getColor());
    

                                    }
                                
                             else 
                        if(geographicMapCellHistory!.isVisited(geographicMapCellPosition))
                        
                                    {
                                    this.setBasicColorP(this.endColor);
    
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP(), this.getColor());
    

                                    }
                                
                        else {
                            this.setBasicColorP(this.middleColor);
    
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP(), this.getColor());
    

                        }
                            
geographicMapCellPosition= list.get(index);

                         as GeographicMapCellPosition;
    
point= geographicMapCellPosition!.getMidPoint();
    
geographicMapCellPosition= list.get(index +1);

                         as GeographicMapCellPosition;
    
nextPoint= geographicMapCellPosition!.getMidPoint();
    
this.linePathAnimation!.paint(graphics, point, nextPoint, tiledLayer);
    
}


                                    }
                                

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.putF("Cleared Target", this, "paint");
    
}

}


}
                
            

