
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
        
//not game specific package import { HashMap } from '../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Map } from '../../../../../../java/util/Map.js';
      const Map = globalThis.java.util.Map;

      
//not game specific package import { Set } from '../../../../../../java/util/Set.js';
      const Set = globalThis.java.util.Set;

      
//not game specific package import { HttpServletRequest } from '../../../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { ModDomHelper } from '../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { Document } from '../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RequestData } from './RequestData.js';
//Note: if request is destroyed or messed up this will not work. Use fileRequestParams
export class RequestParams
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private map: Map;

public constructor (){

            super();
        this.logUtil!.putF("New RequestParams Size: 0", this, this.commonStrings!.CONSTRUCTOR);
    
}


public constructor (request: HttpServletRequest){

            super();
        this.map= request.getParameterMap();
    
this.logUtil!.putF("RequestParams Size: " +this.getMap()!.keySet()!.size(), this, this.commonStrings!.CONSTRUCTOR);
    
}


public constructor (pageContext: PageContext){

            super();
        this.map= pageContext!.getRequest()!.getParameterMap();
    
this.logUtil!.putF("Request Params Size: " +this.getMap()!.keySet()!.size(), this, this.commonStrings!.CONSTRUCTOR);
    
}


    setMap(map: Map){
this.map= map;
    
}


    getMap(): Map{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.map;
    
}


    private readonly KEY: string = "Key: ";

    private readonly VALUE: string = " Value: ";

    public toXmlNode(document: Document): Node{

        try {
            
    var node: Node = document.createElement(RequestData.REQUEST)!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    

    var keys: Set = this.map.keySet()!;;
    

    var keyArray: any[] = keys.toArray()!;;
    

    var size: number = keyArray!.length
                ;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var key: string = keyArray[i]! as string;;
    

    var values: string[] = this.map.get(key) as string[];;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.KEY);
    
stringBuffer!.append(key);
    
stringBuffer!.append(this.VALUE);
    
stringBuffer!.append(values[0]!);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "toXmlNode(document)");
    
node.appendChild(ModDomHelper.createNameValueNodes(document, RequestData.PARAMETER, key.toCharArray().slice(0, ).join(''), .toCharArray()));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "toXmlNode(document)", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var keys: Set = this.map.keySet()!;;
    

    var keyArray: any[] = keys.toArray()!;;
    

    var size: number = keyArray!.length
                ;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var key: string = keyArray[i]! as string;;
    

    var values: string[] = this.map.get(key) as string[];;
    
hashMap!.put(key.toCharArray().slice(0, ).join(''), .toCharArray());
    
}

stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("RequestParams: ");
    
stringBuffer!.append(this.map.toString());
    
stringBuffer!.append("\ntoHashMap: ");
    
stringBuffer!.append(hashMap!.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


}
                
            

