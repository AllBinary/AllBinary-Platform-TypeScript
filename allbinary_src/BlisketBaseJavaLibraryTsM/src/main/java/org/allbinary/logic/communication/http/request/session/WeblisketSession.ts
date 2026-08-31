
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
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { HttpServletRequest } from '../../../../../../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { HttpSession } from '../../../../../../../javax/servlet/http/HttpSession.js';
      //not GWT import const HttpSession = globalThis.javax.servlet.http.HttpSession;

      
import { PageContext } from '../../../../../../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { StoreFrontData } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { StoreFrontFactory } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      //not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { UserData } from '../../../../../../../org/allbinary/business/user/UserData.js';
      //not GWT import const UserData = globalThis.org.allbinary.business.user.UserData;

      
import { Basket } from '../../../../../../../org/allbinary/business/user/commerce/inventory/basket/Basket.js';
      //not GWT import const Basket = globalThis.org.allbinary.business.user.commerce.inventory.basket.Basket;

      
import { Order } from '../../../../../../../org/allbinary/business/user/commerce/inventory/order/Order.js';
      //not GWT import const Order = globalThis.org.allbinary.business.user.commerce.inventory.order.Order;

      
import { OrderInterface } from '../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js';
      //not GWT import const OrderInterface = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderInterface;

      
import { PaymentGatewayData } from '../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js';
      //not GWT import const PaymentGatewayData = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayData;

      
import { UserRole } from '../../../../../../../org/allbinary/business/user/role/UserRole.js';
      //not GWT import const UserRole = globalThis.org.allbinary.business.user.role.UserRole;

      
import { UserRoleB } from '../../../../../../../org/allbinary/business/user/role/UserRoleB.js';
      //not GWT import const UserRoleB = globalThis.org.allbinary.business.user.role.UserRoleB;

      
import { UserRoleData } from '../../../../../../../org/allbinary/business/user/role/UserRoleData.js';
      //not GWT import const UserRoleData = globalThis.org.allbinary.business.user.role.UserRoleData;

      
import { BooleanFactory } from '../../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      //not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
import { StringValidationUtil } from '../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WeblisketSessionInterface } from './WeblisketSessionInterface.js';
//not GWT import const  = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSessionInterface;

                import { WeblisketSessionData } from './WeblisketSessionData.js';
//not GWT import const  = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSessionData;

                
export class WeblisketSession
            extends Object
         implements WeblisketSessionInterface {
        

    private session: HttpSession;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){
            this(hashMap, pageContext!.getRequest() as HttpServletRequest);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (hashMap: HashMap<any, any>, httpServletRequest: HttpServletRequest){

            super();
        
    var propertiesHashMap: HashMap<any, any> = hashMap;;
    

    var request: HttpServletRequest = httpServletRequest;;
    
this.session= request.getSession(true);
    

                        if(this.getStoreName() == 
                                    null
                                )
                        
                                    {
                                    this.setStoreName(propertiesHashMap!.get(StoreFrontData.getInstance()!.NAME) as string);
    

                                    }
                                
}


    public getId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.session.getId();;
    
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


    public setRole(aRole: UserRole){
this.session.setAttribute(UserRoleData.NAME.toString(), aRole);
    
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


                //@Throws(Exception.constructor)
            
    public getRole(): UserRole{

    var userRole: UserRole = this.session.getAttribute(UserRoleData.NAME.toString()) as UserRole;;
    

                        if(userRole != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UserRoleB.getRole(userRole!.getBasicUserRole()!.getRole());;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public getOrder(): OrderInterface{

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getStoreName())!;;
    

    var basketName: string = storeFrontInterface!.getBasketName()!;;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(basketName))
                        
                                    {
                                    
    var orderInterface: OrderInterface = this.session.getAttribute(basketName) as OrderInterface;;
    

                        if(orderInterface == 
                                    null
                                )
                        
                                    {
                                    orderInterface= new Order(new Basket()) as OrderInterface;
    

                                    }
                                
this.session.setAttribute(basketName, orderInterface);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderInterface;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Basket Name Not Found");
                    

                        }
                            
}


    public setAuthenticated(value: boolean){
this.session.setAttribute(WeblisketSessionData.AUTHENTICATED, BooleanFactory.getInstance()!.FALSE_STRING);
    
}


    public clear(){
this.session.removeAttribute(WeblisketSessionData.AUTHENTICATED);
    
this.session.removeAttribute(WeblisketSessionData.TIMEOUT);
    
this.session.removeAttribute(UserRoleData.NAME.toString());
    
this.session.removeAttribute(UserData.USERNAME);
    
}


    public getCreationTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.session.getCreationTime();;
    
}


    public getLastAccessedTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.session.getLastAccessedTime();;
    
}


    public removeBasket(){

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getStoreName())!;;
    

    var basketName: string = storeFrontInterface!.getBasketName()!;;
    

                        if(!StringValidationUtil.getInstance()!.isEmpty(basketName))
                        
                                    {
                                    this.session.removeAttribute(basketName);
    

                                    }
                                
}


}



