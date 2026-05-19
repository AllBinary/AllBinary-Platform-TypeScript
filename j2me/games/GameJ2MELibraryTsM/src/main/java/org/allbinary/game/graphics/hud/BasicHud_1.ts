
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      
import { Anchor } from '../../../../../org/allbinary/graphics/Anchor.js';
      
import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      
import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      
import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
      
import { CanvasStrings } from '../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      
import { DisplayChangeEvent } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
      
import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HudGraphicsPosition } from './HudGraphicsPosition.js';
import { BasicHudFactory } from './BasicHudFactory.js';

export class BasicHud_1
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;

    private location: number= 0

    private direction: number= 0

    private bufferZone: number= 0

    private maxWidth: number= 0

    private maxHeight: number= 0

    private hudGraphicsPosition: HudGraphicsPosition = HudGraphicsPosition.NULL_HUD_GRAPHICS_POSITION;

    private x: number= 0

    private y: number= 0

    private readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.BLACK;

    private color: number
public constructor (location: number, direction: number, maxHeight: number, maxWidth: number, bufferZone: number, basicColor: BasicColor){

            super();
        this.setLocation(location);
    
this.setDirection(direction);
    
this.setBufferZone(bufferZone);
    
this.setMaxWidth(maxWidth);
    
this.setMaxHeight(maxHeight);
    
this.onDisplayChangeEvent(DisplayInfoSingleton.getInstance()!.displayChangeEvent);
    
this.setBasicColorP(basicColor);
    
this.color= basicColor!.intValue();
    
}


    public getLocation(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.location;
    
}


    public getDirection(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.direction;
    
}


                //@Throws(Exception.constructor)
            
    getHudGraphicsPositionWH(width: number, height: number): HudGraphicsPosition{

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
                                    x= this.bufferZone +2;
    
y= height -this.maxHeight -this.bufferZone;
    
anchor= Graphics.BOTTOM&Graphics.LEFT;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.BOTTOMRIGHT == this.getLocation())
                        
                                    {
                                    x= width -this.maxWidth;
    
y= height -this.maxHeight -this.bufferZone;
    
anchor= Graphics.BOTTOM&Graphics.RIGHT;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.TOPLEFT == this.getLocation())
                        
                                    {
                                    x= this.bufferZone +2;
    
y= this.bufferZone +5;
    
anchor= Anchor.TOP_LEFT;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.TOPRIGHT == this.getLocation())
                        
                                    {
                                    x= width -this.maxWidth;
    
y= this.bufferZone +5;
    
anchor= Graphics.TOP&Graphics.RIGHT;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.TOPCENTER == this.getLocation())
                        
                                    {
                                    x= ((width -this.maxWidth) /2);
    
y= this.bufferZone +5;
    
anchor= Graphics.TOP&Graphics.HCENTER;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.BOTTOMCENTER == this.getLocation())
                        
                                    {
                                    x= ((width -this.maxWidth) /2);
    
y= height -this.maxHeight -this.bufferZone;
    
anchor= Graphics.BOTTOM&Graphics.HCENTER;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.ABSOLUTE == this.getLocation())
                        
                                    {
                                    x= this.maxHeight;
    
y= this.maxWidth;
    
anchor= 0;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HudGraphicsPosition(this.getPoint(x, y), anchor);
    
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){

        try {
            
    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
;
    
this.hudGraphicsPosition= this.getHudGraphicsPositionWH(displayInfo!.getLastWidth(), displayInfo!.getLastHeight());
    
this.x= this.hudGraphicsPosition!.getPoint()!.getX();
    
this.setY(this.hudGraphicsPosition!.getPoint()!.getY());
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT, e);
    
}

}


    getPoint(x: number, y: number): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PointFactory.getInstance()!.createXY(x, y);;
    
}


    public getBufferZone(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.bufferZone;
    
}


    public setBufferZone(bufferZone: number){
this.bufferZone= bufferZone;
    
}


    public getMaxWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxWidth;
    
}


    public setMaxWidth(maxWidth: number){
this.maxWidth= maxWidth;
    
}


    public getMaxHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxHeight;
    
}


    public setMaxHeight(maxHeight: number){
this.maxHeight= maxHeight;
    
}


    public setLocation(location: number){
this.location= location;
    
}


    public setDirection(direction: number){
this.direction= direction;
    
}


    public paintSSO(graphics: Graphics, string: string, string2: string, offset: number){
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP());
    
graphics.drawString(string, this.x, this.getY(), this.hudGraphicsPosition!.getAnchor());
    
graphics.drawString(string2, this.x +offset, this.getY(), this.hudGraphicsPosition!.getAnchor());
    
}


    public paintSSOO(graphics: Graphics, string: string, string2: string, offset: number, offset2: number){
graphics.setColor(this.getColor());
    
graphics.drawString(string, this.x +offset, this.getY(), this.hudGraphicsPosition!.getAnchor());
    
graphics.drawString(string2, this.x +offset2, this.getY(), this.hudGraphicsPosition!.getAnchor());
    
}


    public paintDXY(graphics: Graphics, charArray: string[], offset: number, len: number, charArray2: string[], offset2: number, len2: number, xOffset: number, xOffset2: number){
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP());
    

    var y: number = this.getY()!;
;
    
graphics.drawChars(charArray, offset, len, this.x +xOffset, y, this.hudGraphicsPosition!.getAnchor());
    
graphics.drawChars(charArray2, offset2, len2, this.x +xOffset2, y, this.hudGraphicsPosition!.getAnchor());
    
}


    public paintDX(graphics: Graphics, charArray: string[], offset: number, len: number, charArray2: string[], offset2: number, len2: number, xOffset: number){
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP());
    

    var y: number = this.getY()!;
;
    
graphics.drawChars(charArray, offset, len, this.x, y, this.hudGraphicsPosition!.getAnchor());
    
graphics.drawChars(charArray2, offset2, len2, this.x +xOffset, y, this.hudGraphicsPosition!.getAnchor());
    
}


    public paintOffsetAndLength(graphics: Graphics, charArray: string[], offset: number, len: number){
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP());
    

    var y: number = this.getY()!;
;
    
graphics.drawChars(charArray, offset, len, this.x, y, this.hudGraphicsPosition!.getAnchor());
    
}


    offsetY: number= 0

    public paint(graphics: Graphics, string: string){
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP());
    

    var y: number = this.getY() +this.offsetY;
;
    
graphics.drawString(string, this.x, y, this.hudGraphicsPosition!.getAnchor());
    
}


    getHudGraphicsPosition(): HudGraphicsPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hudGraphicsPosition;
    
}


    public getColor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.color;
    
}


    public getX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.x;
    
}


    public setX(x: number){
this.x= x;
    
}


    public setBasicColorP(basicColor: BasicColor){
this.basicColor= basicColor;
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicColor;
    
}


    setY(y: number){
this.y= y;
    
}


    getY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.y;
    
}


}
                
            

