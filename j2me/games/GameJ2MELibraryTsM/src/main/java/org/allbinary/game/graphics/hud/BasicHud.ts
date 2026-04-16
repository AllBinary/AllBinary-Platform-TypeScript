
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { J2MEUtil } from "../../../../../org/allbinary/J2MEUtil.js";

    
import { Anchor } from "../../../../../org/allbinary/graphics/Anchor.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../org/allbinary/graphics/PointFactory.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { BasicColorSetUtil } from "../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js";

    
import { CanvasStrings } from "../../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { DisplayChangeEvent } from "../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

import { HudGraphicsPosition } from "./HudGraphicsPosition.js";

import { BasicHudFactory } from "./BasicHudFactory.js";

export class BasicHud
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;
        
        

    private location: number= 0

    private direction: number= 0

    private bufferZone: number= 0

    private bufferZoneY: number= 0

    private maxWidth: number= 0

    private maxHeight: number= 0

    private hudGraphicsPosition: HudGraphicsPosition = HudGraphicsPosition.NULL_HUD_GRAPHICS_POSITION;
        
        

    private x: number= 0

    private y: number= 0

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;
        
        

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.BLACK;
        
        

    private color: number
public constructor (location: number, direction: number, maxHeight: number, maxWidth: number, bufferZone: number)                        

                            : this(location, direction, maxHeight, maxWidth, bufferZone, BasicColorFactory.getInstance()!.WHITE){

            super();
            var location = location
var direction = direction
var maxHeight = maxHeight
var maxWidth = maxWidth
var bufferZone = bufferZone


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (location: number, direction: number, maxHeight: number, maxWidth: number, bufferZone: number, basicColor: BasicColor){

            super();
            var location = location
var direction = direction
var maxHeight = maxHeight
var maxWidth = maxWidth
var bufferZone = bufferZone
var basicColor = basicColor
this.setLocation(location);
    
this.setDirection(direction);
    
this.setBufferZone(bufferZone);
    
this.setMaxWidth(maxWidth);
    
this.setMaxHeight(maxHeight);
    
this.onDisplayChangeEvent(DisplayInfoSingleton.getInstance()!.displayChangeEvent);
    
this.setBasicColorP(basicColor);
    
this.color= basicColor!.toInt();
    
}


    public getLocation(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.location;
    
}


    public getDirection(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.direction;
    
}


                //@Throws(Error::class)
            
    getHudGraphicsPosition(width: number, height: number): HudGraphicsPosition{
var width = width
var height = height

    var x: number = 0;
        
        
;
    

    var y: number = 0;
        
        
;
    

    var anchor: number = 0;
        
        
;
    

    var basicHudFactory: BasicHudFactory = BasicHudFactory.getInstance()!;
        
        
;
    

                        if(basicHudFactory!.BOTTOMLEFT == this.getLocation())
                        
                                    {
                                    x= bufferZone +2;
    
y= height -maxHeight -bufferZone;
    
anchor= Graphics.BOTTOM and Graphics.LEFT;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.BOTTOMRIGHT == this.getLocation())
                        
                                    {
                                    x= width -maxWidth;
    
y= height -maxHeight -bufferZone;
    
anchor= Graphics.BOTTOM and Graphics.RIGHT;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.TOPLEFT == this.getLocation())
                        
                                    {
                                    x= bufferZone +2;
    
y= bufferZoneY;
    
anchor= Anchor.TOP_LEFT;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.TOPRIGHT == this.getLocation())
                        
                                    {
                                    x= width -maxWidth;
    
y= bufferZoneY;
    
anchor= Graphics.TOP and Graphics.RIGHT;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.TOPCENTER == this.getLocation())
                        
                                    {
                                    x= ((width -maxWidth) /2);
    
y= bufferZoneY;
    
anchor= Graphics.TOP and Graphics.HCENTER;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.BOTTOMCENTER == this.getLocation())
                        
                                    {
                                    x= ((width -maxWidth) /2);
    
y= height -maxHeight -bufferZone;
    
anchor= Graphics.BOTTOM and Graphics.HCENTER;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.ABSOLUTE == this.getLocation())
                        
                                    {
                                    x= maxHeight;
    
y= maxWidth;
    
anchor= 0;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HudGraphicsPosition(this.getPoint(x, y), anchor);
    
}


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){
var displayChangeEvent = displayChangeEvent

        try {
            
    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    
this.hudGraphicsPosition= this.getHudGraphicsPosition(displayInfo!.getLastWidth(), displayInfo!.getLastHeight());
    
x= this.hudGraphicsPosition!.getPoint()!.getX();
    
this.setY(this.hudGraphicsPosition!.getPoint()!.getY());
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, canvasStrings!.ON_DISPLAY_CHANGE_EVENT, e);
    
}

}


    getPoint(x: number, y: number): GPoint{
var x = x
var y = y



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PointFactory.getInstance()!.getInstance(x, y);

                        ;
    
}


    public getBufferZone(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferZone;
    
}


    public setBufferZone(bufferZone: number){
var bufferZone = bufferZone
this.bufferZone= bufferZone;
    

                        if(J2MEUtil.isHTML())
                        
                                    {
                                    this.bufferZoneY= this.bufferZone;
    

                                    }
                                
                        else {
                            this.bufferZoneY= this.bufferZone +5;
    

                        }
                            
}


    public getMaxWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxWidth;
    
}


    public setMaxWidth(maxWidth: number){
var maxWidth = maxWidth
this.maxWidth= maxWidth;
    
}


    public getMaxHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxHeight;
    
}


    public setMaxHeight(maxHeight: number){
var maxHeight = maxHeight
this.maxHeight= maxHeight;
    
}


    public setLocation(location: number){
var location = location
this.location= location;
    
}


    public setDirection(direction: number){
var direction = direction
this.direction= direction;
    
}


    public paint(graphics: Graphics, string: string, string2: string, offset: number){
var graphics = graphics
var string = string
var string2 = string2
var offset = offset
this.basicSetColorUtil!.setBasicColorP(graphics, getBasicColorP());
    
graphics.drawString(string, x, getY(), hudGraphicsPosition!.getAnchor());
    
graphics.drawString(string2, x +offset, getY(), hudGraphicsPosition!.getAnchor());
    
}


    public paint(graphics: Graphics, string: string, string2: string, offset: number, offset2: number){
var graphics = graphics
var string = string
var string2 = string2
var offset = offset
var offset2 = offset2
graphics.setColor(this.getColor());
    
graphics.drawString(string, x +offset, getY(), hudGraphicsPosition!.getAnchor());
    
graphics.drawString(string2, x +offset2, getY(), hudGraphicsPosition!.getAnchor());
    
}


    public paint(graphics: Graphics, charArray: string[], offset: number, len: number, charArray2: string[], offset2: number, len2: number, xOffset: number, xOffset2: number){
var graphics = graphics
var charArray = charArray
var offset = offset
var len = len
var charArray2 = charArray2
var offset2 = offset2
var len2 = len2
var xOffset = xOffset
var xOffset2 = xOffset2
this.basicSetColorUtil!.setBasicColorP(graphics, getBasicColorP());
    

    var y: number = getY()!;
        
        
;
    
graphics.drawChars(charArray, offset, len, x +xOffset, y, hudGraphicsPosition!.getAnchor());
    
graphics.drawChars(charArray2, offset2, len2, x +xOffset2, y, hudGraphicsPosition!.getAnchor());
    
}


    public paint(graphics: Graphics, charArray: string[], offset: number, len: number, charArray2: string[], offset2: number, len2: number, xOffset: number){
var graphics = graphics
var charArray = charArray
var offset = offset
var len = len
var charArray2 = charArray2
var offset2 = offset2
var len2 = len2
var xOffset = xOffset
this.basicSetColorUtil!.setBasicColorP(graphics, getBasicColorP());
    

    var y: number = getY()!;
        
        
;
    
graphics.drawChars(charArray, offset, len, x, y, hudGraphicsPosition!.getAnchor());
    
graphics.drawChars(charArray2, offset2, len2, x +xOffset, y, hudGraphicsPosition!.getAnchor());
    
}


    public paint(graphics: Graphics, charArray: string[], offset: number, len: number){
var graphics = graphics
var charArray = charArray
var offset = offset
var len = len
this.basicSetColorUtil!.setBasicColorP(graphics, getBasicColorP());
    

    var y: number = getY()!;
        
        
;
    
graphics.drawChars(charArray, offset, len, x, y, hudGraphicsPosition!.getAnchor());
    
}


    offsetY: number= 0

    public paint(graphics: Graphics, string: string){
var graphics = graphics
var string = string
this.basicSetColorUtil!.setBasicColorP(graphics, getBasicColorP());
    

    var y: number = getY() +offsetY;
        
        
;
    
graphics.drawString(string, x, y, hudGraphicsPosition!.getAnchor());
    
}


    getHudGraphicsPosition(): HudGraphicsPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hudGraphicsPosition;
    
}


    public getColor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return color;
    
}


    public getX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return x;
    
}


    public setX(x: number){
var x = x
this.x= x;
    
}


    public setBasicColorP(basicColor: BasicColor){
var basicColor = basicColor
this.basicColor= basicColor;
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


    setY(y: number){
var y = y
this.y= y;
    
}


    getY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return y;
    
}


}
                
            

