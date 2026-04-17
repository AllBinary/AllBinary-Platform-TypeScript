
        /* Generated Code Do Not Modify */
        



import { ARunnable } from "../../../../../org/allbinary/thread/ARunnable.js";

    
import { Player } from "../../../../../javax/microedition/media/Player.js";

    
import { PlayerListener } from "../../../../../javax/microedition/media/PlayerListener.js";

    
import { AvianUtil } from "../../../../../org/allbinary/AvianUtil.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { NoSound } from "../../../../../org/allbinary/media/audio/NoSound.js";

    
import { PlayerStateUtil } from "../../../../../org/allbinary/media/audio/PlayerStateUtil.js";

    
import { Sound } from "../../../../../org/allbinary/media/audio/Sound.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { GameTickTimeDelayHelper } from "../../../../../org/allbinary/time/GameTickTimeDelayHelper.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Class } from "./Class.js";

export class MusicManager
            extends Object
         {
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;
        
        

    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;
        
        

    private readonly playerStateUtil: PlayerStateUtil = PlayerStateUtil.getInstance()!;
        
        

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(0);
        
        

    private readonly playerListener: PlayerListener = new object: PlayerListener()
                                {
                                
    public playerUpdate(player: Player, event: string, eventData: any = {}){
    //var player = player
    //var event = event
    //var eventData = eventData
PreLogUtil.put(event, this, commonStrings!.PROCESS);
    

                        if(event == PlayerListener.END_OF_MEDIA || event == PlayerListener.STOPPED || event == PlayerListener.CLOSED)
                        
                                    {
                                    reset();
    

                                    }
                                
}

                                }
                            ;
        
        

    private readonly PLAY: string = "Play ";
        
        

    private readonly SONG: string = " for: ";
        
        

    private readonly NEXT_SONG: string = "Next Song: ";
        
        

    private readonly STOPPING: string = "Stopping Current Song: ";
        
        

    private readonly ENDING: string = "Ending Current Song: ";
        
        

    private readonly WAITING_FOR_MEDIA_TO_END: string = "Waiting for media to end";
        
        

    private readonly ALREADY_PLAYING: string = "Already Playing: ";
        
        

    private readonly ALREADY_ENDED: string = "Last Song already ended: ";
        
        

    private readonly songList: BasicArrayList

    private currentSongSound: Sound = NoSound.getInstance()!;
        
        

    private nextSongSound: Sound = NoSound.getInstance()!;
        
        

    private reset: boolean= false

    private noDuration: boolean= false

    private stopped: boolean = true;
        
        
public constructor (musicServiceClass: Function, songList: BasicArrayList){

            super();
                //var musicServiceClass = musicServiceClass
    //var songList = songList
this.songList= songList;
    
}


    public startNewSong(){

                        if(this.nextSongSound == NoSound.getInstance())
                        
                                    {
                                    
    var randomSongSound: Sound = basicArrayListUtil!.getRandom(this.songList);

                         as Sound;
        
        
;
    
this.nextSong(randomSongSound, 0, 0);
    

                                    }
                                
this.process();
    
}


    public nextSong(nextSongSound: Sound, leftVolume: number, rightVolume: number){
    //var nextSongSound = nextSongSound
    //var leftVolume = leftVolume
    //var rightVolume = rightVolume
PreLogUtil.put(new StringMaker().
                            append(NEXT_SONG)!.append(nextSongSound!.getResource())!.toString(), this, commonStrings!.PROCESS);
    
this.nextSongSound= nextSongSound;
    
this.reset();
    
this.stopped= false;
    
}


    public reset(){
this.reset= true;
    
}


    public process(){

        try {
            
                        if(stopped)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(this.songList!.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if((this.timeDelayHelper!.isTime(gameTickTimeDelayHelper!.startTime) && !this.noDuration) || this.reset)
                        
                                    {
                                    this.reset= false;
    
this.noDuration= false;
    

    var endingCurrentSongSound: Sound = this.currentSongSound;
        
        
;
    

    var nextSongSound: Sound = this.nextSongSound;
        
        
;
    
this.nextSongSound= NoSound.getInstance();
    

                        if(nextSongSound == NoSound.getInstance())
                        
                                    {
                                    this.currentSongSound= BasicArrayListUtil.getInstance()!.getRandom(this.songList);

                         as Sound;
    

                                    }
                                
                        else {
                            this.currentSongSound= nextSongSound;
    

                        }
                            

    var startingCurrentSongSound: Sound = this.currentSongSound;
        
        
;
    

    var duration: number = this.currentSongSound!.getDuration()!;
        
        
;
    
this.timeDelayHelper!.delay= duration.toInt();
    

                        if(duration <= 0)
                        
                                    {
                                    
    var NO_DURATION_FOR: string = "No Duration for: ";
        
        
;
    
PreLogUtil.put(new StringMaker().
                            append(NO_DURATION_FOR)!.append(this.currentSongSound!.getResource())!.toString(), this, commonStrings!.PROCESS);
    
this.currentSongSound!.getPlayerP()!.addPlayerListener(playerListener);
    
this.noDuration= true;
    

                                    }
                                

                        if(endingCurrentSongSound != NoSound.getInstance())
                        
                                    {
                                    
                        if(endingCurrentSongSound == startingCurrentSongSound && endingCurrentSongSound!.getPlayerP()!.getState() == Player.STARTED)
                        
                                    {
                                    PreLogUtil.put(new StringMaker().
                            append(ALREADY_PLAYING)!.append(endingCurrentSongSound!.getResource())!.toString(), this, commonStrings!.PROCESS);
    
PreLogUtil.put(new StringMaker().
                            append(STOPPING)!.append(endingCurrentSongSound!.getResource())!.append(SONG)!.appendlong(duration)!.toString(), this, commonStrings!.PROCESS);
    
endingCurrentSongSound!.getPlayerP()!.stop();
    
this.waitForStateChange(endingCurrentSongSound, startingCurrentSongSound);
    

                                    }
                                
                        else {
                            
                        if(endingCurrentSongSound!.getPlayerP()!.getState() == Player.STARTED)
                        
                                    {
                                    PreLogUtil.put(new StringMaker().
                            append(STOPPING)!.append(endingCurrentSongSound!.getResource())!.append(SONG)!.appendlong(duration)!.toString(), this, commonStrings!.PROCESS);
    
endingCurrentSongSound!.getPlayerP()!.stop();
    
this.waitForStateChange(endingCurrentSongSound, startingCurrentSongSound);
    

                                    }
                                
                        else {
                            PreLogUtil.put(new StringMaker().
                            append(ALREADY_ENDED)!.append(PLAY)!.append(startingCurrentSongSound!.getResource())!.toString(), this, commonStrings!.PROCESS);
    

                        if(AvianUtil.isAvian())
                        
                                    {
                                    endingCurrentSongSound!.getPlayerP()!.stop();
    
startingCurrentSongSound!.getPlayerP()!.stop();
    

                                    }
                                
startingCurrentSongSound!.getPlayerP()!.start();
    

                        }
                            

                        }
                            

                                    }
                                
                        else {
                            PreLogUtil.put(new StringMaker().
                            append(PLAY)!.append(this.currentSongSound!.getResource())!.append(SONG)!.appendlong(duration)!.toString(), this, commonStrings!.PROCESS);
    
this.currentSongSound!.getPlayerP()!.start();
    

                        }
                            

                                    }
                                

                //: 
} catch(e) 
            {

    var resource: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

                        if(currentSongSound != NoSound.getInstance())
                        
                                    {
                                    resource= currentSongSound!.getResource();
    

                                    }
                                
PreLogUtil.putOE(commonStrings!.EXCEPTION_LABEL +resource, this, commonStrings!.PROCESS, e);
    
}

}


                //@Throws(Error::class)
            
    waitForStateChange(endingCurrentSongSound: Sound, startingCurrentSongSound: Sound){
    //var endingCurrentSongSound = endingCurrentSongSound
    //var startingCurrentSongSound = startingCurrentSongSound

        while(endingCurrentSongSound!.getPlayerP()!.getState() == Player.STARTED)
        {
PreLogUtil.put(WAITING_FOR_MEDIA_TO_END, this, commonStrings!.PROCESS);
    
Thread.sleep(100);
    
}

PreLogUtil.put(new StringMaker().
                            append(playerStateUtil!.convert(endingCurrentSongSound!.getPlayerP()!.getState()))!.append(commonSeps!.SPACE)!.append(PLAY)!.append(startingCurrentSongSound!.getResource())!.toString(), this, commonStrings!.PROCESS);
    
startingCurrentSongSound!.getPlayerP()!.start();
    
}


                //@Throws(Error::class)
            
    public stop(){

        try {
            
    var currentSongSound: Sound = this.currentSongSound;
        
        
;
    

                        if(currentSongSound != NoSound.getInstance())
                        
                                    {
                                    stopped= true;
    
PreLogUtil.put(new StringMaker().
                            append(ENDING)!.append(currentSongSound!.getResource())!.toString(), this, commonStrings!.PROCESS);
    
currentSongSound!.getPlayerP()!.stop();
    

                                    }
                                
this.timeDelayHelper!.setStartTime(0);
    
PreLogUtil.put(new StringMaker().
                            append(commonStrings!.END)!.append(StringUtil.getInstance()!.toString(currentSongSound))!.toString(), this, commonStrings!.END);
    

                //: 
} catch(e) 
            {

    var resource: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

                        if(currentSongSound != NoSound.getInstance())
                        
                                    {
                                    resource= currentSongSound!.getResource();
    

                                    }
                                
PreLogUtil.putOE(commonStrings!.EXCEPTION_LABEL +resource, this, commonStrings!.END, e);
    
}

}


}
                
            

