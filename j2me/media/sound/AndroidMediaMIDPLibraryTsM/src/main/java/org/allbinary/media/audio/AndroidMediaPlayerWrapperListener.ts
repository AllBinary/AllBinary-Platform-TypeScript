
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
//import { MediaPlayerOnPreparedListener } from './MediaPlayerOnPreparedListener.js';
//import { MediaPlayerOnErrorListener } from './MediaPlayerOnErrorListener.js';
//import { MediaPlayerOnCompletionListener } from './MediaPlayerOnCompletionListener.js';

export class AndroidMediaPlayerWrapperListener
            extends Object
         {
        

    private static readonly ON_BUFFERING_UPDATE: string = "onBufferingUpdate()";

    private static readonly ON_PREPARE: string = "onPrepare()";

    private static readonly ON_ERROR: string = "onError()";

    private static readonly ON_COMPLETE: string = "onComplete()";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private androidMediaPlayerWrapper: AndroidMediaPlayerWrapper = AndroidMediaPlayerWrapper.NULL_ANDROID_MEDIA_PLAYER_WRAPPER;
public constructor (androidMediaPlayerWrapper: AndroidMediaPlayerWrapper){

            super();
        
        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.androidMediaPlayerWrapper= androidMediaPlayerWrapper;
    

    var mediaPlayer: MediaPlayer = androidMediaPlayerWrapper!.getMediaPlayer()!;
;
    
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
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public onBufferingUpdate(mediaPlayer: MediaPlayer, i: number){
}


}
                
            
//inner= member=true isStatic=
MediaPlayerOnPreparedListener = class
            extends Object
         implements MediaPlayer.OnPreparedListener {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public onPrepared(mp: MediaPlayer){
}


}
                
            
//inner= member=true isStatic=
MediaPlayerOnErrorListener = class
            extends Object
         implements MediaPlayer.OnErrorListener {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public onError(mp: MediaPlayer, what: number, extra: number): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            
//inner= member=true isStatic=
MediaPlayerOnCompletionListener = class
            extends Object
         implements MediaPlayer.OnCompletionListener {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public onCompletion(mp: MediaPlayer){
}


}
                
            
    private mOnBufferingUpdateListener: MediaPlayer.OnBufferingUpdateListener = new class extends this.MediaPlayerOnBufferingUpdateListener
                                {
                                
    public onBufferingUpdate(mediaPlayer: MediaPlayer, i: number){

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    
logUtil!.putF(new StringMaker().
                            append("Update buffer: ")!.appendint(i)!.append("%")!.toString(), this, AndroidMediaPlayerWrapperListener.ON_BUFFERING_UPDATE);
    
AndroidMediaPlayerWrapperListener.prototype.androidMediaPlayerWrapper!.update(PlayerListener.DEVICE_UNAVAILABLE);
    
}

                                }
                            ;

    private mOnPreparedListener: MediaPlayer.OnPreparedListener = new class extends this.MediaPlayerOnPreparedListener
                                {
                                
    public onPrepared(mp: MediaPlayer){

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    
logUtil!.putF(commonStrings!.START, this, AndroidMediaPlayerWrapperListener.ON_PREPARE);
    
AndroidMediaPlayerWrapperListener.prototype.androidMediaPlayerWrapper!.update(PlayerListener.DEVICE_AVAILABLE);
    
}

                                }
                            ;

    private mOnErrorListener: MediaPlayer.OnErrorListener = new class extends this.MediaPlayerOnErrorListener
                                {
                                
    public onError(mp: MediaPlayer, what: number, extra: number): boolean{

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    
logUtil!.putF(new StringMaker().
                            append(CommonLabels.getInstance()!.START_LABEL)!.append("What: ")!.appendint(what)!.append(" Extra: ")!.appendint(extra)!.toString(), this, AndroidMediaPlayerWrapperListener.ON_ERROR);
    
AndroidMediaPlayerWrapperListener.prototype.androidMediaPlayerWrapper!.update(PlayerListener.ERROR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}

                                }
                            ;

    private mOnCompletionListener: MediaPlayer.OnCompletionListener = new class extends this.MediaPlayerOnCompletionListener
                                {
                                
    public onCompletion(mp: MediaPlayer){

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    
logUtil!.putF(commonStrings!.START, this, AndroidMediaPlayerWrapperListener.ON_COMPLETE);
    
AndroidMediaPlayerWrapperListener.prototype.androidMediaPlayerWrapper!.update(PlayerListener.END_OF_MEDIA);
    
}

                                }
                            ;

}
                
            

