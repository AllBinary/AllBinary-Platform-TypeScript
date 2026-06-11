
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { PlayerListener } from '../../../../javax/microedition/media/PlayerListener.js';
      
import { MediaPlayer } from '../../../../android/media/MediaPlayer.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AndroidMediaPlayerWrapper } from './AndroidMediaPlayerWrapper.js';
import { OnBufferingUpdateListener } from './OnBufferingUpdateListener.js';
import { OnPreparedListener } from './OnPreparedListener.js';
import { OnErrorListener } from './OnErrorListener.js';
import { OnCompletionListener } from './OnCompletionListener.js';
//import { MediaPlayerOnBufferingUpdateListener } from './MediaPlayerOnBufferingUpdateListener.js';
//import { AndroidMediaPlayerOnBufferingUpdateListener } from './AndroidMediaPlayerOnBufferingUpdateListener.js';
//import { MediaPlayerOnPreparedListener } from './MediaPlayerOnPreparedListener.js';
//import { AndroidMediaPlayerOnPreparedListener } from './AndroidMediaPlayerOnPreparedListener.js';
//import { MediaPlayerOnErrorListener } from './MediaPlayerOnErrorListener.js';
//import { AndroidMediaPlayerOnErrorListener } from './AndroidMediaPlayerOnErrorListener.js';
//import { MediaPlayerOnCompletionListener } from './MediaPlayerOnCompletionListener.js';
//import { AndroidMediaPlayerOnCompletionListener } from './AndroidMediaPlayerOnCompletionListener.js';

export class AndroidMediaPlayerWrapperListener
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private androidMediaPlayerWrapper: AndroidMediaPlayerWrapper = AndroidMediaPlayerWrapper.NULL_ANDROID_MEDIA_PLAYER_WRAPPER;

public constructor (androidMediaPlayerWrapper: AndroidMediaPlayerWrapper){

            super();
        
        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.androidMediaPlayerWrapper= androidMediaPlayerWrapper;
    

    var mediaPlayer: MediaPlayer = androidMediaPlayerWrapper!.getMediaPlayer()!;;
    
mediaPlayer!.setOnCompletionListener(this.mOnCompletionListener);
    
mediaPlayer!.setOnBufferingUpdateListener(this.mOnBufferingUpdateListener);
    
mediaPlayer!.setOnPreparedListener(this.mOnPreparedListener);
    
mediaPlayer!.setOnErrorListener(this.mOnErrorListener);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    
}

}


//inner= member=true isStatic=
MediaPlayerOnBufferingUpdateListener = class
            extends Object
         implements MediaPlayer.OnBufferingUpdateListener {
        

    public onBufferingUpdate(mediaPlayer: MediaPlayer, i: number){
}


}
                
            
//inner= member=true isStatic=
MediaPlayerOnPreparedListener = class
            extends Object
         implements MediaPlayer.OnPreparedListener {
        

    public onPrepared(mp: MediaPlayer){
}


}
                
            
//inner= member=true isStatic=
MediaPlayerOnErrorListener = class
            extends Object
         implements MediaPlayer.OnErrorListener {
        

    public onError(mp: MediaPlayer, what: number, extra: number): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            
//inner= member=true isStatic=
MediaPlayerOnCompletionListener = class
            extends Object
         implements MediaPlayer.OnCompletionListener {
        

    public onCompletion(mp: MediaPlayer){
}


}
                
            
//inner= member=true isStatic=
AndroidMediaPlayerOnBufferingUpdateListener = class extends this.MediaPlayerOnBufferingUpdateListener {
        

    private readonly ON_BUFFERING_UPDATE: string = "onBufferingUpdate()";

    private readonly androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener;

public constructor (androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener){

            super();
        this.androidMediaPlayerWrapperListener= androidMediaPlayerWrapperListener;
    
}


    public onBufferingUpdate(mediaPlayer: MediaPlayer, i: number){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.putF(new StringMaker().append("Update buffer: ")!.appendint(i)!.append("%")!.toString(), this, this.ON_BUFFERING_UPDATE);
    
this.androidMediaPlayerWrapperListener!.androidMediaPlayerWrapper!.update(PlayerListener.DEVICE_UNAVAILABLE);
    
}


}
                
            
    private mOnBufferingUpdateListener: MediaPlayer.OnBufferingUpdateListener = new this.AndroidMediaPlayerOnBufferingUpdateListener(this);

//inner= member=true isStatic=
AndroidMediaPlayerOnPreparedListener = class extends this.MediaPlayerOnPreparedListener {
        

    private readonly ON_PREPARE: string = "onPrepare()";

    private readonly androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener;

public constructor (androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener){

            super();
        this.androidMediaPlayerWrapperListener= androidMediaPlayerWrapperListener;
    
}


    public onPrepared(mp: MediaPlayer){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF(commonStrings!.START, this, this.ON_PREPARE);
    
this.androidMediaPlayerWrapperListener!.androidMediaPlayerWrapper!.update(PlayerListener.DEVICE_AVAILABLE);
    
}


}
                
            
    private mOnPreparedListener: MediaPlayer.OnPreparedListener = new this.AndroidMediaPlayerOnPreparedListener(this);

//inner= member=true isStatic=
AndroidMediaPlayerOnErrorListener = class extends this.MediaPlayerOnErrorListener {
        

    private readonly ON_ERROR: string = "onError()";

    private readonly androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener;

public constructor (androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener){

            super();
        this.androidMediaPlayerWrapperListener= androidMediaPlayerWrapperListener;
    
}


    public onError(mp: MediaPlayer, what: number, extra: number): boolean{

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.START_LABEL)!.append("What: ")!.appendint(what)!.append(" Extra: ")!.appendint(extra)!.toString(), this, this.ON_ERROR);
    
this.androidMediaPlayerWrapperListener!.androidMediaPlayerWrapper!.update(PlayerListener.ERROR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            
    private mOnErrorListener: MediaPlayer.OnErrorListener = new this.AndroidMediaPlayerOnErrorListener(this);

//inner= member=true isStatic=
AndroidMediaPlayerOnCompletionListener = class extends this.MediaPlayerOnCompletionListener {
        

    private readonly ON_COMPLETE: string = "onComplete()";

    private readonly androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener;

public constructor (androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener){

            super();
        this.androidMediaPlayerWrapperListener= androidMediaPlayerWrapperListener;
    
}


    public onCompletion(mp: MediaPlayer){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF(commonStrings!.START, this, this.ON_COMPLETE);
    
this.androidMediaPlayerWrapperListener!.androidMediaPlayerWrapper!.update(PlayerListener.END_OF_MEDIA);
    
}


}
                
            
    private mOnCompletionListener: MediaPlayer.OnCompletionListener = new this.AndroidMediaPlayerOnCompletionListener(this);

}
                
            

