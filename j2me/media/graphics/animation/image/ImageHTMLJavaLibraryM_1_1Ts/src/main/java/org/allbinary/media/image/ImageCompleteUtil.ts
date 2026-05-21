
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
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
      
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


    readonly ISREADY: string = "isReady";

                //@Throws(Exception.constructor)
            
    public waitForImage(image: Image, name: string){
}


    private readonly COMPLETE: string = "Image loading complete for: ";

                //@Throws(Exception.constructor)
            
    public isReady(image: Image, name: string, timeDelayHelper: TimeDelayHelper): boolean{

    var playnImage: PlaynImage = image as PlaynImage;
;
    

    var playnCoreImage: playn.core.Image = playnImage!.getImage() as playn.core.Image;
;
    

                        if(!playnCoreImage!.isReady() || playnCoreImage!.width() +playnCoreImage!.height() <= 0)
                        
                                    {
                                    this.handleTimeout(name);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(!image.isReady())
                        
                                    {
                                    image.init(image.getImage());
    

                        if(!image.isReady())
                        
                                    {
                                    PreLogUtil.put("Waiting for Not Ready Image: " +image.getName(), this, this.ISREADY);
    

                                    }
                                

                                    }
                                

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    
PreLogUtil.put(this.COMPLETE +image.getName(), this, commonStrings!.SUCCESS);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Exception.constructor)
            
    public handleTimeout(name: string){
}


                //@Throws(Exception.constructor)
            
    public waitForAll(){
}


}
                
            

