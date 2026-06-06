
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
        
import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      
import { NullCommandListener } from '../../../../../javax/microedition/lcdui/NullCommandListener.js';
      
import { BasicBuildGameInitializerFactory } from '../../../../../org/allbinary/game/init/BasicBuildGameInitializerFactory.js';
      
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      
import { NoHighScoresFactory } from '../../../../../org/allbinary/game/score/NoHighScoresFactory.js';
      
import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';

export class NullGameCanvas extends AllBinaryGameCanvas {
        

    static createNull(): NullGameCanvas{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NullGameCanvas(AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER);
    

                //: 
} catch(e) 
            {
LogUtil.getInstance()!.put(CommonStrings.getInstance()!.EXCEPTION, "NullGameCanvas", CommonStrings.getInstance()!.GET_INSTANCE, e);
    



                            throw new RuntimeException();
                    
}

}


    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): NullGameCanvas{

                        if(NullGameCanvas.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    NullGameCanvas.instance= NullGameCanvas.createNull();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullGameCanvas.instance as NullGameCanvas;
    
}


                //@Throws(Exception.constructor)
            
    public static createCanvas(gameLayerManager: AllBinaryGameLayerManager): NullGameCanvas{

    var nullGameCanvas: NullGameCanvas = new NullGameCanvas(gameLayerManager);;
    
nullGameCanvas!.setInitialized(true);
    
nullGameCanvas!.setTitle(NullGameCanvas.NO_GAME);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nullGameCanvas;
    
}


    public static readonly NO_GAME: string = "No Background Game";

    public static readonly TYPE: number = 1;

protected constructor (gameLayerManager: AllBinaryGameLayerManager){
            super(NullCommandListener.NULL_COMMAND_LISTENER, gameLayerManager, NoHighScoresFactory.getInstance(), BasicBuildGameInitializerFactory.NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY, false);
                    

                            //For kotlin this is before the body of the constructor.
                    
super.setWait(1200);
    
}

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isGameOver(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    private runningNull: boolean = true;

    public setRunning(running: boolean){
this.runningNull= running;
    
}

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.runningNull;
    
}

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public pause(){
this.setPaused(true);
    
}

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public unPause(){
this.setPaused(false);
    
}


    public initCommands(cmdListener: CommandListener){
this.removeAllCommands();
    
this.setCommandListener(cmdListener);
    
}


                //@Throws(Exception.constructor)
            
    public buildGameInit(isProgress: boolean){
}


    public draw(graphics: Graphics){
}


    public run(){

        try {
            this.logUtil!.putF(this.commonStrings!.START_RUNNABLE, this, this.commonStrings!.RUN);
    
this.logUtil!.putF(this.commonStrings!.END_RUNNABLE, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullGameCanvas.TYPE;
    
}


}
                
            

