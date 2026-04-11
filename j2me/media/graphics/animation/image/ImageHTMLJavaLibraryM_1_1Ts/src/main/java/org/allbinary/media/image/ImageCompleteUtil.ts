
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { PlaynImage } from "../../../../org/microemu/device/playn/PlaynImage.js";

    

export class ImageCompleteUtil
            extends Object
         {
        

    private static readonly instance: ImageCompleteUtil = new ImageCompleteUtil();
        
        

    public static getInstance(): ImageCompleteUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly ISREADY: string = "isReady";
        
        

                //@Throws(Error::class)
            
    public waitFor(image: Image, name: string){
var image = image
var name = name
}


    private readonly COMPLETE: string = "Image loading complete for: ";
        
        

                //@Throws(Error::class)
            
    public isReady(image: Image, name: string, timeDelayHelper: TimeDelayHelper): boolean{
    //var image = image
    //var name = name
    //var timeDelayHelper = timeDelayHelper

    var playnImage: PlaynImage = image as PlaynImage;
        
        
;
    

    var playnCoreImage: playn.core.Image = playnImage!.getImage();

                         as playn.core.Image;
        
        
;
    

                        if(!playnCoreImage!.isReady();

                         || playnCoreImage!.width() +playnCoreImage!.height() <= 0)
                        
                                    {
                                    this.handleTimeout(name);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(!image.isReady();

                        )
                        
                                    {
                                    image.init(image.getImage());
    

                        if(!image.isReady();

                        )
                        
                                    {
                                    PreLogUtil.put("Waiting for Not Ready Image: " +image.getName(), this, ISREADY);
    

                                    }
                                

                                    }
                                

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
PreLogUtil.put(COMPLETE +image.getName(), this, commonStrings!.SUCCESS);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Error::class)
            
    public handleTimeout(name: string){
    //var name = name
}


                //@Throws(Error::class)
            
    public waitForAll(){
}


}
                
            

