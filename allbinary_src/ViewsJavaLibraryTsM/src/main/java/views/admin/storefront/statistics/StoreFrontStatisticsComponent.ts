
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
        
import { StoreFrontFactory } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { RealTimeStoreFrontStatistics } from '../../../../org/allbinary/business/context/modules/storefront/statistics/RealTimeStoreFrontStatistics.js';
//not GWT import const RealTimeStoreFrontStatistics = globalThis.org.allbinary.business.context.modules.storefront.statistics.RealTimeStoreFrontStatistics;

      
import { RealTimeStoreFrontStatisticsView } from '../../../../org/allbinary/business/context/modules/storefront/statistics/RealTimeStoreFrontStatisticsView.js';
//not GWT import const RealTimeStoreFrontStatisticsView = globalThis.org.allbinary.business.context.modules.storefront.statistics.RealTimeStoreFrontStatisticsView;

      
import { DomNodeInterface } from '../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { HttpStoreComponentView } from '../../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
//not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StoreFrontStatisticsComponent extends HttpStoreComponentView {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    newStoreFrontInterface: StoreFrontInterface;

    private domNodeInterface: DomNodeInterface;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.newStoreFrontInterface= StoreFrontFactory.getInstance(transformInfoInterface!.getStoreName()) as StoreFrontInterface;
    
this.domNodeInterface= new RealTimeStoreFrontStatisticsView(new RealTimeStoreFrontStatistics(this.newStoreFrontInterface), this.getWeblisketSession()!.getRole());
    
}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this.domNodeInterface as DomNodeInterface);
    
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



