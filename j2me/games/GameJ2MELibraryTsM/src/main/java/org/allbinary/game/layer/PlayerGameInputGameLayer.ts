
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { PlayerGameInput } from '../../../../org/allbinary/game/input/PlayerGameInput.js';
      const PlayerGameInput = globalThis.org.allbinary.game.input.PlayerGameInput;

      
//not game specific package import { PlayerGameInputCompositeInterface } from '../../../../org/allbinary/game/input/PlayerGameInputCompositeInterface.js';
      const PlayerGameInputCompositeInterface = globalThis.org.allbinary.game.input.PlayerGameInputCompositeInterface;

      
//not game specific package import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
//not game specific package import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { StaticViewPosition } from '../../../../org/allbinary/view/StaticViewPosition.js';
      const StaticViewPosition = globalThis.org.allbinary.view.StaticViewPosition;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameLayer } from './AllBinaryGameLayer.js';

export class PlayerGameInputGameLayer extends AllBinaryGameLayer implements PlayerGameInputCompositeInterface {
        

    private playerGameInput: PlayerGameInput;

public constructor (playerInputId: number){
            super(StringUtil.getInstance()!.EMPTY_STRING, new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, 0, 0), new StaticViewPosition(0, 0, 0));
                    

                            //For kotlin this is before the body of the constructor.
                    
this.playerGameInput= new PlayerGameInput(this.getGameKeyEventList(), new BasicArrayListD(), playerInputId);
    

    var canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;;
    
this.logUtil!.putF("Danger Danger Danger: Should Not Be Called Except For Testing Input", this, canvasStrings!.PAINT);
    
}


    public getPlayerGameInput(): PlayerGameInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.playerGameInput;
    
}


    public initInputProcessors(){
}


                //@Throws(Exception.constructor)
            
    public processInput(myManager: AllBinaryLayerManager){
}


    public paint(graphics: Graphics){
}


}
                
            

