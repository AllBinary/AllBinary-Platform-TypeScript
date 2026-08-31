
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
        
//not plain js import { Graphics } from '../../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { HealthInterface } from '../../../../../../../org/allbinary/game/health/HealthInterface.js';
      //not GWT import const HealthInterface = globalThis.org.allbinary.game.health.HealthInterface;

      
import { HealthVisitorInterface } from '../../../../../../../org/allbinary/game/health/HealthVisitorInterface.js';
      //not GWT import const HealthVisitorInterface = globalThis.org.allbinary.game.health.HealthVisitorInterface;

      
//not plain js import { PointFactory } from '../../../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
import { Rectangle } from '../../../../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { AllBinaryLayer } from '../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { StringUtil } from '../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { ViewPosition } from '../../../../../../../org/allbinary/view/ViewPosition.js';
      //not GWT import const ViewPosition = globalThis.org.allbinary.view.ViewPosition;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HealLayer extends AllBinaryLayer implements HealthVisitorInterface {
        

public constructor (){
            super(StringUtil.getInstance()!.EMPTY_STRING, new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, 0, 0), ViewPosition.getInstanceD());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public paint(graphics: Graphics){
}


    public visit(healthInterface: HealthInterface){

                        if(healthInterface!.isAlive())
                        
                                    {
                                    healthInterface!.healMax();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Heal attempt on dead: Does not currently occur", this, "visit");
    

                        }
                            
}


}



