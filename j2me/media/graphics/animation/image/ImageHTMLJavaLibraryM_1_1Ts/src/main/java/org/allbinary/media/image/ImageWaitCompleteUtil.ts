
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
import { GameFeatureImageCacheFactory } from '../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
//not GWT import const GameFeatureImageCacheFactory = globalThis.org.allbinary.image.GameFeatureImageCacheFactory;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

      
//not plain js import { PlaynImage } 
const PlaynImage = globalThis.org.microemu.device.playn.PlaynImage;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js - same folder import { ImageCompleteUtil } 
const ImageCompleteUtil = globalThis.org.allbinary.media.image.ImageCompleteUtil;

                
export class ImageWaitCompleteUtil extends ImageCompleteUtil {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(18000);

    private readonly allTimeDelayHelper: TimeDelayHelper = new TimeDelayHelper(120000);

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public waitForImage(image: Image, name: string){
this.timeDelayHelper!.setStartTimeTNT();
    
this.waitForATime(image, name, this.timeDelayHelper);
    
}


                //@Throws(Exception.constructor)
            
    public handleTimeout(name: string){

                        if(this.timeDelayHelper!.isTimeTNT())
                        
                                    {
                                    


                            throw new Exception("isReady: Timeout Waiting or GameHtmlHasLoadedResourcesProcessor does not have this Image: " +name);
                    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    waitForATime(image: Image, name: string, timeDelayHelper: TimeDelayHelper){

    var playnImage: PlaynImage = image as PlaynImage;;
    

    var playnCoreImage: playn.core.Image = playnImage!.getImage() as playn.core.Image;;
    

        while(!playnCoreImage!.isReady() || playnCoreImage!.width() +playnCoreImage!.height() <= 0)
        {

                        if(timeDelayHelper!.isTimeTNT())
                        
                                    {
                                    


                            throw new Exception("waitFor: Timeout Waiting or GameHtmlHasLoadedResourcesProcessor does not have this Image: " +name);
                    

                                    }
                                
}


                        if(!image.isReady())
                        
                                    {
                                    image.init(image.getImage());
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public waitForAll(){
this.allTimeDelayHelper!.setStartTimeTNT();
    

    var hashtable: ABHashtable = GameFeatureImageCacheFactory.getInstance()!.getHashtableP()!;;
    

    var objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;;
    

    var size: number = objectArray!.length
                ;;
    
PreLogUtil.put("Image Total: " +size, this, "waitForAll");
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.waitForATime(hashtable.get(objectArray[index]!) as Image, objectArray[index]! as string, this.allTimeDelayHelper);
    
}

}


}



