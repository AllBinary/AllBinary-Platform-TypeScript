
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
      //not GWT import const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { BasicHud } from '../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
      //not GWT import const BasicHud = globalThis.org.allbinary.game.graphics.hud.BasicHud;

      
import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //super.paint(graphics, positionString, currentPostString, offset2, offset);
export class PositionWidget extends BasicHud {
        

    public static toString(position: number): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(position.toString());
    

                        if(position == 1)
                        
                                    {
                                    stringBuffer!.append("st");
    

                                    }
                                
                             else 
                        if(position == 2)
                        
                                    {
                                    stringBuffer!.append("nd");
    

                                    }
                                
                             else 
                        if(position == 3)
                        
                                    {
                                    stringBuffer!.append("rd");
    

                                    }
                                
                        else {
                            stringBuffer!.append("th");
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    private position: number= 0;

    private positionString: string = StringUtil.getInstance()!.EMPTY_STRING;

public constructor (position: number, location: number, direction: number, basicColor: BasicColor){
            super(location, direction, 2, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.updateMaxHeight= 10;
    
this.updateMaxWidth= 40;
    
}


    public get(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.position;
    
}


    public set(position: number){
this.position= position;
    
this.positionString= PositionWidget.toString(this.get());
    
}


    public paint(graphics: Graphics){
super.paintString(graphics, this.positionString);
    
}


}



