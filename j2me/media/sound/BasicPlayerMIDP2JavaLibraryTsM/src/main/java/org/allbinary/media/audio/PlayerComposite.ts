
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
        



import { Control } from "../../../../javax/microedition/media/Control.js";

    
import { Controllable } from "../../../../javax/microedition/media/Controllable.js";

    
import { MediaException } from "../../../../javax/microedition/media/MediaException.js";

    
import { Player } from "../../../../javax/microedition/media/Player.js";

    
import { PlayerListener } from "../../../../javax/microedition/media/PlayerListener.js";

    
import { TimeBase } from "../../../../javax/microedition/media/TimeBase.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { GameTickTimeDelayHelper } from "../../../../org/allbinary/time/GameTickTimeDelayHelper.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class PlayerComposite
            extends Object
        
                , Controllable
                , Player {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly player: Player

    private readonly timeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);
        
        
public constructor (player: Player){

            super();
            var player = player
this.player= player
this.timeElapsedHelper!.delay= 570
}

public constructor (player: Player, repeatTime: number){

            super();
            var player = player
var repeatTime = repeatTime
this.player= player
this.timeElapsedHelper!.delay= repeatTime
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public addPlayerListener(playerListener: PlayerListener){
var playerListener = playerListener
this.player.addPlayerListener(playerListener)
}


    public removePlayerListener(playerListener: PlayerListener){
var playerListener = playerListener
this.player.removePlayerListener(playerListener)
}


    public close(){
this.player.close()
}


    public deallocate(){
this.player.deallocate()
}


    public getContentType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player.getContentType();
    
}


    public getDuration(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player.getDuration();
    
}


    public getMediaTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player.getMediaTime();
    
}


    public getTimeBase(): TimeBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 
                                    (player as TimeBaseInterface).getTimeBase();
    
}


                //@Throws(MediaException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setTimeBase(timeBase: TimeBase){
var timeBase = timeBase
player = this.playerplayer as TimeBaseInterface
player.
                    setTimeBase(timeBase)
}


    public prefetch(){

        try {
            this.player.prefetch()
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "prefetch", e)
}

}


    public realize(){

        try {
            this.player.realize()
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "realize", e)
}

}


    public getState(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player.getState();
    
}


    public setLoopCount(count: number){
var count = count
this.player.setLoopCount(count)
}


    public setMediaTime(now: number): number{
var now = now

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player.setMediaTime(now);
    
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "setMediaTime", e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}

}


    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;
        
        

    public start(){

        try {
            
                        if(timeElapsedHelper!.isTime(gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    this.player.start()

                                    }
                                
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.START_METHOD_NAME, e)
}

}


    public stop(){

        try {
            this.player.stop()
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "stop", e)
}

}


    public getControl(controlType: string): Control{
var controlType = controlType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player.getControl(controlType);
    
}


    public getControls(): Control[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getControls();
    
}


    public setVolume(leftVolume: number, rightVolume: number){
    //var leftVolume = leftVolume
    //var rightVolume = rightVolume
player = this.playerplayer as Controllable2
player.
                    setVolume(leftVolume, rightVolume)
}


    public getPlayerP(): Player{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player;
    
}


}
                
            

