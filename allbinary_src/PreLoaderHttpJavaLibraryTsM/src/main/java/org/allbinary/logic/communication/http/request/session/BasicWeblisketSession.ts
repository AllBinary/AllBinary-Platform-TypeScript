
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
        



            import { Integer } from "../../../../../../../java/lang/Integer.js";
        
import { HttpServletRequest } from "../../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { HttpSession } from "../../../../../../../javax/servlet/http/HttpSession.js";

    
import { PageContext } from "../../../../../../../javax/servlet/jsp/PageContext.js";

    
import { StoreFrontData } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { UserData } from "../../../../../../../org/allbinary/business/user/UserData.js";

    
import { PaymentGatewayData } from "../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js";

    
import { BasicUserRole } from "../../../../../../../org/allbinary/business/user/role/BasicUserRole.js";

    
import { BasicUserRoleData } from "../../../../../../../org/allbinary/business/user/role/BasicUserRoleData.js";

    
import { BooleanFactory } from "../../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { WeblisketSessionData } from "./WeblisketSessionData.js";

export class BasicWeblisketSession
            extends Object
         {
        

    private session: HttpSession

    private pageContext: PageContext
public constructor (pageContext: PageContext){

            super();
        var pageContext = pageContext
this.pageContext= pageContext;
    

    var request: HttpServletRequest =  as HttpServletRequestpageContext!.getRequest();;
;
    
this.session= request.getSession(true);
    
}


    public setRole(aRole: BasicUserRole){
var aRole = aRole
this.session.setAttribute(BasicUserRoleData.NAME.toString(), aRole);
    
}


    public getRole(): BasicUserRole{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  as BasicUserRolethis.session.getAttribute(BasicUserRoleData.NAME.toString());;
    
}


    public setPassword(password: string){
var password = password
this.session.setAttribute(UserData.PASSWORD, password);
    
}


    public setUserName(userName: string){
var userName = userName
this.session.setAttribute(UserData.USERNAME, userName);
    
}


    public setPaymentMethod(value: string){
var value = value
this.session.setAttribute(PaymentGatewayData.NAME.toString(), value);
    
}


    public setAuthenticated(){
this.session.setAttribute(WeblisketSessionData.AUTHENTICATED, BooleanFactory.getInstance()!.TRUE_STRING);
    
}


    public setAttempts(value: number){
var value = value
this.session.setAttribute(WeblisketSessionData.ATTEMPTS, value);
    
}


    public setTimeout(value: string){
var value = value
this.session.setAttribute(WeblisketSessionData.TIMEOUT, value);
    
}


    public setStoreName(value: string){
var value = value
this.session.setAttribute(StoreFrontData.getInstance()!.NAME, value);
    
}


    public getWebAppPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  as Stringthis.session.getAttribute(org.allbinary.globals.GLOBALS2.WEBAPPPATH);;
    
}


    public getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  as Stringthis.session.getAttribute(UserData.USERNAME);;
    
}


    public getPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  as Stringthis.session.getAttribute(UserData.PASSWORD);;
    
}


    public getPaymentMethod(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  as Stringthis.session.getAttribute(PaymentGatewayData.NAME.toString());;
    
}


    public getAuthentication(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  as Stringthis.session.getAttribute(WeblisketSessionData.AUTHENTICATED);;
    
}


    public getAttempts(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  as Integerthis.session.getAttribute(WeblisketSessionData.ATTEMPTS);;
    
}


    public getTimeout(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  as Stringthis.session.getAttribute(WeblisketSessionData.TIMEOUT);;
    
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  as Stringthis.session.getAttribute(StoreFrontData.getInstance()!.NAME);;
    
}


    public setAuthenticated(value: boolean){
var value = value
this.session.setAttribute(WeblisketSessionData.AUTHENTICATED, BooleanFactory.getInstance()!.FALSE_STRING);
    
}


    public clear(){
this.session.removeAttribute(WeblisketSessionData.AUTHENTICATED);
    
this.session.removeAttribute(WeblisketSessionData.TIMEOUT);
    
this.session.removeAttribute(BasicUserRoleData.NAME.toString());
    
this.session.removeAttribute(UserData.USERNAME);
    
}


    public getCreationTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getCreationTime();;
    
}


    public getLastAccessedTime(): number{

    var lastAccessedTime: number = this.session.getLastAccessedTime()!;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lastAccessedTime;
    
}


}
                
            

