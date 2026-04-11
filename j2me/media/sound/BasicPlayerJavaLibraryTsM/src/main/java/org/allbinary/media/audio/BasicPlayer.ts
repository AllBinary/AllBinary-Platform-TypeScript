
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
        



import { Control } from "../../../../javax/microedition/media/Control.js";

    
import { MediaException } from "../../../../javax/microedition/media/MediaException.js";

    
import { Player } from "../../../../javax/microedition/media/Player.js";

    
import { PlayerListener } from "../../../../javax/microedition/media/PlayerListener.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class BasicPlayer
            extends Object
        
                , Player
                , Controllable2 {
        

    public CONTROL_TYPE: string = "ToneControl";
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private state: number= 0

    private loopCount: number= 0

    readonly listenersList: BasicArrayList = new BasicArrayList();
        
        
public constructor (){

            super();
            this.setLoopCount(0);
    
this.setState(Player.UNREALIZED);
    
}


    public getContentType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public getControl(controlType: string): Control{
var controlType = controlType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullControl();
    
}


    public getControls(): Control[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return [];
    
}


    public close(){
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public addPlayerListener(playerListener: PlayerListener){
var playerListener = playerListener

                        if(!this.listenersList!.contains(playerListener);

                        )
                        
                                    {
                                    this.listenersList!.add(playerListener);
    

                                    }
                                
}


    public removePlayerListener(playerListener: PlayerListener){
var playerListener = playerListener
this.listenersList!.remove(playerListener);
    
}


    public getState(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.state;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setState(state: number){
var state = state
this.state= state;
    
}


    public getDuration(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getMediaTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public deallocate(){
}


                //@Throws(MediaException::class)
            
    public prefetch(){
}


                //@Throws(MediaException::class)
            
    public realize(){
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setLoopCount(count: number){
var count = count
this.loopCount= count;
    
}


    getLoopCount(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.loopCount;
    
}


                //@Throws(MediaException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setMediaTime(now: number): number{
var now = now



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


                //@Throws(MediaException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public start(){
this.setState(Player.STARTED);
    
}


                //@Throws(MediaException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public stop(){
this.setState(Player.PREFETCHED);
    
}


    public setVolume(leftVolume: number, rightVolume: number){
    //var leftVolume = leftVolume
    //var rightVolume = rightVolume
}


}
                
            

