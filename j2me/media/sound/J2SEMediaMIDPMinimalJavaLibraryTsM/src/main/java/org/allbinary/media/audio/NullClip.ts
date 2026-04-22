
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
        



import { IOException } from "../../../../java/io/IOException.js";

    
import { AudioFormat } from "../../../../javax/sound/sampled/AudioFormat.js";

    
import { AudioInputStream } from "../../../../javax/sound/sampled/AudioInputStream.js";

    
import { BooleanControl } from "../../../../javax/sound/sampled/BooleanControl.js";

    
import { Clip } from "../../../../javax/sound/sampled/Clip.js";

    
import { Control } from "../../../../javax/sound/sampled/Control.js";

    
import { Type } from "../../../../javax/sound/sampled/Control/Type.js";

    
import { Info } from "../../../../javax/sound/sampled/Line/Info.js";

    
import { LineListener } from "../../../../javax/sound/sampled/LineListener.js";

    
import { LineUnavailableException } from "../../../../javax/sound/sampled/LineUnavailableException.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { NullAudioFormat } from "./NullAudioFormat.js";

export class NullClip
            extends Object
         implements Clip {
        

    public static readonly NULL_CONTROL: NullJ2SEControl = new NullJ2SEControl(BooleanControl.Type.MUTE);
        
        

                //@Throws(LineUnavailableException::class)
            
    public open(format: AudioFormat, data: number[], offset: number, bufferSize: number){
var format = format
var data = data
var offset = offset
var bufferSize = bufferSize
}


                //@Throws(LineUnavailableException::class, IOException::class)
            
    public open(stream: AudioInputStream){
var stream = stream
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
var frames = frames
}


    public setMicrosecondPosition(microseconds: number){
var microseconds = microseconds
}


    public setLoopPoints(start: number, end: number){
var start = start
var end = end
}


    public loop(count: number){
var count = count
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
                        return 0L;
    
}


    public getMicrosecondPosition(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0L;
    
}


    public getLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0.0f;
    
}


    public getLineInfo(): Info{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Info(thisconstructor, NullAudioFormat.NULL_AUDIO_FORMAT);
    
}


                //@Throws(LineUnavailableException::class)
            
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
var control = control



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getControl(control: Type): Control{
var control = control



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullClip.NULL_CONTROL;
    
}


    public addLineListener(listener: LineListener){
var listener = listener
}


    public removeLineListener(listener: LineListener){
var listener = listener
}


}
                
            

