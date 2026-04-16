
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { Player } from "../../../../javax/microedition/media/Player.js";

    
import { ProgressCanvas } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js";

    
import { ProgressCanvasFactory } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

import { SoundStrings } from "./SoundStrings.js";

import {  } from "./.js";

import {  } from "./.js";

export class Sounds
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly soundStrings: SoundStrings = SoundStrings.getInstance()!;
        
        

    private readonly soundsFactoryInterface: SoundsFactoryInterface
public constructor (soundsFactoryInterface: SoundsFactoryInterface){

            super();
            var soundsFactoryInterface = soundsFactoryInterface
this.soundsFactoryInterface= soundsFactoryInterface;
    
}


                //@Throws(Error::class)
            
    public init(){
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.INIT);
    

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        
;
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    
soundsFactoryInterface!.init();
    

    var soundInterfaceArray: Sound[] = soundsFactoryInterface!.getSoundInterfaceArray()!;
        
        
;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        
;
    

    var indexInteger: Integer
;
    

    var indexString: string
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < soundInterfaceArray!.length; i++)
        {

    var soundInterface: Sound = soundInterfaceArray[i]!;
        
        
;
    

                        if(soundInterface != 
                                    null
                                )
                        
                                    {
                                    indexInteger= smallIntegerSingletonFactory!.getInstance(i);
    
indexString= indexInteger!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(commonLabels!.INDEX_LABEL);
    
stringBuffer!.append(indexString);
    
stringBuffer!.append(this.soundStrings!.SOUND);
    
stringBuffer!.append(soundInterface!.constructor.name.toString()!);
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.INIT);
    
soundInterface!.init();
    
progressCanvas!.addPortion(100, new StringMaker().
                            append(this.soundStrings!.INIT_SOUND)!.append(indexString)!.toString());
    

                                    }
                                
}

soundsFactoryInterface!.setInitialized(true);
    
this.logUtil!.putF(commonStrings!.END, this, commonStrings!.INIT);
    
}


                //@Throws(Error::class)
            
    public stopAll(){
this.logUtil!.putF(commonStrings!.START, this, this.soundStrings!.STOP_ALL);
    

    var soundInterfaceArray: Sound[] = soundsFactoryInterface!.getSoundInterfaceArray()!;
        
        
;
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    

    var player: Player
;
    




                        for (
    var index: number = 0;
        
        
index < soundInterfaceArray!.length; index++)
        {

                        if(soundInterfaceArray[index] != 
                                    null
                                )
                        
                                    {
                                    player= soundInterfaceArray[index]!.getPlayerP();
    

                        if(player != 
                                    null
                                )
                        
                                    {
                                    player.stop();
    
progressCanvas!.addPortion(100, this.soundStrings!.STOPPING_SOUND, index);
    

                                    }
                                

                                    }
                                
}

}


                //@Throws(Error::class)
            
    public closeAll(){
this.logUtil!.putF(commonStrings!.START, this, this.soundStrings!.CLOSE_ALL);
    

    var soundInterfaceArray: Sound[] = soundsFactoryInterface!.getSoundInterfaceArray()!;
        
        
;
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    

    var player: Player
;
    




                        for (
    var index: number = 0;
        
        
index < soundInterfaceArray!.length; index++)
        {

                        if(soundInterfaceArray[index] != 
                                    null
                                )
                        
                                    {
                                    player= soundInterfaceArray[index]!.getPlayerP();
    

                        if(player != 
                                    null
                                )
                        
                                    {
                                    player.close();
    
progressCanvas!.addPortion(100, this.soundStrings!.CLOSING_SOUND, index);
    

                                    }
                                

                                    }
                                
}

}


}
                
            

