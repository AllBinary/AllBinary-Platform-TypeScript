
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
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Hashtable } from '../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { GameCanvasRunnableInterface } from '../../../../org/allbinary/game/displayable/canvas/GameCanvasRunnableInterface.js';
      const GameCanvasRunnableInterface = globalThis.org.allbinary.game.displayable.canvas.GameCanvasRunnableInterface;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { ProgressCanvas } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
      const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

      
//not game specific package import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
//not game specific package import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { ClientInformationFactory } from '../../../../org/allbinary/logic/system/security/licensing/ClientInformationFactory.js';
      const ClientInformationFactory = globalThis.org.allbinary.logic.system.security.licensing.ClientInformationFactory;

      
//not game specific package import { PrimaryThreadPool } from '../../../../org/allbinary/thread/PrimaryThreadPool.js';
      const PrimaryThreadPool = globalThis.org.allbinary.thread.PrimaryThreadPool;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameMidlet } from './GameMidlet.js';
import { DemoRunnable } from './DemoRunnable.js';
import { CreateGameRunnable } from './CreateGameRunnable.js';

export class DemoGameMidlet extends GameMidlet {
        

public constructor (clientInformationFactory: ClientInformationFactory){
            super(clientInformationFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    isContinue(): boolean{

    var hashtable: Hashtable<any, any> = this.getStartStateHashtable()!;;
    

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


                //@Throws(Exception.constructor)
            
    public createDemoGameCanvasRunnableInterface(): GameCanvasRunnableInterface{



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    createGameCanvasRunnable(allBinaryGameLayerManager: AllBinaryGameLayerManager): GameCanvasRunnableInterface{



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    createGameCanvasRunnableInterface(): GameCanvasRunnableInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.createGameCanvasRunnable(this.createGameLayerManager());;
    
}


    public demoSetup(){
}


    public postDemoSetup(){
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public setDemo(){
this.logUtil!.putF(this.commonStrings!.START, this, "setDemo");
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.start();
    
PrimaryThreadPool.getInstance()!.runTask(new DemoRunnable(this));
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public createGame(){

    var CREATE_GAME: string = "createGame";;
    
this.logUtil!.putF(this.commonStrings!.START, this, CREATE_GAME);
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.start();
    

    var hashtable: Hashtable<any, any> = this.getStartStateHashtable()!;;
    
this.setStartStateHashtable(NullUtil.getInstance()!.NULL_TABLE);
    
PrimaryThreadPool.getInstance()!.runTask(new CreateGameRunnable(this, hashtable));
    
this.logUtil!.putF(this.commonStrings!.END, this, CREATE_GAME);
    
}


    public isReady(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

