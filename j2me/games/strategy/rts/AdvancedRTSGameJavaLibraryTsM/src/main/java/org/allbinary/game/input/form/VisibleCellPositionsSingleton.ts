
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
        



import { SimpleTiledLayer } from "../../../../../javax/microedition/lcdui/game/SimpleTiledLayer.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { RTSLayerEvent } from "../../../../../org/allbinary/game/layer/RTSLayerEvent.js";

    
import { BuildingEventListenerInterface } from "../../../../../org/allbinary/game/layer/building/event/BuildingEventListenerInterface.js";

    
import { LocalPlayerBuildingEventHandler } from "../../../../../org/allbinary/game/layer/building/event/LocalPlayerBuildingEventHandler.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { CellPosition } from "../../../../../org/allbinary/graphics/CellPosition.js";

    
import { ScrollMapEvent } from "../../../../../org/allbinary/layer/event/ScrollMapEvent.js";

    
import { ScrollMapEventHandler } from "../../../../../org/allbinary/layer/event/ScrollMapEventHandler.js";

    
import { ScrollMapEventListenerInterface } from "../../../../../org/allbinary/layer/event/ScrollMapEventListenerInterface.js";

    
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    

export class VisibleCellPositionsSingleton
            extends Object
        
                , BuildingEventListenerInterface
                , ScrollMapEventListenerInterface {
        

    private static readonly instance: VisibleCellPositionsSingleton = new VisibleCellPositionsSingleton();
        
        

    public static getInstance(): VisibleCellPositionsSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private stationaryVisibleCellPositions: ShortArray[] = NullUtil.getInstance()!.NULL_SHORT_ARRAY_ARRAY;
        
        

    private visibleCellPositions: ShortArray[] = NullUtil.getInstance()!.NULL_SHORT_ARRAY_ARRAY;
        
        

    private currentlyVisibleCellPositions: ShortArray[] = NullUtil.getInstance()!.NULL_SHORT_ARRAY_ARRAY;
        
        

    public readonly ALL_VISIBLE_TILEDLAYER: SimpleTiledLayer = new SimpleTiledLayer(0, 0, 0, 0);
        
        

    private simpleTiledLayer: SimpleTiledLayer = ALL_VISIBLE_TILEDLAYER;
        
        

    private paintSimpleTiledLayer: SimpleTiledLayer = ALL_VISIBLE_TILEDLAYER;
        
        

    private currentIndex: number= 0
private constructor (){

            super();
            LocalPlayerBuildingEventHandler.getInstance()!.addListener(this)
ScrollMapEventHandler.getInstance()!.addListener(this)
}


    public init(simpleTiledLayer: SimpleTiledLayer){
var simpleTiledLayer = simpleTiledLayer
this.paintSimpleTiledLayer= ALL_VISIBLE_TILEDLAYER
this.currentIndex= 0

    var rows: number = simpleTiledLayer!.getRows()!;
        
        


    var columns: number = simpleTiledLayer!.getColumns()!;
        
        

this.stationaryVisibleCellPositions= Array(rows) { ShortArray(columns) }
this.visibleCellPositions= Array(rows) { ShortArray(columns) }
this.currentlyVisibleCellPositions= Array(rows) { ShortArray(columns) }
this.setSimpleTiledLayer(simpleTiledLayer)
}


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this)
}


                //@Throws(Error::class)
            
    public onBuildingEvent(event: RTSLayerEvent){
var event = event
this.paintSimpleTiledLayer= this.simpleTiledLayer
}


                //@Throws(Error::class)
            
    public onMoveEvent(scrollMapEvent: ScrollMapEvent){
var scrollMapEvent = scrollMapEvent
this.move(scrollMapEvent!.getDx(), scrollMapEvent!.getDy())
}


    public addStationaryCellPositions(list: BasicArrayList){
var list = list




                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {

    var cellPosition: CellPosition = list.get(index) as CellPosition;
        
        

this.stationaryVisibleCellPositions[cellPosition!.getRow()]![cellPosition!.getColumn()]++
}

}


    public removeStationaryCellPositions(list: BasicArrayList){
var list = list




                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {

    var cellPosition: CellPosition = list.get(index) as CellPosition;
        
        

this.stationaryVisibleCellPositions[cellPosition!.getRow()]![cellPosition!.getColumn()]--
}

}


    public update(){

                        if(this.currentIndex == 0)
                        
                                    {
                                    
    var temp: ShortArray[] = this.currentlyVisibleCellPositions;
        
        

this.currentlyVisibleCellPositions= this.visibleCellPositions
this.visibleCellPositions= temp




                        for (
    var index: number = this.visibleCellPositions!.length -1;
        
        
index >= 0; index--)
        {




                        for (
    var index2: number = this.visibleCellPositions[0]!.length -1;
        
        
index2 >= 0; index2--)
        {
this.visibleCellPositions[index]![index2]= this.stationaryVisibleCellPositions[index]![index2]!
}

}


                                    }
                                
this.currentIndex++

                        if(this.currentIndex > 10)
                        
                                    {
                                    this.currentIndex= 0

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
var list = list




                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {

    var cellPosition: CellPosition = list.get(index) as CellPosition;
        
        

this.visibleCellPositions[cellPosition!.getRow()]![cellPosition!.getColumn()]++
}

}


    public isVisible(cellPosition: CellPosition): boolean{
var cellPosition = cellPosition

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
var dx = dx
var dy = dy
this.getSimpleTiledLayer()!.move(dx, dy)
}


    public paint(graphics: Graphics){
var graphics = graphics
this.paintSimpleTiledLayer!.paint(graphics, this.currentlyVisibleCellPositions)
}


    setSimpleTiledLayer(simpleTiledLayer: SimpleTiledLayer){
var simpleTiledLayer = simpleTiledLayer
this.simpleTiledLayer= simpleTiledLayer
}


    public getSimpleTiledLayer(): SimpleTiledLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return simpleTiledLayer;
    
}


}
                
            

