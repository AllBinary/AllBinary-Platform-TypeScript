
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
        



            import Vector from "@ohos.util.Vector";
        
import { Calendar } from "../../../../../../java/util/Calendar.js";

    
import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../java/util/Set.js";

    

//import { Vector } from "../../../../../../java/util/Vector.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { StoreFrontData } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { EntryData } from "../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { ModDomHelper } from "../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { DomDocumentHelper } from "../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { RequestParams } from "../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js";

    
import { WeblisketSession } from "../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { WorkFlowData } from "../../../../../../org/allbinary/logic/control/workflow/WorkFlowData.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

export class BasicWorkFlow
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private workFlowDoc: Document

    private workFlowName: string

    private storeName: string
public constructor (){

            super();
            this.workFlowName= StringUtil.getInstance()!.EMPTY_STRING;
    
this.workFlowDoc= DomDocumentHelper.create();
    

    var workFlowNode: Node = this.workFlowDoc!.createElement(WorkFlowData.getInstance()!.WORKFLOW)!;
        
        
;
    
this.workFlowDoc!.appendChild(workFlowNode);
    
}

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext

    var weblisketSession: WeblisketSession = new WeblisketSession(hashMap, pageContext);
        
        
;
    
this.storeName= weblisketSession!.getStoreName();
    

    var requestHashMap: HashMap<any, any> = RequestParams(pageContext).
                            toHashMap()!;
        
        
;
    
this.workFlowName= requestHashMap!.get(WorkFlowData.getInstance()!.NAME);

                         as String;
    
this.workFlowDoc= DomDocumentHelper.create(requestHashMap!.get(WorkFlowData.getInstance()!.DATA);

                         as String);
    
}

public constructor (hashMap: HashMap<any, any>){

            super();
            var hashMap = hashMap
this.workFlowName= hashMap!.get(WorkFlowData.getInstance()!.NAME);

                         as String;
    
this.storeName= hashMap!.get(StoreFrontData.getInstance()!.NAME);

                         as String;
    
this.workFlowDoc= DomDocumentHelper.create(hashMap!.get(WorkFlowData.getInstance()!.DATA);

                         as String);
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.workFlowName;
    
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeName;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getName();

                         as Object;
    
}


                //@Throws(Error::class)
            
    public toVector(): Vector{

    var values: Vector = new Vector();
        
        
;
    
values.add(this.workFlowName);
    
values.add(this.storeName);
    
values.add(DomDocumentHelper.toString(this.workFlowDoc));
    

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var time: string = new calendar.getTimeInMillis() as Long.
                            toString();
        
        
;
    
values.add(time);
    
values.add(time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


                //@Throws(Error::class)
            
    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(WorkFlowData.getInstance()!.NAME, this.workFlowName);
    
hashMap!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    
hashMap!.put(WorkFlowData.getInstance()!.DATA, DomDocumentHelper.toString(this.workFlowDoc));
    

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var time: string = new calendar.getTimeInMillis() as Long.
                            toString();
        
        
;
    
hashMap!.put(EntryData.getInstance()!.LASTMODIFIED, time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toXmlNode(document: Document): Node{
var document = document

        try {
            
    var hashMap: HashMap<any, any> = this.toHashMap()!;
        
        
;
    

    var keySet: Set = hashMap!.keys!;
        
        
;
    

    var node: Node = document.createElement(WorkFlowData.getInstance()!.WORKFLOW)!;
        
        
;
    

    var nameArray: any[] = keySet!.toTypedArray()!;
        
        
;
    

    var size: number = nameArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var name: string = nameArray[index]! as String;
        
        
;
    

    var value: string = hashMap!.get(name as Object);

                         as String;
        
        
;
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "toXmlNode()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public toXmlDoc(): Document{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.workFlowDoc;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "toXmlDoc()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public isValid(): Boolean{

        try {
            
    var returnBoolean: Boolean = Boolean.TRUE;
        
        
;
    

                        if(this.workFlowName == 
                                    null
                                )
                        
                                    {
                                    returnBoolean= Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnBoolean;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put("Failed to validate", this, commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(this.workFlowName == 
                                    null
                                )
                        stringBuffer!.append("No WorkFlow name specified.");

                        



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Getting Validation Info";
    
}

}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

