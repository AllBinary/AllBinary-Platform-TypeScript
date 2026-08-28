
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
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GL } from '../../../../javax/microedition/khronos/opengles/GL.js';
      const GL = globalThis.javax.microedition.khronos.opengles.GL;

      
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { BasicColorSetUtil } from '../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
      const BasicColorSetUtil = globalThis.org.allbinary.graphics.color.BasicColorSetUtil;

      
//not game specific package import { NullPaintable } from '../../../../org/allbinary/graphics/paint/NullPaintable.js';
      const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
//not game specific package import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
      const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
//not game specific package import { OpenGLSurfaceChangedInterface } from '../../../../org/allbinary/image/opengles/OpenGLSurfaceChangedInterface.js';
      const OpenGLSurfaceChangedInterface = globalThis.org.allbinary.image.opengles.OpenGLSurfaceChangedInterface;

      
//not game specific package import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { ViewPositionBase } from '../../../../org/allbinary/view/ViewPositionBase.js';
      const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
//not game specific package import { ViewPositionEvent } from '../../../../org/allbinary/view/event/ViewPositionEvent.js';
      const ViewPositionEvent = globalThis.org.allbinary.view.event.ViewPositionEvent;

      
//not game specific package import { ViewPositionEventListenerInterface } from '../../../../org/allbinary/view/event/ViewPositionEventListenerInterface.js';
      const ViewPositionEventListenerInterface = globalThis.org.allbinary.view.event.ViewPositionEventListenerInterface;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
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



