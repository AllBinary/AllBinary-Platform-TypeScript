
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { DynamicObjectData } from "../../../../../org/allbinary/business/DynamicObjectData.js";

    
import { AdvertisementsInterface } from "../../../../../org/allbinary/business/advertisement/AdvertisementsInterface.js";

    
import { AdvertisementSearchInterface } from "../../../../../org/allbinary/business/advertisement/search/AdvertisementSearchInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AdvertisementCampaignData } from "./AdvertisementCampaignData.js";

export class AdvertisementCampaign
            extends Object
         implements AdvertisementCampaignInterface {
        

    private hashMap: HashMap<any, any>
public constructor (hashMap: HashMap<any, any>){

            super();
            var hashMap = hashMap
this.hashMap= hashMap;
    
}


    public getComponent(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashMap!.get(AdvertisementCampaignData.getInstance()!.NAME);

                         as String;
    
}


    public setComponentName(name: string){
var name = name
this.hashMap!.put(DynamicObjectData.NAME, name);
    
}


    public setName(name: string){
var name = name
this.hashMap!.put(AdvertisementCampaignData.getInstance()!.NAME, name);
    
}


    public search(advertisementSearchInterface: AdvertisementSearchInterface): AdvertisementsInterface{
var advertisementSearchInterface = advertisementSearchInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

