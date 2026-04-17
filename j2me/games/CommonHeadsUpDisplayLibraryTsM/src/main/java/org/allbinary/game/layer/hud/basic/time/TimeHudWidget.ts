
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
        



import { Graphics } from "../../../../../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicHud } from "../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js";

    
import { BasicHudFactory } from "../../../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js";

    
import { BasicColor } from "../../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { MyFont } from "../../../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { PrimitiveLongSingleton } from "../../../../../../../org/allbinary/logic/math/PrimitiveLongSingleton.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Timer } from "./Timer.js";

export class TimeHudWidget extends BasicHud {
        

    private readonly TIME_STRING: string = "Time ";
        
        

    private readonly TIME_CHAR_ARRAY: string[] = charArrayOf('T','i','m','e',' ');
        
        

    private offset: number

    private string: string[] = PrimitiveLongSingleton.getInstance()!.ZERO;
        
        

    private totalDigits: number = 1;
        
        

    private readonly timer: Timer
public constructor (location: number, direction: number, maxHeight: number, maxWidth: number, bufferZone: number, basicColor: BasicColor, timer: Timer)                        

                            : super(location, direction, maxHeight, maxWidth, bufferZone, basicColor){

            super();
            var location = location
var direction = direction
var maxHeight = maxHeight
var maxWidth = maxWidth
var bufferZone = bufferZone
var basicColor = basicColor
var timer = timer


                            //For kotlin this is before the body of the constructor.
                    
this.timer= timer;
    
this.set();
    

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    
this.offset= myFont!.stringWidth(this.TIME_STRING) +myFont!.stringWidth(3);
    

                        if(direction == 0)
                        
                                    {
                                    


                            throw new Error(BasicHudFactory.getInstance()!.DIRECTION_EXCEPTION)

                                    }
                                
}

public constructor (location: number, direction: number, maxWidth: number, basicColor: BasicColor, timer: Timer)                        

                            : this(location, direction, 14, maxWidth, 2, basicColor, timer){

            super();
            var location = location
var direction = direction
var maxWidth = maxWidth
var basicColor = basicColor
var timer = timer


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (location: number, direction: number, basicColor: BasicColor, timer: Timer)                        

                            : this(location, direction, 14, MyFont.getInstance()!.getSize() *5, 2, basicColor, timer){

            super();
            var location = location
var direction = direction
var basicColor = basicColor
var timer = timer


                            //For kotlin this is before the body of the constructor.
                    
}


    public update(){
this.timer.update();
    
this.set();
    
}


    set(){
this.string= timer.getTimeChars();
    
totalDigits= timer.getCurrentTotalDigits();
    
}


    public paint(graphics: Graphics){
var graphics = graphics
super.paint(graphics, TIME_CHAR_ARRAY, 0, TIME_CHAR_ARRAY.length, string, 0, totalDigits, offset);
    
}


    public getTimer(): Timer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return timer;
    
}


}
                
            

