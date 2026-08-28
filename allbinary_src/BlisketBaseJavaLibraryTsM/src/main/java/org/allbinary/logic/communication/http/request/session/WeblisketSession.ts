
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
        
//not game specific package import { HashMap } from '../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { HttpServletRequest } from '../../../../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { HttpSession } from '../../../../../../../javax/servlet/http/HttpSession.js';
      const HttpSession = globalThis.javax.servlet.http.HttpSession;

      
//not game specific package import { PageContext } from '../../../../../../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { StoreFrontData } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { StoreFrontFactory } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { UserData } from '../../../../../../../org/allbinary/business/user/UserData.js';
      const UserData = globalThis.org.allbinary.business.user.UserData;

      
//not game specific package import { Basket } from '../../../../../../../org/allbinary/business/user/commerce/inventory/basket/Basket.js';
      const Basket = globalThis.org.allbinary.business.user.commerce.inventory.basket.Basket;

      
//not game specific package import { Order } from '../../../../../../../org/allbinary/business/user/commerce/inventory/order/Order.js';
      const Order = globalThis.org.allbinary.business.user.commerce.inventory.order.Order;

      
//not game specific package import { OrderInterface } from '../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js';
      const OrderInterface = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderInterface;

      
//not game specific package import { PaymentGatewayData } from '../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js';
      const PaymentGatewayData = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayData;

      
//not game specific package import { UserRole } from '../../../../../../../org/allbinary/business/user/role/UserRole.js';
      const UserRole = globalThis.org.allbinary.business.user.role.UserRole;

      
//not game specific package import { UserRoleB } from '../../../../../../../org/allbinary/business/user/role/UserRoleB.js';
      const UserRoleB = globalThis.org.allbinary.business.user.role.UserRoleB;

      
//not game specific package import { UserRoleData } from '../../../../../../../org/allbinary/business/user/role/UserRoleData.js';
      const UserRoleData = globalThis.org.allbinary.business.user.role.UserRoleData;

      
//not game specific package import { BooleanFactory } from '../../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
//not game specific package import { StringValidationUtil } from '../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WeblisketSessionInterface } from './WeblisketSessionInterface.js';
import { WeblisketSessionData } from './WeblisketSessionData.js';

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



