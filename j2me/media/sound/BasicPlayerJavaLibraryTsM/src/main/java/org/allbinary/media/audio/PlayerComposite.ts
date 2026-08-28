
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
//not game specific package import { Control } from '../../../../javax/microedition/media/Control.js';
      const Control = globalThis.javax.microedition.media.Control;

      
//not game specific package import { Controllable } from '../../../../javax/microedition/media/Controllable.js';
      const Controllable = globalThis.javax.microedition.media.Controllable;

      
//not game specific package import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
      const Player = globalThis.javax.microedition.media.Player;

      
//not game specific package import { PlayerListener } from '../../../../javax/microedition/media/PlayerListener.js';
      const PlayerListener = globalThis.javax.microedition.media.PlayerListener;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { GameTickTimeDelayHelper } from '../../../../org/allbinary/time/GameTickTimeDelayHelper.js';
      const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;

      
//not game specific package import { GameTickTimeDelayHelperFactory } from '../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
//not game specific package import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Controllable2 } from './Controllable2.js';
//BasicPlayer
export class PlayerComposite
            extends Object
         implements Controllable, Player {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly player: Player;

    private readonly timeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);

public constructor (player: Player, repeatTime: number){

            super();
        this.player= player;
    
this.timeElapsedHelper!.delay= repeatTime;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public addPlayerListener(playerListener: PlayerListener){
this.player.addPlayerListener(playerListener);
    
}


    public removePlayerListener(playerListener: PlayerListener){
this.player.removePlayerListener(playerListener);
    
}


    public close(){
this.player.close();
    
}


    public deallocate(){
this.player.deallocate();
    
}


    public getContentType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player.getContentType();;
    
}


    public getDuration(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player.getDuration();;
    
}


    public getMediaTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player.getMediaTime();;
    
}


    public prefetch(){

        try {
            this.player.prefetch();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "prefetch", e);
    
}

}


    public realize(){

        try {
            this.player.realize();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "realize", e);
    
}

}


    public getState(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player.getState();;
    
}


    public setLoopCount(count: number){
this.player.setLoopCount(count);
    
}


    public setMediaTime(now: number): number{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player.setMediaTime(now);;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setMediaTime", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}

}


    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;

    public start(){

        try {
            
                        if(this.timeElapsedHelper!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    this.player.start();
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.START_METHOD_NAME, e);
    
}

}


    public stop(){

        try {
            this.player.stop();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "stop", e);
    
}

}


    public getControl(controlType: string): Control{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player.getControl(controlType);;
    
}


    public getControls(): Control[]{



                            throw new RuntimeException();
                    
}


    public setVolume(leftVolume: number, rightVolume: number){

    var controllable2: Controllable2 = (this.player as unknown as Controllable2);;
    
controllable2.setVolume(leftVolume, rightVolume);
    
}


    public getPlayerP(): Player{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player;
    
}


}



