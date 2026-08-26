
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
      const GameKeyFactory = globalThis.org.allbinary.game.input.GameKeyFactory;

      
//not game specific package import { PlayerGameInput } from '../../../../../org/allbinary/game/input/PlayerGameInput.js';
      const PlayerGameInput = globalThis.org.allbinary.game.input.PlayerGameInput;

      
//not game specific package import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { GameKeyEventUtil } from '../../../../../org/allbinary/game/input/event/GameKeyEventUtil.js';
      const GameKeyEventUtil = globalThis.org.allbinary.game.input.event.GameKeyEventUtil;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { SpecialGameInputFactory } from '../../../../../org/allbinary/game/layer/special/SpecialGameInputFactory.js';
      const SpecialGameInputFactory = globalThis.org.allbinary.game.layer.special.SpecialGameInputFactory;

      
//not game specific package import { SpecialGameInputInterface } from '../../../../../org/allbinary/game/layer/special/SpecialGameInputInterface.js';
      const SpecialGameInputInterface = globalThis.org.allbinary.game.layer.special.SpecialGameInputInterface;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';

export class CheatGameInputProcessor extends PlayerGameInput {
        

    public static inputProcessor: SpecialGameInputInterface = SpecialGameInputFactory.NO_SPECIAL_GAME_INPUT;

    private readonly PROCESS_GAME: string = "processGame";

    private readonly gameCanvas: AllBinaryGameCanvas;

public constructor (gameCanvas: AllBinaryGameCanvas){
            super(new BasicArrayListD(), new BasicArrayListD(),  -1);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.gameCanvas= gameCanvas;
    
}


    private readonly gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;
//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public update(){

        try {
            
    var gameLayerManager: AllBinaryGameLayerManager = this.gameCanvas!.getLayerManager()!;;
    

    var list: BasicArrayList = this.getGameKeyEventList()!;;
    

    var size: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var anyType: any = list.objectArray[index]!;;
    

    var key: number = GameKeyEventUtil.getKey(anyType)!;;
    

                        if(key == this.gameKeyFactory!.LEVEL_DOWN.getId())
                        
                                    {
                                    CheatGameInputProcessor.inputProcessor!.strafeLeft();
    
break;

                    

                                    }
                                
                             else 
                        if(key == this.gameKeyFactory!.LEVEL_UP.getId())
                        
                                    {
                                    CheatGameInputProcessor.inputProcessor!.strafeRight();
    
break;

                    

                                    }
                                

                        if(key == this.gameKeyFactory!.LEFT.getId())
                        
                                    {
                                    CheatGameInputProcessor.inputProcessor!.left();
    
break;

                    

                                    }
                                
                             else 
                        if(key == this.gameKeyFactory!.RIGHT.getId())
                        
                                    {
                                    CheatGameInputProcessor.inputProcessor!.right();
    
break;

                    

                                    }
                                
                             else 
                        if(key == this.gameKeyFactory!.UP.getId())
                        
                                    {
                                    CheatGameInputProcessor.inputProcessor!.up();
    
break;

                    

                                    }
                                
                             else 
                        if(key == this.gameKeyFactory!.DOWN.getId())
                        
                                    {
                                    CheatGameInputProcessor.inputProcessor!.down();
    
break;

                    

                                    }
                                
                             else 
                        if(key == this.gameKeyFactory!.KEY_NUM1.getId())
                        
                                    {
                                    CheatGameInputProcessor.inputProcessor!.special1(gameLayerManager, GameKeyEvent.NONE);
    
break;

                    

                                    }
                                
                             else 
                        if(key == this.gameKeyFactory!.KEY_NUM3.getId())
                        
                                    {
                                    CheatGameInputProcessor.inputProcessor!.special2(gameLayerManager, GameKeyEvent.NONE);
    
break;

                    

                                    }
                                
}

list.clear();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.UPDATE, e);
    
}

}


}
                
            

