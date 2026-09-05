
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
        
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Life } from '../../../../../../../org/allbinary/game/ag/life/Life.js';
//not GWT import const Life = globalThis.org.allbinary.game.ag.life.Life;

      
import { LifeVisitorInterface } from '../../../../../../../org/allbinary/game/ag/life/LifeVisitorInterface.js';
//not GWT import const LifeVisitorInterface = globalThis.org.allbinary.game.ag.life.LifeVisitorInterface;

      
//not plain js import { PointFactory } 
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
import { Rectangle } from '../../../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { AllBinaryLayer } from '../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { ViewPosition } from '../../../../../../../org/allbinary/view/ViewPosition.js';
//not GWT import const ViewPosition = globalThis.org.allbinary.view.ViewPosition;

      
















                                        
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



