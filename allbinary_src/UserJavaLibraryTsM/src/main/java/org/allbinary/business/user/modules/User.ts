
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
        



import { Calendar } from "../../../../../java/util/Calendar.js";

    
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { StoreFrontData } from "../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { EntryData } from "../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserData } from "../../../../../org/allbinary/business/user/UserData.js";

    
import { UserInterface } from "../../../../../org/allbinary/business/user/UserInterface.js";

    
import { UserConfigurationDomDocumentMapping } from "../../../../../org/allbinary/business/user/modules/configuration/UserConfigurationDomDocumentMapping.js";

    
import { UserConfigurationInterface } from "../../../../../org/allbinary/business/user/modules/configuration/UserConfigurationInterface.js";

    
import { UserConfigurationInterfaceFactory } from "../../../../../org/allbinary/business/user/modules/configuration/UserConfigurationInterfaceFactory.js";

    
import { Password } from "../../../../../org/allbinary/business/user/password/Password.js";

    
import { UserRole } from "../../../../../org/allbinary/business/user/role/UserRole.js";

    
import { UserRoleB } from "../../../../../org/allbinary/business/user/role/UserRoleB.js";

    
import { UserRoleData } from "../../../../../org/allbinary/business/user/role/UserRoleData.js";

    
import { UserName } from "../../../../../org/allbinary/business/user/username/UserName.js";

    
import { RequestParams } from "../../../../../org/allbinary/logic/communication/http/request/RequestParams.js";

    
import { WeblisketSessionData } from "../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionData.js";

    
import { WeblisketSessionInterface } from "../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionInterface.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

export class User
            extends Object
        
                , UserInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private userName: string

    private prefixName: string

    private firstName: string

    private lastName: string

    private middleName: string

    private suffixName: string

    private company: string

    private positionAtCompany: string

    private mainEmail: string

    private secondaryEmail: string

    private homePhone: string

    private cellPhone: string

    private workPhone: string

    private otherContact: string

    private electronicDevice: string

    private fax: string

    private role: UserRole

    private encryption: string

    private secret: string

    private password: Password

    private enable: string

    private permissions: string

    private userConfigurationInterface: UserConfigurationInterface
public constructor (){

            super();
            this.userConfigurationInterface= UserConfigurationInterfaceFactory.getInstance()
this.password= Password(StringUtil.getInstance()!.EMPTY_STRING)
}

public constructor (request: HttpServletRequest){

            super();
                //var request = request
this.getFormData(RequestParams(request).
                            toHashMap())
this.userConfigurationInterface= UserConfigurationInterfaceFactory.getInstance(this.getRole())
}

public constructor (userHashMap: HashMap<Any, Any>){

            super();
                //var userHashMap = userHashMap
this.getFormData(userHashMap)
this.userConfigurationInterface= UserConfigurationInterfaceFactory.getInstance(this.getRole())
}


                @Throws(Exception::class)
            
    public getFormData(userHashMap: HashMap<Any, Any>){
    //var userHashMap = userHashMap
this.userName= UserName(userHashMap).
                            get()

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        


    var passwordString: string = stringUtil!.getInstance(userHashMap!.get(UserData.PASSWORD) as String)!;
        
        


    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    
                        if(stringValidationUtil!.isEmpty(this.userName) && stringValidationUtil!.isEmpty(passwordString))
                        
                                    {
                                    this.userName= stringUtil!.getInstance(userHashMap!.get(WeblisketSessionData.REMOVABLEUSERNAME) as String)
passwordString= stringUtil!.getInstance(userHashMap!.get(WeblisketSessionData.REMOVABLEPASSWORD) as String)

                                    }
                                

    var encryption: string = stringUtil!.getInstance(userHashMap!.get(EntryData.getInstance()!.ENCRYPTION) as String)!;
        
        


    var secret: string = stringUtil!.getInstance(userHashMap!.get(UserData.SECRET) as String)!;
        
        

this.password= Password(passwordString)
this.prefixName= stringUtil!.getInstance(userHashMap!.get(UserData.PREFIXNAME) as String)
this.firstName= stringUtil!.getInstance(userHashMap!.get(UserData.FIRSTNAME) as String)
this.lastName= stringUtil!.getInstance(userHashMap!.get(UserData.LASTNAME) as String)
this.middleName= stringUtil!.getInstance(userHashMap!.get(UserData.MIDDLENAME) as String)
this.suffixName= stringUtil!.getInstance(userHashMap!.get(UserData.SUFFIXNAME) as String)
this.company= stringUtil!.getInstance(userHashMap!.get(UserData.COMPANY) as String)
this.positionAtCompany= stringUtil!.getInstance(userHashMap!.get(UserData.POSITIONATCOMPANY) as String)
this.mainEmail= stringUtil!.getInstance(userHashMap!.get(UserData.MAINEMAIL) as String)
this.secondaryEmail= stringUtil!.getInstance(userHashMap!.get(UserData.SECONDARYEMAIL) as String)
this.homePhone= stringUtil!.getInstance(userHashMap!.get(UserData.HOMEPHONE) as String)
this.cellPhone= stringUtil!.getInstance(userHashMap!.get(UserData.CELLPHONE) as String)
this.workPhone= stringUtil!.getInstance(userHashMap!.get(UserData.WORKPHONE) as String)
this.otherContact= stringUtil!.getInstance(userHashMap!.get(UserData.OTHERCONTACT) as String)
this.electronicDevice= stringUtil!.getInstance(userHashMap!.get(UserData.ELECTRONICDEVICE) as String)
this.fax= stringUtil!.getInstance(userHashMap!.get(UserData.FAX) as String)
this.role= UserRoleB.getRole(userHashMap!.get(UserRoleData.NAME.toString()) as String)
this.permissions= stringUtil!.getInstance(userHashMap!.get(UserData.PERMISSIONS) as String)

    
                        if(!stringValidationUtil!.isEmpty(this.permissions) && this.permissions.compareTo(StoreFrontData.getInstance()!.NAME) == 0)
                        this.permissions= stringUtil!.getInstance(userHashMap!.get(StoreFrontData.getInstance()!.NAME) as String)
                             else 
    
                        if(this.permissions == 
                                    null
                                )
                        
                                    {
                                    this.permissions= "No Permissions"

                                    }
                                
this.enable= stringUtil!.getInstance(userHashMap!.get(EntryData.getInstance()!.ENABLE) as String)
}


    public isValid(): Boolean{

        try {
            
    var valid: Boolean = Boolean.TRUE;
        
        


    
                        if(!UserName.getInstance()!.isValid(this.userName))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

    
                        if(!this.password.isValid())
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    
                        if(!stringValidationUtil!.isValidRequired(firstName, 1, UserData.MAXLEN))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(lastName, 1, UserData.MAXLEN))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(this.mainEmail, 1, UserData.MAXLEN) || this.mainEmail!.indexOf("@") ==  -1)
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VALIDATIONERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put("Failed to validate form", this, commonStrings!.IS_VALID, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append(UserName.getValidationInfo(this.userName))
append(this.password.getValidationInfo())

    
                        if(!stringValidationUtil!.isValidRequired(firstName, 1, UserData.MAXLEN))
                        
                                    {
                                    append("Please enter a valid First Name.<br />")

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(lastName, 1, UserData.MAXLEN))
                        
                                    {
                                    append("Please enter a valid Last Name.<br />")

                                    }
                                

    
                        if(!stringValidationUtil!.isValidRequired(this.mainEmail, 1, UserData.MAXLEN) || this.mainEmail!.indexOf("@") ==  -1)
                        
                                    {
                                    append("Please enter a valid email address.<br />")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put("Failed to generate validation error info", this, "validationInfo()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    
}

}


    public setUserName(value: string){
var value = value
this.userName= value
}


    public setPrefixName(value: string){
var value = value
this.prefixName= value
}


    public setFirstName(value: string){
var value = value
this.firstName= value
}


    public setLastName(value: string){
var value = value
this.lastName= value
}


    public setMiddleName(value: string){
var value = value
this.middleName= value
}


    public setSuffixName(value: string){
var value = value
this.suffixName= value
}


    public setCompany(value: string){
var value = value
this.company= value
}


    public setPositionAtCompany(value: string){
var value = value
this.positionAtCompany= value
}


    public setMainEmail(value: string){
var value = value
this.mainEmail= value
}


    public setSecondaryEmail(value: string){
var value = value
this.secondaryEmail= value
}


    public setHomePhone(value: string){
var value = value
this.homePhone= value
}


    public setCellPhone(value: string){
var value = value
this.cellPhone= value
}


    public setWorkPhone(value: string){
var value = value
this.workPhone= value
}


    public setOtherContact(value: string){
var value = value
this.otherContact= value
}


    public setElectronicContact(value: string){
var value = value
this.electronicDevice= value
}


    public setFax(value: string){
var value = value
this.fax= value
}


    public setRole(role: UserRole){
var role = role
this.role= role
}


    public setPermissions(value: string){
var value = value
this.permissions= value
}


    public setEncryption(value: string){
var value = value
this.encryption= value
}


    public setSecret(value: string){
var value = value
this.secret= value
}


    public setPassword(value: string){
var value = value
set(value)
}


    public enable(){
this.setEnable("Yes")
}


    public disable(){
this.setEnable("No")
}


    public setEnable(enable: string){
var enable = enable
this.enable= enable
}


    public getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userName;
    
}


    public getPrefixName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.prefixName;
    
}


    public getFirstName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.firstName;
    
}


    public getLastName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastName;
    
}


    public getMiddleName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.middleName;
    
}


    public getSuffixName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.suffixName;
    
}


    public getCompany(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.company;
    
}


    public getPositionAtCompany(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.positionAtCompany;
    
}


    public getMainEmail(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mainEmail;
    
}


    public getSecondaryEmail(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.secondaryEmail;
    
}


    public getHomePhone(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.homePhone;
    
}


    public getCellPhone(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cellPhone;
    
}


    public getWorkPhone(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.workPhone;
    
}


    public getOtherContact(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.otherContact;
    
}


    public getElectronicContact(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.electronicDevice;
    
}


    public getFax(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fax;
    
}


    public getRole(): UserRole{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.role;
    
}


    public getPermissions(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.permissions;
    
}


    public getEncryption(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.encryption;
    
}


    public getSecret(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.secret;
    
}


    public getPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.password.get();
    
}


                @Throws(Exception::class)
            
    public toVector(): Vector{

    var values: Vector = new Vector();
        
        

add(userName)
add(prefixName)
add(firstName)
add(lastName)
add(middleName)
add(suffixName)
add(company)
add(positionAtCompany)
add(mainEmail)
add(secondaryEmail)
add(homePhone)
add(cellPhone)
add(workPhone)
add(otherContact)
add(electronicDevice)
add(fax)
add(this.getRole()!.toString())

    var userConfigurationDomDocumentMapping: UserConfigurationDomDocumentMapping = new UserConfigurationDomDocumentMapping(this.getUserConfigurationInterface());
        
        

add(userConfigurationDomDocumentMapping!.toDomDocumentString())
add(this.permissions)
addAll(this.password.toVector(this.secret))
add(this.enable)

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

add(time)
add(time)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


                @Throws(Exception::class)
            
    public toHashMap(): HashMap<Any, Any>{

    var values: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(UserData.USERNAME, userName)
put(UserData.PREFIXNAME, prefixName)
put(UserData.FIRSTNAME, firstName)
put(UserData.LASTNAME, lastName)
put(UserData.MIDDLENAME, middleName)
put(UserData.SUFFIXNAME, suffixName)
put(UserData.COMPANY, company)
put(UserData.POSITIONATCOMPANY, positionAtCompany)
put(UserData.MAINEMAIL, mainEmail)
put(UserData.SECONDARYEMAIL, secondaryEmail)
put(UserData.HOMEPHONE, homePhone)
put(UserData.CELLPHONE, cellPhone)
put(UserData.WORKPHONE, workPhone)
put(UserData.OTHERCONTACT, otherContact)
put(UserData.ELECTRONICDEVICE, electronicDevice)
put(UserData.FAX, fax)

    
                        if(this.getRole() != 
                                    null
                                )
                        
                                    {
                                    put(UserRoleData.NAME.toString(), this.getRole()!.toString())

                                    }
                                

    var userConfigurationDomDocumentMapping: UserConfigurationDomDocumentMapping = new UserConfigurationDomDocumentMapping(this.getUserConfigurationInterface());
        
        

put(UserData.CONFIGURATION, userConfigurationDomDocumentMapping!.toDomDocumentString())
put(UserData.PERMISSIONS, this.permissions)
putAll(this.password.toHashMap(this.secret))
put(EntryData.getInstance()!.ENABLE, this.enable)

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

put(EntryData.getInstance()!.LASTMODIFIED, time)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public toPasswordHashMap(): HashMap<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.password.toHashMap(this.secret);
    
}


    public validateSession(weblisketSession: WeblisketSessionInterface){
var weblisketSession = weblisketSession
setAuthenticated()
setRole(this.getRole())
setUserName(this.getUserName())
}


    public updateSession(weblisketSession: WeblisketSessionInterface){
var weblisketSession = weblisketSession
}


    public isSessionValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


                @Throws(Exception::class)
            
    public getKey(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userName as Object;
    
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


    public getUserConfigurationInterface(): UserConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return userConfigurationInterface;
    
}


    public setUserConfigurationInterface(userConfigurationInterface: UserConfigurationInterface){
var userConfigurationInterface = userConfigurationInterface
this.userConfigurationInterface= userConfigurationInterface
}


}
                
            

