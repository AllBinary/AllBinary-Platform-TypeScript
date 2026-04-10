
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { ServletRequest } from "../../../../../../../javax/servlet/ServletRequest.js";

    
import { EntryData } from "../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { DomNodeInterface } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { SuperCrypt } from "../../../../../../../org/allbinary/logic/control/crypt/SuperCrypt.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

export class Payment
            extends Object
        
                , PaymentInterface
                , DomNodeInterface {
        

    private name: string

    private expiration: string

    private encryption: string

    private number: string

    private id: string

    private type: string

    private tenderType: string

    private transactionType: string

    private aba: string

    private account: string

    private accountType: string

    private authorizationCode: string

    private checkNumber: string

    private checkType: string

    private driversLicense: string

    private magneticInkCheckReader: string

    private isDefault: boolean = false;
        
        
public constructor (payment: HashMap<Any, Any>){

            super();
            var payment = payment
this.name= payment.get(PaymentData.NAME) as String
this.type= payment.get(PaymentData.TYPE) as String
this.expiration= payment.get(PaymentData.EXPIRATION) as String
this.encryption= payment.get(EntryData.getInstance()!.ENCRYPTION) as String
this.number= SuperCrypt(Integer(encryption).
                            toInt()).
                            decrypt(payment.get(PaymentData.NUMBER) as String) as String
this.id= payment.get(PaymentData.ID) as String

    var def: string = payment.get(EntryData.getInstance()!.DEFAULT) as String;
        
        


    
                        if(def != 
                                    null
                                 && def.compareTo(EntryData.getInstance()!.DEFAULT) == 0)
                        
                                    {
                                    this.isDefault= true

                                    }
                                
                        else {
                            this.isDefault= false

                        }
                            
this.tenderType= payment.get(PaymentData.TENDERTYPE) as String
this.transactionType= payment.get(PaymentData.TRANSACTIONTYPE) as String
this.aba= payment.get(PaymentData.ABA) as String
this.account= payment.get(PaymentData.ACCOUNT) as String
this.accountType= payment.get(PaymentData.ACCOUNTTYPE) as String
this.authorizationCode= payment.get(PaymentData.AUTHORIZATIONCODE) as String
this.checkNumber= payment.get(PaymentData.CHECKNUMBER) as String
this.checkType= payment.get(PaymentData.CHECKTYPE) as String
this.driversLicense= payment.get(PaymentData.DRIVERSLICENSE) as String
this.magneticInkCheckReader= payment.get(PaymentData.MAGNETICINKCHECKREADER) as String
}

public constructor (request: ServletRequest){

            super();
            var request = request
this.name= request.getParameter(PaymentData.NAME)
this.type= request.getParameter(PaymentData.TYPE)
this.expiration= request.getParameter(PaymentData.EXPIRATION)
this.number= request.getParameter(PaymentData.NUMBER)
this.tenderType= request.getParameter(PaymentData.TENDERTYPE)
this.transactionType= request.getParameter(PaymentData.TRANSACTIONTYPE)
this.aba= request.getParameter(PaymentData.ABA)
this.account= request.getParameter(PaymentData.ACCOUNT)
this.accountType= request.getParameter(PaymentData.ACCOUNTTYPE)
this.authorizationCode= request.getParameter(PaymentData.AUTHORIZATIONCODE)
this.checkNumber= request.getParameter(PaymentData.CHECKNUMBER)
this.checkType= request.getParameter(PaymentData.CHECKTYPE)
this.driversLicense= request.getParameter(PaymentData.DRIVERSLICENSE)
this.magneticInkCheckReader= request.getParameter(PaymentData.MAGNETICINKCHECKREADER)
}

public constructor (){

            super();
            }


    public isValid(): Boolean{

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        


    var aFalse: Boolean = Boolean.FALSE;
        
        


    
                        if(this.name == 
                                    null
                                 || this.name.compareTo(stringUtil!.EMPTY_STRING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return aFalse;
    

                                    }
                                

    
                        if(this.type == 
                                    null
                                 || this.type.compareTo(stringUtil!.EMPTY_STRING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return aFalse;
    

                                    }
                                

    
                        if(this.expiration == 
                                    null
                                 || this.expiration.compareTo(stringUtil!.EMPTY_STRING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return aFalse;
    

                                    }
                                

    
                        if(this.number == 
                                    null
                                 || this.number.compareTo(stringUtil!.EMPTY_STRING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return aFalse;
    

                                    }
                                

    
                        if(this.number.length > org.allbinary.business.user.commerce.money.payment.types.CreditCardType.MAXLEN)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return aFalse;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public setTenderType(value: string){
var value = value
this.tenderType= value
}


    public setTransactionType(value: string){
var value = value
this.transactionType= value
}


    public setAuthorizationCode(value: string){
var value = value
this.authorizationCode= value
}


    public setCheckType(value: string){
var value = value
this.checkType= value
}


    public setCheckNumber(value: string){
var value = value
this.checkNumber= value
}


    public setDriversLicense(value: string){
var value = value
this.driversLicense= value
}


    public setMagneticInkCheckReader(value: string){
var value = value
this.magneticInkCheckReader= value
}


    public setAba(value: string){
var value = value
this.aba= value
}


    public setAccountType(value: string){
var value = value
this.accountType= value
}


    public setName(value: string){
var value = value
this.name= value
}


    public setType(value: string){
var value = value
this.type= value
}


    public setExpiration(value: string){
var value = value
this.expiration= value
}


    public setNumber(value: string){
var value = value
this.number= value
}


    public getId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.type;
    
}


    public getExpiration(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.expiration;
    
}


    public getEncryption(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.encryption;
    
}


    public getNumber(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.number;
    
}


    public getTenderType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tenderType;
    
}


    public getTransactionType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transactionType;
    
}


    public getAba(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.aba;
    
}


    public getAccount(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.account;
    
}


    public getAccountType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.accountType;
    
}


    public getAuthorizationCode(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.authorizationCode;
    
}


    public getCheckNumber(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.checkNumber;
    
}


    public getCheckType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.checkType;
    
}


    public getDriversLicense(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.driversLicense;
    
}


    public getMagneticInkCheckReader(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.magneticInkCheckReader;
    
}


    public getLastFour(): string{

    
                        if(this.number.length > PaymentData.MIN && this.number.length <= PaymentData.MAX)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.number.substring(this.number.length -4);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Invalid #";
    

                        }
                            
}


    public isDefault(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isDefault;
    
}


    public toHashMap(): HashMap<Any, Any>{

    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(PaymentData.NAME, this.name)
put(PaymentData.TYPE, this.type)
put(PaymentData.EXPIRATION, this.expiration)
put(PaymentData.NUMBER, this.getLastFour())
put(PaymentData.TENDERTYPE, this.tenderType)
put(PaymentData.TRANSACTIONTYPE, this.transactionType)
put(PaymentData.ABA, this.aba)
put(PaymentData.ACCOUNT, this.account)
put(PaymentData.ACCOUNTTYPE, this.accountType)
put(PaymentData.AUTHORIZATIONCODE, this.authorizationCode)
put(PaymentData.CHECKNUMBER, this.checkNumber)
put(PaymentData.DRIVERSLICENSE, this.driversLicense)
put(PaymentData.MAGNETICINKCHECKREADER, this.magneticInkCheckReader)

    
                        if(this.isDefault)
                        
                                    {
                                    put(EntryData.getInstance()!.DEFAULT, EntryData.getInstance()!.DEFAULT)

                                    }
                                
                        else {
                            put(EntryData.getInstance()!.DEFAULT, StringUtil.getInstance()!.EMPTY_STRING)

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                @Throws(Exception::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var hashMap: HashMap<Any, Any> = this.toHashMap()!;
        
        


    var node: Node = ModDomHelper.createNameValueNodes(document, PaymentData.PAYMENT, hashMap)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public view(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
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


    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

