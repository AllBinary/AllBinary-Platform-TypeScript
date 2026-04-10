
        /* Generated Code Do Not Modify */
        



import { Service } from "../../../../../android/app/Service.js";

    
import { Intent } from "../../../../../android/content/Intent.js";

    
import { MediaPlayer } from "../../../../../android/media/MediaPlayer.js";

    
import { IBinder } from "../../../../../android/os/IBinder.js";

    
import { NullAndroidCanvas } from "../../../../../org/allbinary/android/NullAndroidCanvas.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStateStrings } from "../../../../../org/allbinary/string/CommonStateStrings.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { ARunnable } from "../../../../../org/allbinary/thread/ARunnable.js";

    

export class BaseMusicService extends Service {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly commonStateStrings: CommonStateStrings = CommonStateStrings.getInstance()!;
        
        

    private readonly ALREADY_PLAYING: string = "This is one song per music service";
        
        

    private readonly WAITING_FOR_MUSIC_TO_END: string = "Waiting for music to end";
        
        

    private player: MediaPlayer = NullAndroidCanvas.NULL_MEDIA_PLAYER;
        
        

    private songId: number =  -1;
        
        

    private leftVolume: number =  -1;
        
        

    private rightVolume: number =  -1;
        
        

    public onBind(intent: Intent): IBinder?{
    //var intent = intent
put(commonStrings!.START, this, commonStateStrings!.BIND)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public onCreate(){
put(commonStrings!.START, this, commonStateStrings!.CREATE)
}


    public onDestroy(){
put(commonStrings!.START, this, commonStateStrings!.DESTROY)

    
                        if(player != NullAndroidCanvas.NULL_MEDIA_PLAYER)
                        
                                    {
                                    put(commonStrings!.START, this, commonStateStrings!.PAUSE)
stop()
reset()
release()

                                    }
                                
}


    public pause(){

    
                        if(player != NullAndroidCanvas.NULL_MEDIA_PLAYER)
                        
                                    {
                                    put(commonStrings!.START, this, commonStateStrings!.PAUSE)
pause()

                                    }
                                
}


    public resume(){

    
                        if(player != NullAndroidCanvas.NULL_MEDIA_PLAYER && !player.isPlaying())
                        
                                    {
                                    put(commonStrings!.START, this, commonStateStrings!.RESUME)
start()

                                    }
                                
}


    public start(){
player= MediaPlayer.create(this, songId)
setVolume((leftVolume.toFloat()) /100.0f, (rightVolume.toFloat()) /100.0f)
setLooping(false)
start()
}


    public onStart(intent: Intent, startid: number){
    //var intent = intent
    //var startid = startid
onStartCommand(intent)
put(commonStrings!.START, this, commonStateStrings!.START)
}


    public onStartCommand(intent: Intent, flags: number, startId: number): number{
    //var intent = intent
    //var flags = flags
    //var startId = startId
onStartCommand(intent)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return START_STICKY;
    
}


    public onStartCommand(intent: Intent){
    //var intent = intent
put(commonStrings!.START, this, commonStateStrings!.ON_START_COMMAND)

    var musicStrings: MusicStrings = MusicStrings.getInstance()!;
        
        


    
                        if(intent != 
                                    null
                                )
                        
                                    {
                                    
    var command: number = intent.getIntExtra(commonStateStrings!.ON_START_COMMAND,  -1)!;
        
        

put(CommonLabels.getInstance()!.COMMAND_LABEL +command, this, commonStateStrings!.ON_START_COMMAND)

    
                        if(command == 1)
                        
                                    {
                                    this.pause()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
                             else 
    
                        if(command == 2)
                        
                                    {
                                    this.resume()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
                        else {
                            this.songId= intent.getIntExtra(musicStrings!.SONG_EXTRA,  -1)
this.leftVolume= intent.getIntExtra(musicStrings!.LEFT_VOLUME,  -1)
this.rightVolume= intent.getIntExtra(musicStrings!.RIGHT_VOLUME,  -1)

                        }
                            

                                    }
                                
                        else {
                            


                            throw RuntimeException("Started service without intent")

                        }
                            

    
                        if(songId !=  -1)
                        
                                    {
                                    gc()

    
                        if(player != NullAndroidCanvas.NULL_MEDIA_PLAYER && player.isPlaying())
                        
                                    {
                                    
    var player: MediaPlayer = this.player;
        
        

put(ALREADY_PLAYING, this, commonStateStrings!.ON_START_COMMAND)

    var runnable: Runnable = new object: ARunnable()
                                {
                                
    public run(){

        try {
            
        while(player.isPlaying())
        {
put(WAITING_FOR_MUSIC_TO_END, this, commonStateStrings!.ON_START_COMMAND)
sleep(1200)
}

onStartCommand(intent)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStateStrings!.ON_START_COMMAND, e)
}

}

                                }
                            ;
        
        


    var thread: Thread = new Thread(runnable);
        
        

start()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.start()

                                    }
                                
}


}
                
            

