
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

    
import { ScoreableInterface } from "../../../../../../org/allbinary/game/score/ScoreableInterface.js";

    
import { PointFactory } from "../../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../../org/allbinary/graphics/Rectangle.js";

    
import { AllBinaryLayer } from "../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { ViewPosition } from "../../../../../../org/allbinary/view/ViewPosition.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PointsLayer extends AllBinaryLayer {
        

    private readonly points: number
public constructor (points: number){
            super(new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, 0, 0), new ViewPosition());
                    var points = points


                            //For kotlin this is before the body of the constructor.
                    
this.points= points;
    
}


    public paint(graphics: Graphics){
var graphics = graphics
}


    public visit(scoreableInterface: ScoreableInterface){
var scoreableInterface = scoreableInterface
scoreableInterface!.addPoints(this.points);
    
}


}
                
            

