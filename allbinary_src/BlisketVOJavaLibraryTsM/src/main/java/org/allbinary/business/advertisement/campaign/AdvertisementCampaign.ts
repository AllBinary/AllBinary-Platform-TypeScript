
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { DynamicObjectData } from '../../../../../org/allbinary/business/DynamicObjectData.js';
      //not GWT import const DynamicObjectData = globalThis.org.allbinary.business.DynamicObjectData;

      
import { AdvertisementsInterface } from '../../../../../org/allbinary/business/advertisement/AdvertisementsInterface.js';
      //not GWT import const AdvertisementsInterface = globalThis.org.allbinary.business.advertisement.AdvertisementsInterface;

      
import { AdvertisementSearchInterface } from '../../../../../org/allbinary/business/advertisement/search/AdvertisementSearchInterface.js';
      //not GWT import const AdvertisementSearchInterface = globalThis.org.allbinary.business.advertisement.search.AdvertisementSearchInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdvertisementCampaignInterface } from './AdvertisementCampaignInterface.js';
//not GWT import const  = globalThis.org.allbinary.business.advertisement.campaign.AdvertisementCampaignInterface;

                import { AdvertisementCampaignData } from './AdvertisementCampaignData.js';
//not GWT import const  = globalThis.org.allbinary.business.advertisement.campaign.AdvertisementCampaignData;

                
export class AdvertisementCampaign
            extends Object
         implements AdvertisementCampaignInterface {
        

    private hashMap: HashMap<any, any>;

public constructor (hashMap: HashMap<any, any>){

            super();
        this.hashMap= hashMap;
    
}


    public getComponent(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashMap!.get(AdvertisementCampaignData.getInstance()!.NAME) as string;
    
}


    public setComponentName(name: string){
this.hashMap!.put(DynamicObjectData.NAME, name);
    
}


    public setName(name: string){
this.hashMap!.put(AdvertisementCampaignData.getInstance()!.NAME, name);
    
}


    public search(advertisementSearchInterface: AdvertisementSearchInterface): AdvertisementsInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}



