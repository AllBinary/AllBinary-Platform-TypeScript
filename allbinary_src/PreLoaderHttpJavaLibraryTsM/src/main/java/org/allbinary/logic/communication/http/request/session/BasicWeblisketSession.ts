
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
        



import { HttpServletRequest } from "../../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { HttpSession } from "../../../../../../../javax/servlet/http/HttpSession.js";

    
import { PageContext } from "../../../../../../../javax/servlet/jsp/PageContext.js";

    
import { StoreFrontData } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { UserData } from "../../../../../../../org/allbinary/business/user/UserData.js";

    
import { PaymentGatewayData } from "../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js";

    
import { BasicUserRole } from "../../../../../../../org/allbinary/business/user/role/BasicUserRole.js";

    
import { BasicUserRoleData } from "../../../../../../../org/allbinary/business/user/role/BasicUserRoleData.js";

    
import { BooleanFactory } from "../../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    

export class BasicWeblisketSession
            extends Object
         {
        

    private session: HttpSession

    private pageContext: PageContext
public constructor (pageContext: PageContext){

            super();
            var pageContext = pageContext
this.pageContext= pageContext;
    

    var request: HttpServletRequest = pageContext!.getRequest();

                         as HttpServletRequest;
        
        
;
    
this.session= request.getSession(true);
    
}


    public setRole(aRole: BasicUserRole){
var aRole = aRole
session.setAttribute(BasicUserRoleData.NAME.toString(), aRole);
    
}


    public getRole(): BasicUserRole{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(BasicUserRoleData.NAME.toString());

                         as BasicUserRole;
    
}


    public setPassword(password: string){
var password = password
session.setAttribute(UserData.PASSWORD, password);
    
}


    public setUserName(userName: string){
var userName = userName
session.setAttribute(UserData.USERNAME, userName);
    
}


    public setPaymentMethod(value: string){
var value = value
session.setAttribute(PaymentGatewayData.NAME.toString(), value);
    
}


    public setAuthenticated(){
session.setAttribute(WeblisketSessionData.AUTHENTICATED, BooleanFactory.getInstance()!.TRUE_STRING);
    
}


    public setAttempts(value: Integer){
var value = value
session.setAttribute(WeblisketSessionData.ATTEMPTS, value);
    
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
                        return this.session.getAttribute(org.allbinary.globals.GLOBALS2.WEBAPPPATH);

                         as String;
    
}


    public getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(UserData.USERNAME);

                         as String;
    
}


    public getPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(UserData.PASSWORD);

                         as String;
    
}


    public getPaymentMethod(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(PaymentGatewayData.NAME.toString());

                         as String;
    
}


    public getAuthentication(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(WeblisketSessionData.AUTHENTICATED);

                         as String;
    
}


    public getAttempts(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(WeblisketSessionData.ATTEMPTS);

                         as Integer;
    
}


    public getTimeout(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(WeblisketSessionData.TIMEOUT);

                         as String;
    
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(StoreFrontData.getInstance()!.NAME);

                         as String;
    
}


    public setAuthenticated(value: boolean){
var value = value
session.setAttribute(WeblisketSessionData.AUTHENTICATED, BooleanFactory.getInstance()!.FALSE_STRING);
    
}


    public clear(){
this.session.removeAttribute(WeblisketSessionData.AUTHENTICATED);
    
this.session.removeAttribute(WeblisketSessionData.TIMEOUT);
    
this.session.removeAttribute(BasicUserRoleData.NAME.toString());
    
this.session.removeAttribute(UserData.USERNAME);
    
}


    public getCreationTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getCreationTime();

                        ;
    
}


    public getLastAccessedTime(): number{

    var lastAccessedTime: number = session.getLastAccessedTime()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lastAccessedTime;
    
}


}
                
            

