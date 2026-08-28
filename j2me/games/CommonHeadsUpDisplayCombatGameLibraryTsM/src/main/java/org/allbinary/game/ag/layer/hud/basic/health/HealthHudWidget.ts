
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
        



            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { Graphics } from '../../../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Animation } from '../../../../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { BasicHud } from '../../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
      const BasicHud = globalThis.org.allbinary.game.graphics.hud.BasicHud;

      
//not game specific package import { Health } from '../../../../../../../../org/allbinary/game/health/Health.js';
      const Health = globalThis.org.allbinary.game.health.Health;

      
//not game specific package import { HealthListenerInterface } from '../../../../../../../../org/allbinary/game/health/HealthListenerInterface.js';
      const HealthListenerInterface = globalThis.org.allbinary.game.health.HealthListenerInterface;

      
//not game specific package import { BasicColorFactory } from '../../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { PaintableInterface } from '../../../../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
//not game specific package import { GameTickTimeDelayHelper } from '../../../../../../../../org/allbinary/time/GameTickTimeDelayHelper.js';
      const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;

      
//not game specific package import { GameTickTimeDelayHelperFactory } from '../../../../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
//not game specific package import { NoTimeDelayHelper } from '../../../../../../../../org/allbinary/time/NoTimeDelayHelper.js';
      const NoTimeDelayHelper = globalThis.org.allbinary.time.NoTimeDelayHelper;

      
//not game specific package import { TimeDelayHelper } from '../../../../../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HealthHudWidget extends BasicHud implements PaintableInterface, HealthListenerInterface {
        

    private healthScale: number;

    animationInterface: Animation;

    healthInterface: Health;

    max: number= 0;

    private xArray: number[];

    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;

public constructor (animationInterface: Animation, healthInterface: Health, location: number, direction: number){
            super(location, direction, 2, BasicColorFactory.getInstance()!.WHITE);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.animationInterface= animationInterface;
    
this.healthInterface= healthInterface;
    
this.healthInterface!.addListener(this);
    
this.healthScale= (this.healthInterface!.getMaxHealth() /6) +1;
    
this.onHealthChange();
    
this.updateMaxWidth= healthInterface!.getMaxHealth() *16;
    
this.updateMaxHeight= 16;
    
this.xArray= new Array(30);
    
this.update();
    
}


    update(){

                        if(this.xArray != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;index < this.xArray!.length; index++)
        {
this.xArray[index]= this.getX() +(index *16);
    
}


                                    }
                                
}


    public setX(x: number){
super.setX(x);
    
this.update();
    
}


    private timeDelayHelper: TimeDelayHelper = NoTimeDelayHelper.SINGLETON;

    private readonly slowBeatTimeDelayHelper: TimeDelayHelper = new TimeDelayHelper(1280);

    private readonly mediumBeatTimeDelayHelper: TimeDelayHelper = new TimeDelayHelper(640);

    private readonly fastBeatTimeDelayHelper: TimeDelayHelper = new TimeDelayHelper(320);

    public onHealthChange(){
this.max= (this.healthInterface!.getHealth() /this.healthScale);
    
this.timeDelayHelper= NoTimeDelayHelper.SINGLETON;
    

                        if(this.max <= 1 && this.healthInterface!.isAlive())
                        
                                    {
                                    this.max= 1;
    

                        if(this.healthScale -this.healthInterface!.getHealth() > (this.healthScale *2) /3)
                        
                                    {
                                    this.timeDelayHelper= this.slowBeatTimeDelayHelper;
    

                                    }
                                
                             else 
                        if(this.healthScale -this.healthInterface!.getHealth() > this.healthScale /3)
                        
                                    {
                                    this.timeDelayHelper= this.mediumBeatTimeDelayHelper;
    

                                    }
                                
                        else {
                            this.timeDelayHelper= this.fastBeatTimeDelayHelper;
    

                        }
                            

                                    }
                                
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    




                        for (
    var index: number = 0;index < this.max; index++)
        {

                        if(this.timeDelayHelper!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    this.animationInterface!.paintXY(graphics, this.xArray[index]!, this.getY());
    

                                    }
                                
}

}


    public paintThreed(graphics: Graphics){
}


}
                
            

