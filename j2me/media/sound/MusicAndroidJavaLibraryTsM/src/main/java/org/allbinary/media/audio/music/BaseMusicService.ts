
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
logUtil!.put(commonStrings!.START, this, commonStateStrings!.BIND);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public onCreate(){
logUtil!.put(commonStrings!.START, this, commonStateStrings!.CREATE);
    
}


    public onDestroy(){
logUtil!.put(commonStrings!.START, this, commonStateStrings!.DESTROY);
    

                        if(player != NullAndroidCanvas.NULL_MEDIA_PLAYER)
                        
                                    {
                                    logUtil!.put(commonStrings!.START, this, commonStateStrings!.PAUSE);
    
player.stop();
    
player.reset();
    
player.release();
    

                                    }
                                
}


    public pause(){

                        if(player != NullAndroidCanvas.NULL_MEDIA_PLAYER)
                        
                                    {
                                    logUtil!.put(commonStrings!.START, this, commonStateStrings!.PAUSE);
    
player.pause();
    

                                    }
                                
}


    public resume(){

                        if(player != NullAndroidCanvas.NULL_MEDIA_PLAYER && !player.isPlaying();

                        )
                        
                                    {
                                    logUtil!.put(commonStrings!.START, this, commonStateStrings!.RESUME);
    
player.start();
    

                                    }
                                
}


    public start(){
player= MediaPlayer.create(this, songId);
    
player.setVolume((leftVolume.toFloat()) /100.0f, (rightVolume.toFloat()) /100.0f);
    
player.setLooping(false);
    
player.start();
    
}


    public onStart(intent: Intent, startid: number){
    //var intent = intent
    //var startid = startid
onStartCommand(intent);
    
logUtil!.put(commonStrings!.START, this, commonStateStrings!.START);
    
}


    public onStartCommand(intent: Intent, flags: number, startId: number): number{
    //var intent = intent
    //var flags = flags
    //var startId = startId
onStartCommand(intent);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return START_STICKY;
    
}


    public onStartCommand(intent: Intent){
    //var intent = intent
logUtil!.put(commonStrings!.START, this, commonStateStrings!.ON_START_COMMAND);
    

    var musicStrings: MusicStrings = MusicStrings.getInstance()!;
        
        
;
    

                        if(intent != 
                                    null
                                )
                        
                                    {
                                    
    var command: number = intent.getIntExtra(commonStateStrings!.ON_START_COMMAND,  -1)!;
        
        
;
    
logUtil!.put(CommonLabels.getInstance()!.COMMAND_LABEL +command, this, commonStateStrings!.ON_START_COMMAND);
    

                        if(command == 1)
                        
                                    {
                                    this.pause();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
                             else 
                        if(command == 2)
                        
                                    {
                                    this.resume();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
                        else {
                            this.songId= intent.getIntExtra(musicStrings!.SONG_EXTRA,  -1);
    
this.leftVolume= intent.getIntExtra(musicStrings!.LEFT_VOLUME,  -1);
    
this.rightVolume= intent.getIntExtra(musicStrings!.RIGHT_VOLUME,  -1);
    

                        }
                            

                                    }
                                
                        else {
                            


                            throw new RuntimeException("Started service without intent")

                        }
                            

                        if(songId !=  -1)
                        
                                    {
                                    System.gc();
    

                        if(player != NullAndroidCanvas.NULL_MEDIA_PLAYER && player.isPlaying())
                        
                                    {
                                    
    var player: MediaPlayer = this.player;
        
        
;
    
logUtil!.put(ALREADY_PLAYING, this, commonStateStrings!.ON_START_COMMAND);
    

    var runnable: Runnable = new object: ARunnable()
                                {
                                
    public run(){

        try {
            
        while(player.isPlaying())
        {
logUtil!.put(WAITING_FOR_MUSIC_TO_END, this, commonStateStrings!.ON_START_COMMAND);
    
Thread.sleep(1200);
    
}

onStartCommand(intent);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStateStrings!.ON_START_COMMAND, e);
    
}

}

                                }
                            ;
        
        
;
    

    var thread: Thread = new Thread(runnable);
        
        
;
    
thread.start();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.start();
    

                                    }
                                
}


}
                
            

