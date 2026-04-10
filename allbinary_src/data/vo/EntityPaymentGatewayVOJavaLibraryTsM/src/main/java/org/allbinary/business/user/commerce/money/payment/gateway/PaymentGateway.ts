
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { StoreFrontData } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { EntryData } from "../../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserData } from "../../../../../../../../org/allbinary/business/user/UserData.js";

    
import { PaymentData } from "../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js";

    
import { SuperCrypt } from "../../../../../../../../org/allbinary/logic/control/crypt/SuperCrypt.js";

    
import { StringUtil } from "../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class PaymentGateway
            extends Object
        
                , PaymentGatewayInterface {
        

    private storeName: string

    private name: string

    private enable: string

    private paymentMethod: string

    private mode: string

    private testProtocol: string

    private testServer: string

    private testPort: string

    private testPath: string

    private serverProtocol: string

    private server: string

    private serverPort: string

    private serverPath: string

    private timeout: string

    private userName: string

    private password: string

    private proxyProtocol: string

    private proxyServer: string

    private proxyPort: string

    private proxyPath: string

    private proxyUserName: string

    private proxyPassword: string

    private proxyTimeout: string

    private special1: string

    private special2: string

    private special3: string

    private special4: string

    private special5: string

    private special6: string

    private special7: string

    private special8: string

    private special9: string

    private lastModified: string

    private timeEntered: string
public constructor (hashMap: HashMap<Any, Any>){

            super();
            var hashMap = hashMap
this.getFormData(hashMap)
}


    public getFormData(hashMap: HashMap<Any, Any>){
var hashMap = hashMap

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        


    var empty: string = stringUtil!.EMPTY_STRING;
        
        

this.storeName= hashMap!.get(StoreFrontData.getInstance()!.NAME.toString()) as String
this.name= hashMap!.get(PaymentGatewayData.NAME.toString()) as String
this.enable= stringUtil!.getInstance(hashMap!.get(EntryData.getInstance()!.ENABLE.toString()) as String)
this.paymentMethod= stringUtil!.getInstance(hashMap!.get(PaymentData.METHOD.toString()) as String)
this.mode= stringUtil!.getInstance(hashMap!.get(PaymentGatewayData.MODE.toString()) as String)
this.testProtocol= stringUtil!.getInstance(hashMap!.get(PaymentGatewayData.TESTPROTOCOL.toString()) as String)
this.testServer= stringUtil!.getInstance(hashMap!.get(PaymentGatewayData.TESTSERVER.toString()) as String)
this.testPort= stringUtil!.getInstance(hashMap!.get(PaymentGatewayData.TESTPORT.toString()) as String)
this.testPath= hashMap!.get(PaymentGatewayData.TESTPATH.toString()) as String

    
                        if(this.testPath == 
                                    null
                                )
                        this.testPath= empty
this.serverProtocol= hashMap!.get(PaymentGatewayData.SERVERPROTOCOL.toString()) as String

    
                        if(this.serverProtocol == 
                                    null
                                )
                        this.serverProtocol= empty
this.server= hashMap!.get(PaymentGatewayData.SERVER.toString()) as String

    
                        if(this.server == 
                                    null
                                )
                        this.server= empty
this.serverPort= hashMap!.get(PaymentGatewayData.SERVERPORT.toString()) as String

    
                        if(this.serverPort == 
                                    null
                                )
                        this.serverPort= empty
this.serverPath= hashMap!.get(PaymentGatewayData.SERVERPATH.toString()) as String

    
                        if(this.serverPath == 
                                    null
                                )
                        this.serverPath= empty
this.userName= hashMap!.get(UserData.USERNAME.toString()) as String

    
                        if(this.userName == 
                                    null
                                )
                        this.userName= empty
this.password= hashMap!.get(UserData.PASSWORD.toString()) as String

    
                        if(this.password == 
                                    null
                                )
                        this.password= empty
this.timeout= hashMap!.get(PaymentGatewayData.TIMEOUT.toString()) as String

    
                        if(this.timeout == 
                                    null
                                )
                        this.timeout= empty
this.proxyProtocol= hashMap!.get(PaymentGatewayData.PROXYPROTOCOL.toString()) as String

    
                        if(this.proxyProtocol == 
                                    null
                                )
                        this.proxyProtocol= empty
this.proxyServer= hashMap!.get(PaymentGatewayData.PROXYSERVER.toString()) as String

    
                        if(this.proxyServer == 
                                    null
                                )
                        this.proxyServer= empty
this.proxyPort= hashMap!.get(PaymentGatewayData.PROXYPORT.toString()) as String

    
                        if(this.proxyPort == 
                                    null
                                )
                        this.proxyPort= empty
this.proxyPath= hashMap!.get(PaymentGatewayData.PROXYPATH.toString()) as String

    
                        if(this.proxyPath == 
                                    null
                                )
                        this.proxyPath= empty
this.proxyUserName= hashMap!.get(PaymentGatewayData.PROXYUSERNAME.toString()) as String

    
                        if(this.proxyUserName == 
                                    null
                                )
                        this.proxyUserName= empty
this.proxyPassword= hashMap!.get(PaymentGatewayData.PROXYPASSWORD.toString()) as String

    
                        if(this.proxyPassword == 
                                    null
                                )
                        this.proxyPassword= empty
this.proxyTimeout= hashMap!.get(PaymentGatewayData.PROXYTIMEOUT.toString()) as String

    
                        if(this.proxyTimeout == 
                                    null
                                )
                        this.proxyTimeout= empty
this.special1= hashMap!.get(PaymentGatewayData.SPECIAL1.toString()) as String

    
                        if(this.special1 == 
                                    null
                                )
                        this.special1= empty
this.special2= hashMap!.get(PaymentGatewayData.SPECIAL2.toString()) as String

    
                        if(this.special2 == 
                                    null
                                )
                        this.special2= empty
this.special3= hashMap!.get(PaymentGatewayData.SPECIAL3.toString()) as String

    
                        if(this.special3 == 
                                    null
                                )
                        this.special3= empty
this.special4= hashMap!.get(PaymentGatewayData.SPECIAL4.toString()) as String

    
                        if(this.special4 == 
                                    null
                                )
                        this.special4= empty
this.special5= hashMap!.get(PaymentGatewayData.SPECIAL5.toString()) as String

    
                        if(this.special5 == 
                                    null
                                )
                        this.special5= empty
this.special6= hashMap!.get(PaymentGatewayData.SPECIAL6.toString()) as String

    
                        if(this.special6 == 
                                    null
                                )
                        this.special6= empty
this.special7= hashMap!.get(PaymentGatewayData.SPECIAL7.toString()) as String

    
                        if(this.special7 == 
                                    null
                                )
                        this.special7= empty
this.special8= hashMap!.get(PaymentGatewayData.SPECIAL8.toString()) as String

    
                        if(this.special8 == 
                                    null
                                )
                        this.special8= empty
this.special9= hashMap!.get(PaymentGatewayData.SPECIAL9.toString()) as String

    
                        if(this.special9 == 
                                    null
                                )
                        this.special9= empty
this.lastModified= hashMap!.get(EntryData.getInstance()!.LASTMODIFIED.toString()) as String

    
                        if(this.lastModified == 
                                    null
                                )
                        this.lastModified= empty
this.timeEntered= hashMap!.get(EntryData.getInstance()!.TIMECREATED.toString()) as String

    
                        if(this.timeEntered == 
                                    null
                                )
                        this.timeEntered= empty
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeName;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getEnable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.enable;
    
}


    public getPaymentMethod(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentMethod;
    
}


    public getMode(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mode;
    
}


    public getTestProtocol(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testProtocol;
    
}


    public getTestServer(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testServer;
    
}


    public getTestPort(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testPort;
    
}


    public getTestPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testPath;
    
}


    public getServerProtocol(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.serverProtocol;
    
}


    public getServer(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.server;
    
}


    public getServerPort(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.serverPort;
    
}


    public getServerPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.serverPath;
    
}


    public getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userName;
    
}


    public getPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.password;
    
}


    public getProxyProtocol(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.proxyProtocol;
    
}


    public getProxyServer(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.proxyServer;
    
}


    public getProxyPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.proxyPath;
    
}


    public getProxyPort(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.proxyPort;
    
}


    public getProxyUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.proxyUserName;
    
}


    public getProxyPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.proxyPassword;
    
}


    public getTimeout(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeout;
    
}


    public getProxyTimeout(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.proxyTimeout;
    
}


    public getSpecial1(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.special1;
    
}


    public getSpecial2(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.special2;
    
}


    public getSpecial3(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.special3;
    
}


    public getSpecial4(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.special4;
    
}


    public getSpecial5(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.special5;
    
}


    public getSpecial6(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.special6;
    
}


    public getSpecial7(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.special7;
    
}


    public getSpecial8(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.special8;
    
}


    public getSpecial9(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.special9;
    
}


    public getLastModified(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastModified;
    
}


    public getTimeEntered(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeEntered;
    
}


    public setEnable(value: string){
var value = value
this.enable= value
}


    public setStoreName(value: string){
var value = value
this.storeName= value
}


    public setName(value: string){
var value = value
this.name= value
}


    public setPaymentMethod(value: string){
var value = value
this.paymentMethod= value
}


    public setMode(value: string){
var value = value
this.mode= value
}


    public setTestProtocol(value: string){
var value = value
this.testProtocol= value
}


    public setTestServer(value: string){
var value = value
this.testServer= value
}


    public setTestPort(value: string){
var value = value
this.testPort= value
}


    public setTestPath(value: string){
var value = value
this.testPath= value
}


    public setServerProtocol(value: string){
var value = value
this.serverProtocol= value
}


    public setServer(value: string){
var value = value
this.server= value
}


    public setServerPort(value: string){
var value = value
this.serverPort= value
}


    public setServerPath(value: string){
var value = value
this.serverPath= value
}


    public setTimeout(value: string){
var value = value
this.timeout= value
}


    public setUserName(value: string){
var value = value
this.userName= value
}


    public setPassword(value: string){
var value = value
this.password= value
}


    public setProxyProtocol(value: string){
var value = value
this.proxyProtocol= value
}


    public setProxyServer(value: string){
var value = value
this.proxyServer= value
}


    public setProxyPort(value: string){
var value = value
this.proxyPort= value
}


    public setProxyPath(value: string){
var value = value
this.proxyPath= value
}


    public setProxyUserName(value: string){
var value = value
this.proxyUserName= value
}


    public setProxyPassword(value: string){
var value = value
this.proxyPassword= value
}


    public setProxyTimeout(value: string){
var value = value
this.proxyTimeout= value
}


    public setSpecial1(value: string){
var value = value
this.special1= value
}


    public setSpecial2(value: string){
var value = value
this.special2= value
}


    public setSpecial3(value: string){
var value = value
this.special3= value
}


    public setSpecial4(value: string){
var value = value
this.special4= value
}


    public setSpecial5(value: string){
var value = value
this.special5= value
}


    public setSpecial6(value: string){
var value = value
this.special6= value
}


    public setSpecial7(value: string){
var value = value
this.special7= value
}


    public setSpecial8(value: string){
var value = value
this.special8= value
}


    public setSpecial9(value: string){
var value = value
this.special9= value
}


    public setLastModified(value: string){
var value = value
this.lastModified= value
}


    public setTimeEntered(value: string){
var value = value
this.timeEntered= value
}


                @Throws(Exception::class)
            
    public toHashMap(): HashMap<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toHashMap(true);
    
}


                @Throws(Exception::class)
            
    public toHashMap(isEncrypted: boolean): HashMap<Any, Any>{
var isEncrypted = isEncrypted

    var paymentGatewayHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(EntryData.getInstance()!.ENABLE, this.enable)
put(StoreFrontData.getInstance()!.NAME.toString(), this.storeName)
put(PaymentGatewayData.NAME.toString(), this.getName())
put(PaymentData.METHOD.toString(), this.paymentMethod)
put(PaymentGatewayData.MODE.toString(), this.mode)
put(PaymentGatewayData.TESTPROTOCOL.toString(), this.testProtocol)
put(PaymentGatewayData.TESTSERVER.toString(), this.testServer)
put(PaymentGatewayData.TESTPORT.toString(), this.testPort)
put(PaymentGatewayData.TESTPATH.toString(), this.testPath)
put(PaymentGatewayData.SERVERPROTOCOL.toString(), this.serverProtocol)
put(PaymentGatewayData.SERVER.toString(), this.server)
put(PaymentGatewayData.SERVERPORT.toString(), this.serverPort)
put(PaymentGatewayData.SERVERPATH.toString(), this.serverPath)

    
                        if(isEncrypted)
                        
                                    {
                                    
    var superCrypt: SuperCrypt = new SuperCrypt(PaymentGatewayData.CRYPTNUM);
        
        

put(UserData.USERNAME.toString(), superCrypt!.encrypt(this.userName))
put(UserData.PASSWORD.toString(), superCrypt!.encrypt(this.password))

                                    }
                                
                        else {
                            put(UserData.USERNAME.toString(), this.userName)
put(UserData.PASSWORD.toString(), this.password)

                        }
                            
put(PaymentGatewayData.TIMEOUT.toString(), this.timeout)
put(PaymentGatewayData.PROXYPROTOCOL.toString(), this.proxyProtocol)
put(PaymentGatewayData.PROXYSERVER.toString(), this.proxyServer)
put(PaymentGatewayData.PROXYPORT.toString(), this.proxyPort)
put(PaymentGatewayData.PROXYPATH.toString(), this.proxyPath)
put(PaymentGatewayData.PROXYUSERNAME.toString(), this.proxyUserName)
put(PaymentGatewayData.PROXYPASSWORD.toString(), this.proxyPassword)
put(PaymentGatewayData.PROXYTIMEOUT.toString(), this.proxyTimeout)

    
                        if(isEncrypted)
                        
                                    {
                                    
    var superCrypt: SuperCrypt = new SuperCrypt(PaymentGatewayData.CRYPTNUM);
        
        

put(PaymentGatewayData.SPECIAL1.toString(), superCrypt!.encrypt(this.special1))
put(PaymentGatewayData.SPECIAL2.toString(), superCrypt!.encrypt(this.special2))
put(PaymentGatewayData.SPECIAL3.toString(), superCrypt!.encrypt(this.special3))
put(PaymentGatewayData.SPECIAL4.toString(), superCrypt!.encrypt(this.special4))
put(PaymentGatewayData.SPECIAL5.toString(), superCrypt!.encrypt(this.special5))
put(PaymentGatewayData.SPECIAL6.toString(), superCrypt!.encrypt(this.special6))
put(PaymentGatewayData.SPECIAL7.toString(), superCrypt!.encrypt(this.special7))
put(PaymentGatewayData.SPECIAL8.toString(), superCrypt!.encrypt(this.special8))

                                    }
                                
                        else {
                            put(PaymentGatewayData.SPECIAL1.toString(), this.special1)
put(PaymentGatewayData.SPECIAL2.toString(), this.special2)
put(PaymentGatewayData.SPECIAL3.toString(), this.special3)
put(PaymentGatewayData.SPECIAL4.toString(), this.special4)
put(PaymentGatewayData.SPECIAL5.toString(), this.special5)
put(PaymentGatewayData.SPECIAL6.toString(), this.special6)
put(PaymentGatewayData.SPECIAL7.toString(), this.special7)
put(PaymentGatewayData.SPECIAL8.toString(), this.special8)
put(PaymentGatewayData.SPECIAL9.toString(), this.special9)

                        }
                            
put(EntryData.getInstance()!.LASTMODIFIED.toString(), this.lastModified)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentGatewayHashMap;
    
}


    public toVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toVector(true);
    
}


    public toVector(isEncrypted: boolean): Vector{
var isEncrypted = isEncrypted

    var updateVector: Vector = new Vector();
        
        

add(this.enable)
add(this.storeName)
add(this.getName())
add(this.paymentMethod)
add(this.mode)
add(this.testProtocol)
add(this.testServer)
add(this.testPort)
add(this.testPath)
add(this.serverProtocol)
add(this.server)
add(this.serverPort)
add(this.serverPath)

    
                        if(isEncrypted)
                        
                                    {
                                    
    var superCrypt: SuperCrypt = new SuperCrypt(PaymentGatewayData.CRYPTNUM);
        
        

add(superCrypt!.encrypt(this.userName))
add(superCrypt!.encrypt(this.password))

                                    }
                                
                        else {
                            add(this.userName)
add(this.password)

                        }
                            
add(this.timeout)
add(this.proxyProtocol)
add(this.proxyServer)
add(this.proxyPort)
add(this.proxyPath)
add(this.proxyUserName)
add(this.proxyPassword)
add(this.proxyTimeout)

    
                        if(isEncrypted)
                        
                                    {
                                    
    var superCrypt: SuperCrypt = new SuperCrypt(PaymentGatewayData.CRYPTNUM);
        
        

add(superCrypt!.encrypt(this.special1))
add(superCrypt!.encrypt(this.special2))
add(superCrypt!.encrypt(this.special3))
add(superCrypt!.encrypt(this.special4))
add(superCrypt!.encrypt(this.special5))
add(superCrypt!.encrypt(this.special6))
add(superCrypt!.encrypt(this.special7))
add(superCrypt!.encrypt(this.special8))
add(superCrypt!.encrypt(this.special9))

                                    }
                                
                        else {
                            add(this.special1)
add(this.special2)
add(this.special3)
add(this.special4)
add(this.special5)
add(this.special6)
add(this.special7)
add(this.special8)
add(this.special9)

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return updateVector;
    
}


                @Throws(Exception::class)
            
    public getKey(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PaymentGatewayPrimaryKey(this.getStoreName(), this.getName()) as Object;
    
}


}
                
            

