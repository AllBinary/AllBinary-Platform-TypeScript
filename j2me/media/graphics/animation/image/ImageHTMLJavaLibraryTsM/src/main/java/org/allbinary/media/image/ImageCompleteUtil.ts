
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
import { GameFeatureImageCacheFactory } from '../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
      //not GWT import const GameFeatureImageCacheFactory = globalThis.org.allbinary.image.GameFeatureImageCacheFactory;

      
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not plain js import { HashtableUtil } from '../../../../org/allbinary/util/HashtableUtil.js';
      const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

      
//not plain js import { PlaynImage } from '../../../../org/microemu/device/playn/PlaynImage.js';
      const PlaynImage = globalThis.org.microemu.device.playn.PlaynImage;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Hashtable } from './Hashtable.js';
//not GWT import const Hashtable = globalThis.org.allbinary.media.image.Hashtable;

                
export class ImageCompleteUtil
            extends Object
         {
        

    private static readonly instance: ImageCompleteUtil = new ImageCompleteUtil();

    public static getInstance(): ImageCompleteUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageCompleteUtil.instance;
    
}


    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(18000);

    private readonly allTimeDelayHelper: TimeDelayHelper = new TimeDelayHelper(120000);

                //@Throws(Exception.constructor)
            
    public waitForImage(image: Image, name: string){
this.timeDelayHelper!.setStartTime();
    
this.waitForATime(image, name, this.timeDelayHelper);
    
}


                //@Throws(Exception.constructor)
            
    public isReady(image: Image, name: string, timeDelayHelper: TimeDelayHelper): boolean{

    var playnImage: PlaynImage = image as PlaynImage;;
    

                        if(!playnImage!.getImage()!.isReady() && playnImage!.getImage()!.width() +playnImage!.getImage()!.height() == 0)
                        
                                    {
                                    
                        if(timeDelayHelper!.isTime())
                        
                                    {
                                    


                            throw new Exception("isReady: Timeout Waiting or GameHtmlHasLoadedResourcesProcessor does not have this Image: " +name);
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Exception.constructor)
            
    waitForATime(image: Image, name: string, timeDelayHelper: TimeDelayHelper){

    var playnImage: PlaynImage = image as PlaynImage;;
    

        while(!playnImage!.getImage()!.isReady() && playnImage!.getImage()!.width() +playnImage!.getImage()!.height() == 0)
        {

                        if(timeDelayHelper!.isTime())
                        
                                    {
                                    


                            throw new Exception("waitFor: Timeout Waiting or GameHtmlHasLoadedResourcesProcessor does not have this Image: " +name);
                    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    public waitForAll(){
this.allTimeDelayHelper!.setStartTime();
    

    var hashtable: Hashtable<any, any> = GameFeatureImageCacheFactory.getInstance()!.getHashtable()!;;
    

    var objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;;
    

    var size: number = objectArray!.length
                ;;
    
PreLogUtil.put("Total: " +size, this, "waitForAll");
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.waitForATime(hashtable.get(objectArray[index]!) as Image, objectArray[index]! as string, this.allTimeDelayHelper);
    
}

}


}



