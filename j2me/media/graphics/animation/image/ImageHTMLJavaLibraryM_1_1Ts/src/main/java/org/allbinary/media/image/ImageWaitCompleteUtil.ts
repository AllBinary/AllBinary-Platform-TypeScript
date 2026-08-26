
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
        
//not game specific package import { Hashtable } from '../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { GameFeatureImageCacheFactory } from '../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
      const GameFeatureImageCacheFactory = globalThis.org.allbinary.image.GameFeatureImageCacheFactory;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not game specific package import { HashtableUtil } from '../../../../org/allbinary/util/HashtableUtil.js';
      const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

      
//not game specific package import { PlaynImage } from '../../../../org/microemu/device/playn/PlaynImage.js';
      const PlaynImage = globalThis.org.microemu.device.playn.PlaynImage;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageCompleteUtil } from './ImageCompleteUtil.js';

export class ImageWaitCompleteUtil extends ImageCompleteUtil {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly METHOD_NAME: string = "waitForLoad";

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
    

    var hashtable: Hashtable<any, any> = GameFeatureImageCacheFactory.getInstance()!.getHashtableP()!;;
    

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
                
            

