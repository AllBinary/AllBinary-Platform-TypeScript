
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

        


            import { Exception } from '../../../../../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../../../../../../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { DomNodeInterface } from '../../../../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not plain js import { LogUtil } from '../../../../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { Validation } from '../../../../../../../../../../../../org/allbinary/logic/control/validate/Validation.js';
      //not GWT import const Validation = globalThis.org.allbinary.logic.control.validate.Validation;

      
import { ValidationInterface } from '../../../../../../../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js';
      //not GWT import const ValidationInterface = globalThis.org.allbinary.logic.control.validate.ValidationInterface;

      
//not plain js import { StringMaker } from '../../../../../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { StyleData } from '../../../../../../../../../../../../org/allbinary/logic/visual/dhtml/style/StyleData.js';
      //not GWT import const StyleData = globalThis.org.allbinary.logic.visual.dhtml.style.StyleData;

      
import { StylesData } from '../../../../../../../../../../../../org/allbinary/logic/visual/dhtml/style/StylesData.js';
      //not GWT import const StylesData = globalThis.org.allbinary.logic.visual.dhtml.style.StylesData;

      
import { StylesValidationFactory } from '../../../../../../../../../../../../org/allbinary/logic/visual/dhtml/style/StylesValidationFactory.js';
      //not GWT import const StylesValidationFactory = globalThis.org.allbinary.logic.visual.dhtml.style.StylesValidationFactory;

      
import { Document } from '../../../../../../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CssStyleValidation extends Validation implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    cssStyleElementVector: Vector;

public constructor (){

            super();
        this.cssStyleElementVector= new Vector();
    
}


public constructor (document: Document){

            super();
        this.cssStyleElementVector= StylesValidationFactory.getInstance()!.getInstance(document);
    
}


public constructor (hashMap: HashMap<any, any>){

            super();
        this.cssStyleElementVector= StylesValidationFactory.getInstance(hashMap);
    
}


    public isValid(): Boolean{

        try {
            
    var isValid: Boolean = Boolean.TRUE;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.IS_VALID);
    

                                    }
                                

    var size: number = this.cssStyleElementVector!.length!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var styleValidationInterface: ValidationInterface = this.cssStyleElementVector!.get(i) as ValidationInterface;;
    

                        if(!styleValidationInterface!.isValid().valueOf())
                        
                                    {
                                    isValid= Boolean.FALSE;
    

                                    }
                                
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("End: " +isValid, this, this.commonStrings!.IS_VALID);
    

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

    var node: Node = document.createElement(StylesData.getInstance()!.NAME)!;;
    

    var styleNode: Node = document.createElement(StyleData.getInstance()!.NAME)!;;
    
node.appendChild(styleNode);
    

    var size: number = this.cssStyleElementVector!.length!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var styleDomNodeInterface: DomNodeInterface = this.cssStyleElementVector!.get(i) as DomNodeInterface;;
    
styleNode!.appendChild(styleDomNodeInterface!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



