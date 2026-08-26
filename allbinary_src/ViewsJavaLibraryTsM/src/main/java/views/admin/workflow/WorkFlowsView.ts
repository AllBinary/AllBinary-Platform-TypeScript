
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
        
//not game specific package import { Vector } from '../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { WorkFlowEntityFactory } from '../../../org/allbinary/data/tables/workflow/WorkFlowEntityFactory.js';
      const WorkFlowEntityFactory = globalThis.org.allbinary.data.tables.workflow.WorkFlowEntityFactory;

      
//not game specific package import { DomNodeInterface } from '../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { WorkFlowData } from '../../../org/allbinary/logic/control/workflow/WorkFlowData.js';
      const WorkFlowData = globalThis.org.allbinary.logic.control.workflow.WorkFlowData;

      
//not game specific package import { WorkFlowInterface } from '../../../org/allbinary/logic/control/workflow/WorkFlowInterface.js';
      const WorkFlowInterface = globalThis.org.allbinary.logic.control.workflow.WorkFlowInterface;

      
//not game specific package import { LicensingException } from '../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
//not game specific package import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { Document } from '../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { HttpStoreComponentView } from '../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
      const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class WorkFlowsView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private workFlowsVector: Vector;

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
    

    var size: number = this.workFlowsVector!.length!;;
    




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
                
            

