
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

    

export class DemoGameMidlet extends GameMidlet {
        
public constructor (clientInformationFactory: ClientInformationFactory)                        

                            : super(clientInformationFactory){

            super();
                //var clientInformationFactory = clientInformationFactory


                            //For kotlin this is before the body of the constructor.
                    
}


                @Throws(Exception::class)
            
    isContinue(): boolean{

    var hashtable: Hashtable<Any, Any> = this.getStartStateHashtable()!;
        
        


    
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


                @Throws(Exception::class)
            
    public createDemoGameCanvasRunnableInterface(): GameCanvasRunnableInterface{



                            throw Exception(commonStrings!.NOT_IMPLEMENTED)
}


                @Throws(Exception::class)
            
    createGameCanvasRunnableInterface(allBinaryGameLayerManager: AllBinaryGameLayerManager): GameCanvasRunnableInterface{
var allBinaryGameLayerManager = allBinaryGameLayerManager



                            throw Exception(commonStrings!.NOT_IMPLEMENTED)
}


                @Throws(Exception::class)
            
    createGameCanvasRunnableInterface(): GameCanvasRunnableInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createGameCanvasRunnableInterface(this.createGameLayerManager());
    
}


    public demoSetup(){
}


    public postDemoSetup(){
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setDemo(){
put(commonStrings!.START, this, "setDemo")

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        

start()
runTask(DemoRunnable(this))
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public createGame(){

    var CREATE_GAME: string = "createGame";
        
        

put(commonStrings!.START, this, CREATE_GAME)

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        

start()

    var hashtable: Hashtable<Any, Any> = this.getStartStateHashtable()!;
        
        

this.setStartStateHashtable(NullUtil.getInstance()!.NULL_TABLE)
runTask(CreateGameRunnable(this, hashtable))
put(commonStrings!.END, this, CREATE_GAME)
}


    public isReady(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

