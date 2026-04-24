
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

    
import { HealthInterface } from "../../../../../../org/allbinary/game/health/HealthInterface.js";

    
import { HealthVisitorInterface } from "../../../../../../org/allbinary/game/health/HealthVisitorInterface.js";

    
import { PointFactory } from "../../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../../org/allbinary/graphics/Rectangle.js";

    
import { AllBinaryLayer } from "../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { ViewPosition } from "../../../../../../org/allbinary/view/ViewPosition.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HealLayer extends AllBinaryLayer implements HealthVisitorInterface {
        
public constructor (){
            super(StringUtil.getInstance()!.EMPTY_STRING, new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, 0, 0), ViewPosition.getInstanceD());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public paint(graphics: Graphics){
var graphics = graphics
}


    public visit(healthInterface: HealthInterface){
var healthInterface = healthInterface

                        if(healthInterface!.isAlive())
                        
                                    {
                                    healthInterface!.heal();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Heal attempt on dead: Does not currently occur", this, "visit");
    

                        }
                            
}


}
                
            

