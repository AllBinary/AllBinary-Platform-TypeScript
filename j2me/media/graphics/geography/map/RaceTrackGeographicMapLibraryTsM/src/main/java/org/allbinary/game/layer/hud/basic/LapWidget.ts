
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
        



import { Graphics } from "../../../../../../javax/microedition/lcdui/Graphics.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BasicHud } from "../../../../../../org/allbinary/game/graphics/hud/BasicHud.js";

    
import { LapInfo } from "../../../../../../org/allbinary/game/layer/hud/LapInfo.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LapWidget extends BasicHud {
        

    private readonly LAP_STR: string = "Lap ";
        
        

    private readonly OF_STR: string = " of ";
        
        

    private string: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
public constructor (location: number, direction: number, basicColor: BasicColor)                        

                            : super(location, direction, 15, 40, 2, basicColor){

            super();
            var location = location
var direction = direction
var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
}


    public update(lapInfo: LapInfo){
var lapInfo = lapInfo

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(LAP_STR);
    
stringBuffer!.appendint(lapInfo!.getCurrentLap());
    
stringBuffer!.append(OF_STR);
    
stringBuffer!.appendint(lapInfo!.getTotalLaps());
    
this.string= stringBuffer!.toString();
    
}


    public paint(graphics: Graphics){
var graphics = graphics
super.paint(graphics, this.string);
    
}


}
                
            

