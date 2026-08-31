
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
import { AdvertisementAreaData } from '../../../../org/allbinary/business/advertisement/area/AdvertisementAreaData.js';
      //not GWT import const AdvertisementAreaData = globalThis.org.allbinary.business.advertisement.area.AdvertisementAreaData;

      
import { AdvertisementAreaInterface } from '../../../../org/allbinary/business/advertisement/area/AdvertisementAreaInterface.js';
      //not GWT import const AdvertisementAreaInterface = globalThis.org.allbinary.business.advertisement.area.AdvertisementAreaInterface;

      
import { AdvertisementAreasEntityFactory } from '../../../../org/allbinary/data/tables/advertisement/areas/AdvertisementAreasEntityFactory.js';
      //not GWT import const AdvertisementAreasEntityFactory = globalThis.org.allbinary.data.tables.advertisement.areas.AdvertisementAreasEntityFactory;

      
import { AdvertisementAreasEntityInterface } from '../../../../org/allbinary/data/tables/advertisement/areas/AdvertisementAreasEntityInterface.js';
      //not GWT import const AdvertisementAreasEntityInterface = globalThis.org.allbinary.data.tables.advertisement.areas.AdvertisementAreasEntityInterface;

      
import { DomNodeInterface } from '../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { HttpStoreComponentView } from '../../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
      //not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AdvertisementAreaView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private advertisementAreaName: string;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.advertisementAreaName= this.getPropertiesHashMap()!.get(AdvertisementAreaData.getInstance()!.NAME) as string;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

        try {
            
    var advertisementAreasEntityInterface: AdvertisementAreasEntityInterface = AdvertisementAreasEntityFactory.getInstance()!;;
    

    var advertisementAreaInterface: AdvertisementAreaInterface = advertisementAreasEntityInterface!.get(this.getTransformInfoInterface()!.getStoreName(), this.advertisementAreaName)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                            throw e;
                    
}

}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface);
    
}


                //@Throws(Exception.constructor)
            
    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



