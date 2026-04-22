
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { GameCanvasRunnableInterface } from "../../../../org/allbinary/game/displayable/canvas/GameCanvasRunnableInterface.js";

    
import { AllBinaryGameLayerManager } from "../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { ProgressCanvas } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js";

    
import { ProgressCanvasFactory } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    
import { ClientInformationFactory } from "../../../../org/allbinary/logic/system/security/licensing/ClientInformationFactory.js";

    
import { PrimaryThreadPool } from "../../../../org/allbinary/thread/PrimaryThreadPool.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GameMidlet } from "./GameMidlet.js";

export class DemoGameMidlet extends GameMidlet {
        
public constructor (clientInformationFactory: ClientInformationFactory){
            super(clientInformationFactory);
                        //var clientInformationFactory = clientInformationFactory


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    isContinue(): boolean{

    var hashtable: Hashtable<any, any> = this.getStartStateHashtable()!;
        
        
;
    

                        if(hashtable != 
                                    null
                                 && hashtable.length > 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public getHighestLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    
}


                //@Throws(Error::class)
            
    public createDemoGameCanvasRunnableInterface(): GameCanvasRunnableInterface{



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    createGameCanvasRunnableInterface(allBinaryGameLayerManager: AllBinaryGameLayerManager): GameCanvasRunnableInterface{
var allBinaryGameLayerManager = allBinaryGameLayerManager



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    createGameCanvasRunnableInterface(): GameCanvasRunnableInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createGameCanvasRunnableInterface(this.createGameLayerManager());

                        ;
    
}


    public demoSetup(){
}


    public postDemoSetup(){
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setDemo(){
this.logUtil!.putF(commonStrings!.START, this, "setDemo");
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    
progressCanvas!.start();
    
PrimaryThreadPool.getInstance()!.runTask(new DemoRunnable(this));
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public createGame(){

    var CREATE_GAME: string = "createGame";
        
        
;
    
this.logUtil!.putF(commonStrings!.START, this, CREATE_GAME);
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    
progressCanvas!.start();
    

    var hashtable: Hashtable<any, any> = this.getStartStateHashtable()!;
        
        
;
    
this.setStartStateHashtable(NullUtil.getInstance()!.NULL_TABLE);
    
PrimaryThreadPool.getInstance()!.runTask(new CreateGameRunnable(this, hashtable));
    
this.logUtil!.putF(commonStrings!.END, this, CREATE_GAME);
    
}


    public isReady(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

