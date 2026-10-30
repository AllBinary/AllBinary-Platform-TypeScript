
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { PlayerListenerI } from '../../../../javax/microedition/media/PlayerListener.js';
const PlayerListener = PlayerListenerI;
//not GWT import const PlayerListener

import { MediaPlayer } from '../../../../android/media/MediaPlayer.js';
//not GWT import const MediaPlayer

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AndroidMediaPlayerWrapper } from './AndroidMediaPlayerWrapper.js';
//sameFolderImports - not GWT import - same folder const AndroidMediaPlayerWrapper
import { OnBufferingUpdateListener } from './OnBufferingUpdateListener.js';
//sameFolderImports - not GWT import - same folder const OnBufferingUpdateListener
import { OnPreparedListener } from './OnPreparedListener.js';
//sameFolderImports - not GWT import - same folder const OnPreparedListener
import { OnErrorListener } from './OnErrorListener.js';
//sameFolderImports - not GWT import - same folder const OnErrorListener
import { OnCompletionListener } from './OnCompletionListener.js';
//sameFolderImports - not GWT import - same folder const OnCompletionListener
//import { MediaPlayerOnBufferingUpdateListener } from './MediaPlayerOnBufferingUpdateListener.js';
//sameFolderImports - not GWT import - same folder const MediaPlayerOnBufferingUpdateListener
//import { AndroidMediaPlayerOnBufferingUpdateListener } from './AndroidMediaPlayerOnBufferingUpdateListener.js';
//sameFolderImports - not GWT import - same folder const AndroidMediaPlayerOnBufferingUpdateListener
//import { MediaPlayerOnPreparedListener } from './MediaPlayerOnPreparedListener.js';
//sameFolderImports - not GWT import - same folder const MediaPlayerOnPreparedListener
//import { AndroidMediaPlayerOnPreparedListener } from './AndroidMediaPlayerOnPreparedListener.js';
//sameFolderImports - not GWT import - same folder const AndroidMediaPlayerOnPreparedListener
//import { MediaPlayerOnErrorListener } from './MediaPlayerOnErrorListener.js';
//sameFolderImports - not GWT import - same folder const MediaPlayerOnErrorListener
//import { AndroidMediaPlayerOnErrorListener } from './AndroidMediaPlayerOnErrorListener.js';
//sameFolderImports - not GWT import - same folder const AndroidMediaPlayerOnErrorListener
//import { MediaPlayerOnCompletionListener } from './MediaPlayerOnCompletionListener.js';
//sameFolderImports - not GWT import - same folder const MediaPlayerOnCompletionListener
//import { AndroidMediaPlayerOnCompletionListener } from './AndroidMediaPlayerOnCompletionListener.js';
//sameFolderImports - not GWT import - same folder const AndroidMediaPlayerOnCompletionListener
type MediaPlayerOnBufferingUpdateListener = InstanceType<AndroidMediaPlayerWrapperListener['MediaPlayerOnBufferingUpdateListener']>;
type MediaPlayerOnPreparedListener = InstanceType<AndroidMediaPlayerWrapperListener['MediaPlayerOnPreparedListener']>;
type MediaPlayerOnErrorListener = InstanceType<AndroidMediaPlayerWrapperListener['MediaPlayerOnErrorListener']>;
type MediaPlayerOnCompletionListener = InstanceType<AndroidMediaPlayerWrapperListener['MediaPlayerOnCompletionListener']>;
type AndroidMediaPlayerOnBufferingUpdateListener = InstanceType<AndroidMediaPlayerWrapperListener['AndroidMediaPlayerOnBufferingUpdateListener']>;
type AndroidMediaPlayerOnPreparedListener = InstanceType<AndroidMediaPlayerWrapperListener['AndroidMediaPlayerOnPreparedListener']>;
type AndroidMediaPlayerOnErrorListener = InstanceType<AndroidMediaPlayerWrapperListener['AndroidMediaPlayerOnErrorListener']>;
type AndroidMediaPlayerOnCompletionListener = InstanceType<AndroidMediaPlayerWrapperListener['AndroidMediaPlayerOnCompletionListener']>;

export class AndroidMediaPlayerWrapperListener
            extends Object
         {
        

//inner= member=true isStatic=
MediaPlayerOnBufferingUpdateListener = (() => { const outer$AndroidMediaPlayerWrapperListener = this; return class
            extends Object
         implements MediaPlayer.OnBufferingUpdateListener {
        

    public onBufferingUpdate(mediaPlayer: MediaPlayer, i: number){
}


}; })();
//inner= member=true isStatic=
MediaPlayerOnPreparedListener = (() => { const outer$AndroidMediaPlayerWrapperListener = this; return class
            extends Object
         implements MediaPlayer.OnPreparedListener {
        

    public onPrepared(mp: MediaPlayer){
}


}; })();
//inner= member=true isStatic=
MediaPlayerOnErrorListener = (() => { const outer$AndroidMediaPlayerWrapperListener = this; return class
            extends Object
         implements MediaPlayer.OnErrorListener {
        

    public onError(mp: MediaPlayer, what: number, extra: number): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}; })();
//inner= member=true isStatic=
MediaPlayerOnCompletionListener = (() => { const outer$AndroidMediaPlayerWrapperListener = this; return class
            extends Object
         implements MediaPlayer.OnCompletionListener {
        

    public onCompletion(mp: MediaPlayer){
}


}; })();
//inner= member=true isStatic=
AndroidMediaPlayerOnBufferingUpdateListener = (() => { const outer$AndroidMediaPlayerWrapperListener = this; return class extends this.MediaPlayerOnBufferingUpdateListener {
        

    private readonly ON_BUFFERING_UPDATE: string = "onBufferingUpdate()";

    private readonly androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener;

public constructor (androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener){

            super();
        this.androidMediaPlayerWrapperListener= androidMediaPlayerWrapperListener;
    
}


    public onBufferingUpdate(mediaPlayer: MediaPlayer, i: number){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.putF(new StringMaker().append("Update buffer: ")!.appendint(i)!.append("%")!.toString(), this, this.ON_BUFFERING_UPDATE);
    
this.androidMediaPlayerWrapperListener!.androidMediaPlayerWrapper!.update(PlayerListener.DEVICE_UNAVAILABLE);
    
}


}; })();
//inner= member=true isStatic=
AndroidMediaPlayerOnPreparedListener = (() => { const outer$AndroidMediaPlayerWrapperListener = this; return class extends this.MediaPlayerOnPreparedListener {
        

    private readonly ON_PREPARE: string = "onPrepare()";

    private readonly androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener;

public constructor (androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener){

            super();
        this.androidMediaPlayerWrapperListener= androidMediaPlayerWrapperListener;
    
}


    public onPrepared(mp: MediaPlayer){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF(commonStrings!.START, this, this.ON_PREPARE);
    
this.androidMediaPlayerWrapperListener!.androidMediaPlayerWrapper!.update(PlayerListener.DEVICE_AVAILABLE);
    
}


}; })();
//inner= member=true isStatic=
AndroidMediaPlayerOnErrorListener = (() => { const outer$AndroidMediaPlayerWrapperListener = this; return class extends this.MediaPlayerOnErrorListener {
        

    private readonly ON_ERROR: string = "onError()";

    private readonly androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener;

public constructor (androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener){

            super();
        this.androidMediaPlayerWrapperListener= androidMediaPlayerWrapperListener;
    
}


    public onError(mp: MediaPlayer, what: number, extra: number): boolean{

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.START_LABEL)!.append("What: ")!.appendint(what)!.append(" Extra: ")!.appendint(extra)!.toString(), this, this.ON_ERROR);
    
this.androidMediaPlayerWrapperListener!.androidMediaPlayerWrapper!.update(PlayerListener.ERROR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}; })();
//inner= member=true isStatic=
AndroidMediaPlayerOnCompletionListener = (() => { const outer$AndroidMediaPlayerWrapperListener = this; return class extends this.MediaPlayerOnCompletionListener {
        

    private readonly ON_COMPLETE: string = "onComplete()";

    private readonly androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener;

public constructor (androidMediaPlayerWrapperListener: AndroidMediaPlayerWrapperListener){

            super();
        this.androidMediaPlayerWrapperListener= androidMediaPlayerWrapperListener;
    
}


    public onCompletion(mp: MediaPlayer){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF(commonStrings!.START, this, this.ON_COMPLETE);
    
this.androidMediaPlayerWrapperListener!.androidMediaPlayerWrapper!.update(PlayerListener.END_OF_MEDIA);
    
}


}; })();
    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private androidMediaPlayerWrapper: AndroidMediaPlayerWrapper = AndroidMediaPlayerWrapper.NULL_ANDROID_MEDIA_PLAYER_WRAPPER;

public constructor (androidMediaPlayerWrapper: AndroidMediaPlayerWrapper){

            super();
        
 try { this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.androidMediaPlayerWrapper= androidMediaPlayerWrapper;
    

    let mediaPlayer: MediaPlayer = androidMediaPlayerWrapper!.getMediaPlayer()!;;
    
mediaPlayer!.setOnCompletionListener(this.mOnCompletionListener);
    
mediaPlayer!.setOnBufferingUpdateListener(this.mOnBufferingUpdateListener);
    
mediaPlayer!.setOnPreparedListener(this.mOnPreparedListener);
    
mediaPlayer!.setOnErrorListener(this.mOnErrorListener);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

 }
   }
 
}


    private mOnBufferingUpdateListener: MediaPlayer.OnBufferingUpdateListener = new this.AndroidMediaPlayerOnBufferingUpdateListener(this);

    private mOnPreparedListener: MediaPlayer.OnPreparedListener = new this.AndroidMediaPlayerOnPreparedListener(this);

    private mOnErrorListener: MediaPlayer.OnErrorListener = new this.AndroidMediaPlayerOnErrorListener(this);

    private mOnCompletionListener: MediaPlayer.OnCompletionListener = new this.AndroidMediaPlayerOnCompletionListener(this);

}

