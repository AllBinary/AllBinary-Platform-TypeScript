
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
        
import { Hashtable } from '../../../../java/util/Hashtable.js';
      
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { GameFeatureImageCacheFactory } from '../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
      
import { HashtableUtil } from '../../../../org/allbinary/util/HashtableUtil.js';
      
import { PlaynImage } from '../../../../org/microemu/device/playn/PlaynImage.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
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

    var playnImage: PlaynImage = image as PlaynImage;
;
    

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

    var playnImage: PlaynImage = image as PlaynImage;
;
    

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
    

    var hashtable: Hashtable<any, any> = GameFeatureImageCacheFactory.getInstance()!.getHashtable()!;
;
    

    var objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;
;
    

    var size: number = objectArray!.length
                ;
;
    
PreLogUtil.put("Total: " +size, this, "waitForAll");
    




                        for (
    var index: number = 0;
index < size; index++)
        {
this.waitForATime(hashtable.get(objectArray[index]!) as Image, objectArray[index]! as string, this.allTimeDelayHelper);
    
}

}


}
                
            

