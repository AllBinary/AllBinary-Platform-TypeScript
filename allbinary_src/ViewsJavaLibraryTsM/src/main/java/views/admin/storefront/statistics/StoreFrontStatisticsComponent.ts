
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
        



import { StoreFrontFactory } from "../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { RealTimeStoreFrontStatistics } from "../../../../org/allbinary/business/context/modules/storefront/statistics/RealTimeStoreFrontStatistics.js";

    
import { RealTimeStoreFrontStatisticsView } from "../../../../org/allbinary/business/context/modules/storefront/statistics/RealTimeStoreFrontStatisticsView.js";

    
import { DomNodeInterface } from "../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { HttpStoreComponentView } from "../../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    

export class StoreFrontStatisticsComponent extends HttpStoreComponentView {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    newStoreFrontInterface: StoreFrontInterface

    private domNodeInterface: DomNodeInterface
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.newStoreFrontInterface= StoreFrontFactory.getInstance(transformInfoInterface!.getStoreName()) as StoreFrontInterface
this.domNodeInterface= RealTimeStoreFrontStatisticsView(RealTimeStoreFrontStatistics(this.newStoreFrontInterface), this.getWeblisketSession()!.getRole())
}


    public addDomNodeInterfaces(){
this.this.addDomNodeInterface(this.domNodeInterface as DomNodeInterface)
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            this.this.addDomNodeInterfaces()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e)

                                    }
                                



                            throw e
}

}


}
                
            

