
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
        
//not plain js import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { BasicHud } from '../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
      //not GWT import const BasicHud = globalThis.org.allbinary.game.graphics.hud.BasicHud;

      
import { LapInfo } from '../../../../../../org/allbinary/game/layer/hud/LapInfo.js';
      //not GWT import const LapInfo = globalThis.org.allbinary.game.layer.hud.LapInfo;

      
import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LapWidget extends BasicHud {
        

    private readonly LAP_STR: string = "Lap ";

    private readonly OF_STR: string = " of ";

    private string: string = StringUtil.getInstance()!.EMPTY_STRING;

public constructor (location: number, direction: number, basicColor: BasicColor){
            super(location, direction, 2, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.updateMaxHeight= 15;
    
this.updateMaxWidth= 40;
    
}


    public update(lapInfo: LapInfo){

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.LAP_STR);
    
stringBuffer!.appendint(lapInfo!.getCurrentLap());
    
stringBuffer!.append(this.OF_STR);
    
stringBuffer!.appendint(lapInfo!.getTotalLaps());
    
this.string= stringBuffer!.toString();
    
}


    public paint(graphics: Graphics){
super.paintString(graphics, this.string);
    
}


}



