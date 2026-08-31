
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GL } from '../../../../javax/microedition/khronos/opengles/GL.js';
      //not GWT import const GL = globalThis.javax.microedition.khronos.opengles.GL;

      
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { BasicColorSetUtil } from '../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
      //not GWT import const BasicColorSetUtil = globalThis.org.allbinary.graphics.color.BasicColorSetUtil;

      
import { NullPaintable } from '../../../../org/allbinary/graphics/paint/NullPaintable.js';
      //not GWT import const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
      //not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { OpenGLSurfaceChangedInterface } from '../../../../org/allbinary/image/opengles/OpenGLSurfaceChangedInterface.js';
      //not GWT import const OpenGLSurfaceChangedInterface = globalThis.org.allbinary.image.opengles.OpenGLSurfaceChangedInterface;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not plain js import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
      //not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { ViewPositionBase } from '../../../../org/allbinary/view/ViewPositionBase.js';
      //not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
import { ViewPositionEvent } from '../../../../org/allbinary/view/event/ViewPositionEvent.js';
      //not GWT import const ViewPositionEvent = globalThis.org.allbinary.view.event.ViewPositionEvent;

      
import { ViewPositionEventListenerInterface } from '../../../../org/allbinary/view/event/ViewPositionEventListenerInterface.js';
      //not GWT import const ViewPositionEventListenerInterface = globalThis.org.allbinary.view.event.ViewPositionEventListenerInterface;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SWTUtil } from './SWTUtil.js';
import { GameLayerUtil } from './GameLayerUtil.js';

export class AllBinaryGameLayer extends AllBinaryLayer implements ViewPositionEventListenerInterface, OpenGLSurfaceChangedInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;

    readonly RED: BasicColor = BasicColorFactory.getInstance()!.RED;

    private readonly paintable: Paintable = SWTUtil.isSWT
                        ?       
                                new class extends Paintable
                                {
                                
    private readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;
    private readonly BLACK: BasicColor = BasicColorFactory.getInstance()!.BLACK;
    public paint(graphics: Graphics){
this.basicSetColorUtil!.setBasicColorP(graphics, this.BLACK);
    
}

                                }
                            
                                :

                            NullPaintable.getInstance();

    ;

    private readonly gameKeyEventList: BasicArrayList = new BasicArrayListD();

public constructor (name: string, layerInfo: Rectangle, viewPosition: ViewPositionBase){
            super(name, layerInfo, viewPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public set(gl: GL){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


    public move(){
}


    public getGameKeyEventList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameKeyEventList;
    
}


                //@Throws(Exception.constructor)
            
    public processInput(allBinaryLayerManager: AllBinaryLayerManager){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Exception.constructor)
            
    public onViewPositionChangeEvent(){
this.onChangeEvent(this.viewPositionEvent);
    
}


                //@Throws(Exception.constructor)
            
    public onChangeEvent(layerManagerEvent: ViewPositionEvent){

                        if(GameLayerUtil.isOnScreen(this))
                        
                                    {
                                    this.setVisible(true);
    

                                    }
                                
                        else {
                            this.setVisible(false);
    

                        }
                            
}


    public paintFirst(graphics: Graphics){
this.paintable.paint(graphics);
    
}


    public paintDebug(graphics: Graphics){

    var viewPosition: ViewPositionBase = this.getViewPosition()!;;
    

    var viewX: number = viewPosition!.getX()!;;
    

    var viewY: number = viewPosition!.getY()!;;
    
this.basicSetColorUtil!.setBasicColorP(graphics, this.RED);
    
graphics.drawRect(viewX, viewY, this.getWidth(), this.getHeight());
    
}


    public setWidth(width: number){
super.setLayerWidth(width);
    
this.setHalfWidth(width>>1);
    
}


    public setHeight(height: number){
super.setLayerHeight(height);
    
this.setHalfHeight(height>>1);
    
}


}



