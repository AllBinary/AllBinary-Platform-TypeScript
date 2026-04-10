
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { GameFeatureImageCacheFactory } from "../../../../org/allbinary/image/GameFeatureImageCacheFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { HashtableUtil } from "../../../../org/allbinary/util/HashtableUtil.js";

    
import { PlaynImage } from "../../../../org/microemu/device/playn/PlaynImage.js";

    

export class ImageWaitCompleteUtil extends ImageCompleteUtil {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly METHOD_NAME: string = "waitForLoad";
        
        

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(18000);
        
        

    private readonly allTimeDelayHelper: TimeDelayHelper = new TimeDelayHelper(120000);
        
        
public constructor (){

            super();
            }


                @Throws(Exception::class)
            
    public waitFor(image: Image, name: string){
    //var image = image
    //var name = name
setStartTime()
this.waitFor(image, name, this.timeDelayHelper)
}


                @Throws(Exception::class)
            
    public handleTimeout(name: string){
    //var name = name

    
                        if(timeDelayHelper!.isTime())
                        
                                    {
                                    


                            throw Exception("isReady: Timeout Waiting or GameHtmlHasLoadedResourcesProcessor does not have this Image: " +name)

                                    }
                                
}


                @Throws(Exception::class)
            
    waitFor(image: Image, name: string, timeDelayHelper: TimeDelayHelper){
    //var image = image
    //var name = name
    //var timeDelayHelper = timeDelayHelper

    var playnImage: PlaynImage = image as PlaynImage;
        
        


    var playnCoreImage: playn.core.Image = playnImage!.getImage() as playn.core.Image;
        
        


        while(!playnCoreImage!.isReady() || playnCoreImage!.width() +playnCoreImage!.height() <= 0)
        {

    
                        if(timeDelayHelper!.isTime())
                        
                                    {
                                    


                            throw Exception("waitFor: Timeout Waiting or GameHtmlHasLoadedResourcesProcessor does not have this Image: " +name)

                                    }
                                
}


    
                        if(!image.isReady())
                        
                                    {
                                    init(image.getImage())

                                    }
                                
}


                @Throws(Exception::class)
            
    public waitForAll(){
setStartTime()

    var hashtable: Hashtable<Any, Any> = GameFeatureImageCacheFactory.getInstance()!.getHashtableP()!;
        
        


    var objectArray: any = {}[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;
        
        


    var size: number = objectArray!.length
                ;
        
        

put("Image Total: " +size, this, "waitForAll")




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
this.waitFor(hashtable.get(objectArray[index]!) as Image, objectArray[index]! as String, this.allTimeDelayHelper)
}

}


}
                
            

