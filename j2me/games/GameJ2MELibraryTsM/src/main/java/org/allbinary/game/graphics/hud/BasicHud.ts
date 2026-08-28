
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
      const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
//not game specific package import { Anchor } from '../../../../../org/allbinary/graphics/Anchor.js';
      const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
//not game specific package import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
//not game specific package import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
      const BasicColorSetUtil = globalThis.org.allbinary.graphics.color.BasicColorSetUtil;

      
//not game specific package import { CanvasStrings } from '../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { DisplayChangeEvent } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
      const DisplayChangeEvent = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEvent;

      
//not game specific package import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
//not game specific package import { UpdateMyFontInterface } from '../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
//not game specific package import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HudGraphicsPosition } from './HudGraphicsPosition.js';
import { BasicHudFactory } from './BasicHudFactory.js';

export class BasicHud
            extends Object
         implements UpdateMyFontInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;

    private readonly displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    readonly updateMyFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    myFontProcessor: MyFontProcessor = updateMyFontProcessor;

    private location: number= 0;

    private direction: number= 0;

    private bufferZone: number= 0;

    private bufferZoneY: number= 0;

    private hudGraphicsPosition: HudGraphicsPosition = HudGraphicsPosition.NULL_HUD_GRAPHICS_POSITION;

    private x: number= 0;

    private y: number= 0;

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.BLACK;

    private color: number;

    updateMaxWidth: number= 0;

    updateMaxHeight: number= 0;

    offsetY: number= 0;

public constructor (location: number, direction: number, bufferZone: number, basicColor: BasicColor){

            super();
        this.setLocation(location);
    
this.setDirection(direction);
    
this.setBufferZone(bufferZone);
    
this.onDisplayChangeEvent(DisplayInfoSingleton.getInstance()!.displayChangeEvent);
    
this.setBasicColorP(basicColor);
    
this.color= basicColor!.intValue();
    
}


    public updateMeasurement(graphics: Graphics){

        try {
            this.hudGraphicsPosition= this.getHudGraphicsPositionWH(this.displayInfo!.getLastWidth(), this.displayInfo!.getLastHeight(), this.updateMaxWidth, this.updateMaxHeight);
    
this.x= this.hudGraphicsPosition!.getPoint()!.getX();
    
this.setY(this.hudGraphicsPosition!.getPoint()!.getY());
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT, e);
    
}

this.myFontProcessor= MyFontProcessor.getInstance();
    
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
            
    getHudGraphicsPositionWH(width: number, height: number, maxWidth: number, maxHeight: number): HudGraphicsPosition{

    var x: number = 0;;
    

    var y: number = 0;;
    

    var anchor: number = 0;;
    

    var basicHudFactory: BasicHudFactory = BasicHudFactory.getInstance()!;;
    

                        if(basicHudFactory!.BOTTOMLEFT == this.getLocation())
                        
                                    {
                                    x= this.bufferZone +2;
    
y= height -maxHeight -this.bufferZone;
    
anchor= Graphics.BOTTOM&Graphics.LEFT;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.BOTTOMRIGHT == this.getLocation())
                        
                                    {
                                    x= width -maxWidth;
    
y= height -maxHeight -this.bufferZone;
    
anchor= Graphics.BOTTOM&Graphics.RIGHT;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.TOPLEFT == this.getLocation())
                        
                                    {
                                    x= this.bufferZone +2;
    
y= this.bufferZoneY;
    
anchor= Anchor.TOP_LEFT;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.TOPRIGHT == this.getLocation())
                        
                                    {
                                    x= width -maxWidth;
    
y= this.bufferZoneY;
    
anchor= Graphics.TOP&Graphics.RIGHT;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.TOPCENTER == this.getLocation())
                        
                                    {
                                    x= ((width -maxWidth) /2);
    
y= this.bufferZoneY;
    
anchor= Graphics.TOP&Graphics.HCENTER;
    

                                    }
                                
                             else 
                        if(basicHudFactory!.BOTTOMCENTER == this.getLocation())
                        
                                    {
                                    x= ((width -maxWidth) /2);
    
y= height -maxHeight -this.bufferZone;
    
anchor= Graphics.BOTTOM&Graphics.HCENTER;
    

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
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){
this.myFontProcessor= this.updateMyFontProcessor;
    
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
    

                        if(J2MEUtil.isHTML())
                        
                                    {
                                    this.bufferZoneY= this.bufferZone;
    

                                    }
                                
                        else {
                            this.bufferZoneY= this.bufferZone +5;
    

                        }
                            
}


    public setLocation(location: number){
this.location= location;
    
}


    public setDirection(direction: number){
this.direction= direction;
    
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


    public paintSSO(graphics: Graphics, string: string, string2: string, offset: number){
this.myFontProcessor!.process(graphics);
    
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP());
    
graphics.drawString(string, this.x, this.getY(), this.hudGraphicsPosition!.getAnchor());
    
graphics.drawString(string2, this.x +offset, this.getY(), this.hudGraphicsPosition!.getAnchor());
    
}


    public paintSSOO(graphics: Graphics, string: string, string2: string, offset: number, offset2: number){
this.myFontProcessor!.process(graphics);
    
graphics.setColor(this.getColor());
    
graphics.drawString(string, this.x +offset, this.getY(), this.hudGraphicsPosition!.getAnchor());
    
graphics.drawString(string2, this.x +offset2, this.getY(), this.hudGraphicsPosition!.getAnchor());
    
}


    public paintDXY(graphics: Graphics, charArray: string[], offset: number, len: number, charArray2: string[], offset2: number, len2: number, xOffset: number, xOffset2: number){
this.myFontProcessor!.process(graphics);
    
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP());
    

    var y: number = this.getY()!;;
    
graphics.drawChars(charArray, offset, len, this.x +xOffset, y, this.hudGraphicsPosition!.getAnchor());
    
graphics.drawChars(charArray2, offset2, len2, this.x +xOffset2, y, this.hudGraphicsPosition!.getAnchor());
    
}


    public paintDX(graphics: Graphics, charArray: string[], offset: number, len: number, charArray2: string[], offset2: number, len2: number, xOffset: number){
this.myFontProcessor!.process(graphics);
    
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP());
    

    var y: number = this.getY()!;;
    
graphics.drawChars(charArray, offset, len, this.x, y, this.hudGraphicsPosition!.getAnchor());
    
graphics.drawChars(charArray2, offset2, len2, this.x +xOffset, y, this.hudGraphicsPosition!.getAnchor());
    
}


    public paintOffsetAndLength(graphics: Graphics, charArray: string[], offset: number, len: number){
this.myFontProcessor!.process(graphics);
    
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP());
    

    var y: number = this.getY()!;;
    
graphics.drawChars(charArray, offset, len, this.x, y, this.hudGraphicsPosition!.getAnchor());
    
}


    public paintString(graphics: Graphics, string: string){
this.myFontProcessor!.process(graphics);
    
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP());
    

    var y: number = this.getY() +this.offsetY;;
    
graphics.drawString(string, this.x, y, this.hudGraphicsPosition!.getAnchor());
    
}


}



