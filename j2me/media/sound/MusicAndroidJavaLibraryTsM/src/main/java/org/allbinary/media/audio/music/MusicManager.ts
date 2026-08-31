
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Class } from '../../../../../java/lang/Class.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Activity } from '../../../../../android/app/Activity.js';
      //not GWT import const Activity = globalThis.android.app.Activity;

      
import { Context } from '../../../../../android/content/Context.js';
      //not GWT import const Context = globalThis.android.content.Context;

      
import { Intent } from '../../../../../android/content/Intent.js';
      //not GWT import const Intent = globalThis.android.content.Intent;

      
import { AndroidServicesUtil } from '../../../../../org/allbinary/android/AndroidServicesUtil.js';
      //not GWT import const AndroidServicesUtil = globalThis.org.allbinary.android.AndroidServicesUtil;

      
import { ResourceUtil } from '../../../../../org/allbinary/data/resource/ResourceUtil.js';
      //not GWT import const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;

      
//not plain js import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { NoSound } from '../../../../../org/allbinary/media/audio/NoSound.js';
      //not GWT import const NoSound = globalThis.org.allbinary.media.audio.NoSound;

      
import { Sound } from '../../../../../org/allbinary/media/audio/Sound.js';
      //not GWT import const Sound = globalThis.org.allbinary.media.audio.Sound;

      
//not plain js import { CommonStateStrings } from '../../../../../org/allbinary/string/CommonStateStrings.js';
      const CommonStateStrings = globalThis.org.allbinary.string.CommonStateStrings;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { GameTickTimeDelayHelper } from '../../../../../org/allbinary/time/GameTickTimeDelayHelper.js';
      //not GWT import const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;

      
import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      //not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListUtil } from '../../../../../org/allbinary/util/BasicArrayListUtil.js';
      const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MusicStrings } from './MusicStrings.js';
//not GWT import const MusicStrings = globalThis.org.allbinary.media.audio.music.MusicStrings;

                
export class MusicManager
            extends Object
         {
        

    public static pause(activity: Activity, musicServiceClass: Function){

    var commonStateStrings: CommonStateStrings = CommonStateStrings.getInstance()!;;
    

    var musicPauseIntent: Intent = new Intent(activity as Context, musicServiceClass.prototype.constructor);;
    
musicPauseIntent!.putExtra(commonStateStrings!.ON_START_COMMAND, 1);
    
activity.startService(musicPauseIntent);
    
}


    public static resume(activity: Activity, musicServiceClass: Function){

                        if(AndroidServicesUtil.getInstance()!.isServiceRunning(musicServiceClass!.toString()!))
                        
                                    {
                                    
    var commonStateStrings: CommonStateStrings = CommonStateStrings.getInstance()!;;
    

    var musicResumeIntent: Intent = new Intent(activity, musicServiceClass.prototype.constructor);;
    
musicResumeIntent!.putExtra(commonStateStrings!.ON_START_COMMAND, 2);
    
activity.startService(musicResumeIntent);
    

                                    }
                                
}


    private readonly PLAY: string = "Play ";

    private readonly FOR: string = " for: ";

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly musicStrings: MusicStrings = MusicStrings.getInstance()!;

    private readonly commonStateStrings: CommonStateStrings = CommonStateStrings.getInstance()!;

    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;

    private readonly resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;

    private readonly androidServicesUtil: AndroidServicesUtil = AndroidServicesUtil.getInstance()!;

    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(0);

    private readonly timeDelayHelper2: TimeDelayHelper = new TimeDelayHelper(1200);

    private readonly songList: BasicArrayList;

    private currentSongSound: Sound = NoSound.getInstance()!;

    private nextSongSound: Sound = NoSound.getInstance()!;

    private leftVolume: number = 100;

    private rightVolume: number = 100;

    private readonly musicServiceClass: Function;

    private readonly currentIntent: Intent;

public constructor (musicServiceClass: Function, songList: BasicArrayList){

            super();
        PreLogUtil.put(this.commonStateStrings!.CONTEXT +this.resourceUtil!.getContext(), this, this.commonStrings!.CONSTRUCTOR);
    
this.musicServiceClass= musicServiceClass;
    
this.currentIntent= new Intent(this.resourceUtil!.getContext(), musicServiceClass.prototype.constructor);
    
this.songList= songList;
    
}


    public nextSong(nextSongSound: Sound, leftVolume: number, rightVolume: number){

                        if(nextSongSound == 
                                    null
                                )
                        
                                    {
                                    nextSongSound= NoSound.getInstance();
    

                                    }
                                
this.nextSongSound= nextSongSound;
    
this.leftVolume= leftVolume;
    
this.rightVolume= rightVolume;
    
this.reset();
    
}


    public reset(){
this.timeDelayHelper!.delay= 0;
    
}


    public process(){

                        if(this.songList!.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(this.timeDelayHelper!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    this.startNewSong();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(this.timeDelayHelper2!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    
                        if(this.androidServicesUtil!.isServiceRunning(this.musicServiceClass!.toString()!))
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.startNewSong();
    

                        }
                            

                                    }
                                
}


    public show(){




                        for (
    var index: number = this.songList!.size()!;--index >= 0; )
        {

    var sound: Sound = this.songList!.get(index) as Sound;;
    

    var duration: number = sound.getDuration();;
    
PreLogUtil.put(new StringMaker().append(this.PLAY)!.append(sound.getResource())!.append(this.FOR)!.appendlong(duration)!.toString(), this, this.commonStrings!.PROCESS);
    
}

}


    public startNewSong(){

        try {
            this.resourceUtil!.getContext()!.stopService(this.currentIntent);
    

                        if(this.nextSongSound == NoSound.getInstance())
                        
                                    {
                                    this.currentSongSound= this.basicArrayListUtil!.getRandom(this.songList) as Sound;
    

                                    }
                                
                        else {
                            this.currentSongSound= this.nextSongSound;
    
this.nextSongSound= NoSound.getInstance();
    

                        }
                            

    var duration: number = this.currentSongSound!.getDuration();;
    
PreLogUtil.put(new StringMaker().append(this.PLAY)!.append(this.currentSongSound!.getResource())!.append(this.FOR)!.appendlong(duration)!.toString(), this, this.commonStrings!.PROCESS);
    
this.timeDelayHelper!.delay= Math.round(duration);
    
this.currentIntent!.putExtra(this.musicStrings!.SONG_EXTRA, this.resourceUtil!.getResourceId(this.currentSongSound!.getResource())!.intValue());
    
this.currentIntent!.putExtra(this.musicStrings!.LEFT_VOLUME, this.leftVolume);
    
this.currentIntent!.putExtra(this.musicStrings!.RIGHT_VOLUME, this.rightVolume);
    
this.resourceUtil!.getContext()!.startService(this.currentIntent);
    

                //: 
} catch(e) 
            {

    var resource: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(this.currentSongSound != 
                                    null
                                )
                        
                                    {
                                    resource= this.currentSongSound!.getResource();
    

                                    }
                                
PreLogUtil.putOE(this.commonStrings!.EXCEPTION_LABEL +resource, this, this.commonStrings!.PROCESS, e);
    
}

}


                //@Throws(Exception.constructor)
            
    public stop(){
this.resourceUtil!.getContext()!.stopService(this.currentIntent);
    
}


}



