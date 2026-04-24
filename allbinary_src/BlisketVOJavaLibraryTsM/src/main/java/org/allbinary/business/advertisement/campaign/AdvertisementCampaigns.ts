
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
        



import { Vector } from "../../../../../java/util/Vector.js";

    
import { AdvertisementInterface } from "../../../../../org/allbinary/business/advertisement/AdvertisementInterface.js";

    
import { AdvertisementsInterface } from "../../../../../org/allbinary/business/advertisement/AdvertisementsInterface.js";

    
import { AdvertisementSearchInterface } from "../../../../../org/allbinary/business/advertisement/search/AdvertisementSearchInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AdvertisementCampaignsInterface } from "./AdvertisementCampaignsInterface.js";

export class AdvertisementCampaigns
            extends Object
         implements AdvertisementCampaignsInterface {
        

    private advertisementsVector: Vector
public constructor (vector: Vector){

            super();
        var vector = vector
this.advertisementsVector= advertisementsVector;
    
}


    public add(advertisementInterface: AdvertisementInterface){
var advertisementInterface = advertisementInterface
this.advertisementsVector!.add(advertisementInterface);
    
}


    public get(index: number): AdvertisementInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.advertisementsVector!.get(index); as AdvertisementInterface;
    
}


    public size(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.advertisementsVector!.length;;
    
}


    public isEnabled(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public search(advertisementSearchInterface: AdvertisementSearchInterface): AdvertisementsInterface{
var advertisementSearchInterface = advertisementSearchInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

