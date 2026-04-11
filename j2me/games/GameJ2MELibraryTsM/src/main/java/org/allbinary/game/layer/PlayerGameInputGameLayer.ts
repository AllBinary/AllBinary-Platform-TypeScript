
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { PlayerGameInput } from "../../../../org/allbinary/game/input/PlayerGameInput.js";

    
import { PlayerGameInputCompositeInterface } from "../../../../org/allbinary/game/input/PlayerGameInputCompositeInterface.js";

    
import { PointFactory } from "../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../org/allbinary/graphics/Rectangle.js";

    
import { CanvasStrings } from "../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StaticViewPosition } from "../../../../org/allbinary/view/StaticViewPosition.js";

    

export class PlayerGameInputGameLayer extends AllBinaryGameLayer
                , PlayerGameInputCompositeInterface {
        

    private playerGameInput: PlayerGameInput
public constructor (playerInputId: number)                        

                            : super(Rectangle(PointFactory.getInstance()!.ZERO_ZERO, 0, 0), StaticViewPosition(0, 0, 0)){

            super();
            var playerInputId = playerInputId


                            //For kotlin this is before the body of the constructor.
                    
this.playerGameInput= PlayerGameInput(this.getGameKeyEventList(), playerInputId);
    

    var canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;
        
        
;
    
logUtil!.put("Danger Danger Danger: Should Not Be Called Except For Testing Input", this, canvasStrings!.PAINT);
    
}


    public getPlayerGameInput(): PlayerGameInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.playerGameInput;
    
}


    public initInputProcessors(){
}


                //@Throws(Error::class)
            
    public processInput(myManager: AllBinaryLayerManager){
var myManager = myManager
}


    public paint(graphics: Graphics){
var graphics = graphics
}


}
                
            

