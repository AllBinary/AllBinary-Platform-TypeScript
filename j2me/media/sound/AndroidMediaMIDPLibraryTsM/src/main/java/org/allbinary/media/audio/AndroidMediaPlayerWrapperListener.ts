
        /* Generated Code Do Not Modify */
        



import { PlayerListener } from "../../../../javax/microedition/media/PlayerListener.js";

    
import { MediaPlayer } from "../../../../android/media/MediaPlayer.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

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
        
        
public constructor (androidMediaPlayerWrapper: AndroidMediaPlayerWrapper, listeningLevel: number){

            super();
                //var androidMediaPlayerWrapper = androidMediaPlayerWrapper
    //var listeningLevel = listeningLevel

        try {
            logUtil!.put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR)
this.androidMediaPlayerWrapper= androidMediaPlayerWrapper

    var mediaPlayer: MediaPlayer = androidMediaPlayerWrapper!.getMediaPlayer()!;
        
        


                        if(listeningLevel == 1)
                        
                                    {
                                    mediaPlayer!.setOnCompletionListener(mOnCompletionListener)

                                    }
                                
                        else {
                            


                            throw Error("Unknow Listening Leve")

                        }
                            
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e)
}

}

public constructor (androidMediaPlayerWrapper: AndroidMediaPlayerWrapper){

            super();
                //var androidMediaPlayerWrapper = androidMediaPlayerWrapper

        try {
            logUtil!.put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR)
this.androidMediaPlayerWrapper= androidMediaPlayerWrapper

    var mediaPlayer: MediaPlayer = androidMediaPlayerWrapper!.getMediaPlayer()!;
        
        

mediaPlayer!.setOnCompletionListener(mOnCompletionListener)
mediaPlayer!.setOnBufferingUpdateListener(mOnBufferingUpdateListener)
mediaPlayer!.setOnPreparedListener(mOnPreparedListener)
mediaPlayer!.setOnErrorListener(mOnErrorListener)
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e)
}

}


export inner class MediaPlayerOnBufferingUpdateListener
            extends Object
        
                , MediaPlayer.OnBufferingUpdateListener {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public onBufferingUpdate(mediaPlayer: MediaPlayer, i: number){
    //var mediaPlayer = mediaPlayer
    //var i = i
}


}
                
            
export inner class MediaPlayerOnPreparedListener
            extends Object
        
                , MediaPlayer.OnPreparedListener {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public onPrepared(mp: MediaPlayer){
    //var mp = mp
}


}
                
            
export inner class MediaPlayerOnErrorListener
            extends Object
        
                , MediaPlayer.OnErrorListener {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public onError(mp: MediaPlayer, what: number, extra: number): boolean{
    //var mp = mp
    //var what = what
    //var extra = extra



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            
export inner class MediaPlayerOnCompletionListener
            extends Object
        
                , MediaPlayer.OnCompletionListener {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    public onCompletion(mp: MediaPlayer){
    //var mp = mp
}


}
                
            
    private mOnBufferingUpdateListener: MediaPlayer.OnBufferingUpdateListener = new object: MediaPlayerOnBufferingUpdateListener()
                                {
                                
    public onBufferingUpdate(mediaPlayer: MediaPlayer, i: number){
    //var mediaPlayer = mediaPlayer
    //var i = i
logUtil!.put(StringMaker().
                            append("Update buffer: ")!.appendint(i)!.append("%")!.toString(), this, AndroidMediaPlayerWrapperListener.ON_BUFFERING_UPDATE)
this@AndroidMediaPlayerWrapperListener.androidMediaPlayerWrapper!.update(PlayerListener.DEVICE_UNAVAILABLE)
}

                                }
                            ;
        
        

    private mOnPreparedListener: MediaPlayer.OnPreparedListener = new object: MediaPlayerOnPreparedListener()
                                {
                                
    public onPrepared(mp: MediaPlayer){
    //var mp = mp
logUtil!.put(commonStrings!.START, this, AndroidMediaPlayerWrapperListener.ON_PREPARE)
this@AndroidMediaPlayerWrapperListener.androidMediaPlayerWrapper!.update(PlayerListener.DEVICE_AVAILABLE)
}

                                }
                            ;
        
        

    private mOnErrorListener: MediaPlayer.OnErrorListener = new object: MediaPlayerOnErrorListener()
                                {
                                
    public onError(mp: MediaPlayer, what: number, extra: number): boolean{
    //var mp = mp
    //var what = what
    //var extra = extra
logUtil!.put(StringMaker().
                            append(CommonLabels.getInstance()!.START_LABEL)!.append("What: ")!.appendint(what)!.append(" Extra: ")!.appendint(extra)!.toString(), this, AndroidMediaPlayerWrapperListener.ON_ERROR)
this@AndroidMediaPlayerWrapperListener.androidMediaPlayerWrapper!.update(PlayerListener.ERROR)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}

                                }
                            ;
        
        

    private mOnCompletionListener: MediaPlayer.OnCompletionListener = new object: MediaPlayerOnCompletionListener()
                                {
                                
    public onCompletion(mp: MediaPlayer){
    //var mp = mp
logUtil!.put(commonStrings!.START, this, AndroidMediaPlayerWrapperListener.ON_COMPLETE)
this@AndroidMediaPlayerWrapperListener.androidMediaPlayerWrapper!.update(PlayerListener.END_OF_MEDIA)
}

                                }
                            ;
        
        

}
                
            

