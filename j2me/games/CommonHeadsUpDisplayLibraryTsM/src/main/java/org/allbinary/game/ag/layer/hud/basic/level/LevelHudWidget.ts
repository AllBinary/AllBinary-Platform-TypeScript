
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
        
//not game specific package import { Font } from '../../../../../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { Graphics } from '../../../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { BasicHud } from '../../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
      const BasicHud = globalThis.org.allbinary.game.graphics.hud.BasicHud;

      
//not game specific package import { BasicColorFactory } from '../../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { PaintableInterface } from '../../../../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
//not game specific package import { NullUtil } from '../../../../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { PrimitiveLongUtil } from '../../../../../../../../org/allbinary/logic/math/PrimitiveLongUtil.js';
      const PrimitiveLongUtil = globalThis.org.allbinary.logic.math.PrimitiveLongUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LevelHudWidget extends BasicHud implements PaintableInterface {
        

                //@Throws(Exception.constructor)
            
    public static createHud(maxlevel: number, location: number, direction: number): LevelHudWidget{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new LevelHudWidget(maxlevel, location, direction);
    
}


    private level: number;

    private maxlevel: number;

    private readonly levelString: string[];

    private levelNumberCharArray: string[] = NullUtil.getInstance()!.NULL_CHAR_ARRAY;

    private levelNumberTotalDigits: number= 0;

    private offset: number= 0;

    private readonly primitiveLongUtil: PrimitiveLongUtil;

public constructor (maxlevel: number, location: number, direction: number){
            super(location, direction, 2, BasicColorFactory.getInstance()!.GREY);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.primitiveLongUtil= PrimitiveLongUtil.createPowerOfTen(1000);
    

    var LEVEL: string = "Lv ";;
    
this.levelString= LEVEL.split('');
    
this.maxlevel= maxlevel;
    
this.level= maxlevel;
    
this.update();
    
this.updateMaxHeight= 14;
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.updateMaxWidth= font.getSize() *4;
    
this.offset= font.charsWidth(this.levelString, 0, this.levelString!.length) +font.getSize();
    
super.updateMeasurement(graphics);
    
}


    update(){
this.levelNumberCharArray= this.primitiveLongUtil!.getCharArray(this.level);
    
this.levelNumberTotalDigits= this.primitiveLongUtil!.getCurrentTotalDigits();
    
}


    public setLevel(level: number){
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

                        if(this.level <= this.maxlevel)
                        
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
super.paintDX(graphics, this.levelString, 0, this.levelString!.length, this.levelNumberCharArray, 0, this.levelNumberTotalDigits, this.offset);
    
}


    public paintThreed(graphics: Graphics){
}


}



