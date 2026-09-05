
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

        


            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { BasicHud } from '../../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
//not GWT import const BasicHud = globalThis.org.allbinary.game.graphics.hud.BasicHud;

      
import { BasicColor } from '../../../../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { MyFontProcessor } from '../../../../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
//not plain js import { PrimitiveLongSingleton } 
const PrimitiveLongSingleton = globalThis.org.allbinary.logic.math.PrimitiveLongSingleton;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Timer } from './Timer.js';
//not GWT import - same folder const Timer = globalThis.org.allbinary.game.ag.layer.hud.basic.time.Timer;

                
export class TimeHudWidget extends BasicHud {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(location: number, direction: number, basicColor: BasicColor, timer: Timer): TimeHudWidget{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TimeHudWidget(location, direction, 2, basicColor, timer);
    
}


    private readonly TIME_STRING: string = "Time ";

    private readonly TIME_CHAR_ARRAY: string[] = ['T','i','m','e',' '];

    private offset: number= 0;

    private string: string[] = PrimitiveLongSingleton.getInstance()!.ZERO;

    private totalDigits: number = 1;

    private readonly timer: Timer;

public constructor (location: number, direction: number, bufferZone: number, basicColor: BasicColor, timer: Timer){
            super(location, direction, bufferZone, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.timer= timer;
    
this.set();
    
this.updateMaxHeight= 14;
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.updateMaxWidth= font.getSize() *5;
    
this.offset= font.stringWidth(this.TIME_STRING) +MyFontProcessor.defaultStringWidth(font, 3);
    
super.updateMeasurement(graphics);
    
}


    public update(){
this.timer.update();
    
this.set();
    
}


    set(){
this.string= this.timer.getTimeChars();
    
this.totalDigits= this.timer.getCurrentTotalDigits();
    
}


    public getTimer(): Timer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timer;
    
}


    public paint(graphics: Graphics){
super.paintDX(graphics, this.TIME_CHAR_ARRAY, 0, this.TIME_CHAR_ARRAY.length, this.string, 0, this.totalDigits, this.offset);
    
}


}



