
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
        



import { MediaPlayer } from "../../../../android/media/MediaPlayer.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MediaPlayerUtil
            extends Object
         {
        

    private static readonly instance: MediaPlayerUtil = new MediaPlayerUtil();
        
        

    public static getInstance(): MediaPlayerUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public wait(mediaPlayer: MediaPlayer){
var mediaPlayer = mediaPlayer

    var MESSAGE: string = "Not Stopped Waiting";
        
        
;
    

    var METHOD_NAME: string = "wait";
        
        
;
    

    var index: number = 0;
        
        
;
    

        while(mediaPlayer!.isPlaying() && index < 50)
        {
this.logUtil!.putF(MESSAGE, this, METHOD_NAME);
    
Thread.sleep(100);
    
index++;
    
}

}


}
                
            

