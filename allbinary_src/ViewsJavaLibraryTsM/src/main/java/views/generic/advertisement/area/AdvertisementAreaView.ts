
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
        



import { AdvertisementAreaData } from "../../../../org/allbinary/business/advertisement/area/AdvertisementAreaData.js";

    
import { AdvertisementAreaInterface } from "../../../../org/allbinary/business/advertisement/area/AdvertisementAreaInterface.js";

    
import { AdvertisementAreasEntityFactory } from "../../../../org/allbinary/data/tables/advertisement/areas/AdvertisementAreasEntityFactory.js";

    
import { AdvertisementAreasEntityInterface } from "../../../../org/allbinary/data/tables/advertisement/areas/AdvertisementAreasEntityInterface.js";

    
import { DomNodeInterface } from "../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    
import { HttpStoreComponentView } from "../../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    

export class AdvertisementAreaView extends HttpStoreComponentView
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private advertisementAreaName: string
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.advertisementAreaName= this.getPropertiesHashMap()!.get(AdvertisementAreaData.getInstance()!.NAME);

                         as String;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

        try {
            
    var advertisementAreasEntityInterface: AdvertisementAreasEntityInterface = AdvertisementAreasEntityFactory.getInstance()!;
        
        
;
    

    var advertisementAreaInterface: AdvertisementAreaInterface = advertisementAreasEntityInterface!.get(this.getTransformInfoInterface()!.getStoreName(), advertisementAreaName)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                            throw e
}

}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface);
    
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e
}

}


}
                
            

