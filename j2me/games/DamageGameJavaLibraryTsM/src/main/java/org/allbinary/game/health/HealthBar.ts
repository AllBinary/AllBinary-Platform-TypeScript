
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
      //not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HealthListenerInterface } from './HealthListenerInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.health.HealthListenerInterface;

                import { HealthBarAnimation } from './HealthBarAnimation.js';
//not GWT import const  = globalThis.org.allbinary.game.health.HealthBarAnimation;

                import { HealthInterface } from './HealthInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.health.HealthInterface;

                import { Health } from './Health.js';
//not GWT import const  = globalThis.org.allbinary.game.health.Health;

                
export class HealthBar extends Paintable implements HealthListenerInterface {
        

    private readonly animationInterface: HealthBarAnimation;

    private readonly healthInterface: HealthInterface;

    readonly allbinaryLayer: AllBinaryLayer;

public constructor (layerInterface: AllBinaryLayer, healthInterface: Health, animationInterface: HealthBarAnimation, direction: number){

            super();
        this.allbinaryLayer= layerInterface;
    
this.animationInterface= animationInterface;
    
this.healthInterface= healthInterface;
    
this.healthInterface!.addListener(this);
    
this.onHealthChange();
    
}


    public onHealthChange(){
this.animationInterface!.onHealthChange(this.healthInterface!.getHealth() *this.allbinaryLayer!.getWidth() /this.healthInterface!.getMaxHealth());
    
}


    public paint(graphics: Graphics){
this.animationInterface!.paintXY(graphics, 0, 0);
    
}


    public paintThreed(graphics: Graphics){
this.animationInterface!.paintThreedXYZ(graphics, 0, 0, 0);
    
}


}



