
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
        
import { Graphics } from '../../../../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics
import { Life } from '../../../../../../../org/allbinary/game/ag/life/Life.js';
//not GWT import const Life
import { LifeVisitorInterface } from '../../../../../../../org/allbinary/game/ag/life/LifeVisitorInterface.js';
//not GWT import const LifeVisitorInterface
import { PointFactory } from '../../../../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory
import { Rectangle } from '../../../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle
import { AllBinaryLayer } from '../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { ViewPosition } from '../../../../../../../org/allbinary/view/ViewPosition.js';
//not GWT import const ViewPosition
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LifeLayer extends AllBinaryLayer implements LifeVisitorInterface {
        

public constructor (){
            super(StringUtil.getInstance()!.EMPTY_STRING, new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, 0, 0), ViewPosition.getInstanceD());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public paint(graphics: Graphics){
}


    public visit(lifeInterface: Life){
lifeInterface!.add(1);
    
}


}



