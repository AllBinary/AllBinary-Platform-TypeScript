
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Class } from '../../../../../java/lang/Class.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Thread } from '../../../../../java/lang/Thread.js';
        
//not game specific package import { ARunnable } from '../../../../../org/allbinary/thread/ARunnable.js';
      const ARunnable = globalThis.org.allbinary.thread.ARunnable;

      
//not game specific package import { Player, PlayerI } from '../../../../../javax/microedition/media/Player.js';
      const Player = globalThis.javax.microedition.media.Player;

      
//not game specific package import { PlayerListener } from '../../../../../javax/microedition/media/PlayerListener.js';
      const PlayerListener = globalThis.javax.microedition.media.PlayerListener;

      
//not game specific package import { AvianUtil } from '../../../../../org/allbinary/AvianUtil.js';
      const AvianUtil = globalThis.org.allbinary.AvianUtil;

      
//not game specific package import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { NoSound } from '../../../../../org/allbinary/media/audio/NoSound.js';
      const NoSound = globalThis.org.allbinary.media.audio.NoSound;

      
//not game specific package import { PlayerStateUtil } from '../../../../../org/allbinary/media/audio/PlayerStateUtil.js';
      const PlayerStateUtil = globalThis.org.allbinary.media.audio.PlayerStateUtil;

      
//not game specific package import { Sound } from '../../../../../org/allbinary/media/audio/Sound.js';
      const Sound = globalThis.org.allbinary.media.audio.Sound;

      
//not game specific package import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { GameTickTimeDelayHelper } from '../../../../../org/allbinary/time/GameTickTimeDelayHelper.js';
      const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;

      
//not game specific package import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
//not game specific package import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListUtil } from '../../../../../org/allbinary/util/BasicArrayListUtil.js';
      const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MusicManager
            extends Object
         {
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;

    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;

    private readonly playerStateUtil: PlayerStateUtil = PlayerStateUtil.getInstance()!;

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(0);

    private readonly playerListener: PlayerListener = new class extends PlayerListener
                                {
                                
    public playerUpdate(player: Player, event: string, eventData: any = {}){
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

    private readonly songList: BasicArrayList;

    private currentSongSound: Sound = NoSound.getInstance()!;

    private nextSongSound: Sound = NoSound.getInstance()!;

    private reset: boolean= false;

    private noDuration: boolean= false;

    private stopped: boolean = true;

public constructor (musicServiceClass: Function, songList: BasicArrayList){

            super();
        this.songList= songList;
    
}


    public startNewSong(){

                        if(this.nextSongSound == NoSound.getInstance())
                        
                                    {
                                    
    var randomSongSound: Sound = this.basicArrayListUtil!.getRandom(this.songList) as Sound;;
    
this.nextSong(randomSongSound, 0, 0);
    

                                    }
                                
this.process();
    
}


    public nextSong(nextSongSound: Sound, leftVolume: number, rightVolume: number){
PreLogUtil.put(new StringMaker().append(NEXT_SONG)!.append(nextSongSound!.getResource())!.toString(), this, this.commonStrings!.PROCESS);
    
this.nextSongSound= nextSongSound;
    
this.reset();
    
this.stopped= false;
    
}


    public reset(){
this.reset= true;
    
}


    public process(){

        try {
            
                        if(this.stopped)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(this.songList!.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if((this.timeDelayHelper!.isTime(this.gameTickTimeDelayHelper!.startTime) && !this.noDuration) || this.reset)
                        
                                    {
                                    this.reset= false;
    
this.noDuration= false;
    

    var endingCurrentSongSound: Sound = this.currentSongSound;;
    

    var nextSongSound: Sound = this.nextSongSound;;
    
this.nextSongSound= NoSound.getInstance();
    

                        if(nextSongSound == NoSound.getInstance())
                        
                                    {
                                    this.currentSongSound= BasicArrayListUtil.getInstance()!.getRandom(this.songList) as Sound;
    

                                    }
                                
                        else {
                            this.currentSongSound= nextSongSound;
    

                        }
                            

    var startingCurrentSongSound: Sound = this.currentSongSound;;
    

    var duration: number = this.currentSongSound!.getDuration()!;;
    
this.timeDelayHelper!.delay= Math.round(duration);
    

                        if(duration <= 0)
                        
                                    {
                                    
    var NO_DURATION_FOR: string = "No Duration for: ";;
    
PreLogUtil.put(new StringMaker().append(NO_DURATION_FOR)!.append(this.currentSongSound!.getResource())!.toString(), this, this.commonStrings!.PROCESS);
    
this.currentSongSound!.getPlayerP()!.addPlayerListener(playerListener);
    
this.noDuration= true;
    

                                    }
                                

                        if(endingCurrentSongSound != NoSound.getInstance())
                        
                                    {
                                    
                        if(endingCurrentSongSound == startingCurrentSongSound && endingCurrentSongSound!.getPlayerP()!.getState() == PlayerI.STARTED)
                        
                                    {
                                    PreLogUtil.put(new StringMaker().append(this.ALREADY_PLAYING)!.append(endingCurrentSongSound!.getResource())!.toString(), this, this.commonStrings!.PROCESS);
    
PreLogUtil.put(new StringMaker().append(this.STOPPING)!.append(endingCurrentSongSound!.getResource())!.append(this.SONG)!.appendlong(duration)!.toString(), this, this.commonStrings!.PROCESS);
    
endingCurrentSongSound!.getPlayerP()!.stop();
    
this.waitForStateChange(endingCurrentSongSound, startingCurrentSongSound);
    

                                    }
                                
                        else {
                            
                        if(endingCurrentSongSound!.getPlayerP()!.getState() == PlayerI.STARTED)
                        
                                    {
                                    PreLogUtil.put(new StringMaker().append(this.STOPPING)!.append(endingCurrentSongSound!.getResource())!.append(this.SONG)!.appendlong(duration)!.toString(), this, this.commonStrings!.PROCESS);
    
endingCurrentSongSound!.getPlayerP()!.stop();
    
this.waitForStateChange(endingCurrentSongSound, startingCurrentSongSound);
    

                                    }
                                
                        else {
                            PreLogUtil.put(new StringMaker().append(this.ALREADY_ENDED)!.append(this.PLAY)!.append(startingCurrentSongSound!.getResource())!.toString(), this, this.commonStrings!.PROCESS);
    

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
                            PreLogUtil.put(new StringMaker().append(this.PLAY)!.append(this.currentSongSound!.getResource())!.append(this.SONG)!.appendlong(duration)!.toString(), this, this.commonStrings!.PROCESS);
    
this.currentSongSound!.getPlayerP()!.start();
    

                        }
                            

                                    }
                                

                //: 
} catch(e) 
            {

    var resource: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(this.currentSongSound != NoSound.getInstance())
                        
                                    {
                                    resource= this.currentSongSound!.getResource();
    

                                    }
                                
PreLogUtil.putOE(this.commonStrings!.EXCEPTION_LABEL +resource, this, this.commonStrings!.PROCESS, e);
    
}

}


                //@Throws(Exception.constructor)
            
    waitForStateChange(endingCurrentSongSound: Sound, startingCurrentSongSound: Sound){

        while(endingCurrentSongSound!.getPlayerP()!.getState() == PlayerI.STARTED)
        {
PreLogUtil.put(this.WAITING_FOR_MEDIA_TO_END, this, this.commonStrings!.PROCESS);
    
Thread.sleep(100);
    
}

PreLogUtil.put(new StringMaker().append(this.playerStateUtil!.convert(endingCurrentSongSound!.getPlayerP()!.getState()))!.append(this.commonSeps!.SPACE)!.append(this.PLAY)!.append(startingCurrentSongSound!.getResource())!.toString(), this, this.commonStrings!.PROCESS);
    
startingCurrentSongSound!.getPlayerP()!.start();
    
}


                //@Throws(Exception.constructor)
            
    public stop(){

        try {
            
    var currentSongSound: Sound = this.currentSongSound;;
    

                        if(currentSongSound != NoSound.getInstance())
                        
                                    {
                                    this.stopped= true;
    
PreLogUtil.put(new StringMaker().append(this.ENDING)!.append(currentSongSound!.getResource())!.toString(), this, this.commonStrings!.PROCESS);
    
currentSongSound!.getPlayerP()!.stop();
    

                                    }
                                
this.timeDelayHelper!.setStartTime(0);
    
PreLogUtil.put(new StringMaker().append(this.commonStrings!.END)!.append(StringUtil.getInstance()!.toString(currentSongSound))!.toString(), this, this.commonStrings!.END);
    

                //: 
} catch(e) 
            {

    var resource: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(currentSongSound != NoSound.getInstance())
                        
                                    {
                                    resource= currentSongSound!.getResource();
    

                                    }
                                
PreLogUtil.putOE(this.commonStrings!.EXCEPTION_LABEL +resource, this, this.commonStrings!.END, e);
    
}

}


}



