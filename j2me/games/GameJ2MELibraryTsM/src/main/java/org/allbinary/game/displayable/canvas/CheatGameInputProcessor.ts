
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
        



import { GameKeyFactory } from "../../../../../org/allbinary/game/input/GameKeyFactory.js";

    
import { PlayerGameInput } from "../../../../../org/allbinary/game/input/PlayerGameInput.js";

    
import { GameKeyEvent } from "../../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { GameKeyEventUtil } from "../../../../../org/allbinary/game/input/event/GameKeyEventUtil.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { SpecialGameInputFactory } from "../../../../../org/allbinary/game/layer/special/SpecialGameInputFactory.js";

    
import { SpecialGameInputInterface } from "../../../../../org/allbinary/game/layer/special/SpecialGameInputInterface.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AllBinaryGameCanvas } from "./AllBinaryGameCanvas.js";

export class CheatGameInputProcessor extends PlayerGameInput {
        

    public inputProcessor: SpecialGameInputInterface = SpecialGameInputFactory.NO_SPECIAL_GAME_INPUT;
        
        

    private readonly PROCESS_GAME: string = "processGame";
        
        

    private readonly gameCanvas: AllBinaryGameCanvas
public constructor (gameCanvas: AllBinaryGameCanvas)                        

                            : super(new BasicArrayList(),  -1){

            super();
            var gameCanvas = gameCanvas


                            //For kotlin this is before the body of the constructor.
                    
this.gameCanvas= gameCanvas;
    
}


    private readonly gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public update(){

        try {
            
    var gameLayerManager: AllBinaryGameLayerManager = this.gameCanvas!.getLayerManager()!;
        
        
;
    

    var list: BasicArrayList = this.getGameKeyEventList()!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var anyType: any = list.objectArray[index]!;
        
        
;
    

    var key: number = GameKeyEventUtil.getKey(anyType)!;
        
        
;
    

                        if(key == gameKeyFactory!.LEVEL_DOWN.getId())
                        
                                    {
                                    inputProcessor!.strafeLeft();
    
break;

                    

                                    }
                                
                             else 
                        if(key == gameKeyFactory!.LEVEL_UP.getId())
                        
                                    {
                                    inputProcessor!.strafeRight();
    
break;

                    

                                    }
                                

                        if(key == gameKeyFactory!.LEFT.getId())
                        
                                    {
                                    inputProcessor!.left();
    
break;

                    

                                    }
                                
                             else 
                        if(key == gameKeyFactory!.RIGHT.getId())
                        
                                    {
                                    inputProcessor!.right();
    
break;

                    

                                    }
                                
                             else 
                        if(key == gameKeyFactory!.UP.getId())
                        
                                    {
                                    inputProcessor!.up();
    
break;

                    

                                    }
                                
                             else 
                        if(key == gameKeyFactory!.DOWN.getId())
                        
                                    {
                                    inputProcessor!.down();
    
break;

                    

                                    }
                                
                             else 
                        if(key == gameKeyFactory!.KEY_NUM1.getId())
                        
                                    {
                                    inputProcessor!.special1(gameLayerManager, GameKeyEvent.NONE);
    
break;

                    

                                    }
                                
                             else 
                        if(key == gameKeyFactory!.KEY_NUM3.getId())
                        
                                    {
                                    inputProcessor!.special2(gameLayerManager, GameKeyEvent.NONE);
    
break;

                    

                                    }
                                
}

list.clear();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.UPDATE, e);
    
}

}


}
                
            

