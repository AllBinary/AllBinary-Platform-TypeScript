
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

    
import { Animation } from "../../../../../../../org/allbinary/animation/Animation.js";

    
import { BasicHud } from "../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js";

    
import { Life } from "../../../../../../../org/allbinary/game/life/Life.js";

    
import { BasicColorFactory } from "../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { DisplayChangeEvent } from "../../../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js";

    
import { PaintableInterface } from "../../../../../../../org/allbinary/graphics/paint/PaintableInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LivesHudWidget extends BasicHud implements PaintableInterface {
        

    private readonly lifeInterface: Life

    private xArray: number[]

    private readonly animationInterface: Animation
public constructor (animationInterface: Animation, lifeInterface: Life, location: number, direction: number){
            super(location, direction, 16, lifeInterface!.getMaxlives() *16, 2, BasicColorFactory.getInstance()!.WHITE);
                    var animationInterface = animationInterface
var lifeInterface = lifeInterface
var location = location
var direction = direction


                            //For kotlin this is before the body of the constructor.
                    
this.lifeInterface= lifeInterface;
    
this.xArray= new Array(this.getLifeInterface()!.getMaxlives(););
    
this.update();
    
this.animationInterface= animationInterface;
    
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){
var displayChangeEvent = displayChangeEvent
super.onDisplayChangeEvent(displayChangeEvent);
    
this.update();
    
}


    update(){

                        if(this.xArray != 
                                    null
                                )
                        
                                    {
                                    
    var maxLives: number = this.getLifeInterface()!.getMaxlives();;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < maxLives; index++)
        {
this.xArray[index]= this.getX() +(index *16);
    
}


                                    }
                                
}


    public setX(x: number){
var x = x
super.setX(x);
    
this.update();
    
}


    public paint(graphics: Graphics){
var graphics = graphics




                        for (
    var index: number = this.getLifeInterface()!.get();;
        
        
--index >= 0; )
        {
this.animationInterface!.paint(graphics, xArray[index]!, this.getY());
    
}

}


    public paintThreed(graphics: Graphics){
var graphics = graphics
}


    public getLifeInterface(): Life{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lifeInterface;
    
}


}
                
            

