
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Health } from '../../../../../org/allbinary/game/health/Health.js';
      //not GWT import const Health = globalThis.org.allbinary.game.health.Health;

      
import { HealthBarAnimation } from '../../../../../org/allbinary/game/health/HealthBarAnimation.js';
      //not GWT import const HealthBarAnimation = globalThis.org.allbinary.game.health.HealthBarAnimation;

      
import { HealthBarTwodAnimation } from '../../../../../org/allbinary/game/health/HealthBarTwodAnimation.js';
      //not GWT import const HealthBarTwodAnimation = globalThis.org.allbinary.game.health.HealthBarTwodAnimation;

      
import { HealthInterface } from '../../../../../org/allbinary/game/health/HealthInterface.js';
      //not GWT import const HealthInterface = globalThis.org.allbinary.game.health.HealthInterface;

      
import { HealthListenerInterface } from '../../../../../org/allbinary/game/health/HealthListenerInterface.js';
      //not GWT import const HealthListenerInterface = globalThis.org.allbinary.game.health.HealthListenerInterface;

      
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      //not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Life } from './Life.js';
//not GWT import const  = globalThis.org.allbinary.game.ag.life.Life;

                
export class HealthIncludingLifeBar extends Paintable implements HealthListenerInterface {
        

    private readonly animationInterface: HealthBarAnimation;

    private readonly life: Life;

    private readonly healthInterface: HealthInterface;

    readonly allbinaryLayer: AllBinaryLayer;

public constructor (layerInterface: AllBinaryLayer, life: Life, healthInterface: Health, animationInterface: HealthBarAnimation, direction: number){

            super();
        this.allbinaryLayer= layerInterface;
    
this.animationInterface= animationInterface;
    
this.life= life;
    
this.healthInterface= healthInterface;
    
this.healthInterface!.addListener(this);
    
this.onHealthChange();
    
}


public constructor (layerInterface: AllBinaryLayer, life: Life, healthInterface: Health, location: number, direction: number){
            this(layerInterface, life, healthInterface, new HealthBarTwodAnimation(layerInterface, location), direction);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public onHealthChange(){
this.animationInterface!.onHealthChange(((this.healthInterface!.getHealth() +(this.healthInterface!.getMaxHealth() *this.life.get())) *this.allbinaryLayer!.getWidth()) /(this.healthInterface!.getMaxHealth() +(this.healthInterface!.getMaxHealth() *this.life.getStartLives())));
    
}


    public paint(graphics: Graphics){
this.animationInterface!.paintXY(graphics, 0, 0);
    
}


    public paintThreed(graphics: Graphics){
this.animationInterface!.paintThreedXYZ(graphics, 0, 0, 0);
    
}


}



