
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
        



import { GL } from "../../../../javax/microedition/khronos/opengles/GL.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Rectangle } from "../../../../org/allbinary/graphics/Rectangle.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { BasicColorSetUtil } from "../../../../org/allbinary/graphics/color/BasicColorSetUtil.js";

    
import { NullPaintable } from "../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { OpenGLSurfaceChangedInterface } from "../../../../org/allbinary/image/opengles/OpenGLSurfaceChangedInterface.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { ForcedLogUtil } from "../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../org/allbinary/util/BasicArrayListD.js";

    
import { ViewPosition } from "../../../../org/allbinary/view/ViewPosition.js";

    
import { ViewPositionEvent } from "../../../../org/allbinary/view/event/ViewPositionEvent.js";

    
import { ViewPositionEventListenerInterface } from "../../../../org/allbinary/view/event/ViewPositionEventListenerInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { SWTUtil } from "./SWTUtil.js";

import { GameLayerUtil } from "./GameLayerUtil.js";

export class AllBinaryGameLayer extends AllBinaryLayer implements ViewPositionEventListenerInterface, OpenGLSurfaceChangedInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly RED: BasicColor = BasicColorFactory.getInstance()!.RED;
        
        

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;
        
        

    private readonly paintable: Paintable = SWTUtil.isSWT
                        ?       
                                new object: Paintable()
                                {
                                
    var private readonly BLACK: BasicColor = BasicColorFactory.getInstance()!.BLACK;
        
        

    public paint(graphics: Graphics){
var graphics = graphics
basicSetColorUtil!.setBasicColorP(graphics, BLACK);
    
}

                                }
                            
                                :

                            NullPaintable.getInstance();

    ;
        
        

    private readonly gameKeyEventList: BasicArrayList = new BasicArrayListD();
        
        
public constructor (name: string, layerInfo: Rectangle, viewPosition: ViewPosition){
            super(name, layerInfo, viewPosition);
                        //var name = name
    //var layerInfo = layerInfo
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public set(gl: GL){
    //var gl = gl



                            throw new Error(this.commonStrings!.NOT_IMPLEMENTED)
}


    public move(){
}


    public getGameKeyEventList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameKeyEventList;
    
}


                //@Throws(Error::class)
            
    public processInput(allBinaryLayerManager: AllBinaryLayerManager){
    //var allBinaryLayerManager = allBinaryLayerManager



                            throw new Error(this.commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
    //var allBinaryLayerManager = allBinaryLayerManager



                            throw new Error(this.commonStrings!.NOT_IMPLEMENTED)
}


    public onEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Error::class)
            
    public onViewPositionChangeEvent(){
this.onChangeEvent(this.viewPositionEvent);
    
}


                //@Throws(Error::class)
            
    public onChangeEvent(layerManagerEvent: ViewPositionEvent){
    //var layerManagerEvent = layerManagerEvent

                        if(GameLayerUtil.isOnScreen(this))
                        
                                    {
                                    this.setVisible(true);
    

                                    }
                                
                        else {
                            this.setVisible(false);
    

                        }
                            
}


    public paintFirst(graphics: Graphics){
    //var graphics = graphics
this.paintable.paint(graphics);
    
}


    public paintDebug(graphics: Graphics){
    //var graphics = graphics

    var viewPosition: ViewPosition = this.getViewPosition()!;
        
        
;
    

    var viewX: number = viewPosition!.getX()!;
        
        
;
    

    var viewY: number = viewPosition!.getY()!;
        
        
;
    
this.basicSetColorUtil!.setBasicColorP(graphics, RED);
    
graphics.drawRect(viewX, viewY, this.getWidth(), this.getHeight());
    
}


    public setWidth(width: number){
    //var width = width
super.setLayerWidth(width);
    
this.setHalfWidth(width>>1);
    
}


    public setHeight(height: number){
    //var height = height
super.setLayerHeight(height);
    
this.setHalfHeight(height>>1);
    
}


}
                
            

