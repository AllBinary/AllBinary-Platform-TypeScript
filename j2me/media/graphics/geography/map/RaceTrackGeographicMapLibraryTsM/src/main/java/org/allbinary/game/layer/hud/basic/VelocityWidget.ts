
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

    
import { OpenGLFeatureUtil } from "../../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js";

    
import { BasicHud } from "../../../../../../org/allbinary/game/graphics/hud/BasicHud.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { MyFont } from "../../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { MathUtil } from "../../../../../../org/allbinary/logic/math/MathUtil.js";

    
import { PrimitiveLongSingleton } from "../../../../../../org/allbinary/logic/math/PrimitiveLongSingleton.js";

    
import { PrimitiveLongUtil } from "../../../../../../org/allbinary/logic/math/PrimitiveLongUtil.js";

    

export class VelocityWidget extends BasicHud {
        

    private readonly KILOMETERS_PER_HOUR_STR: string[] = charArrayOf(' ','k','m','/','h');
        
        

    private readonly totalChars: number = KILOMETERS_PER_HOUR_STR.length
                ;
        
        

    private velocity: number

    private maxVelocity: number

    private string: string[] = PrimitiveLongSingleton.getInstance()!.ZERO;
        
        

    private totalDigits: number = 1;
        
        

    private readonly primitiveLongUtil: PrimitiveLongUtil

    private readonly offset: number

    private offset2: number= 0
public constructor (powerOfTenVelocity: number, location: number, direction: number, basicColor: BasicColor)                        

                            : super(location, direction, 14, MyFont.getInstance()!.getSize() *(5 +MathUtil.getInstance()!.getTotalDigits(powerOfTenVelocity) +1), 2, basicColor){

            super();
            var powerOfTenVelocity = powerOfTenVelocity
var location = location
var direction = direction
var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
this.maxVelocity= powerOfTenVelocity;
    
this.velocity= 0;
    
this.primitiveLongUtil= new PrimitiveLongUtil(powerOfTenVelocity);
    

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    
this.offset= myFont!.stringWidth(this.primitiveLongUtil!.getMaxDigits()) +myFont!.stringWidth(2);
    
}


    public get(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.velocity;
    
}


    public add(value: number){
var value = value
this.set(this.velocity +value);
    
}


    public set(value: number){
var value = value

    var lastVelocity: number = this.velocity;
        
        
;
    
this.velocity= value;
    

                        if(this.velocity > this.maxVelocity)
                        
                                    {
                                    this.velocity= 0;
    

                                    }
                                

                        if(lastVelocity != this.velocity)
                        
                                    {
                                    this.string= primitiveLongUtil!.getCharArray(this.velocity *18);
    

                        if(OpenGLFeatureUtil.getInstance()!.isAnyThreed())
                        
                                    {
                                    this.totalDigits= primitiveLongUtil!.getCurrentTotalDigits() +1;
    

                                    }
                                
                        else {
                            this.totalDigits= primitiveLongUtil!.getCurrentTotalDigits();
    

                        }
                            

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    
this.offset2= this.offset -myFont!.stringWidth(this.totalDigits) -myFont!.stringWidth(2);
    

                                    }
                                
}


    public reduce(value: number){
var value = value
this.set(this.velocity -value);
    
}


    public paint(graphics: Graphics){
var graphics = graphics
super.paint(graphics, string, 0, this.totalDigits, KILOMETERS_PER_HOUR_STR, 0, this.totalChars, offset2, offset);
    
}


}
                
            

