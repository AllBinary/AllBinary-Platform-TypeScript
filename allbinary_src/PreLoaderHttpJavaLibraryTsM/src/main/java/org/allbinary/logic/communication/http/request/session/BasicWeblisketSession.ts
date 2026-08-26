
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
//not game specific package import { HttpServletRequest } from '../../../../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { HttpSession } from '../../../../../../../javax/servlet/http/HttpSession.js';
      const HttpSession = globalThis.javax.servlet.http.HttpSession;

      
//not game specific package import { PageContext } from '../../../../../../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { StoreFrontData } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { UserData } from '../../../../../../../org/allbinary/business/user/UserData.js';
      const UserData = globalThis.org.allbinary.business.user.UserData;

      
//not game specific package import { PaymentGatewayData } from '../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js';
      const PaymentGatewayData = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayData;

      
//not game specific package import { BasicUserRole } from '../../../../../../../org/allbinary/business/user/role/BasicUserRole.js';
      const BasicUserRole = globalThis.org.allbinary.business.user.role.BasicUserRole;

      
//not game specific package import { BasicUserRoleData } from '../../../../../../../org/allbinary/business/user/role/BasicUserRoleData.js';
      const BasicUserRoleData = globalThis.org.allbinary.business.user.role.BasicUserRoleData;

      
//not game specific package import { BooleanFactory } from '../../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WeblisketSessionData } from './WeblisketSessionData.js';

export class BasicWeblisketSession
            extends Object
         {
        

    private session: HttpSession;

    private pageContext: PageContext;

public constructor (pageContext: PageContext){

            super();
        this.pageContext= pageContext;
    

    var request: HttpServletRequest = pageContext!.getRequest() as HttpServletRequest;;
    
this.session= request.getSession(true);
    
}


    public setRole(aRole: BasicUserRole){
this.session.setAttribute(BasicUserRoleData.NAME.toString(), aRole);
    
}


    public getRole(): BasicUserRole{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.session.getAttribute(BasicUserRoleData.NAME.toString()) as BasicUserRole;
    
}


    public setPassword(password: string){
this.session.setAttribute(UserData.PASSWORD, password);
    
}


    public setUserName(userName: string){
this.session.setAttribute(UserData.USERNAME, userName);
    
}


    public setPaymentMethod(value: string){
this.session.setAttribute(PaymentGatewayData.NAME.toString(), value);
    
}


    public setAuthenticated(){
this.session.setAttribute(WeblisketSessionData.AUTHENTICATED, BooleanFactory.getInstance()!.TRUE_STRING);
    
}


    public setAttempts(value: Integer){
this.session.setAttribute(WeblisketSessionData.ATTEMPTS, value);
    
}


    public setTimeout(value: string){
this.session.setAttribute(WeblisketSessionData.TIMEOUT, value);
    
}


    public setStoreName(value: string){
this.session.setAttribute(StoreFrontData.getInstance()!.NAME, value);
    
}


    public getWebAppPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.session.getAttribute(org.allbinary.globals.GLOBALS2.WEBAPPPATH) as string;
    
}


    public getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.session.getAttribute(UserData.USERNAME) as string;
    
}


    public getPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.session.getAttribute(UserData.PASSWORD) as string;
    
}


    public getPaymentMethod(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.session.getAttribute(PaymentGatewayData.NAME.toString()) as string;
    
}


    public getAuthentication(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.session.getAttribute(WeblisketSessionData.AUTHENTICATED) as string;
    
}


    public getAttempts(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.session.getAttribute(WeblisketSessionData.ATTEMPTS) as Integer;
    
}


    public getTimeout(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.session.getAttribute(WeblisketSessionData.TIMEOUT) as string;
    
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.session.getAttribute(StoreFrontData.getInstance()!.NAME) as string;
    
}


    public setAuthenticated(value: boolean){
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
                        return this.session.getCreationTime();;
    
}


    public getLastAccessedTime(): number{

    var lastAccessedTime: number = this.session.getLastAccessedTime()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lastAccessedTime;
    
}


}
                
            

