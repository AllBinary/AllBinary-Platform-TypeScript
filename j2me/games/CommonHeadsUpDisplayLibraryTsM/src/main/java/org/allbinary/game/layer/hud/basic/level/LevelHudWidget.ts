
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

    
import { BasicColorFactory } from "../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { MyFont } from "../../../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { PaintableInterface } from "../../../../../../../org/allbinary/graphics/paint/PaintableInterface.js";

    
import { NullUtil } from "../../../../../../../org/allbinary/logic/NullUtil.js";

    
import { PrimitiveLongUtil } from "../../../../../../../org/allbinary/logic/math/PrimitiveLongUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LevelHudWidget extends BasicHud implements PaintableInterface {
        

    private level: number

    private maxlevel: number

    private readonly levelString: string[]

    private levelNumberCharArray: string[] = NullUtil.getInstance()!.NULL_CHAR_ARRAY;
        
        

    private levelNumberTotalDigits: number= 0

    private readonly offset: number

    private readonly primitiveLongUtil: PrimitiveLongUtil
public constructor (maxlevel: number, location: number, direction: number)                        

                            : this(maxlevel, location, direction, MyFont.getInstance()!.getSize() *4){

            super();
            var maxlevel = maxlevel
var location = location
var direction = direction


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (maxlevel: number, location: number, direction: number, maxWidth: number)                        

                            : super(location, direction, 14, maxWidth, 2, BasicColorFactory.getInstance()!.GREY){

            super();
            var maxlevel = maxlevel
var location = location
var direction = direction
var maxWidth = maxWidth


                            //For kotlin this is before the body of the constructor.
                    

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    
this.primitiveLongUtil= new PrimitiveLongUtil(1000);
    

    var LEVEL: string = "Lv ";
        
        
;
    
this.levelString= LEVEL.toCharArray();
    
this.offset= myFont!.charsWidth(this.levelString, 0, this.levelString!.length) +myFont!.getSize();
    
this.maxlevel= maxlevel;
    
this.level= maxlevel;
    
this.update();
    
}


    update(){
levelNumberCharArray= this.primitiveLongUtil!.getCharArray(this.level);
    
levelNumberTotalDigits= this.primitiveLongUtil!.getCurrentTotalDigits();
    
}


    public setLevel(level: number){
var level = level
this.level= level;
    
this.update();
    
}


    public nextLevel(){
this.level++;
    
this.update();
    
}


    public previousLevel(){
this.level--;
    

                        if(this.level < 0)
                        
                                    {
                                    this.level= 0;
    

                                    }
                                
this.update();
    
}


    public isComplete(): boolean{

                        if(this.level <= maxlevel)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


    public paint(graphics: Graphics){
var graphics = graphics
super.paint(graphics, levelString, 0, levelString!.length, levelNumberCharArray, 0, levelNumberTotalDigits, this.offset);
    
}


    public paintThreed(graphics: Graphics){
var graphics = graphics
}


}
                
            

