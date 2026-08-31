
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { HttpServletRequest } from '../../../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { User } from '../../../../org/allbinary/business/user/modules/User.js';
      //not GWT import const User = globalThis.org.allbinary.business.user.modules.User;

      
import { UserRoleData } from '../../../../org/allbinary/business/user/role/UserRoleData.js';
      //not GWT import const UserRoleData = globalThis.org.allbinary.business.user.role.UserRoleData;

      
import { RequestParams } from '../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
      //not GWT import const RequestParams = globalThis.org.allbinary.logic.communication.http.request.RequestParams;

      
import { TransformInfoHttpInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
      //not GWT import const TransformInfoHttpInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpInterface;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserInterface } from './UserInterface.js';
//not GWT import const UserInterface = globalThis.org.allbinary.business.user.UserInterface;

                import { CreateUserFactory } from './CreateUserFactory.js';
//not GWT import const CreateUserFactory = globalThis.org.allbinary.business.user.CreateUserFactory;

                
export class NewUserFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(): UserInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new User();
    
}


                //@Throws(Exception.constructor)
            
    public static getInstance(transformInfoInterface: TransformInfoInterface): UserInterface{

    var httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;;
    

    var httpServletRequest: HttpServletRequest = httpTransformInfoInterface!.getPageContext()!.getRequest() as HttpServletRequest;;
    

    var hashMap: HashMap<any, any> = new RequestParams(httpServletRequest).toHashMap()!;;
    

    var role: string = httpTransformInfoInterface!.getPropertiesHashMap()!.get(UserRoleData.NAME.toString()) as string;;
    
hashMap!.put(UserRoleData.NAME.toString(), role);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CreateUserFactory.getInstance(hashMap);;
    
}


                //@Throws(Exception.constructor)
            
    public static getInstance(httpServletRequest: HttpServletRequest, propertiesHashMap: HashMap<any, any>): UserInterface{

                        if(propertiesHashMap != 
                                    null
                                )
                        
                                    {
                                    
    var requestHashMap: HashMap<any, any> = new RequestParams(httpServletRequest).toHashMap()!;;
    

    var roleString: string = propertiesHashMap!.get(UserRoleData.NAME.toString()) as string;;
    
requestHashMap!.put(UserRoleData.NAME.toString(), roleString);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CreateUserFactory.getInstance(requestHashMap);;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Null HashMap");
                    

                        }
                            
}


private constructor (){

            super();
        }


}



