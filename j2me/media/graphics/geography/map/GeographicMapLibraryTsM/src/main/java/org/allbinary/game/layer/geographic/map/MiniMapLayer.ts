
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not plain js import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { ForcedLogUtil } from '../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
import { CircleFilledAnimation } from '../../../../../../org/allbinary/animation/vector/CircleFilledAnimation.js';
      //not GWT import const CircleFilledAnimation = globalThis.org.allbinary.animation.vector.CircleFilledAnimation;

      
import { AllBinaryTiledLayer } from '../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      //not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not plain js import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not plain js import { PointFactory } from '../../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
import { Rectangle } from '../../../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { ColorCompositeInterface } from '../../../../../../org/allbinary/graphics/color/ColorCompositeInterface.js';
      //not GWT import const ColorCompositeInterface = globalThis.org.allbinary.graphics.color.ColorCompositeInterface;

      
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
      //not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
import { BasicGeographicMap } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      //not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { BasicGeographicMapCellPositionFactory } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
      //not GWT import const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
import { GeographicMapCellPosition } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCellPositionEvent } from '../../../../../../org/allbinary/media/graphics/geography/map/event/GeographicMapCellPositionEvent.js';
      //not GWT import const GeographicMapCellPositionEvent = globalThis.org.allbinary.media.graphics.geography.map.event.GeographicMapCellPositionEvent;

      
import { GeographicMapCellPositionEventHandler } from '../../../../../../org/allbinary/media/graphics/geography/map/event/GeographicMapCellPositionEventHandler.js';
      //not GWT import const GeographicMapCellPositionEventHandler = globalThis.org.allbinary.media.graphics.geography.map.event.GeographicMapCellPositionEventHandler;

      
import { GeographicMapCellPositionEventListenerInterface } from '../../../../../../org/allbinary/media/graphics/geography/map/event/GeographicMapCellPositionEventListenerInterface.js';
      //not GWT import const GeographicMapCellPositionEventListenerInterface = globalThis.org.allbinary.media.graphics.geography.map.event.GeographicMapCellPositionEventListenerInterface;

      
import { ViewPositionBase } from '../../../../../../org/allbinary/view/ViewPositionBase.js';
      //not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MiniMapLayer extends AllBinaryLayer implements GeographicMapCellPositionEventListenerInterface {
        

    readonly allBinaryTiledLayer: AllBinaryTiledLayer;

    private readonly geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory;

    private readonly list: BasicArrayList;

    private readonly basicColorList: BasicArrayList;

    private readonly positionList: BasicArrayList;

    private animationInterface: CircleFilledAnimation;

public constructor (geographicMapInterface: BasicGeographicMap, viewPosition: ViewPositionBase){
            super(StringUtil.getInstance()!.EMPTY_STRING, new Rectangle(PointFactory.getInstance()!.createXY(0, viewPosition!.getY()), geographicMapInterface!.getAllBinaryTiledLayer()!.getWidth(), geographicMapInterface!.getAllBinaryTiledLayer()!.getHeight()), viewPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.allBinaryTiledLayer= geographicMapInterface!.getAllBinaryTiledLayer();
    
this.geographicMapCellPositionFactory= geographicMapInterface!.getGeographicMapCellPositionFactory();
    
this.animationInterface= new CircleFilledAnimation(this.allBinaryTiledLayer!.getCellWidth(), this.allBinaryTiledLayer!.getCellHeight(), BasicColorFactory.getInstance()!.WHITE);
    
this.list= new BasicArrayListD();
    
this.basicColorList= new BasicArrayListD();
    
this.positionList= new BasicArrayListD();
    
GeographicMapCellPositionEventHandler.getInstance()!.addListener(this);
    
this.init();
    
}


                //@Throws(Exception.constructor)
            
    init(){
this.allBinaryTiledLayer!.setPosition(this.x, this.y, this.z);
    
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public onRemoveGeographicMapCellPositionEvent(geographicMapCellPositionEvent: GeographicMapCellPositionEvent){

    var colorCompositeInterface: ColorCompositeInterface = geographicMapCellPositionEvent!.getSource() as ColorCompositeInterface;;
    

    var index: number = this.list.indexOf(colorCompositeInterface)!;;
    

                        if(index >= 0)
                        
                                    {
                                    this.list.removeAt(index);
    
this.basicColorList!.removeAt(index);
    
this.positionList!.removeAt(index);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public onGeographicMapCellPositionEvent(geographicMapCellPositionEvent: GeographicMapCellPositionEvent){

    var colorCompositeInterface: ColorCompositeInterface = geographicMapCellPositionEvent!.getSource() as ColorCompositeInterface;;
    

    var layerIndex: number =  -1;;
    

    var size: number = this.list.size()!;;
    

    var nextColorCompositeInterface: ColorCompositeInterface;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
nextColorCompositeInterface= this.list.get(index) as ColorCompositeInterface;
    

                        if(nextColorCompositeInterface == colorCompositeInterface)
                        
                                    {
                                    layerIndex= index;
    
break;

                    

                                    }
                                
}


    var geographicMapCellPosition: GeographicMapCellPosition = this.geographicMapCellPositionFactory!.getInstance(geographicMapCellPositionEvent!.getGeographicMapCellPosition())!;;
    

    var point: GPoint = geographicMapCellPosition!.getPoint()!;;
    

                        if(layerIndex ==  -1)
                        
                                    {
                                    this.list.add(colorCompositeInterface);
    

    var basicColor: BasicColor = colorCompositeInterface!.getBasicColorP()!;;
    
this.basicColorList!.add(basicColor);
    
this.positionList!.add(point);
    
layerIndex= this.basicColorList!.size() -1;
    

                                    }
                                
                        else {
                            this.positionList!.set(layerIndex, point);
    

                        }
                            
}


    public paintDots(graphics: Graphics){

    var localPositionList: BasicArrayList = this.positionList;;
    

    var localBasicColorList: BasicArrayList = this.basicColorList;;
    

    var length: number = localPositionList!.size()!;;
    

    var point: GPoint;;
    

    var basicColor: BasicColor;;
    




                        for (
    var index: number = length;--index >= 0; )
        {
point= localPositionList!.get(index) as GPoint;
    
basicColor= localBasicColorList!.get(index) as BasicColor;
    
graphics.setColor(basicColor!.intValue());
    
this.animationInterface!.setBasicColorP(basicColor);
    
this.animationInterface!.paintXY(graphics, point.getX() +this.x, point.getY() +this.y);
    
}

}


    public paint(graphics: Graphics){
this.allBinaryTiledLayer!.paint(graphics);
    
this.paintDots(graphics);
    
}


}



