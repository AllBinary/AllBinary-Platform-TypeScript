
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../java/lang/Long.js';
        
import { Calendar } from '../../../../../java/util/Calendar.js';
      
import { HashMap } from '../../../../../java/util/HashMap.js';
      
import { Vector } from '../../../../../java/util/Vector.js';
      
import { HttpServletRequest } from '../../../../../javax/servlet/http/HttpServletRequest.js';
      
import { StoreFrontData } from '../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      
import { EntryData } from '../../../../../org/allbinary/business/entry/EntryData.js';
      
import { UserData } from '../../../../../org/allbinary/business/user/UserData.js';
      
import { UserInterface } from '../../../../../org/allbinary/business/user/UserInterface.js';
      
import { UserConfigurationDomDocumentMapping } from '../../../../../org/allbinary/business/user/modules/configuration/UserConfigurationDomDocumentMapping.js';
      
import { UserConfigurationInterface } from '../../../../../org/allbinary/business/user/modules/configuration/UserConfigurationInterface.js';
      
import { UserConfigurationInterfaceFactory } from '../../../../../org/allbinary/business/user/modules/configuration/UserConfigurationInterfaceFactory.js';
      
import { Password } from '../../../../../org/allbinary/business/user/password/Password.js';
      
import { UserRole } from '../../../../../org/allbinary/business/user/role/UserRole.js';
      
import { UserRoleB } from '../../../../../org/allbinary/business/user/role/UserRoleB.js';
      
import { UserRoleData } from '../../../../../org/allbinary/business/user/role/UserRoleData.js';
      
import { UserName } from '../../../../../org/allbinary/business/user/username/UserName.js';
      
import { RequestParams } from '../../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
      
import { WeblisketSessionData } from '../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionData.js';
      
import { WeblisketSessionInterface } from '../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionInterface.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      
import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      
import { Document } from '../../../../../org/w3c/dom/Document.js';
      
import { Node } from '../../../../../org/w3c/dom/Node.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class User
            extends Object
         implements UserInterface {
        

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
        this.userConfigurationInterface= UserConfigurationInterfaceFactory.getInstance();
    
this.password= new Password(StringUtil.getInstance()!.EMPTY_STRING);
    
}

public constructor (request: HttpServletRequest){

            super();
        this.getFormData(new RequestParams(request).
                            toHashMap());
    
this.userConfigurationInterface= UserConfigurationInterfaceFactory.getInstance(this.getRole());
    
}

public constructor (userHashMap: HashMap<any, any>){

            super();
        this.getFormData(userHashMap);
    
this.userConfigurationInterface= UserConfigurationInterfaceFactory.getInstance(this.getRole());
    
}


                //@Throws(Exception.constructor)
            
    public getFormData(userHashMap: HashMap<any, any>){
this.userName= new UserName(userHashMap).
                            get();
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;
;
    

    var passwordString: string = stringUtil!.getNonNull(userHashMap!.get(UserData.PASSWORD) as string)!;
;
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
;
    

                        if(stringValidationUtil!.isEmpty(this.userName) && stringValidationUtil!.isEmpty(passwordString))
                        
                                    {
                                    this.userName= stringUtil!.getNonNull(userHashMap!.get(WeblisketSessionData.REMOVABLEUSERNAME) as string);
    
passwordString= stringUtil!.getNonNull(userHashMap!.get(WeblisketSessionData.REMOVABLEPASSWORD) as string);
    

                                    }
                                

    var encryption: string = stringUtil!.getNonNull(userHashMap!.get(EntryData.getInstance()!.ENCRYPTION) as string)!;
;
    

    var secret: string = stringUtil!.getNonNull(userHashMap!.get(UserData.SECRET) as string)!;
;
    
this.password= new Password(passwordString);
    
this.prefixName= stringUtil!.getNonNull(userHashMap!.get(UserData.PREFIXNAME) as string);
    
this.firstName= stringUtil!.getNonNull(userHashMap!.get(UserData.FIRSTNAME) as string);
    
this.lastName= stringUtil!.getNonNull(userHashMap!.get(UserData.LASTNAME) as string);
    
this.middleName= stringUtil!.getNonNull(userHashMap!.get(UserData.MIDDLENAME) as string);
    
this.suffixName= stringUtil!.getNonNull(userHashMap!.get(UserData.SUFFIXNAME) as string);
    
this.company= stringUtil!.getNonNull(userHashMap!.get(UserData.COMPANY) as string);
    
this.positionAtCompany= stringUtil!.getNonNull(userHashMap!.get(UserData.POSITIONATCOMPANY) as string);
    
this.mainEmail= stringUtil!.getNonNull(userHashMap!.get(UserData.MAINEMAIL) as string);
    
this.secondaryEmail= stringUtil!.getNonNull(userHashMap!.get(UserData.SECONDARYEMAIL) as string);
    
this.homePhone= stringUtil!.getNonNull(userHashMap!.get(UserData.HOMEPHONE) as string);
    
this.cellPhone= stringUtil!.getNonNull(userHashMap!.get(UserData.CELLPHONE) as string);
    
this.workPhone= stringUtil!.getNonNull(userHashMap!.get(UserData.WORKPHONE) as string);
    
this.otherContact= stringUtil!.getNonNull(userHashMap!.get(UserData.OTHERCONTACT) as string);
    
this.electronicDevice= stringUtil!.getNonNull(userHashMap!.get(UserData.ELECTRONICDEVICE) as string);
    
this.fax= stringUtil!.getNonNull(userHashMap!.get(UserData.FAX) as string);
    
this.role= UserRoleB.getRole(userHashMap!.get(UserRoleData.NAME.toString()) as string);
    
this.permissions= stringUtil!.getNonNull(userHashMap!.get(UserData.PERMISSIONS) as string);
    

                        if(!stringValidationUtil!.isEmpty(this.permissions) && this.permissions.compareTo(StoreFrontData.getInstance()!.NAME) == 0)
                        this.permissions= stringUtil!.getNonNull(userHashMap!.get(StoreFrontData.getInstance()!.NAME) as string)
                             else 
                        if(this.permissions == 
                                    null
                                )
                        
                                    {
                                    this.permissions= "No Permissions";
    

                                    }
                                
this.enable= stringUtil!.getNonNull(userHashMap!.get(EntryData.getInstance()!.ENABLE) as string);
    
}


    public isValid(): Boolean{

        try {
            
    var valid: Boolean = Boolean.TRUE;
;
    

                        if(!UserName.getInstance()!.isValid(this.userName).valueOf())
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!this.password.isValid().valueOf())
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
;
    

                        if(!stringValidationUtil!.isValidRequired(this.firstName, 1, UserData.MAXLEN))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.lastName, 1, UserData.MAXLEN))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.mainEmail, 1, UserData.MAXLEN) || this.mainEmail!.indexOf("@") ==  -1)
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VALIDATIONERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    
this.logUtil!.put("Failed to validate form", this, commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
;
    

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append(UserName.getValidationInfo(this.userName));
    
stringBuffer!.append(this.password.getValidationInfo());
    

                        if(!stringValidationUtil!.isValidRequired(this.firstName, 1, UserData.MAXLEN))
                        
                                    {
                                    stringBuffer!.append("Please enter a valid First Name.<br />");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.lastName, 1, UserData.MAXLEN))
                        
                                    {
                                    stringBuffer!.append("Please enter a valid Last Name.<br />");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.mainEmail, 1, UserData.MAXLEN) || this.mainEmail!.indexOf("@") ==  -1)
                        
                                    {
                                    stringBuffer!.append("Please enter a valid email address.<br />");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    
}

}


    public setUserName(value: string){
this.userName= value;
    
}


    public setPrefixName(value: string){
this.prefixName= value;
    
}


    public setFirstName(value: string){
this.firstName= value;
    
}


    public setLastName(value: string){
this.lastName= value;
    
}


    public setMiddleName(value: string){
this.middleName= value;
    
}


    public setSuffixName(value: string){
this.suffixName= value;
    
}


    public setCompany(value: string){
this.company= value;
    
}


    public setPositionAtCompany(value: string){
this.positionAtCompany= value;
    
}


    public setMainEmail(value: string){
this.mainEmail= value;
    
}


    public setSecondaryEmail(value: string){
this.secondaryEmail= value;
    
}


    public setHomePhone(value: string){
this.homePhone= value;
    
}


    public setCellPhone(value: string){
this.cellPhone= value;
    
}


    public setWorkPhone(value: string){
this.workPhone= value;
    
}


    public setOtherContact(value: string){
this.otherContact= value;
    
}


    public setElectronicContact(value: string){
this.electronicDevice= value;
    
}


    public setFax(value: string){
this.fax= value;
    
}


    public setRole(role: UserRole){
this.role= role;
    
}


    public setPermissions(value: string){
this.permissions= value;
    
}


    public setEncryption(value: string){
this.encryption= value;
    
}


    public setSecret(value: string){
this.secret= value;
    
}


    public setPassword(value: string){
this.password.set(value);
    
}


    public enable(){
this.setEnable("Yes");
    
}


    public disable(){
this.setEnable("No");
    
}


    public setEnable(enable: string){
this.enable= enable;
    
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
                        return this.password.get();;
    
}


                //@Throws(Exception.constructor)
            
    public toVector(): Vector{

    var values: Vector = new Vector();
;
    
values.add(this.userName);
    
values.add(this.prefixName);
    
values.add(this.firstName);
    
values.add(this.lastName);
    
values.add(this.middleName);
    
values.add(this.suffixName);
    
values.add(this.company);
    
values.add(this.positionAtCompany);
    
values.add(this.mainEmail);
    
values.add(this.secondaryEmail);
    
values.add(this.homePhone);
    
values.add(this.cellPhone);
    
values.add(this.workPhone);
    
values.add(this.otherContact);
    
values.add(this.electronicDevice);
    
values.add(this.fax);
    
values.add(this.getRole()!.toString());
    

    var userConfigurationDomDocumentMapping: UserConfigurationDomDocumentMapping = new UserConfigurationDomDocumentMapping(this.getUserConfigurationInterface());
;
    
values.add(userConfigurationDomDocumentMapping!.toDomDocumentString());
    
values.add(this.permissions);
    
values.addAll(this.password.toVector(this.secret));
    
values.add(this.enable);
    

    var calendar: Calendar = Calendar.getInstance()!;
;
    

    var time: string = new Long(calendar.getTimeInMillis()).
                            toString();
;
    
values.add(time);
    
values.add(time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{

    var values: HashMap<any, any> = new HashMap<any, any>();
;
    
values.put(UserData.USERNAME, userName);
    
values.put(UserData.PREFIXNAME, prefixName);
    
values.put(UserData.FIRSTNAME, firstName);
    
values.put(UserData.LASTNAME, lastName);
    
values.put(UserData.MIDDLENAME, middleName);
    
values.put(UserData.SUFFIXNAME, suffixName);
    
values.put(UserData.COMPANY, company);
    
values.put(UserData.POSITIONATCOMPANY, positionAtCompany);
    
values.put(UserData.MAINEMAIL, mainEmail);
    
values.put(UserData.SECONDARYEMAIL, secondaryEmail);
    
values.put(UserData.HOMEPHONE, homePhone);
    
values.put(UserData.CELLPHONE, cellPhone);
    
values.put(UserData.WORKPHONE, workPhone);
    
values.put(UserData.OTHERCONTACT, otherContact);
    
values.put(UserData.ELECTRONICDEVICE, electronicDevice);
    
values.put(UserData.FAX, fax);
    

                        if(this.getRole() != 
                                    null
                                )
                        
                                    {
                                    values.put(UserRoleData.NAME.toString(), this.getRole()!.toString());
    

                                    }
                                

    var userConfigurationDomDocumentMapping: UserConfigurationDomDocumentMapping = new UserConfigurationDomDocumentMapping(this.getUserConfigurationInterface());
;
    
values.put(UserData.CONFIGURATION, userConfigurationDomDocumentMapping!.toDomDocumentString());
    
values.put(UserData.PERMISSIONS, this.permissions);
    
values.putAll(this.password.toHashMap(this.secret));
    
values.put(EntryData.getInstance()!.ENABLE, this.enable);
    

    var calendar: Calendar = Calendar.getInstance()!;
;
    

    var time: string = new Long(calendar.getTimeInMillis()).
                            toString();
;
    
values.put(EntryData.getInstance()!.LASTMODIFIED, time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


    public toPasswordHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.password.toHashMap(this.secret);;
    
}


    public validateSession(weblisketSession: WeblisketSessionInterface){
weblisketSession!.setAuthenticated();
    
weblisketSession!.setRole(this.getRole());
    
weblisketSession!.setUserName(this.getUserName());
    
}


    public updateSession(weblisketSession: WeblisketSessionInterface){
}


    public isSessionValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


                //@Throws(Exception.constructor)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userName as Object;
    
}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getUserConfigurationInterface(): UserConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userConfigurationInterface;
    
}


    public setUserConfigurationInterface(userConfigurationInterface: UserConfigurationInterface){
this.userConfigurationInterface= userConfigurationInterface;
    
}


}
                
            

