
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { GameFeatureImageCacheFactory } from "../../../../org/allbinary/image/GameFeatureImageCacheFactory.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { HashtableUtil } from "../../../../org/allbinary/util/HashtableUtil.js";

    
import { PlaynImage } from "../../../../org/microemu/device/playn/PlaynImage.js";

    

export class ImageCompleteUtil
            extends Object
         {
        

    private static readonly instance: ImageCompleteUtil = new ImageCompleteUtil();
        
        

    public static getInstance(): ImageCompleteUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(18000);
        
        

    private readonly allTimeDelayHelper: TimeDelayHelper = new TimeDelayHelper(120000);
        
        

                //@Throws(Error::class)
            
    public waitFor(image: Image, name: string){
var image = image
var name = name
this.timeDelayHelper!.setStartTime()
this.waitFor(image, name, this.timeDelayHelper)
}


                //@Throws(Error::class)
            
    public isReady(image: Image, name: string, timeDelayHelper: TimeDelayHelper): boolean{
var image = image
var name = name
var timeDelayHelper = timeDelayHelper

    var playnImage: PlaynImage = image as PlaynImage;
        
        


                        if(!playnImage!.getImage()!.isReady() && playnImage!.getImage()!.width() +playnImage!.getImage()!.height() == 0)
                        
                                    {
                                    
                        if(timeDelayHelper!.isTime())
                        
                                    {
                                    


                            throw Error("isReady: Timeout Waiting or GameHtmlHasLoadedResourcesProcessor does not have this Image: " +name)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Error::class)
            
    waitFor(image: Image, name: string, timeDelayHelper: TimeDelayHelper){
var image = image
var name = name
var timeDelayHelper = timeDelayHelper

    var playnImage: PlaynImage = image as PlaynImage;
        
        


        while(!playnImage!.getImage()!.isReady() && playnImage!.getImage()!.width() +playnImage!.getImage()!.height() == 0)
        {

                        if(timeDelayHelper!.isTime())
                        
                                    {
                                    


                            throw Error("waitFor: Timeout Waiting or GameHtmlHasLoadedResourcesProcessor does not have this Image: " +name)

                                    }
                                
}

}


                //@Throws(Error::class)
            
    public waitForAll(){
this.allTimeDelayHelper!.setStartTime()

    var hashtable: Hashtable<Any, Any> = GameFeatureImageCacheFactory.getInstance()!.getHashtable()!;
        
        


    var objectArray: any = {}[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;
        
        


    var size: number = objectArray!.length
                ;
        
        

PreLogUtil.put("Total: " +size, this, "waitForAll")




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
this.waitFor(hashtable.get(objectArray[index]!) as Image, objectArray[index]! as String, this.allTimeDelayHelper)
}

}


}
                
            

