
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
        



import { Graphics } from "../../../../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { ForcedLogUtil } from "../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { CircleFilledAnimation } from "../../../../../../org/allbinary/animation/vector/CircleFilledAnimation.js";

    
import { AllBinaryTiledLayer } from "../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { GPoint } from "../../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../../org/allbinary/graphics/Rectangle.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { ColorCompositeInterface } from "../../../../../../org/allbinary/graphics/color/ColorCompositeInterface.js";

    
import { AllBinaryLayer } from "../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { BasicGeographicMap } from "../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { BasicGeographicMapCellPositionFactory } from "../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js";

    
import { GeographicMapCellPosition } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellPositionEvent } from "../../../../../../org/allbinary/media/graphics/geography/map/event/GeographicMapCellPositionEvent.js";

    
import { GeographicMapCellPositionEventHandler } from "../../../../../../org/allbinary/media/graphics/geography/map/event/GeographicMapCellPositionEventHandler.js";

    
import { GeographicMapCellPositionEventListenerInterface } from "../../../../../../org/allbinary/media/graphics/geography/map/event/GeographicMapCellPositionEventListenerInterface.js";

    
import { ViewPosition } from "../../../../../../org/allbinary/view/ViewPosition.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MiniMapLayer extends AllBinaryLayer implements GeographicMapCellPositionEventListenerInterface {
        

    readonly allBinaryTiledLayer: AllBinaryTiledLayer

    private readonly geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory

    private readonly list: BasicArrayList

    private readonly basicColorList: BasicArrayList

    private readonly positionList: BasicArrayList

    private animationInterface: CircleFilledAnimation
public constructor (geographicMapInterface: BasicGeographicMap, viewPosition: ViewPosition)                        

                            : super(new Rectangle(PointFactory.getInstance()!.getInstance(0, viewPosition!.getY()), geographicMapInterface!.getAllBinaryTiledLayer()!.getWidth(), geographicMapInterface!.getAllBinaryTiledLayer()!.getHeight()), viewPosition){

            super();
            var geographicMapInterface = geographicMapInterface
var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
this.allBinaryTiledLayer= geographicMapInterface!.getAllBinaryTiledLayer();
    
this.geographicMapCellPositionFactory= geographicMapInterface!.getGeographicMapCellPositionFactory();
    
this.animationInterface= new CircleFilledAnimation(this.allBinaryTiledLayer!.getCellWidth(), this.allBinaryTiledLayer!.getCellHeight(), BasicColorFactory.getInstance()!.WHITE);
    
this.list= new BasicArrayList();
    
this.basicColorList= new BasicArrayList();
    
this.positionList= new BasicArrayList();
    
GeographicMapCellPositionEventHandler.getInstance()!.addListener(this);
    
this.init();
    
}


                //@Throws(Error::class)
            
    init(){
allBinaryTiledLayer!.setPosition(this.x, this.y, this.z);
    
}


    public onEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onRemoveGeographicMapCellPositionEvent(geographicMapCellPositionEvent: GeographicMapCellPositionEvent){
    //var geographicMapCellPositionEvent = geographicMapCellPositionEvent

    var colorCompositeInterface: ColorCompositeInterface = geographicMapCellPositionEvent!.getSource();

                         as ColorCompositeInterface;
        
        
;
    

    var index: number = this.list.indexOf(colorCompositeInterface)!;
        
        
;
    

                        if(index >= 0)
                        
                                    {
                                    this.list.remove(index);
    
this.basicColorList!.remove(index);
    
this.positionList!.remove(index);
    

                                    }
                                
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onGeographicMapCellPositionEvent(geographicMapCellPositionEvent: GeographicMapCellPositionEvent){
    //var geographicMapCellPositionEvent = geographicMapCellPositionEvent

    var colorCompositeInterface: ColorCompositeInterface = geographicMapCellPositionEvent!.getSource();

                         as ColorCompositeInterface;
        
        
;
    

    var layerIndex: number =  -1;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    

    var nextColorCompositeInterface: ColorCompositeInterface
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
nextColorCompositeInterface= list.get(index);

                         as ColorCompositeInterface;
    

                        if(nextColorCompositeInterface == colorCompositeInterface)
                        
                                    {
                                    layerIndex= index;
    
break;

                    

                                    }
                                
}


    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getInstance(geographicMapCellPositionEvent!.getGeographicMapCellPosition())!;
        
        
;
    

    var point: GPoint = geographicMapCellPosition!.getPoint()!;
        
        
;
    

                        if(layerIndex ==  -1)
                        
                                    {
                                    this.list.add(colorCompositeInterface);
    

    var basicColor: BasicColor = colorCompositeInterface!.getBasicColorP()!;
        
        
;
    
this.basicColorList!.add(basicColor);
    
this.positionList!.add(point);
    
layerIndex= this.basicColorList!.size() -1;
    

                                    }
                                
                        else {
                            this.positionList!.set(layerIndex, point);
    

                        }
                            
}


    public paintDots(graphics: Graphics){
var graphics = graphics

    var localPositionList: BasicArrayList = this.positionList;
        
        
;
    

    var localBasicColorList: BasicArrayList = this.basicColorList;
        
        
;
    

    var length: number = localPositionList!.size()!;
        
        
;
    

    var point: GPoint
;
    

    var basicColor: BasicColor
;
    




                        for (
    var index: number = length;
        
        
--index >= 0; )
        {
point= localPositionList!.get(index);

                         as GPoint;
    
basicColor= localBasicColorList!.get(index);

                         as BasicColor;
    
graphics.setColor(basicColor!.toInt());
    
this.animationInterface!.setBasicColorP(basicColor);
    
this.animationInterface!.paint(graphics, point.getX() +this.x, point.getY() +this.y);
    
}

}


    public paint(graphics: Graphics){
    //var graphics = graphics
allBinaryTiledLayer!.paint(graphics);
    
this.paintDots(graphics);
    
}


}
                
            

