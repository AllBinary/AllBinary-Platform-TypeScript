
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
        



import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { DomData } from "../../../../../../../../../org/allbinary/data/tree/dom/DomData.js";

    
import { DomNodeHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomNodeInterface } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomSearchHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringValidationUtil } from "../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonStrings } from "../../../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    

export class TitleView
            extends Object
        
                , DomNodeInterface {
        

    private static readonly NAME: string = "None";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private title: string
public constructor (){

            super();
            this.title= NAME
}

public constructor (node: Node){

            super();
            var node = node

    var titleTextNode: Node = DomSearchHelper.getNode(TitleData.getInstance()!.TEXT, node.getChildNodes())!;
        
        


    var valueNode: Node = DomSearchHelper.getNode(DomData.VALUE, titleTextNode!.getChildNodes())!;
        
        

this.title= DomNodeHelper.getTextNodeValue(valueNode)

                        if(StringValidationUtil.getInstance()!.isEmpty(this.title))
                        
                                    {
                                    this.title= NAME

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Title: " +this.getTitle(), this, "Consructor()")

                                    }
                                
}

public constructor (hashMap: HashMap<Any, Any>){

            super();
            var hashMap = hashMap

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("HashMap: " +hashMap!.toString(), this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                
this.getFormData(hashMap)
}


    public getTitle(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.title;
    
}


    public getFormData(hashMap: HashMap<Any, Any>){
var hashMap = hashMap
this.title= hashMap!.get(TitleData.getInstance()!.TEXT) as String

                        if(StringValidationUtil.getInstance()!.isEmpty(this.title))
                        
                                    {
                                    this.title= NAME

                                    }
                                
}


    public toHashMap(): HashMap<Any, Any>{

    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

hashMap!.put(TitleData.getInstance()!.TEXT, this.getTitle())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var hashMap: HashMap<Any, Any> = this.toHashMap()!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("TitleView HashMap: " +hashMap!.toString(), this, "toXmlNode()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, TitleData.getInstance()!.NAME, hashMap);
    
}


}
                
            

