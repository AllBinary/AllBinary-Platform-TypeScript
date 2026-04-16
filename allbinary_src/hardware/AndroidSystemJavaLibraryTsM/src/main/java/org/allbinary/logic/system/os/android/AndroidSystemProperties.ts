
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
        



            import hilog from '@ohos.hilog';
        
import { Context } from "../../../../../../android/content/Context.js";

    
import { Build } from "../../../../../../android/os/Build.js";

    
import { ResourceUtil } from "../../../../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class AndroidSystemProperties
            extends Object
         {
        

            static readonly PUBLIC: string = '%{public}s';
            

    private static readonly SINGLETON: AndroidSystemProperties = new AndroidSystemProperties(ResourceUtil.getInstance()!.getContext());
        
        

    public static getInstance(): AndroidSystemProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
public constructor (context: Context){

            super();
            var context = context
}


    public getDeviceId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public getDeviceSoftwareVersion(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.DISABLE;
    
}


    public getLine1Number(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.DISABLE;
    
}


    public getNetworkCountryIso(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.DISABLE;
    
}


    public getNetworkOperator(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.DISABLE;
    
}


    public getNetworkOperatorName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.DISABLE;
    
}


    public getSimCountryIso(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.DISABLE;
    
}


    public getSimOperator(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.DISABLE;
    
}


    public getSimOperatorName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.DISABLE;
    
}


    public getSimSerialNumber(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.DISABLE;
    
}


    public getSubscriberId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.DISABLE;
    
}


    public getVoiceMailAlphaTag(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.DISABLE;
    
}


    public getVoiceMailNumber(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.DISABLE;
    
}


    public getNetworkType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public getPhoneType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public getBoard(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Build.BOARD;
    
}


    public getBrand(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Build.BRAND;
    
}


    public getDevice(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Build.DEVICE;
    
}


    public getFingerprint(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Build.FINGERPRINT;
    
}


    public getHost(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Build.HOST;
    
}


    public getId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Build.ID;
    
}


    public getModel(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Build.MODEL;
    
}


    public getProduct(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Build.PRODUCT;
    
}


    public getTags(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Build.TAGS;
    
}


    public getTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Build.TIME;
    
}


    public getType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Build.TYPE;
    
}


    public getUser(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Build.USER;
    
}


}
                
            

