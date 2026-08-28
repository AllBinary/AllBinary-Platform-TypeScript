
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { SimpleTiledLayer } from '../../../../../javax/microedition/lcdui/game/SimpleTiledLayer.js';
      const SimpleTiledLayer = globalThis.javax.microedition.lcdui.game.SimpleTiledLayer;

      
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { RTSLayerEvent } from '../../../../../org/allbinary/game/layer/RTSLayerEvent.js';
      const RTSLayerEvent = globalThis.org.allbinary.game.layer.RTSLayerEvent;

      
//not game specific package import { BuildingEventListenerInterface } from '../../../../../org/allbinary/game/layer/building/event/BuildingEventListenerInterface.js';
      const BuildingEventListenerInterface = globalThis.org.allbinary.game.layer.building.event.BuildingEventListenerInterface;

      
//not game specific package import { LocalPlayerBuildingEventHandler } from '../../../../../org/allbinary/game/layer/building/event/LocalPlayerBuildingEventHandler.js';
      const LocalPlayerBuildingEventHandler = globalThis.org.allbinary.game.layer.building.event.LocalPlayerBuildingEventHandler;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { CellPosition } from '../../../../../org/allbinary/graphics/CellPosition.js';
      const CellPosition = globalThis.org.allbinary.graphics.CellPosition;

      
//not game specific package import { ScrollMapEvent } from '../../../../../org/allbinary/layer/event/ScrollMapEvent.js';
      const ScrollMapEvent = globalThis.org.allbinary.layer.event.ScrollMapEvent;

      
//not game specific package import { ScrollMapEventHandler } from '../../../../../org/allbinary/layer/event/ScrollMapEventHandler.js';
      const ScrollMapEventHandler = globalThis.org.allbinary.layer.event.ScrollMapEventHandler;

      
//not game specific package import { ScrollMapEventListenerInterface } from '../../../../../org/allbinary/layer/event/ScrollMapEventListenerInterface.js';
      const ScrollMapEventListenerInterface = globalThis.org.allbinary.layer.event.ScrollMapEventListenerInterface;

      
//not game specific package import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class VisibleCellPositionsSingleton
            extends Object
         implements BuildingEventListenerInterface, ScrollMapEventListenerInterface {
        

    private static readonly instance: VisibleCellPositionsSingleton = new VisibleCellPositionsSingleton();

    public static getInstance(): VisibleCellPositionsSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return VisibleCellPositionsSingleton.instance;
    
}


    private stationaryVisibleCellPositions: number[][] = NullUtil.getInstance()!.NULL_SHORT_ARRAY_ARRAY;

    private visibleCellPositions: number[][] = NullUtil.getInstance()!.NULL_SHORT_ARRAY_ARRAY;

    private currentlyVisibleCellPositions: number[][] = NullUtil.getInstance()!.NULL_SHORT_ARRAY_ARRAY;

    public readonly ALL_VISIBLE_TILEDLAYER: SimpleTiledLayer = new SimpleTiledLayer(0, 0, 0, 0);

    private simpleTiledLayer: SimpleTiledLayer = this.ALL_VISIBLE_TILEDLAYER;

    private paintSimpleTiledLayer: SimpleTiledLayer = this.ALL_VISIBLE_TILEDLAYER;

    private currentIndex: number= 0;

private constructor (){

            super();
        LocalPlayerBuildingEventHandler.getInstance()!.addListenerInterface(this);
    
ScrollMapEventHandler.getInstance()!.addListenerInterface(this);
    
}


    public init(simpleTiledLayer: SimpleTiledLayer){
this.paintSimpleTiledLayer= this.ALL_VISIBLE_TILEDLAYER;
    
this.currentIndex= 0;
    

    var rows: number = simpleTiledLayer!.getRows()!;;
    

    var columns: number = simpleTiledLayer!.getColumns()!;;
    
this.stationaryVisibleCellPositions= new Array(rows).fill(null).map(() => new Array(columns).fill(0));
    
this.visibleCellPositions= new Array(rows).fill(null).map(() => new Array(columns).fill(0));
    
this.currentlyVisibleCellPositions= new Array(rows).fill(null).map(() => new Array(columns).fill(0));
    
this.setSimpleTiledLayer(simpleTiledLayer);
    
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Exception.constructor)
            
    public onBuildingEvent(event: RTSLayerEvent){
this.paintSimpleTiledLayer= this.simpleTiledLayer;
    
}


                //@Throws(Exception.constructor)
            
    public onMoveEvent(scrollMapEvent: ScrollMapEvent){
this.move(scrollMapEvent!.getDx(), scrollMapEvent!.getDy());
    
}


    public addStationaryCellPositions(list: BasicArrayList){




                        for (
    var index: number = list.size() -1;index >= 0; index--)
        {

    var cellPosition: CellPosition = list.get(index) as CellPosition;;
    
this.stationaryVisibleCellPositions[cellPosition!.getRow()]![cellPosition!.getColumn()]++;
    
}

}


    public removeStationaryCellPositions(list: BasicArrayList){




                        for (
    var index: number = list.size() -1;index >= 0; index--)
        {

    var cellPosition: CellPosition = list.get(index) as CellPosition;;
    
this.stationaryVisibleCellPositions[cellPosition!.getRow()]![cellPosition!.getColumn()]--;
    
}

}


    public update(){

                        if(this.currentIndex == 0)
                        
                                    {
                                    
    var temp: number[][] = this.currentlyVisibleCellPositions;;
    
this.currentlyVisibleCellPositions= this.visibleCellPositions;
    
this.visibleCellPositions= temp;
    




                        for (
    var index: number = this.visibleCellPositions!.length -1;index >= 0; index--)
        {




                        for (
    var index2: number = this.visibleCellPositions[0]!.length -1;index2 >= 0; index2--)
        {
this.visibleCellPositions[index]![index2]= this.stationaryVisibleCellPositions[index]![index2]!;
    
}

}


                                    }
                                
this.currentIndex++;
    

                        if(this.currentIndex > 10)
                        
                                    {
                                    this.currentIndex= 0;
    

                                    }
                                
}


    public shouldProcess(): boolean{

                        if(this.currentIndex == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public addCellPositions(list: BasicArrayList){




                        for (
    var index: number = list.size() -1;index >= 0; index--)
        {

    var cellPosition: CellPosition = list.get(index) as CellPosition;;
    
this.visibleCellPositions[cellPosition!.getRow()]![cellPosition!.getColumn()]++;
    
}

}


    public isVisible(cellPosition: CellPosition): boolean{

                        if(this.visibleCellPositions[cellPosition!.getRow()]![cellPosition!.getColumn()] > 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public move(dx: number, dy: number){
this.getSimpleTiledLayer()!.moveDXY(dx, dy);
    
}


    public paint(graphics: Graphics){
this.paintSimpleTiledLayer!.paint(graphics, this.currentlyVisibleCellPositions);
    
}


    setSimpleTiledLayer(simpleTiledLayer: SimpleTiledLayer){
this.simpleTiledLayer= simpleTiledLayer;
    
}


    public getSimpleTiledLayer(): SimpleTiledLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.simpleTiledLayer;
    
}


}



