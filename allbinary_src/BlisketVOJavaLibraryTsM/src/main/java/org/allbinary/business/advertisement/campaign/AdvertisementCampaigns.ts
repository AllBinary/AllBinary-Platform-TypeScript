
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
        
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { AdvertisementInterface } from '../../../../../org/allbinary/business/advertisement/AdvertisementInterface.js';
      //not GWT import const AdvertisementInterface = globalThis.org.allbinary.business.advertisement.AdvertisementInterface;

      
import { AdvertisementsInterface } from '../../../../../org/allbinary/business/advertisement/AdvertisementsInterface.js';
      //not GWT import const AdvertisementsInterface = globalThis.org.allbinary.business.advertisement.AdvertisementsInterface;

      
import { AdvertisementSearchInterface } from '../../../../../org/allbinary/business/advertisement/search/AdvertisementSearchInterface.js';
      //not GWT import const AdvertisementSearchInterface = globalThis.org.allbinary.business.advertisement.search.AdvertisementSearchInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdvertisementCampaignsInterface } from './AdvertisementCampaignsInterface.js';
//not GWT import const AdvertisementCampaignsInterface = globalThis.org.allbinary.business.advertisement.campaign.AdvertisementCampaignsInterface;

                
export class AdvertisementCampaigns
            extends Object
         implements AdvertisementCampaignsInterface {
        

    private advertisementsVector: BasicArrayList;

public constructor (vector: BasicArrayList){

            super();
        this.advertisementsVector= this.advertisementsVector;
    
}


    public add(advertisementInterface: AdvertisementInterface){
this.advertisementsVector!.add(advertisementInterface);
    
}


    public get(index: number): AdvertisementInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.advertisementsVector!.get(index) as AdvertisementInterface;
    
}


    public size(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.advertisementsVector!.size();;
    
}


    public isEnabled(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public search(advertisementSearchInterface: AdvertisementSearchInterface): AdvertisementsInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}



