
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
        



import { Player } from "../../../../javax/microedition/media/Player.js";

    
import { ProgressCanvas } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js";

    
import { ProgressCanvasFactory } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

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
this.soundsFactoryInterface= soundsFactoryInterface
}


                @Throws(Exception::class)
            
    public init(){
put(commonStrings!.START, this, commonStrings!.INIT)

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        


    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        

init()

    var soundInterfaceArray: Sound[] = soundsFactoryInterface!.getSoundInterfaceArray()!;
        
        


    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        


    var indexInteger: Integer


    var indexString: string


    var stringBuffer: StringMaker = new StringMaker();
        
        





                        for (
    var i: number = 0;
        
        
i < soundInterfaceArray!.length; i++)
        {

    var soundInterface: Sound = soundInterfaceArray[i]!;
        
        


    
                        if(soundInterface != 
                                    null
                                )
                        
                                    {
                                    indexInteger= smallIntegerSingletonFactory!.getInstance(i)
indexString= indexInteger!.toString()
delete(0, stringBuffer!.length())
append(commonLabels!.INDEX_LABEL)
append(indexString)
append(this.soundStrings!.SOUND)
append(soundInterface!::class.toString()!)
put(stringBuffer!.toString(), this, commonStrings!.INIT)
init()
addPortion(100, StringMaker().
                            append(this.soundStrings!.INIT_SOUND)!.append(indexString)!.toString())

                                    }
                                
}

setInitialized(true)
put(commonStrings!.END, this, commonStrings!.INIT)
}


                @Throws(Exception::class)
            
    public stopAll(){
put(commonStrings!.START, this, this.soundStrings!.STOP_ALL)

    var soundInterfaceArray: Sound[] = soundsFactoryInterface!.getSoundInterfaceArray()!;
        
        


    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        


    var player: Player





                        for (
    var index: number = 0;
        
        
index < soundInterfaceArray!.length; index++)
        {

    
                        if(soundInterfaceArray[index] != 
                                    null
                                )
                        
                                    {
                                    player= soundInterfaceArray[index]!.getPlayerP()

    
                        if(player != 
                                    null
                                )
                        
                                    {
                                    stop()
addPortion(100, this.soundStrings!.STOPPING_SOUND, index)

                                    }
                                

                                    }
                                
}

}


                @Throws(Exception::class)
            
    public closeAll(){
put(commonStrings!.START, this, this.soundStrings!.CLOSE_ALL)

    var soundInterfaceArray: Sound[] = soundsFactoryInterface!.getSoundInterfaceArray()!;
        
        


    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        


    var player: Player





                        for (
    var index: number = 0;
        
        
index < soundInterfaceArray!.length; index++)
        {

    
                        if(soundInterfaceArray[index] != 
                                    null
                                )
                        
                                    {
                                    player= soundInterfaceArray[index]!.getPlayerP()

    
                        if(player != 
                                    null
                                )
                        
                                    {
                                    close()
addPortion(100, this.soundStrings!.CLOSING_SOUND, index)

                                    }
                                

                                    }
                                
}

}


}
                
            

