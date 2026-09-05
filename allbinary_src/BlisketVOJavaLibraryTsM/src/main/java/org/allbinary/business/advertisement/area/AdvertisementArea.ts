
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
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { AdvertisementCampaignData } from '../../../../../org/allbinary/business/advertisement/campaign/AdvertisementCampaignData.js';
//not GWT import const AdvertisementCampaignData = globalThis.org.allbinary.business.advertisement.campaign.AdvertisementCampaignData;

      
import { StoreFrontData } from '../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { DomDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdvertisementAreaInterface } from './AdvertisementAreaInterface.js';
//not GWT import - same folder const AdvertisementAreaInterface = globalThis.org.allbinary.business.advertisement.area.AdvertisementAreaInterface;

                import { AdvertisementAreaConstraintsInterface } from './AdvertisementAreaConstraintsInterface.js';
//not GWT import - same folder const AdvertisementAreaConstraintsInterface = globalThis.org.allbinary.business.advertisement.area.AdvertisementAreaConstraintsInterface;

                import { AdvertisementAreaData } from './AdvertisementAreaData.js';
//not GWT import - same folder const AdvertisementAreaData = globalThis.org.allbinary.business.advertisement.area.AdvertisementAreaData;

                import { AdvertisementAreaConstraints } from './AdvertisementAreaConstraints.js';
//not GWT import - same folder const AdvertisementAreaConstraints = globalThis.org.allbinary.business.advertisement.area.AdvertisementAreaConstraints;

                
export class AdvertisementArea
            extends Object
         implements AdvertisementAreaInterface {
        

    private name: string;

    private storeName: string;

    private description: string;

    private advertisementAreaConstraintsInterface: AdvertisementAreaConstraintsInterface;

    private campaign: string;

public constructor (hashMap: HashMap<any, any>){

            super();
        this.name= hashMap!.get(AdvertisementAreaData.getInstance()!.NAME) as string;
    
this.storeName= hashMap!.get(StoreFrontData.getInstance()!.NAME) as string;
    
this.description= hashMap!.get(AdvertisementAreaData.getInstance()!.DESCRIPTION) as string;
    

    var constraintsDomString: string = hashMap!.get(AdvertisementAreaData.getInstance()!.CONSTRAINTS) as string;;
    

    var document: Document = DomDocumentHelper.create(constraintsDomString)!;;
    
this.advertisementAreaConstraintsInterface= new AdvertisementAreaConstraints(document);
    
this.campaign= hashMap!.get(AdvertisementCampaignData.getInstance()!.NAME) as string;
    
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
this.name= name;
    
}


    public setStoreName(storeName: string){
this.storeName= storeName;
    
}


    public setDescription(description: string){
this.description= description;
    
}


    public setConstraints(advertisementConstraintsInterface: AdvertisementAreaConstraintsInterface){
this.advertisementAreaConstraintsInterface= this.advertisementAreaConstraintsInterface;
    
}


    public setCampaign(campaign: string){
this.campaign= campaign;
    
}


}



