
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

    
import { HttpServletRequest } from "../../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { HttpSession } from "../../../../../../../javax/servlet/http/HttpSession.js";

    
import { PageContext } from "../../../../../../../javax/servlet/jsp/PageContext.js";

    
import { StoreFrontData } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontFactory } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { UserData } from "../../../../../../../org/allbinary/business/user/UserData.js";

    
import { Basket } from "../../../../../../../org/allbinary/business/user/commerce/inventory/basket/Basket.js";

    
import { Order } from "../../../../../../../org/allbinary/business/user/commerce/inventory/order/Order.js";

    
import { OrderInterface } from "../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js";

    
import { PaymentGatewayData } from "../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js";

    
import { UserRole } from "../../../../../../../org/allbinary/business/user/role/UserRole.js";

    
import { UserRoleB } from "../../../../../../../org/allbinary/business/user/role/UserRoleB.js";

    
import { UserRoleData } from "../../../../../../../org/allbinary/business/user/role/UserRoleData.js";

    
import { BooleanFactory } from "../../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { StringValidationUtil } from "../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    

export class WeblisketSession
            extends Object
        
                , WeblisketSessionInterface {
        

    private session: HttpSession
public constructor (hashMap: HashMap<Any, Any>, pageContext: PageContext)                        

                            : this(hashMap, pageContext!.getRequest() as HttpServletRequest){

            super();
            var hashMap = hashMap
var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (hashMap: HashMap<Any, Any>, httpServletRequest: HttpServletRequest){

            super();
            var hashMap = hashMap
var httpServletRequest = httpServletRequest

    var propertiesHashMap: HashMap<Any, Any> = hashMap;
        
        


    var request: HttpServletRequest = httpServletRequest;
        
        

this.session= request.getSession(true)

                        if(this.getStoreName() == 
                                    null
                                )
                        
                                    {
                                    this.setStoreName(propertiesHashMap!.get(StoreFrontData.getInstance()!.NAME) as String)

                                    }
                                
}


    public getId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.session.getId();
    
}


    public setPassword(password: string){
var password = password
session.setAttribute(UserData.PASSWORD, password)
}


    public setUserName(userName: string){
var userName = userName
session.setAttribute(UserData.USERNAME, userName)
}


    public setPaymentMethod(value: string){
var value = value
session.setAttribute(PaymentGatewayData.NAME.toString(), value)
}


    public setAuthenticated(){
session.setAttribute(WeblisketSessionData.AUTHENTICATED, BooleanFactory.getInstance()!.TRUE_STRING)
}


    public setRole(aRole: UserRole){
var aRole = aRole
session.setAttribute(UserRoleData.NAME.toString(), aRole)
}


    public setAttempts(value: Integer){
var value = value
session.setAttribute(WeblisketSessionData.ATTEMPTS, value)
}


    public setTimeout(value: string){
var value = value
this.session.setAttribute(WeblisketSessionData.TIMEOUT, value)
}


    public setStoreName(value: string){
var value = value
this.session.setAttribute(StoreFrontData.getInstance()!.NAME, value)
}


    public getWebAppPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.session.getAttribute(org.allbinary.globals.GLOBALS2.WEBAPPPATH) as String;
    
}


    public getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(UserData.USERNAME) as String;
    
}


    public getPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(UserData.PASSWORD) as String;
    
}


    public getPaymentMethod(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(PaymentGatewayData.NAME.toString()) as String;
    
}


    public getAuthentication(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(WeblisketSessionData.AUTHENTICATED) as String;
    
}


    public getAttempts(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(WeblisketSessionData.ATTEMPTS) as Integer;
    
}


    public getTimeout(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(WeblisketSessionData.TIMEOUT) as String;
    
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getAttribute(StoreFrontData.getInstance()!.NAME) as String;
    
}


                //@Throws(Error::class)
            
    public getRole(): UserRole{

    var userRole: UserRole = session.getAttribute(UserRoleData.NAME.toString()) as UserRole;
        
        


                        if(userRole != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UserRoleB.getRole(userRole!.getBasicUserRole()!.getRole());
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


                //@Throws(Error::class)
            
    public getOrder(): OrderInterface{

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getStoreName())!;
        
        


    var basketName: string = storeFrontInterface!.getBasketName()!;
        
        


                        if(!StringValidationUtil.getInstance()!.isEmpty(basketName))
                        
                                    {
                                    
    var orderInterface: OrderInterface = session.getAttribute(basketName) as OrderInterface;
        
        


                        if(orderInterface == 
                                    null
                                )
                        
                                    {
                                    orderInterface= Order(Basket()) as OrderInterface

                                    }
                                
session.setAttribute(basketName, orderInterface)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderInterface;
    

                                    }
                                
                        else {
                            


                            throw Error("Basket Name Not Found")

                        }
                            
}


    public setAuthenticated(value: boolean){
var value = value
session.setAttribute(WeblisketSessionData.AUTHENTICATED, BooleanFactory.getInstance()!.FALSE_STRING)
}


    public clear(){
this.session.removeAttribute(WeblisketSessionData.AUTHENTICATED)
this.session.removeAttribute(WeblisketSessionData.TIMEOUT)
this.session.removeAttribute(UserRoleData.NAME.toString())
this.session.removeAttribute(UserData.USERNAME)
}


    public getCreationTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getCreationTime();
    
}


    public getLastAccessedTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return session.getLastAccessedTime();
    
}


    public removeBasket(){

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getStoreName())!;
        
        


    var basketName: string = storeFrontInterface!.getBasketName()!;
        
        


                        if(!StringValidationUtil.getInstance()!.isEmpty(basketName))
                        
                                    {
                                    session.removeAttribute(basketName)

                                    }
                                
}


}
                
            

