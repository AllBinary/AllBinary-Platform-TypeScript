
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
        



            import { Integer } from "../../../../../../java/lang/Integer.js";
        
import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Tokenizer } from "../../../../../../org/allbinary/logic/string/tokens/Tokenizer.js";

    
import { HtmlNameMathData } from "../../../../../../org/allbinary/logic/visual/dhtml/html/name/HtmlNameMathData.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

import { NameSpaceRequestParamData } from "./NameSpaceRequestParamData.js";

import { NAME } from "./NAME.js";

import { NameSpaceRequestParamData } from "./NameSpaceRequestParamData.js";

import { SEP } from "./SEP.js";

import { NameSpaceRequestParamData } from "./NameSpaceRequestParamData.js";

import { NameSpaceRequestParamData } from "./NameSpaceRequestParamData.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { NameSpaceRequestParamData } from "./NameSpaceRequestParamData.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { NameSpaceRequestParamData } from "./NameSpaceRequestParamData.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class NameSpaceRequestParam
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private nameSpaceVector: Vector

    private nameSpacePropertiesHashMap: HashMap<any, any>

    private value: string
public constructor (nameSpace: string, value: string){

            super();
            var nameSpace = nameSpace
var value = value
this.nameSpaceVector= new Vector();
    
this.nameSpacePropertiesHashMap= new HashMap<any, any>();
    
this.value= value;
    

    var beginIndex: number = nameSpace!.indexOf(NameSpaceRequestParamData.NAME)!;
        
        
;
    

                        if(beginIndex < 0)
                        
                                    {
                                    


                            throw new Error("Not a NameSpaceRequest")

                                    }
                                

    var packages: string = nameSpace!.substring(beginIndex +NameSpaceRequestParamData.NAME.length() +NameSpaceRequestParamData.SEP.length())!;
        
        
;
    

    var sepTokenizer: Tokenizer = new Tokenizer(NameSpaceRequestParamData.SEP);
        
        
;
    

    var nameSpaceWithPropertiesVector: BasicArrayList = sepTokenizer!.getTokens(packages, new BasicArrayList())!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    this.logUtil!.putF("\nSep Tokens: " +nameSpaceWithPropertiesVector!.toString(), this, "NameSpaceRequestParam()");
    

                                    }
                                

    var nameSpaceAndPropertiesTokenizer: Tokenizer = new Tokenizer(NameSpaceRequestParamData.PROPERTIES);
        
        
;
    

    var packageIndex: number = 0;
        
        
;
    

    var list: BasicArrayList = new BasicArrayList();
        
        
;
    

    var index: number = 0;
        
        
;
    

    var size: number = nameSpaceWithPropertiesVector!.size()!;
        
        
;
    

        while(index < size)
        {

    var nameSpaceWithProperties: string = nameSpaceWithPropertiesVector!.get(index++);

                         as String;
        
        
;
    
list.clear();
    

    var nameSpaceAndPropertiesVector: BasicArrayList = nameSpaceAndPropertiesTokenizer!.getTokens(nameSpaceWithProperties, list)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    this.logUtil!.putF("\nPackageName and PackageName Properties Tokens: " +nameSpaceAndPropertiesVector!.toString(), this, "NameSpaceRequestParam()");
    

                                    }
                                

                        if(nameSpaceAndPropertiesVector!.size() > 0)
                        
                                    {
                                    
    var packageName: string = nameSpaceAndPropertiesVector!.get(0);

                         as String;
        
        
;
    

                        if(packageName == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("Package Name Is Null")

                                    }
                                
this.nameSpaceVector!.add(packageName);
    

                        if(nameSpaceAndPropertiesVector!.size() > 1)
                        
                                    {
                                    
    var properties: string = nameSpaceAndPropertiesVector!.get(1);

                         as String;
        
        
;
    

    var packagePropertiesHashMap: HashMap<any, any> = this.generatePackagePropertiesHashMap(properties)!;
        
        
;
    
this.nameSpacePropertiesHashMap!.put(packageIndex.toString(), packagePropertiesHashMap);
    

                                    }
                                
packageIndex++;
    

                                    }
                                
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    this.logUtil!.putF("NameSpace: " +this.nameSpaceVector!.toString(), this, "NameSpaceRequestParam()");
    

                                    }
                                
}


    public getPackages(): Vector{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    this.logUtil!.putF("NameSpace: " +this.nameSpaceVector!.toString(), this, "getPackages()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.nameSpaceVector;
    
}


    public getPackageProperties(packageIndex: number): HashMap<any, any>{
var packageIndex = packageIndex

    var packagePropertiesHashMap: HashMap<any, any> = this.nameSpacePropertiesHashMap!.get(packageIndex.toString());

                         as HashMap<any, any>;
        
        
;
    

                        if(packagePropertiesHashMap == 
                                    null
                                )
                        
                                    {
                                    packagePropertiesHashMap= new HashMap<any, any>();
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    this.logUtil!.putF("Package Properties: " +packagePropertiesHashMap!.toString(), this, "getPackagesProperties()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return packagePropertiesHashMap;
    
}


    public getValue(): string{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    this.logUtil!.putF("\nValue: " +this.value, this, "getValue()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.value;
    
}


                //@Throws(Error::class)
            
    generatePackagePropertiesHashMap(properties: string): HashMap<any, any>{
var properties = properties

    var propertiesTokenizer: Tokenizer = new Tokenizer(NameSpaceRequestParamData.PROPERTIESSEPARATOR);
        
        
;
    

    var packagePropertiesHashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var propertyVector: BasicArrayList = propertiesTokenizer!.getTokens(properties, new BasicArrayList())!;
        
        
;
    

    var list: BasicArrayList = new BasicArrayList();
        
        
;
    

    var propertyTokenizer: Tokenizer = new Tokenizer(HtmlNameMathData.getInstance()!.EQUALS);
        
        
;
    

    var index: number = 0;
        
        
;
    

    var size: number = propertyVector!.size()!;
        
        
;
    

        while(index < size)
        {

    var property: string = propertyVector!.get(index);

                         as String;
        
        
;
    
list.clear();
    

    var propertyNameValueVector: BasicArrayList = propertyTokenizer!.getTokens(property, list)!;
        
        
;
    

    var index2: number = 0;
        
        
;
    

        while(index2 < propertyNameValueVector!.size())
        {

    var propertyName: string = propertyNameValueVector!.get(index2++);

                         as String;
        
        
;
    

                        if(propertyNameValueVector!.size() > 1)
                        
                                    {
                                    
    var propertyValue: string = propertyNameValueVector!.get(index2++);

                         as String;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPREQUEST))
                        
                                    {
                                    this.logUtil!.putF("\nProperty Name: " +propertyName +"\nProperty Value: " +propertyValue, this, "generatePackagePropertiesHashMap()");
    

                                    }
                                
packagePropertiesHashMap!.put(propertyName, propertyValue);
    

                                    }
                                
                        else {
                            packagePropertiesHashMap!.put(propertyName, StringUtil.getInstance()!.EMPTY_STRING);
    

                        }
                            
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return packagePropertiesHashMap;
    
}


}
                
            

