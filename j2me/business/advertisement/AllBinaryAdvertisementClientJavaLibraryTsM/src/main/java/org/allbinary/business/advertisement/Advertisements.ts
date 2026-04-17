
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
        



import { MyRandomFactory } from "../../../../org/allbinary/game/rand/MyRandomFactory.js";

    
import { LockedUtil } from "../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AdvertisementProcessorInterface } from "./AdvertisementProcessorInterface.js";

export class Advertisements
            extends Object
         {
        

    private readonly bannerList: BasicArrayList = new BasicArrayList();
        
        

    private readonly pageList: BasicArrayList = new BasicArrayList();
        
        

    public addPage(advertisementProcessorInterface: AdvertisementProcessorInterface){
var advertisementProcessorInterface = advertisementProcessorInterface

                        if(!this.pageList!.contains(advertisementProcessorInterface);

                        )
                        
                                    {
                                    this.pageList!.add(advertisementProcessorInterface);
    

                                    }
                                
}


    public startRandomPage(){

    var size: number = this.pageList!.size()!;
        
        
;
    

                        if(size > 0)
                        
                                    {
                                    
    var random: number = myRandomFactory!.getAbsoluteNextInt(size)!;
        
        
;
    

    var advertisementProcessorInterface: AdvertisementProcessorInterface = this.pageList!.objectArray[random]! as AdvertisementProcessorInterface;
        
        
;
    
advertisementProcessorInterface!.start();
    

                                    }
                                
}


    private readonly myRandomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;
        
        

    public processRandomPage(){

                        if(LockedUtil.getInstance()!.isLockedFeature())
                        
                                    {
                                    
    var size: number = this.pageList!.size()!;
        
        
;
    

                        if(size > 0)
                        
                                    {
                                    
    var random: number = myRandomFactory!.getAbsoluteNextInt(size)!;
        
        
;
    

    var advertisementProcessorInterface: AdvertisementProcessorInterface = this.pageList!.objectArray[random]! as AdvertisementProcessorInterface;
        
        
;
    
advertisementProcessorInterface!.process();
    

                                    }
                                

                                    }
                                
}


    public stopAllPage(){




                        for (
    var index: number = this.pageList!.size()!;
        
        
--index >= 0; )
        {

    var advertisementProcessorInterface: AdvertisementProcessorInterface = this.pageList!.objectArray[index]! as AdvertisementProcessorInterface;
        
        
;
    
advertisementProcessorInterface!.stop();
    
}

}


    public addBanner(advertisementProcessorInterface: AdvertisementProcessorInterface){
var advertisementProcessorInterface = advertisementProcessorInterface

                        if(!this.bannerList!.contains(advertisementProcessorInterface);

                        )
                        
                                    {
                                    this.bannerList!.add(advertisementProcessorInterface);
    

                                    }
                                
}


    public startAll(){




                        for (
    var index: number = this.bannerList!.size()!;
        
        
--index >= 0; )
        {

    var advertisementProcessorInterface: AdvertisementProcessorInterface = this.bannerList!.objectArray[index]! as AdvertisementProcessorInterface;
        
        
;
    
advertisementProcessorInterface!.start();
    
}

}


    public stopAllBanner(){




                        for (
    var index: number = this.bannerList!.size()!;
        
        
--index >= 0; )
        {

    var advertisementProcessorInterface: AdvertisementProcessorInterface = this.bannerList!.objectArray[index]! as AdvertisementProcessorInterface;
        
        
;
    
advertisementProcessorInterface!.stop();
    
}

}


    public getBanner(index: number): AdvertisementProcessorInterface{
var index = index

    var advertisementProcessorInterface: AdvertisementProcessorInterface = this.bannerList!.objectArray[index]! as AdvertisementProcessorInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return advertisementProcessorInterface;
    
}


    public stopAll(){
this.stopAllBanner();
    
this.stopAllPage();
    
}


}
                
            

