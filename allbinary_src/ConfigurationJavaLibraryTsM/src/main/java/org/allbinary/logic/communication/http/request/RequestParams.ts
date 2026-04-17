
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Map } from "../../../../../../java/util/Map.js";

    
import { Set } from "../../../../../../java/util/Set.js";

    
import { HttpServletRequest } from "../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { ModDomHelper } from "../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { RequestData } from "./RequestData.js";

export class RequestParams
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private map: Map
public constructor (){

            super();
            this.logUtil!.putF("New RequestParams Size: 0", this, this.commonStrings!.CONSTRUCTOR);
    
}

public constructor (request: HttpServletRequest){

            super();
            var request = request
map= request.getParameterMap();
    
this.logUtil!.putF("RequestParams Size: " +this.getMap()!.keySet()!.size(), this, this.commonStrings!.CONSTRUCTOR);
    
}

public constructor (pageContext: PageContext){

            super();
            var pageContext = pageContext
map= pageContext!.getRequest()!.getParameterMap();
    
this.logUtil!.putF("Request Params Size: " +this.getMap()!.keySet()!.size(), this, this.commonStrings!.CONSTRUCTOR);
    
}


    setMap(map: Map){
var map = map
this.map= map;
    
}


    getMap(): Map{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.map;
    
}


    private readonly KEY: string = "Key: ";
        
        

    private readonly VALUE: string = " Value: ";
        
        

    public toXmlNode(document: Document): Node{
var document = document

        try {
            
    var node: Node = document.createElement(RequestData.REQUEST)!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var keys: Set = map.keySet()!;
        
        
;
    

    var keyArray: any[] = keys.toArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var key: string = keyArray[i]! as String;
        
        
;
    

    var values: string[] = map.get(key);

                         as Array<String?>;
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(KEY);
    
stringBuffer!.append(key);
    
stringBuffer!.append(VALUE);
    
stringBuffer!.append(values[0]!);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "toXmlNode(document)");
    
node.appendChild(ModDomHelper.createNameValueNodes(document, RequestData.PARAMETER, key.toCharArray()
                                        .slice(0, ).join('')
                                    , .toCharArray()));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "toXmlNode(document)", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


                //@Throws(Error::class)
            
    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var keys: Set = map.keySet()!;
        
        
;
    

    var keyArray: any[] = keys.toArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var key: string = keyArray[i]! as String;
        
        
;
    

    var values: string[] = map.get(key);

                         as Array<String?>;
        
        
;
    
hashMap!.put(key.toCharArray()
                                        .slice(0, ).join('')
                                    , .toCharArray());
    
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
                
            

