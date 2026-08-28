
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
        
//not game specific package import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { ForcedLogUtil } from '../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { CircleFilledAnimation } from '../../../../../../org/allbinary/animation/vector/CircleFilledAnimation.js';
      const CircleFilledAnimation = globalThis.org.allbinary.animation.vector.CircleFilledAnimation;

      
//not game specific package import { AllBinaryTiledLayer } from '../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { PointFactory } from '../../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
//not game specific package import { Rectangle } from '../../../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { ColorCompositeInterface } from '../../../../../../org/allbinary/graphics/color/ColorCompositeInterface.js';
      const ColorCompositeInterface = globalThis.org.allbinary.graphics.color.ColorCompositeInterface;

      
//not game specific package import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not game specific package import { BasicGeographicMap } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { BasicGeographicMapCellPositionFactory } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
      const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { GeographicMapCellPositionEvent } from '../../../../../../org/allbinary/media/graphics/geography/map/event/GeographicMapCellPositionEvent.js';
      const GeographicMapCellPositionEvent = globalThis.org.allbinary.media.graphics.geography.map.event.GeographicMapCellPositionEvent;

      
//not game specific package import { GeographicMapCellPositionEventHandler } from '../../../../../../org/allbinary/media/graphics/geography/map/event/GeographicMapCellPositionEventHandler.js';
      const GeographicMapCellPositionEventHandler = globalThis.org.allbinary.media.graphics.geography.map.event.GeographicMapCellPositionEventHandler;

      
//not game specific package import { GeographicMapCellPositionEventListenerInterface } from '../../../../../../org/allbinary/media/graphics/geography/map/event/GeographicMapCellPositionEventListenerInterface.js';
      const GeographicMapCellPositionEventListenerInterface = globalThis.org.allbinary.media.graphics.geography.map.event.GeographicMapCellPositionEventListenerInterface;

      
//not game specific package import { ViewPositionBase } from '../../../../../../org/allbinary/view/ViewPositionBase.js';
      const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
















                                        
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



