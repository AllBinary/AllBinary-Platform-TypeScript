
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

    
import { Life } from "../../../../../../org/allbinary/game/life/Life.js";

    
import { LifeVisitorInterface } from "../../../../../../org/allbinary/game/life/LifeVisitorInterface.js";

    
import { PointFactory } from "../../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../../org/allbinary/graphics/Rectangle.js";

    
import { AllBinaryLayer } from "../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { ViewPosition } from "../../../../../../org/allbinary/view/ViewPosition.js";

    

export class LifeLayer extends AllBinaryLayer
                , LifeVisitorInterface {
        
public constructor ()                        

                            : super(Rectangle(PointFactory.getInstance()!.ZERO_ZERO, 0, 0), ViewPosition()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


    public paint(graphics: Graphics){
var graphics = graphics
}


    public visit(lifeInterface: Life){
var lifeInterface = lifeInterface
lifeInterface!.add(1.toShort())
}


}
                
            

