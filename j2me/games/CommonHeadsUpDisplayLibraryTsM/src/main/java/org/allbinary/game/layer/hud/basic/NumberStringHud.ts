
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
        



import { Graphics } from "../../../../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicHud } from "../../../../../../org/allbinary/game/graphics/hud/BasicHud.js";

    
import { BasicHudFactory } from "../../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { MyFont } from "../../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { PaintableInterface } from "../../../../../../org/allbinary/graphics/paint/PaintableInterface.js";

    
import { PrimitiveLongSingleton } from "../../../../../../org/allbinary/logic/math/PrimitiveLongSingleton.js";

    
import { PrimitiveLongUtil } from "../../../../../../org/allbinary/logic/math/PrimitiveLongUtil.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class NumberStringHud extends BasicHud implements PaintableInterface {
        

    public static readonly NULL_NUMBER_STRING_HUD: NumberStringHud = new NumberStringHud(StringUtil.getInstance()!.EMPTY_STRING, 9, BasicHudFactory.getInstance()!.ABSOLUTE, 0, 0, 0, BasicColorFactory.getInstance()!.NULL_COLOR);
        
        

    private readonly PREPEND_STRING: string[]

    private value: number

    private max: number

    private offset: number

    private valueString: string[]

    private valueTotalDigits: number= 0

    private readonly primitiveLongUtil: PrimitiveLongUtil
public constructor (prependString: string, max: number, location: number, maxHeight: number, maxWidth: number, bufferZone: number, basicColor: BasicColor)                        

                            : super(location, 1, maxHeight, maxWidth, bufferZone, basicColor){

            super();
            var prependString = prependString
var max = max
var location = location
var maxHeight = maxHeight
var maxWidth = maxWidth
var bufferZone = bufferZone
var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
this.PREPEND_STRING= prependString!.toCharArray();
    

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    
this.offset= myFont!.stringWidth(prependString) +myFont!.charWidth();
    
this.valueString= PrimitiveLongSingleton.getInstance()!.NUMBER_CHAR_ARRAYS[0]!;
    
this.primitiveLongUtil= new PrimitiveLongUtil(max +1);
    
this.max= max;
    
this.value= 0;
    
}

public constructor (prependString: string, max: number, location: number, direction: number, maxHeight: number, maxWidth: number, bufferZone: number, basicColor: BasicColor)                        

                            : super(location, direction, maxHeight, maxWidth, bufferZone, basicColor){

            super();
            var prependString = prependString
var max = max
var location = location
var direction = direction
var maxHeight = maxHeight
var maxWidth = maxWidth
var bufferZone = bufferZone
var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
this.PREPEND_STRING= prependString!.toCharArray();
    

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    
this.offset= myFont!.stringWidth(prependString) +myFont!.charWidth();
    
this.valueString= PrimitiveLongSingleton.getInstance()!.NUMBER_CHAR_ARRAYS[0]!;
    
this.primitiveLongUtil= new PrimitiveLongUtil(max +1);
    
this.max= max;
    
this.value= 0;
    

                        if(direction == 0)
                        
                                    {
                                    


                            throw new Error(BasicHudFactory.getInstance()!.DIRECTION_EXCEPTION)

                                    }
                                
}


    public get(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.value;
    
}


    public add(value: number){
var value = value
this.set(this.value +value);
    
}


    public set(value: number){
var value = value
this.value= value;
    

                        if(this.value > this.max)
                        
                                    {
                                    this.value= 0;
    

                                    }
                                
this.valueString= this.primitiveLongUtil!.getCharArray(this.value);
    
this.valueTotalDigits= this.primitiveLongUtil!.getCurrentTotalDigits();
    
}


    public reduce(value: number){
var value = value
this.set(this.value -value);
    
}


    public paint(graphics: Graphics){
var graphics = graphics
super.paint(graphics, PREPEND_STRING, 0, PREPEND_STRING.length, this.valueString, 0, this.valueTotalDigits, offset);
    
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y

    var charArray: string[] = PREPEND_STRING;
        
        
;
    

    var len: number = PREPEND_STRING.length
                ;
        
        
;
    

    var charArray2: string[] = this.valueString;
        
        
;
    

    var len2: number = this.valueTotalDigits;
        
        
;
    
this.basicSetColorUtil!.setBasicColorP(graphics, getBasicColorP());
    
graphics.drawChars(charArray, 0, len, x, y, 0);
    
graphics.drawChars(charArray2, 0, len2, x -this.offset, y, 0);
    
}


    public paintThreed(graphics: Graphics){
var graphics = graphics
}


}
                
            

