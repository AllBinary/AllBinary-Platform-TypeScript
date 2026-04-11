
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

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class Sound
            extends Object
        
                , SoundInterface
                , Runnable {
        

    private resource: string

    player: Player = NoPlayer.NO_PLAYER;
        
        
protected constructor (resource: string){

            super();
            var resource = resource
this.resource= resource;
    
}


    public getResource(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.resource;
    
}


    public getPlayerP(): Player{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.player;
    
}


    public setPlayerP(player: Player){
    //var player = player
this.player= player;
    
}


                //@Throws(Error::class)
            
    public init(){
}


    public getDuration(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public run(){

        try {
            this.player.start();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
PreLogUtil.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN);
    
}

}


}
                
            

