
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
        



            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not game specific package import { Graphics } from '../../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Animation } from '../../../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
import { Life } from '../../../../../../../org/allbinary/game/ag/life/Life.js';
      //not GWT import and is game specific code const Life = globalThis.org.allbinary.game.ag.life.Life;

      
//not game specific package import { BasicHud } from '../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
      const BasicHud = globalThis.org.allbinary.game.graphics.hud.BasicHud;

      
//not game specific package import { BasicColorFactory } from '../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { DisplayChangeEvent } from '../../../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
      const DisplayChangeEvent = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEvent;

      
//not game specific package import { PaintableInterface } from '../../../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LivesHudWidget extends BasicHud implements PaintableInterface {
        

    private readonly lifeInterface: Life;

    private readonly xArray: number[];

    private readonly animationInterface: Animation;

public constructor (animationInterface: Animation, lifeInterface: Life, location: number, direction: number){
            super(location, direction, 2, BasicColorFactory.getInstance()!.WHITE);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.lifeInterface= lifeInterface;
    

    var size: number = Math.round(this.getLifeInterface()!.getMaxlives());;
    
this.xArray= new Array(size);
    
this.animationInterface= animationInterface;
    
this.updateMaxWidth= this.lifeInterface!.getMaxlives() *16;
    
this.updateMaxHeight= 16;
    
}


    public updateMeasurement(graphics: Graphics){
super.updateMeasurement(graphics);
    

    var maxLives: number = Math.round(this.getLifeInterface()!.getMaxlives());;
    




                        for (
    var index: number = 0;index < maxLives; index++)
        {
this.xArray[index]= this.getX() +(index *16);
    
}

}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){
super.onDisplayChangeEvent(displayChangeEvent);
    
this.myFontProcessor= this.updateMyFontProcessor;
    
}


    public setX(x: number){
super.setX(x);
    
this.myFontProcessor= this.updateMyFontProcessor;
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    




                        for (
    var index: number = Math.round(this.getLifeInterface()!.get());--index >= 0; )
        {
this.animationInterface!.paintXY(graphics, this.xArray[index]!, this.getY());
    
}

}


    public paintThreed(graphics: Graphics){
}


    public getLifeInterface(): Life{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lifeInterface;
    
}


}
                
            

