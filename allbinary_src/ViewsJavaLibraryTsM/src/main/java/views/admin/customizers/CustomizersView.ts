
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
        



import { Arrays } from "../../../java/util/Arrays.js";

    
import { Vector } from "../../../java/util/Vector.js";

    
import { TransformInfoEntityBuilder } from "../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js";

    
import { DomNodeInterface } from "../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { GLOBALS2 } from "../../../org/allbinary/globals/GLOBALS2.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringComparator } from "../../../org/allbinary/logic/control/sort/StringComparator.js";

    
import { CustomizerTransformInfoData } from "../../../org/allbinary/logic/visual/transform/info/CustomizerTransformInfoData.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformTemplateCustomizerData } from "../../../org/allbinary/logic/visual/transform/template/customizer/TransformTemplateCustomizerData.js";

    
import { TransformTemplateCustomizersData } from "../../../org/allbinary/logic/visual/transform/template/customizer/TransformTemplateCustomizersData.js";

    
import { BodyData } from "../../../org/allbinary/logic/visual/transform/template/customizer/bodies/BodyData.js";

    
import { TitleData } from "../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleData.js";

    
import { TransformTemplateCustomizerUtil } from "../../../org/allbinary/logic/visual/transform/template/util/TransformTemplateCustomizerUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    
import { HttpStoreComponentView } from "../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CustomizersView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly customizersVector: Vector
public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.customizersVector= TransformInfoEntityBuilder.getInstance()!.getNames(this.getWeblisketSession()!.getStoreName());
    
}


    public toXmlNode(document: Document): Node{
    //var document = document

        try {
            
    var node: Node = document.createElement(TransformTemplateCustomizersData.NAME)!;
        
        
;
    

    var unsortedCustomizerViewVector: Vector = new Vector();
        
        
;
    

    var size: number = this.customizersVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var viewName: string = this.customizersVector!.get(index); as String;
        
        
;
    

                        if(viewName!.indexOf(CustomizerTransformInfoData.NAME) > 0 && viewName!.indexOf(GLOBALS2.EDIT) > 0 && viewName!.indexOf(BodyData.getInstance()!.VIEWNAMEKEY) > 0 && viewName!.indexOf(TitleData.getInstance()!.VIEWNAMEKEY) > 0)
                        
                                    {
                                    unsortedCustomizerViewVector!.add(viewName);
    

                                    }
                                
}


    var objectArray: any[] = unsortedCustomizerViewVector!.toArray(); as Array<any?>;
        
        
;
    
Arrays.sort(objectArray, new StringComparator());
    




                        for (
    var index: number = 0;
        
        
index < objectArray!.length; index++)
        {

    var viewName: string = objectArray[index]! as String;
        
        
;
    

    var viewNameNode: Node = ModDomHelper.createNameValueNodes(document, TransformTemplateCustomizerData.NAME, viewName, TransformTemplateCustomizerUtil.getInstance()!.getPageNameHack(viewName, this.getWeblisketSession()!.getStoreName()))!;
        
        
;
    
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


                //@Throws(Error::class)
            
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
                                



                            throw e
}

}


}
                
            

