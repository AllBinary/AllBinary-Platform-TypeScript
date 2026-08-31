
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../java/lang/Long.js';
        
import { Calendar } from '../../../../../../java/util/Calendar.js';
      //not GWT import const Calendar = globalThis.java.util.Calendar;

      
import { HashMap } from '../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Set } from '../../../../../../java/util/Set.js';
      //not GWT import const Set = globalThis.java.util.Set;

      
import { Vector } from '../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { StoreFrontData } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { EntryData } from '../../../../../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { ModDomHelper } from '../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { RequestParams } from '../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
      //not GWT import const RequestParams = globalThis.org.allbinary.logic.communication.http.request.RequestParams;

      
import { WeblisketSession } from '../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      //not GWT import const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { WorkFlowData } from '../../../../../../org/allbinary/logic/control/workflow/WorkFlowData.js';
      //not GWT import const WorkFlowData = globalThis.org.allbinary.logic.control.workflow.WorkFlowData;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicWorkFlow
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private workFlowDoc: Document;

    private workFlowName: string;

    private storeName: string;

public constructor (){

            super();
        this.workFlowName= StringUtil.getInstance()!.EMPTY_STRING;
    
this.workFlowDoc= DomDocumentHelper.create();
    

    var workFlowNode: Node = this.workFlowDoc!.createElement(WorkFlowData.getInstance()!.WORKFLOW)!;;
    
this.workFlowDoc!.appendChild(workFlowNode);
    
}


public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        
    var weblisketSession: WeblisketSession = new WeblisketSession(hashMap, pageContext);;
    
this.storeName= weblisketSession!.getStoreName();
    

    var requestHashMap: HashMap<any, any> = new RequestParams(pageContext).toHashMap()!;;
    
this.workFlowName= requestHashMap!.get(WorkFlowData.getInstance()!.NAME) as string;
    
this.workFlowDoc= DomDocumentHelper.create(requestHashMap!.get(WorkFlowData.getInstance()!.DATA) as string);
    
}


public constructor (hashMap: HashMap<any, any>){

            super();
        this.workFlowName= hashMap!.get(WorkFlowData.getInstance()!.NAME) as string;
    
this.storeName= hashMap!.get(StoreFrontData.getInstance()!.NAME) as string;
    
this.workFlowDoc= DomDocumentHelper.create(hashMap!.get(WorkFlowData.getInstance()!.DATA) as string);
    
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
    
}


                //@Throws(Exception.constructor)
            
    public toVector(): Vector{

    var values: Vector = new Vector();;
    
values.add(this.workFlowName);
    
values.add(this.storeName);
    
values.add(DomDocumentHelper.toString(this.workFlowDoc));
    

    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    
values.add(time);
    
values.add(time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    
hashMap!.put(WorkFlowData.getInstance()!.NAME, this.workFlowName);
    
hashMap!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    
hashMap!.put(WorkFlowData.getInstance()!.DATA, DomDocumentHelper.toString(this.workFlowDoc));
    

    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    
hashMap!.put(EntryData.getInstance()!.LASTMODIFIED, time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toXmlNode(document: Document): Node{

        try {
            
    var hashMap: HashMap<any, any> = this.toHashMap()!;;
    

    var keySet: Set = hashMap!.keys()!;;
    

    var node: Node = document.createElement(WorkFlowData.getInstance()!.WORKFLOW)!;;
    

    var nameArray: any[] = keySet!.()!;;
    

    var size: number = nameArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var name: string = nameArray[index]! as string;;
    

    var value: string = hashMap!.get(name) as string;;
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "toXmlNode()", e);
    

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
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "toXmlDoc()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public isValid(): Boolean{

        try {
            
    var returnBoolean: Boolean = Boolean.TRUE;;
    

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
                                    this.logUtil!.put("Failed to validate", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    

                        if(this.workFlowName == 
                                    null
                                )
                        stringBuffer!.append("No WorkFlow name specified.")



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
                        return "Error Getting Validation Info";
    
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


}



