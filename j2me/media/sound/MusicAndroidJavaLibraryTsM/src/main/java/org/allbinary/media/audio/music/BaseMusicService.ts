
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { MusicStrings } from "./MusicStrings.js";

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
this.logUtil!.putF(this.commonStrings!.START, this, commonStateStrings!.BIND);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public onCreate(){
this.logUtil!.putF(this.commonStrings!.START, this, commonStateStrings!.CREATE);
    
}


    public onDestroy(){
this.logUtil!.putF(this.commonStrings!.START, this, commonStateStrings!.DESTROY);
    

                        if(this.player != NullAndroidCanvas.NULL_MEDIA_PLAYER)
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, commonStateStrings!.PAUSE);
    
this.player.stop();
    
this.player.reset();
    
this.player.release();
    

                                    }
                                
}


    public pause(){

                        if(this.player != NullAndroidCanvas.NULL_MEDIA_PLAYER)
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, commonStateStrings!.PAUSE);
    
this.player.pause();
    

                                    }
                                
}


    public resume(){

                        if(this.player != NullAndroidCanvas.NULL_MEDIA_PLAYER && !this.player.isPlaying();

                        )
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, commonStateStrings!.RESUME);
    
this.player.start();
    

                                    }
                                
}


    public start(){
player= MediaPlayer.create(this, songId);
    
this.player.setVolume((this.leftVolume) /100.0f, (this.rightVolume) /100.0f);
    
this.player.setLooping(false);
    
this.player.start();
    
}


    public onStart(intent: Intent, startid: number){
    //var intent = intent
    //var startid = startid
onStartCommand(intent);
    
this.logUtil!.putF(this.commonStrings!.START, this, commonStateStrings!.START);
    
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
this.logUtil!.putF(this.commonStrings!.START, this, commonStateStrings!.ON_START_COMMAND);
    

    var musicStrings: MusicStrings = MusicStrings.getInstance()!;
        
        
;
    

                        if(intent != 
                                    null
                                )
                        
                                    {
                                    
    var command: number = intent.getIntExtra(commonStateStrings!.ON_START_COMMAND,  -1)!;
        
        
;
    
this.logUtil!.putF(CommonLabels.getInstance()!.COMMAND_LABEL +command, this, commonStateStrings!.ON_START_COMMAND);
    

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
                            

                        if(this.songId !=  -1)
                        
                                    {
                                    System.gc();
    

                        if(this.player != NullAndroidCanvas.NULL_MEDIA_PLAYER && this.player.isPlaying())
                        
                                    {
                                    
    var player: MediaPlayer = this.player;
        
        
;
    
this.logUtil!.putF(this.ALREADY_PLAYING, this, commonStateStrings!.ON_START_COMMAND);
    

    var runnable: Runnable = new object: ARunnable()
                                {
                                
    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
        while(player.isPlaying())
        {
logUtil!.putF(WAITING_FOR_MUSIC_TO_END, this, commonStateStrings!.ON_START_COMMAND);
    
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
                
            

