
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
        



            import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
        
import { Font } from '../../../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
      
import { BasicHud } from '../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
      
import { BasicHudFactory } from '../../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
      
import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { MyFontProcessor } from '../../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { PaintableInterface } from '../../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      
import { PrimitiveLongSingleton } from '../../../../../../org/allbinary/logic/math/PrimitiveLongSingleton.js';
      
import { PrimitiveLongUtil } from '../../../../../../org/allbinary/logic/math/PrimitiveLongUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class NumberStringHud extends BasicHud implements PaintableInterface {
        

    private readonly primitiveLongUtil: PrimitiveLongUtil;

    private readonly prependString: string;

    private readonly PREPEND_STRING: string[];

    private value: number;

    private max: number;

    private offset: number= 0;

    private valueString: string[];

    private valueTotalDigits: number= 0;

public constructor (prependString: string, max: number, location: number, direction: number, bufferZone: number, basicColor: BasicColor){
            super(location, direction, bufferZone, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.prependString= prependString;
    
this.PREPEND_STRING= prependString!.split('');
    
this.valueString= PrimitiveLongSingleton.getInstance()!.NUMBER_CHAR_ARRAYS[0]!;
    
this.primitiveLongUtil= PrimitiveLongUtil.createPowerOfTen(max +1);
    
this.max= max;
    
this.value= 0;
    

                        if(direction == 0)
                        
                                    {
                                    


                            throw new RuntimeException(BasicHudFactory.getInstance()!.DIRECTION_EXCEPTION);
                    

                                    }
                                
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.offset= font.stringWidth(this.prependString) +MyFontProcessor.defaultCharWidth(font);
    
super.updateMeasurement(graphics);
    
}


    public get(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.value;
    
}


    public add(value: number){
this.set(this.value +value);
    
}


    public set(value: number){
this.value= value;
    

                        if(this.value > this.max)
                        
                                    {
                                    this.value= 0;
    

                                    }
                                
this.valueString= this.primitiveLongUtil!.getCharArray(this.value);
    
this.valueTotalDigits= this.primitiveLongUtil!.getCurrentTotalDigits();
    
}


    public reduce(value: number){
this.set(this.value -value);
    
}


    public paint(graphics: Graphics){
super.paintDX(graphics, this.PREPEND_STRING, 0, this.PREPEND_STRING.length, this.valueString, 0, this.valueTotalDigits, this.offset);
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.myFontProcessor!.process(graphics);
    

    var charArray: string[] = this.PREPEND_STRING;;
    

    var len: number = this.PREPEND_STRING.length
                ;;
    

    var charArray2: string[] = this.valueString;;
    

    var len2: number = this.valueTotalDigits;;
    
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP());
    
graphics.drawChars(charArray, 0, len, x, y, 0);
    
graphics.drawChars(charArray2, 0, len2, x -this.offset, y, 0);
    
}


    public paintThreed(graphics: Graphics){
}


}
                
            

