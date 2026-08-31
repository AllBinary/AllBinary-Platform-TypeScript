
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 leIIgal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */

        


            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { DomData } from '../../../../../../../../../org/allbinary/data/tree/dom/DomData.js';
      //not GWT import const DomData = globalThis.org.allbinary.data.tree.dom.DomData;

      
import { DomNodeHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      //not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomNodeInterface } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { DomSearchHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      //not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { ModDomHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not plain js import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlData } from '../../../../../../../../../org/allbinary/logic/communication/sql/AbSqlData.js';
      //not GWT import const AbSqlData = globalThis.org.allbinary.logic.communication.sql.AbSqlData;

      
import { Validation } from '../../../../../../../../../org/allbinary/logic/control/validate/Validation.js';
      //not GWT import const Validation = globalThis.org.allbinary.logic.control.validate.Validation;

      
//not plain js import { StringMaker } from '../../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { StringValidationUtil } from '../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { BodyData } from '../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/bodies/BodyData.js';
      //not GWT import const BodyData = globalThis.org.allbinary.logic.visual.transform.template.customizer.bodies.BodyData;

      
import { TitleData } from '../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleData.js';
      //not GWT import const TitleData = globalThis.org.allbinary.logic.visual.transform.template.customizer.widgets.title.TitleData;

      
import { TitleNotRequiredValidation } from '../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleNotRequiredValidation.js';
      //not GWT import const TitleNotRequiredValidation = globalThis.org.allbinary.logic.visual.transform.template.customizer.widgets.title.TitleNotRequiredValidation;

      
import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TitleBodyValidation extends Validation implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private body: string;

    private titleValidation: TitleNotRequiredValidation;

public constructor (){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    
this.body= stringUtil!.EMPTY_STRING;
    
this.titleValidation= new TitleNotRequiredValidation();
    
}


public constructor (document: Document){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, "Constructor(document)");
    

                                    }
                                

    var nodeList: NodeList = document.getElementsByTagName(BodyData.getInstance()!.NAME)!;;
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var aBodyNode: Node = nodeList!.item(index)!;;
    

    var aBodyValueNode: Node = DomSearchHelper.getNode(DomData.VALUE, aBodyNode!.getChildNodes())!;;
    
this.body= DomNodeHelper.getTextNodeValue(aBodyValueNode);
    

    var titleNode: Node = DomSearchHelper.getNode(TitleData.getInstance()!.NAME, aBodyNode!.getChildNodes())!;;
    
this.titleValidation= new TitleNotRequiredValidation(titleNode);
    

                        if(index > 1)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("To Many Body Nodes", this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

                                    }
                                
}

}


public constructor (hashMap: HashMap<any, any>){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "Constructor(hashmap)");
    

                                    }
                                
this.getFormData(hashMap);
    
}


                //@Throws(Exception.constructor)
            
    public getFormData(hashMap: HashMap<any, any>){
this.body= hashMap!.get(BodyData.getInstance()!.NAME) as string;
    
this.titleValidation= new TitleNotRequiredValidation(hashMap);
    
}


    public isValid(): Boolean{

        try {
            
    var isValid: Boolean = Boolean.TRUE;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("TitleBodyValidation", this, this.commonStrings!.IS_VALID);
    

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isValidNotRequired(this.body, BodyData.getInstance()!.MIN, AbSqlData.MAXBLOB))
                        
                                    {
                                    isValid= Boolean.FALSE;
    

                                    }
                                

                        if(!this.titleValidation!.isValid().valueOf())
                        
                                    {
                                    isValid= Boolean.FALSE;
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("TitleBodyValidation: " +isValid, this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    


                            {
                            stringBuffer!.append("Error: Data submitted is < ");
    
stringBuffer!.appendint(BodyData.getInstance()!.MIN);
    
stringBuffer!.append(" or > ");
    
stringBuffer!.appendint(AbSqlData.MAXBLOB);
    

                            }
                    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    
}

}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Title Body: " +this.body, this, "toXmlNode(document)");
    

                                    }
                                

    var node: Node = ModDomHelper.createNameValueNodes(document, BodyData.getInstance()!.NAME, this.body)!;;
    
node.appendChild(this.titleValidation!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



