
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
import { IOException } from '../../../../java/io/IOException.js';
      //not GWT import const IOException = globalThis.java.io.IOException;

      
import { AudioFormat } from '../../../../javax/sound/sampled/AudioFormat.js';
      //not GWT import const AudioFormat = globalThis.javax.sound.sampled.AudioFormat;

      
import { AudioInputStream } from '../../../../javax/sound/sampled/AudioInputStream.js';
      //not GWT import const AudioInputStream = globalThis.javax.sound.sampled.AudioInputStream;

      
import { BooleanControl } from '../../../../javax/sound/sampled/BooleanControl.js';
      //not GWT import const BooleanControl = globalThis.javax.sound.sampled.BooleanControl;

      
import { Clip } from '../../../../javax/sound/sampled/Clip.js';
      //not GWT import const Clip = globalThis.javax.sound.sampled.Clip;

      
import { Control } from '../../../../javax/sound/sampled/Control.js';
      //not GWT import const Control = globalThis.javax.sound.sampled.Control;

      
import { Type } from '../../../../javax/sound/sampled/Control/Type.js';
      //not GWT import const Type = globalThis.javax.sound.sampled.Control.Type;

      
import { Info } from '../../../../javax/sound/sampled/Line/Info.js';
      //not GWT import const Info = globalThis.javax.sound.sampled.Line.Info;

      
import { LineListener } from '../../../../javax/sound/sampled/LineListener.js';
      //not GWT import const LineListener = globalThis.javax.sound.sampled.LineListener;

      
import { LineUnavailableException } from '../../../../javax/sound/sampled/LineUnavailableException.js';
      //not GWT import const LineUnavailableException = globalThis.javax.sound.sampled.LineUnavailableException;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NullJ2SEControl } from './NullJ2SEControl.js';
//not GWT import const NullJ2SEControl = globalThis.org.allbinary.media.audio.NullJ2SEControl;

                import { NullAudioFormat } from './NullAudioFormat.js';
//not GWT import const NullAudioFormat = globalThis.org.allbinary.media.audio.NullAudioFormat;

                
export class NullClip
            extends Object
         implements Clip {
        

    public static readonly NULL_CONTROL: NullJ2SEControl = new NullJ2SEControl(BooleanControl.Type.MUTE);

                //@Throws(LineUnavailableException.constructor)
            
    public open(format: AudioFormat, data: number[], offset: number, bufferSize: number){
}


                //@Throws(LineUnavailableException.constructor, IOException.constructor)
            
    public open(stream: AudioInputStream){
}


    public getFrameLength(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getMicrosecondLength(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public setFramePosition(frames: number){
}


    public setMicrosecondPosition(microseconds: number){
}


    public setLoopPoints(start: number, end: number){
}


    public loop(count: number){
}


    public drain(){
}


    public flush(){
}


    public start(){
}


    public stop(){
}


    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isActive(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getFormat(): AudioFormat{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullAudioFormat.NULL_AUDIO_FORMAT;
    
}


    public getBufferSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public available(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getFramePosition(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getLongFramePosition(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getMicrosecondPosition(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0.0;
    
}


    public getLineInfo(): Info{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Info(this.constructor, NullAudioFormat.NULL_AUDIO_FORMAT);
    
}


                //@Throws(LineUnavailableException.constructor)
            
    public open(){
}


    public close(){
}


    public isOpen(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getControls(): Control[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return [];
    
}


    public isControlSupported(control: Type): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getControl(control: Type): Control{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullClip.NULL_CONTROL;
    
}


    public addLineListener(listener: LineListener){
}


    public removeLineListener(listener: LineListener){
}


}



