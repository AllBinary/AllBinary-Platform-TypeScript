
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
        
//not game specific package import { Arrays } from '../../../java/util/Arrays.js';
      const Arrays = globalThis.java.util.Arrays;

      
//not game specific package import { Vector } from '../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { TransformInfoEntityBuilder } from '../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js';
      const TransformInfoEntityBuilder = globalThis.org.allbinary.data.tables.transform.info.TransformInfoEntityBuilder;

      
//not game specific package import { DomNodeInterface } from '../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { ModDomHelper } from '../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { GLOBALS2 } from '../../../org/allbinary/globals/GLOBALS2.js';
      const GLOBALS2 = globalThis.org.allbinary.globals.GLOBALS2;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringComparator } from '../../../org/allbinary/logic/control/sort/StringComparator.js';
      const StringComparator = globalThis.org.allbinary.logic.control.sort.StringComparator;

      
//not game specific package import { CustomizerTransformInfoData } from '../../../org/allbinary/logic/visual/transform/info/CustomizerTransformInfoData.js';
      const CustomizerTransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.CustomizerTransformInfoData;

      
//not game specific package import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { TransformTemplateCustomizerData } from '../../../org/allbinary/logic/visual/transform/template/customizer/TransformTemplateCustomizerData.js';
      const TransformTemplateCustomizerData = globalThis.org.allbinary.logic.visual.transform.template.customizer.TransformTemplateCustomizerData;

      
//not game specific package import { TransformTemplateCustomizersData } from '../../../org/allbinary/logic/visual/transform/template/customizer/TransformTemplateCustomizersData.js';
      const TransformTemplateCustomizersData = globalThis.org.allbinary.logic.visual.transform.template.customizer.TransformTemplateCustomizersData;

      
//not game specific package import { BodyData } from '../../../org/allbinary/logic/visual/transform/template/customizer/bodies/BodyData.js';
      const BodyData = globalThis.org.allbinary.logic.visual.transform.template.customizer.bodies.BodyData;

      
//not game specific package import { TitleData } from '../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleData.js';
      const TitleData = globalThis.org.allbinary.logic.visual.transform.template.customizer.widgets.title.TitleData;

      
//not game specific package import { TransformTemplateCustomizerUtil } from '../../../org/allbinary/logic/visual/transform/template/util/TransformTemplateCustomizerUtil.js';
      const TransformTemplateCustomizerUtil = globalThis.org.allbinary.logic.visual.transform.template.util.TransformTemplateCustomizerUtil;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { Document } from '../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { HttpStoreComponentView } from '../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
      const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CustomizersView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly customizersVector: Vector;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.customizersVector= TransformInfoEntityBuilder.getInstance()!.getNames(this.getWeblisketSession()!.getStoreName());
    
}


    public toXmlNode(document: Document): Node{

        try {
            
    var node: Node = document.createElement(TransformTemplateCustomizersData.NAME)!;;
    

    var unsortedCustomizerViewVector: Vector = new Vector();;
    

    var size: number = this.customizersVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var viewName: string = this.customizersVector!.get(index) as string;;
    

                        if(viewName!.indexOf(CustomizerTransformInfoData.NAME) > 0 && viewName!.indexOf(GLOBALS2.EDIT) > 0 && viewName!.indexOf(BodyData.getInstance()!.VIEWNAMEKEY) > 0 && viewName!.indexOf(TitleData.getInstance()!.VIEWNAMEKEY) > 0)
                        
                                    {
                                    unsortedCustomizerViewVector!.add(viewName);
    

                                    }
                                
}


    var objectArray: any[] = unsortedCustomizerViewVector!.toArray() as any[];;
    
Arrays.sort(objectArray, new StringComparator());
    




                        for (
    var index: number = 0;index < objectArray!.length; index++)
        {

    var viewName: string = objectArray[index]! as string;;
    

    var viewNameNode: Node = ModDomHelper.createNameValueNodes(document, TransformTemplateCustomizerData.NAME, viewName, TransformTemplateCustomizerUtil.getInstance()!.getPageNameHack(viewName, this.getWeblisketSession()!.getStoreName()))!;;
    
node.appendChild(viewNameNode);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
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



