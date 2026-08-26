
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
        
//not game specific package import { StoreFrontFactory } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { RealTimeStoreFrontStatistics } from '../../../../org/allbinary/business/context/modules/storefront/statistics/RealTimeStoreFrontStatistics.js';
      const RealTimeStoreFrontStatistics = globalThis.org.allbinary.business.context.modules.storefront.statistics.RealTimeStoreFrontStatistics;

      
//not game specific package import { RealTimeStoreFrontStatisticsView } from '../../../../org/allbinary/business/context/modules/storefront/statistics/RealTimeStoreFrontStatisticsView.js';
      const RealTimeStoreFrontStatisticsView = globalThis.org.allbinary.business.context.modules.storefront.statistics.RealTimeStoreFrontStatisticsView;

      
//not game specific package import { DomNodeInterface } from '../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { HttpStoreComponentView } from '../../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
      const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
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
                
            

