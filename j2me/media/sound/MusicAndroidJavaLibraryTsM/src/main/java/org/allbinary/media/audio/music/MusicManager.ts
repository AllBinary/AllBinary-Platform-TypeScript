
        /* Generated Code Do Not Modify */
        



import { Activity } from "../../../../../android/app/Activity.js";

    
import { Context } from "../../../../../android/content/Context.js";

    
import { Intent } from "../../../../../android/content/Intent.js";

    
import { AndroidServicesUtil } from "../../../../../org/allbinary/android/AndroidServicesUtil.js";

    
import { ResourceUtil } from "../../../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { NoSound } from "../../../../../org/allbinary/media/audio/NoSound.js";

    
import { Sound } from "../../../../../org/allbinary/media/audio/Sound.js";

    
import { CommonStateStrings } from "../../../../../org/allbinary/string/CommonStateStrings.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { GameTickTimeDelayHelper } from "../../../../../org/allbinary/time/GameTickTimeDelayHelper.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class MusicManager
            extends Object
         {
        

    public static pause(activity: Activity, musicServiceClass: KClass<*>){
    //var activity = activity
var musicServiceClass = musicServiceClass

    var commonStateStrings: CommonStateStrings = CommonStateStrings.getInstance()!;
        
        


    var musicPauseIntent: Intent = new Intent(activity as Context, musicServiceClass::class.java);
        
        

musicPauseIntent!.putExtra(commonStateStrings!.ON_START_COMMAND, 1)
activity.startService(musicPauseIntent)
}


    public static resume(activity: Activity, musicServiceClass: KClass<*>){
    //var activity = activity
var musicServiceClass = musicServiceClass

                        if(AndroidServicesUtil.getInstance()!.isServiceRunning(musicServiceClass!.toString()!))
                        
                                    {
                                    
    var commonStateStrings: CommonStateStrings = CommonStateStrings.getInstance()!;
        
        


    var musicResumeIntent: Intent = new Intent(activity, musicServiceClass::class.java);
        
        

musicResumeIntent!.putExtra(commonStateStrings!.ON_START_COMMAND, 2)
activity.startService(musicResumeIntent)

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
        
        

    private readonly songList: BasicArrayList

    private currentSongSound: Sound = NoSound.getInstance()!;
        
        

    private nextSongSound: Sound = NoSound.getInstance()!;
        
        

    private leftVolume: number = 100;
        
        

    private rightVolume: number = 100;
        
        

    private readonly musicServiceClass: KClass<*>

    private readonly currentIntent: Intent
public constructor (musicServiceClass: KClass<*>, songList: BasicArrayList){

            super();
                //var musicServiceClass = musicServiceClass
    //var songList = songList
PreLogUtil.put(commonStateStrings!.CONTEXT +resourceUtil!.getContext(), this, commonStrings!.CONSTRUCTOR)
this.musicServiceClass= musicServiceClass
currentIntent= Intent(resourceUtil!.getContext(), musicServiceClass::class.java)
this.songList= songList
}


    public nextSong(nextSongSound: Sound, leftVolume: number, rightVolume: number){
var nextSongSound = nextSongSound
    //var leftVolume = leftVolume
    //var rightVolume = rightVolume

                        if(nextSongSound == 
                                    null
                                )
                        
                                    {
                                    nextSongSound= NoSound.getInstance()

                                    }
                                
this.nextSongSound= nextSongSound
this.leftVolume= leftVolume
this.rightVolume= rightVolume
this.reset()
}


    public reset(){
this.timeDelayHelper!.delay= 0
}


    public process(){

                        if(this.songList!.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(this.timeDelayHelper!.isTime(gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    this.startNewSong()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(timeDelayHelper2!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    
                        if(androidServicesUtil!.isServiceRunning(this.musicServiceClass!.toString()!))
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.startNewSong()

                        }
                            

                                    }
                                
}


    public show(){




                        for (
    var index: number = this.songList!.size()!;
        
        
--index >= 0; )
        {

    var sound: Sound = this.songList!.get(index) as Sound;
        
        


    var duration: number = sound.getDuration().toLong();
        
        

PreLogUtil.put(StringBuilder().
                            append(PLAY)!.append(sound.getResource())!.append(FOR)!.append(duration)!.toString(), this, commonStrings!.PROCESS)
}

}


    public startNewSong(){

        try {
            this.resourceUtil!.getContext()!.stopService(this.currentIntent)

                        if(this.nextSongSound == NoSound.getInstance())
                        
                                    {
                                    this.currentSongSound= basicArrayListUtil!.getRandom(this.songList) as Sound

                                    }
                                
                        else {
                            this.currentSongSound= this.nextSongSound
this.nextSongSound= NoSound.getInstance()

                        }
                            

    var duration: number = this.currentSongSound!.getDuration().toLong();
        
        

PreLogUtil.put(StringBuilder().
                            append(PLAY)!.append(this.currentSongSound!.getResource())!.append(FOR)!.append(duration)!.toString(), this, commonStrings!.PROCESS)
this.timeDelayHelper!.delay= duration.toInt()
this.currentIntent!.putExtra(musicStrings!.SONG_EXTRA, this.resourceUtil!.getResourceId(this.currentSongSound!.getResource())!.toInt())
this.currentIntent!.putExtra(musicStrings!.LEFT_VOLUME, leftVolume)
this.currentIntent!.putExtra(musicStrings!.RIGHT_VOLUME, rightVolume)
this.resourceUtil!.getContext()!.startService(this.currentIntent)
} catch(e: Exception)
            {

    var resource: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        


                        if(currentSongSound != 
                                    null
                                )
                        
                                    {
                                    resource= currentSongSound!.getResource()

                                    }
                                
PreLogUtil.put(commonStrings!.EXCEPTION_LABEL +resource, this, commonStrings!.PROCESS, e)
}

}


                //@Throws(Error::class)
            
    public stop(){
this.resourceUtil!.getContext()!.stopService(this.currentIntent)
}


}
                
            

