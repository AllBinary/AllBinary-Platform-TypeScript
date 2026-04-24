
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../java/util/Set.js";

    
import { HttpServletRequest } from "../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { DomNodeHelper } from "../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { StreetAddressData } from "./StreetAddressData.js";

export class StreetAddress
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private id: string

    private name: string

    private street: string

    private city: string

    private state: string

    private code: string

    private country: string

    private isDefault: boolean = false;
        
        
public constructor (){

            super();
        }

public constructor (node: Node){

            super();
        var node = node

    var nameNode: Node = DomSearchHelper.getNode(StreetAddressData.NAME, node.getChildNodes())!;
        
        
;
    
this.name= DomNodeHelper.getTextNodeValue(nameNode);
    

    var streetNode: Node = DomSearchHelper.getNode(StreetAddressData.STREET, node.getChildNodes())!;
        
        
;
    
this.street= DomNodeHelper.getTextNodeValue(streetNode);
    

    var cityNode: Node = DomSearchHelper.getNode(StreetAddressData.CITY, node.getChildNodes())!;
        
        
;
    
this.city= DomNodeHelper.getTextNodeValue(cityNode);
    

    var stateNode: Node = DomSearchHelper.getNode(StreetAddressData.STATE, node.getChildNodes())!;
        
        
;
    
this.state= DomNodeHelper.getTextNodeValue(stateNode);
    

    var codeNode: Node = DomSearchHelper.getNode(StreetAddressData.CODE, node.getChildNodes())!;
        
        
;
    
this.code= DomNodeHelper.getTextNodeValue(codeNode);
    

    var countryNode: Node = DomSearchHelper.getNode(StreetAddressData.COUNTRY, node.getChildNodes())!;
        
        
;
    
this.country= DomNodeHelper.getTextNodeValue(countryNode);
    
this.log();
    
}

public constructor (streetAddress: StreetAddress){

            super();
        var streetAddress = streetAddress
this.id= streetAddress!.getId();
    
this.name= streetAddress!.getName();
    
this.street= streetAddress!.getStreet();
    
this.city= streetAddress!.getCity();
    
this.state= streetAddress!.getState();
    
this.code= streetAddress!.getCode();
    
this.country= streetAddress!.getCountry();
    
this.isDefault= streetAddress!.isDefault();
    
this.log();
    
}

public constructor (request: HttpServletRequest){

            super();
        var request = request
this.setId(request.getParameter(StreetAddressData.ID));
    
this.setName(request.getParameter(StreetAddressData.NAME));
    
this.setStreet(request.getParameter(StreetAddressData.STREET));
    
this.setCity(request.getParameter(StreetAddressData.CITY));
    
this.setState(request.getParameter(StreetAddressData.STATE));
    
this.setCode(request.getParameter(StreetAddressData.CODE));
    
this.setCountry(request.getParameter(StreetAddressData.COUNTRY));
    
this.log();
    
}

public constructor (name: string, street: string, city: string, state: string, code: string, country: string){

            super();
        var name = name
var street = street
var city = city
var state = state
var code = code
var country = country
this.name= name;
    
this.street= street;
    
this.city= city;
    
this.state= state;
    
this.code= code;
    
this.country= country;
    
this.log();
    
}

public constructor (address: HashMap<any, any>){

            super();
        var address = address
this.id= address.get(StreetAddressData.ID); as String;
    
this.name= address.get(StreetAddressData.NAME); as String;
    
this.street= address.get(StreetAddressData.STREET); as String;
    
this.city= address.get(StreetAddressData.CITY); as String;
    
this.state= address.get(StreetAddressData.STATE); as String;
    
this.code= address.get(StreetAddressData.CODE); as String;
    
this.country= address.get(StreetAddressData.COUNTRY); as String;
    

    var def: string = address.get(StreetAddressData.DEFAULT); as String;
        
        
;
    

                        if(def != 
                                    null
                                 && def.compareTo(StreetAddressData.DEFAULT) == 0)
                        
                                    {
                                    this.isDefault= true;
    

                                    }
                                
                        else {
                            this.isDefault= false;
    

                        }
                            
this.log();
    
}


    log(){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Created Address: \n" +this.toHashMap(), this, "log");
    

                                    }
                                
}


    public setId(id: string){
var id = id
this.id= id;
    
}


    public setName(name: string){
var name = name
this.name= name;
    
}


    public setStreet(value: string){
var value = value
this.street= value;
    
}


    public setCity(value: string){
var value = value
this.city= value;
    
}


    public setState(value: string){
var value = value
this.state= value;
    
}


    public setCode(value: string){
var value = value
this.code= value;
    
}


    public setCountry(value: string){
var value = value
this.country= value;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getStreet(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.street;
    
}


    public getCity(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.city;
    
}


    public getState(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.state;
    
}


    public getCode(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.code;
    
}


    public getCountry(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.country;
    
}


    public getId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


    public isDefault(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isDefault;
    
}


    public isEmpty(): Boolean{

    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

                        if(this.getName() == 
                                    null
                                 && this.getName()!.compareTo(EMPTY_STRING) == 0 && this.getStreet() == 
                                    null
                                 && this.getStreet()!.compareTo(EMPTY_STRING) == 0 && this.getCity() == 
                                    null
                                 && this.getCity()!.compareTo(EMPTY_STRING) == 0 && this.getState() == 
                                    null
                                 && this.getState()!.compareTo(EMPTY_STRING) == 0 && this.getCode() == 
                                    null
                                 && this.getCode()!.compareTo(EMPTY_STRING) == 0 && this.getCountry() == 
                                    null
                                 && this.getCountry()!.compareTo(EMPTY_STRING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}


    public isValid(): Boolean{

    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

                        if(this.getName() == 
                                    null
                                 || this.getName()!.compareTo(EMPTY_STRING) == 0 || this.getStreet() == 
                                    null
                                 || this.getStreet()!.compareTo(EMPTY_STRING) == 0 || this.getCity() == 
                                    null
                                 || this.getCity()!.compareTo(EMPTY_STRING) == 0 || this.getState() == 
                                    null
                                 || this.getState()!.compareTo(EMPTY_STRING) == 0 || this.getCode() == 
                                    null
                                 || this.getCode()!.compareTo(EMPTY_STRING) == 0 || this.getCountry() == 
                                    null
                                 || this.getCountry()!.compareTo(EMPTY_STRING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public validationInfo(): string{

    var stringBuffer: StringBuilder = new StringBuilder();
        
        
;
    
stringBuffer!.append("Address Failed To Validate - All fields must contain data.<br></br>");
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

                        if(!stringValidationUtil!.isValidRequired(this.getName(), StreetAddressData.MIN, StreetAddressData.MAX);)
                        
                                    {
                                    stringBuffer!.append("Please enter a valid name");
    
stringBuffer!.append("<br></br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.getStreet(), StreetAddressData.MIN, StreetAddressData.MAX);)
                        
                                    {
                                    stringBuffer!.append("Please enter a valid street");
    
stringBuffer!.append("<br></br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.getCity(), StreetAddressData.MIN, StreetAddressData.MAX);)
                        
                                    {
                                    stringBuffer!.append("Please enter a valid city");
    
stringBuffer!.append("<br></br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.getState(), StreetAddressData.MIN, StreetAddressData.MAX);)
                        
                                    {
                                    stringBuffer!.append("Please enter a valid state");
    
stringBuffer!.append("<br></br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.getCode(), StreetAddressData.MIN, StreetAddressData.MAX);)
                        
                                    {
                                    stringBuffer!.append("Please enter a valid zipcode");
    
stringBuffer!.append("<br></br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.getCountry(), StreetAddressData.MIN, StreetAddressData.MAX);)
                        
                                    {
                                    stringBuffer!.append("Please enter a valid country");
    
stringBuffer!.append("<br></br>");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    toValidationInfoNode(document: Document): Node{
var document = document

        try {
            
    var node: Node = document.createElement(StreetAddressData.FORM)!;
        
        
;
    
node.appendChild(this.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "toValidationInfoNode", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(StreetAddressData.ID, this.id);
    
hashMap!.put(StreetAddressData.NAME, this.name);
    
hashMap!.put(StreetAddressData.STREET, this.street);
    
hashMap!.put(StreetAddressData.CITY, this.city);
    
hashMap!.put(StreetAddressData.STATE, this.state);
    
hashMap!.put(StreetAddressData.CODE, this.code);
    
hashMap!.put(StreetAddressData.COUNTRY, this.country);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

    var hashMap: HashMap<any, any> = this.toHashMap()!;
        
        
;
    

    var keySet: Set = hashMap!.keys!;
        
        
;
    

    var keyArray: any[] = keySet!.toTypedArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    

    var node: Node = document.createElement(StreetAddressData.ADDRESS)!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var name: string = keyArray[i]! as String;
        
        
;
    

    var value: string = stringUtil!.getInstance(hashMap!.get(name as Object) as String)!;
        
        
;
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

