
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

        


            import { Exception } from '../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { WorkFlowEntityFactory } from '../../../org/allbinary/data/tables/workflow/WorkFlowEntityFactory.js';
//not GWT import const WorkFlowEntityFactory = globalThis.org.allbinary.data.tables.workflow.WorkFlowEntityFactory;

      
import { DomNodeInterface } from '../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { WorkFlowData } from '../../../org/allbinary/logic/control/workflow/WorkFlowData.js';
//not GWT import const WorkFlowData = globalThis.org.allbinary.logic.control.workflow.WorkFlowData;

      
import { WorkFlowInterface } from '../../../org/allbinary/logic/control/workflow/WorkFlowInterface.js';
//not GWT import const WorkFlowInterface = globalThis.org.allbinary.logic.control.workflow.WorkFlowInterface;

      
import { LicensingException } from '../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { HttpStoreComponentView } from '../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
//not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class WorkFlowsView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private workFlowsVector: BasicArrayList;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.workFlowsVector= WorkFlowEntityFactory.getInstance()!.create2()!.get(this.getWeblisketSession()!.getStoreName());
    
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


    public toXmlNode(document: Document): Node{

        try {
            
    var node: Node = document.createElement(WorkFlowData.getInstance()!.WORKFLOWS)!;;
    

    var size: number = this.workFlowsVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var workFlowInterface: WorkFlowInterface = this.workFlowsVector!.get(index) as WorkFlowInterface;;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "toXmlNode()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}



