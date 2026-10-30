
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
//not GWT import const HashMap

import { HttpServletRequest } from '../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { User } from '../../../../org/allbinary/business/user/modules/User.js';
//not GWT import const User

import { UserRoleData } from '../../../../org/allbinary/business/user/role/UserRoleData.js';
//not GWT import const UserRoleData

import { RequestParams } from '../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
//not GWT import const RequestParams

import { TransformInfoHttpInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
//not GWT import const TransformInfoHttpInterface

import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserInterface } from './UserInterface.js';
//not GWT import - same folder const UserInterface
import { CreateUserFactory } from './CreateUserFactory.js';
//not GWT import - same folder const CreateUserFactory

export class NewUserFactory
            extends Object
         {
        
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
    if (args.length === 2) return this.getInstance$overload3(args[0], args[1]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
                //@Throws(Exception.constructor)
            
    public static getInstance$overload1(): UserInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new User();
    
}


                //@Throws(Exception.constructor)
            
    public static getInstance$overload2(transformInfoInterface: TransformInfoInterface): UserInterface{

    let httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;;
    

    let httpServletRequest: HttpServletRequest = httpTransformInfoInterface!.getPageContext()!.getRequest() as HttpServletRequest;;
    

    let hashMap: HashMap<any, any> = new RequestParams(httpServletRequest).toHashMap()!;;
    

    let role: string = httpTransformInfoInterface!.getPropertiesHashMap()!.get(UserRoleData.NAME.toString()) as string;;
    
hashMap!.put(UserRoleData.NAME.toString(), role);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CreateUserFactory.getInstance(hashMap);;
    
}


                //@Throws(Exception.constructor)
            
    public static getInstance$overload3(httpServletRequest: HttpServletRequest, propertiesHashMap: HashMap<any, any>): UserInterface{

                        if(propertiesHashMap != 
                                    null
                                )
                        
                                    {
                                    
    let requestHashMap: HashMap<any, any> = new RequestParams(httpServletRequest).toHashMap()!;;
    

    let roleString: string = propertiesHashMap!.get(UserRoleData.NAME.toString()) as string;;
    
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

