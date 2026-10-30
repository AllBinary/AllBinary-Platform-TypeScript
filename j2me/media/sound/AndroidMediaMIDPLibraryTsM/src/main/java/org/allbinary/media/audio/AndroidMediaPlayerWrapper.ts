
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
import { MediaException } from '../../../../javax/microedition/media/MediaException.js';
//not GWT import const MediaException

import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
//not GWT import const Player

import { PlayerListenerI } from '../../../../javax/microedition/media/PlayerListener.js';
const PlayerListener = PlayerListenerI;
//not GWT import const PlayerListener

import { MediaPlayer } from '../../../../android/media/MediaPlayer.js';
//not GWT import const MediaPlayer

import { NullAndroidCanvas } from '../../../../org/allbinary/android/NullAndroidCanvas.js';
//not GWT import const NullAndroidCanvas

//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
type ResourceUtil<T = any, U = any> = typeof ResourceUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ResourceUtil;

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicPlayer } from './BasicPlayer.js';
//sameFolderImports - not GWT import - same folder const BasicPlayer

export class AndroidMediaPlayerWrapper extends BasicPlayer {
        

    public static createPlayerWrapper(): AndroidMediaPlayerWrapper{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AndroidMediaPlayerWrapper(StringUtil.getInstance()!.EMPTY_STRING);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw new RuntimeException();
                    

 }
   }
 
}


    public static readonly NULL_ANDROID_MEDIA_PLAYER_WRAPPER: AndroidMediaPlayerWrapper = AndroidMediaPlayerWrapper.createPlayerWrapper()!;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private mediaPlayer: MediaPlayer = NullAndroidCanvas.NULL_MEDIA_PLAYER;

public constructor (resource: string){

            super();
        
 try { 
                        if(resource == StringUtil.getInstance()!.EMPTY_STRING)
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    let resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;;
    

    let mediaPlayer: MediaPlayer = MediaPlayer.create(resourceUtil!.getContext(), resourceUtil!.getResourceId(resource)!.intValue())!;;
    

                        if(mediaPlayer == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception(new StringMaker().append("Failed to create media player for: ")!.append(resource)!.append(" with id: ")!.append(resourceUtil!.getResourceId(resource)!.toString())!.toString());
                    

                                    }
                                
this.setMediaPlayer(mediaPlayer);
    
this.mediaPlayer!.setLooping(false);
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION_LABEL +resource, this, this.commonStrings!.CONSTRUCTOR, e);
    



                            throw e;
                    

 }
   }
 
}


    public setLoopCount(count: number){
super.setLoopCount(count);
    

                        if(this.mediaPlayer != NullAndroidCanvas.NULL_MEDIA_PLAYER && this.mediaPlayer != 
                                    null
                                )
                        
                                    {
                                    
                        if(count == 0)
                        
                                    {
                                    this.mediaPlayer!.setLooping(false);
    

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public addPlayerListener(playerListener: PlayerListener){
super.addPlayerListener(playerListener);
    
}


    public removePlayerListener(playerListener: PlayerListener){
super.removePlayerListener(playerListener);
    
}


    public getState(): number{

                        if(this.mediaPlayer!.isPlaying())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PlayerI.STARTED;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PlayerI.PREFETCHED;
    

                        }
                            
}


    public close(){

 try { this.mediaPlayer!.release();
    
this.mediaPlayer= NullAndroidCanvas.NULL_MEDIA_PLAYER;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CLOSE, e);
    

 }
   }
 
}


                //@Throws(MediaException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public start(){

 try { 
                        if(this.mediaPlayer!.isPlaying())
                        
                                    {
                                    this.mediaPlayer!.pause();
    
this.mediaPlayer!.seekTo(0);
    

                                    }
                                
this.mediaPlayer!.start();
    
super.start();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.START_METHOD_NAME, e);
    

 }
   }
 
}


                //@Throws(MediaException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public stop(){

 try { this.mediaPlayer!.stop();
    
this.mediaPlayer!.prepare();
    
super.stop();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "stop", e);
    

 }
   }
 
}


    public update(event: string){
this.logUtil!.putF("LineEvent: " +event, this, this.commonStrings!.UPDATE);
    

    let size: number = this.listenersList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let listener: PlayerListener = this.listenersList!.objectArray[index]! as PlayerListener;;
    
listener.playerUpdate(this, event, NullUtil.getInstance()!.NULL_OBJECT);
    
}

}


    public setVolume(leftVolume: number, rightVolume: number){
this.mediaPlayer!.setVolume((leftVolume) /100.0, (rightVolume) /100.0);
    
}


    public getDuration(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mediaPlayer!.getDuration();
    
}


    public setMediaPlayer(mediaPlayer: MediaPlayer){
this.mediaPlayer= mediaPlayer;
    
}


    public getMediaPlayer(): MediaPlayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mediaPlayer;
    
}


}

