
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
        
import { Font } from '../../../../../../javax/microedition/lcdui/Font.js';
      //not GWT import const Font = globalThis.javax.microedition.lcdui.Font;

      
import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
      //not GWT import const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { OpenGLFeatureUtil } from '../../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
      //not GWT import const OpenGLFeatureUtil = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureUtil;

      
import { BasicHud } from '../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
      //not GWT import const BasicHud = globalThis.org.allbinary.game.graphics.hud.BasicHud;

      
import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { MyFontProcessor } from '../../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      //not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
//not plain js import { MathUtil } from '../../../../../../org/allbinary/logic/math/MathUtil.js';
      const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;

      
//not plain js import { PrimitiveLongSingleton } from '../../../../../../org/allbinary/logic/math/PrimitiveLongSingleton.js';
      const PrimitiveLongSingleton = globalThis.org.allbinary.logic.math.PrimitiveLongSingleton;

      
//not plain js import { PrimitiveLongUtil } from '../../../../../../org/allbinary/logic/math/PrimitiveLongUtil.js';
      const PrimitiveLongUtil = globalThis.org.allbinary.logic.math.PrimitiveLongUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class VelocityWidget extends BasicHud {
        

    private readonly KILOMETERS_PER_HOUR_STR: string[] = [' ','k','m','/','h'];

    private readonly totalChars: number = this.KILOMETERS_PER_HOUR_STR.length
                ;

    private velocity: number;

    private maxVelocity: number;

    private string: string[] = PrimitiveLongSingleton.getInstance()!.ZERO;

    private totalDigits: number = 1;

    private readonly powerOfTenVelocity: number;

    private readonly primitiveLongUtil: PrimitiveLongUtil;

    private offset: number = 0;

    private offset2: number = 0;

public constructor (powerOfTenVelocity: number, location: number, direction: number, basicColor: BasicColor){
            super(location, direction, 2, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.powerOfTenVelocity= powerOfTenVelocity;
    
this.maxVelocity= powerOfTenVelocity;
    
this.velocity= 0;
    
this.primitiveLongUtil= PrimitiveLongUtil.createPowerOfTen(powerOfTenVelocity);
    
this.updateMaxHeight= 14;
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.updateMaxWidth= font.getSize() *(5 +MathUtil.getInstance()!.getTotalDigits(this.powerOfTenVelocity) +1);
    
super.updateMeasurement(graphics);
    
this.offset= MyFontProcessor.defaultStringWidth(font, this.primitiveLongUtil!.getMaxDigits()) +MyFontProcessor.defaultStringWidth(font, 2);
    
this.offset2= this.offset -MyFontProcessor.defaultStringWidth(font, this.totalDigits) -MyFontProcessor.defaultStringWidth(font, 2);
    
}


    public get(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.velocity;
    
}


    public add(value: number){
this.set(this.velocity +value);
    
}


    public set(value: number){

    var lastVelocity: number = this.velocity;;
    
this.velocity= value;
    

                        if(this.velocity > this.maxVelocity)
                        
                                    {
                                    this.velocity= 0;
    

                                    }
                                

                        if(lastVelocity != this.velocity)
                        
                                    {
                                    this.string= this.primitiveLongUtil!.getCharArray(this.velocity *18);
    

                        if(OpenGLFeatureUtil.getInstance()!.isAnyThreed())
                        
                                    {
                                    this.totalDigits= this.primitiveLongUtil!.getCurrentTotalDigits() +1;
    

                                    }
                                
                        else {
                            this.totalDigits= this.primitiveLongUtil!.getCurrentTotalDigits();
    

                        }
                            
this.myFontProcessor= this.updateMyFontProcessor;
    

                                    }
                                
}


    public reduce(value: number){
this.set(this.velocity -value);
    
}


    public paint(graphics: Graphics){
super.paintDXY(graphics, this.string, 0, this.totalDigits, this.KILOMETERS_PER_HOUR_STR, 0, this.totalChars, this.offset2, this.offset);
    
}


}



