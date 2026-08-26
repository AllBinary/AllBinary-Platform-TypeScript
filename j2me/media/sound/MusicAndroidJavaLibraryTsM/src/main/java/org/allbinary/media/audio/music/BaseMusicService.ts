
        /* Generated Code Do Not Modify */
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
        
            import { System } from '../../../../../java/lang/System.js';
        
            import { Thread } from '../../../../../java/lang/Thread.js';
        
            import { Runnable } from '../../../../../java/lang/Runnable.js';
        
//not game specific package import { Service } from '../../../../../android/app/Service.js';
      const Service = globalThis.android.app.Service;

      
//not game specific package import { Intent } from '../../../../../android/content/Intent.js';
      const Intent = globalThis.android.content.Intent;

      
//not game specific package import { MediaPlayer } from '../../../../../android/media/MediaPlayer.js';
      const MediaPlayer = globalThis.android.media.MediaPlayer;

      
//not game specific package import { IBinder } from '../../../../../android/os/IBinder.js';
      const IBinder = globalThis.android.os.IBinder;

      
//not game specific package import { NullAndroidCanvas } from '../../../../../org/allbinary/android/NullAndroidCanvas.js';
      const NullAndroidCanvas = globalThis.org.allbinary.android.NullAndroidCanvas;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonStateStrings } from '../../../../../org/allbinary/string/CommonStateStrings.js';
      const CommonStateStrings = globalThis.org.allbinary.string.CommonStateStrings;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { ARunnable } from '../../../../../org/allbinary/thread/ARunnable.js';
      const ARunnable = globalThis.org.allbinary.thread.ARunnable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MusicStrings } from './MusicStrings.js';

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

    public onBind(intent: Intent): IBinder{
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStateStrings!.BIND);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public onCreate(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStateStrings!.CREATE);
    
}


    public onDestroy(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStateStrings!.DESTROY);
    

                        if(this.player != NullAndroidCanvas.NULL_MEDIA_PLAYER)
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStateStrings!.PAUSE);
    
this.player.stop();
    
this.player.reset();
    
this.player.release();
    

                                    }
                                
}


    public pause(){

                        if(this.player != NullAndroidCanvas.NULL_MEDIA_PLAYER)
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStateStrings!.PAUSE);
    
this.player.pause();
    

                                    }
                                
}


    public resume(){

                        if(this.player != NullAndroidCanvas.NULL_MEDIA_PLAYER && !this.player.isPlaying())
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStateStrings!.RESUME);
    
this.player.start();
    

                                    }
                                
}


    public start(){
this.player= MediaPlayer.create(this, this.songId);
    
this.player.setVolume((this.leftVolume) /100.0, (this.rightVolume) /100.0);
    
this.player.setLooping(false);
    
this.player.start();
    
}


    public onStart(intent: Intent, startid: number){
this.onStartCommandIntent(intent);
    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStateStrings!.START);
    
}


    public onStartCommand(intent: Intent, flags: number, startId: number): number{
this.onStartCommandIntent(intent);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Service.START_STICKY;
    
}


    public onStartCommandIntent(intent: Intent){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStateStrings!.ON_START_COMMAND);
    

    var musicStrings: MusicStrings = MusicStrings.getInstance()!;;
    

                        if(intent != 
                                    null
                                )
                        
                                    {
                                    
    var command: number = intent.getIntExtra(this.commonStateStrings!.ON_START_COMMAND,  -1)!;;
    
this.logUtil!.putF(CommonLabels.getInstance()!.COMMAND_LABEL +command, this, this.commonStateStrings!.ON_START_COMMAND);
    

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
                            


                            throw new RuntimeException("Started service without intent");
                    

                        }
                            

                        if(this.songId !=  -1)
                        
                                    {
                                    System.gc();
    

                        if(this.player != NullAndroidCanvas.NULL_MEDIA_PLAYER && this.player.isPlaying())
                        
                                    {
                                    
    var player: MediaPlayer = this.player;;
    
this.logUtil!.putF(this.ALREADY_PLAYING, this, this.commonStateStrings!.ON_START_COMMAND);
    

//inner=true member= isStatic=
class MusicRunnable extends ARunnable {
        

    private readonly baseMusicService: BaseMusicService;

 constructor (baseMusicService: BaseMusicService){

            super();
        this.baseMusicService= baseMusicService;
    
}


    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var commonStateStrings: CommonStateStrings = CommonStateStrings.getInstance()!;;
    

        try {
            
        while(player.isPlaying())
        {
logUtil!.putF(this.baseMusicService!.WAITING_FOR_MUSIC_TO_END, this, commonStateStrings!.ON_START_COMMAND);
    
Thread.sleep(1200);
    
}

this.baseMusicService!.onStartCommandIntent(intent);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStateStrings!.ON_START_COMMAND, e);
    
}

}


}
                
            

                    //Otherwise - statement - EmptyStmt


    var runnable: Runnable = new MusicRunnable(this);;
    

    var thread: Thread = new Thread(runnable);;
    
thread.start();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.start();
    

                                    }
                                
}


}
                
            

