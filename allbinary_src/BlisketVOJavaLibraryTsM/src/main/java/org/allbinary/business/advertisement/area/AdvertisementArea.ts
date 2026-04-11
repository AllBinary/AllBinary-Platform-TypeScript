
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

    
import { AdvertisementCampaignData } from "../../../../../org/allbinary/business/advertisement/campaign/AdvertisementCampaignData.js";

    
import { StoreFrontData } from "../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { DomDocumentHelper } from "../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    

export class AdvertisementArea
            extends Object
        
                , AdvertisementAreaInterface {
        

    private name: string

    private storeName: string

    private description: string

    private advertisementAreaConstraintsInterface: AdvertisementAreaConstraintsInterface

    private campaign: string
public constructor (hashMap: HashMap<any, any>){

            super();
            var hashMap = hashMap
this.name= hashMap!.get(AdvertisementAreaData.getInstance()!.NAME);

                         as String;
    
this.storeName= hashMap!.get(StoreFrontData.getInstance()!.NAME);

                         as String;
    
this.description= hashMap!.get(AdvertisementAreaData.getInstance()!.DESCRIPTION);

                         as String;
    

    var constraintsDomString: string = hashMap!.get(AdvertisementAreaData.getInstance()!.CONSTRAINTS);

                         as String;
        
        
;
    

    var document: Document = DomDocumentHelper.create(constraintsDomString)!;
        
        
;
    
this.advertisementAreaConstraintsInterface= AdvertisementAreaConstraints(document);
    
this.campaign= hashMap!.get(AdvertisementCampaignData.getInstance()!.NAME);

                         as String;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeName;
    
}


    public getDescription(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.description;
    
}


    public getConstraints(): AdvertisementAreaConstraintsInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.advertisementAreaConstraintsInterface;
    
}


    public getCampaign(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.campaign;
    
}


    public setName(name: string){
var name = name
this.name= name;
    
}


    public setStoreName(storeName: string){
var storeName = storeName
this.storeName= storeName;
    
}


    public setDescription(description: string){
var description = description
this.description= description;
    
}


    public setConstraints(advertisementConstraintsInterface: AdvertisementAreaConstraintsInterface){
var advertisementConstraintsInterface = advertisementConstraintsInterface
this.advertisementAreaConstraintsInterface= advertisementAreaConstraintsInterface;
    
}


    public setCampaign(campaign: string){
var campaign = campaign
this.campaign= campaign;
    
}


}
                
            

