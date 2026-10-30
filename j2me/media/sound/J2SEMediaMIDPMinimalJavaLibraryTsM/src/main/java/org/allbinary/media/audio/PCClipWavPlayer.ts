
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
        
            import { IllegalArgumentException } from '../../../../java/lang/IllegalArgumentException.js';
        
            import { Math } from '../../../../java/lang/Math.js';
        
//not plain js import { ARunnable } 
const ARunnable = globalThis.org.allbinary.thread.ARunnable;
type ARunnable<T = any, U = any> = typeof ARunnable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ARunnable;

import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
//not GWT import const ByteArrayInputStream

import { InputStream } from '../../../../java/io/InputStream.js';
//not GWT import const InputStream

import { Control } from '../../../../javax/microedition/media/Control.js';
//not GWT import const Control

import { MediaException } from '../../../../javax/microedition/media/MediaException.js';
//not GWT import const MediaException

import { PlayerListenerI } from '../../../../javax/microedition/media/PlayerListener.js';
const PlayerListener = PlayerListenerI;
//not GWT import const PlayerListener

import { AudioInputStream } from '../../../../javax/sound/sampled/AudioInputStream.js';
//not GWT import const AudioInputStream

import { AudioSystem } from '../../../../javax/sound/sampled/AudioSystem.js';
//not GWT import const AudioSystem

import { Clip } from '../../../../javax/sound/sampled/Clip.js';
//not GWT import const Clip

import { FloatControl } from '../../../../javax/sound/sampled/FloatControl.js';
//not GWT import const FloatControl

import { LineEvent } from '../../../../javax/sound/sampled/LineEvent.js';
//not GWT import const LineEvent

import { LineListener } from '../../../../javax/sound/sampled/LineListener.js';
//not GWT import const LineListener

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { MusicThreadPool } from '../../../../org/allbinary/thread/MusicThreadPool.js';
//not GWT import const MusicThreadPool

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicPlayer } from './BasicPlayer.js';
//sameFolderImports - not GWT import - same folder const BasicPlayer
import { NullAudioFormat } from './NullAudioFormat.js';
//sameFolderImports - not GWT import - same folder const NullAudioFormat
import { NullClip } from './NullClip.js';
//sameFolderImports - not GWT import - same folder const NullClip
import { NullControl } from './NullControl.js';
//sameFolderImports - not GWT import - same folder const NullControl

export class PCClipWavPlayer extends BasicPlayer implements LineListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly audioInputStream: AudioInputStream;

    private readonly clip: Clip;

public constructor (inputStream: InputStream){

            super();
        
    let audioInputStream: AudioInputStream = new AudioInputStream(new ByteArrayInputStream(NullUtil.getInstance()!.NULL_BYTE_ARRAY), NullAudioFormat.NULL_AUDIO_FORMAT, 0);;
    

    let clip: Clip = new NullClip();;
    

 try { audioInputStream= AudioSystem.getAudioInputStream(inputStream);
    
clip= this.create(audioInputStream);
    

                        if(clip == 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.put("Clip was null", this, this.commonStrings!.CONSTRUCTOR, new Exception());
    



                            throw new RuntimeException();
                    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

 }
   }
 
this.audioInputStream= audioInputStream;
    
this.clip= clip;
    
}


    public close(){
MusicThreadPool.getInstance()!.runTask(new class extends ARunnable
                                {
                                
    public run(){

 try { close2();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    

 }
   }
 
}

                                }
                            );
    
}


                //@Throws(Exception.constructor)
            
    close2(){
this.clip.drain();
    
this.clip.flush();
    
this.clip.close();
    
}


    public getContentType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


                //@Throws(MediaException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public start(){
MusicThreadPool.getInstance()!.runTask(new class extends ARunnable
                                {
                                
    public run(){

 try { start2();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    

 }
   }
 
}

                                }
                            );
    
}


                //@Throws(Exception.constructor)
            
    start2(){
this.clip.setFramePosition(0);
    
this.clip.loop(this.getLoopCount());
    
this.clip.start();
    
super.start();
    
}


                //@Throws(Exception.constructor)
            
    create(audioInputStream: AudioInputStream): Clip{

    let clip: Clip = AudioSystem.getClip()!;;
    
clip.addLineListener(this);
    
clip.open(audioInputStream);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return clip;
    
}


                //@Throws(MediaException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public stop(){
MusicThreadPool.getInstance()!.runTask(new class extends ARunnable
                                {
                                
    public run(){

 try { stop2();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    

 }
   }
 
}

                                }
                            );
    
}


                //@Throws(Exception.constructor)
            
    stop2(){
this.clip.stop();
    
super.stop();
    
}


    public getControl(controlType: string): Control{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NullControl();
    
}


    public getControls(): Control[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return [];
    
}


    public setVolume(leftVolume: number, rightVolume: number){
this.setVolumeF((leftVolume) /100.0);
    
}


    getVolume(): number{

    let masterGainFloatControl: FloatControl = this.clip.getControl(FloatControl.Type.MASTER_GAIN) as FloatControl;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.pow(10, masterGainFloatControl!.getValue() /20);
    
}


    setVolumeF(volume: number){

                        if(volume < 0 || volume > 1)
                        
                                    {
                                    


                            throw new IllegalArgumentException("Volume: " +volume);
                    

                                    }
                                

    let masterGainFloatControl: FloatControl = this.clip.getControl(FloatControl.Type.MASTER_GAIN) as FloatControl;;
    
masterGainFloatControl!.setValue(20 *Math.log10(volume));
    
}


    public getDuration(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.clip.getMicrosecondLength() /1000;
    
}


    public update(event: LineEvent){

                        if((event.getType() === LineEvent.Type.STOP))
                        
                                    {
                                    
    let size: number = this.listenersList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let listener: PlayerListener = this.listenersList!.get(size) as PlayerListener;;
    
listener.playerUpdate(this, PlayerListener.END_OF_MEDIA, 
                            null);
    
}


                                    }
                                
}


}

