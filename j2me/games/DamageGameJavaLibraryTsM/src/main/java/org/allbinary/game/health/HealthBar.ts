
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Paintable } from "../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    

export class HealthBar extends Paintable
                , HealthListenerInterface {
        

    private readonly animationInterface: HealthBarAnimation

    private readonly healthInterface: HealthInterface

    readonly allbinaryLayer: AllBinaryLayer
public constructor (layerInterface: AllBinaryLayer, healthInterface: Health, animationInterface: HealthBarAnimation, direction: number){

            super();
            var layerInterface = layerInterface
var healthInterface = healthInterface
var animationInterface = animationInterface
var direction = direction
this.allbinaryLayer= layerInterface;
    
this.animationInterface= animationInterface;
    
this.healthInterface= healthInterface;
    
this.healthInterface!.addListener(this);
    
this.onHealthChange();
    
}

public constructor (layerInterface: AllBinaryLayer, healthInterface: Health, location: number, direction: number)                        

                            : this(layerInterface, healthInterface, HealthBarTwodAnimation(layerInterface, location), direction){

            super();
            var layerInterface = layerInterface
var healthInterface = healthInterface
var location = location
var direction = direction


                            //For kotlin this is before the body of the constructor.
                    
}


    public onHealthChange(){
this.animationInterface!.onHealthChange(this.healthInterface!.getHealth() *this.allbinaryLayer!.getWidth() /this.healthInterface!.getMaxHealth());
    
}


    public paint(graphics: Graphics){
var graphics = graphics
this.animationInterface!.paint(graphics, 0, 0);
    
}


    public paintThreed(graphics: Graphics){
var graphics = graphics
this.animationInterface!.paintThreed(graphics, 0, 0, 0);
    
}


}
                
            

