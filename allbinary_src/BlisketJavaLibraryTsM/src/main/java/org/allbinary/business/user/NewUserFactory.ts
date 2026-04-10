
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
        



import { HashMap } from "../../../../java/util/HashMap.js";

    
import { HttpServletRequest } from "../../../../javax/servlet/http/HttpServletRequest.js";

    
import { User } from "../../../../org/allbinary/business/user/modules/User.js";

    
import { UserRoleData } from "../../../../org/allbinary/business/user/role/UserRoleData.js";

    
import { RequestParams } from "../../../../org/allbinary/logic/communication/http/request/RequestParams.js";

    
import { TransformInfoHttpInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    

export class NewUserFactory
            extends Object
         {
        

                @Throws(Exception::class)
            
    public static getInstance(): UserInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return User();
    
}


                @Throws(Exception::class)
            
    public static getInstance(transformInfoInterface: TransformInfoInterface): UserInterface{
var transformInfoInterface = transformInfoInterface

    var httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;
        
        


    var httpServletRequest: HttpServletRequest = httpTransformInfoInterface!.getPageContext()!.getRequest() as HttpServletRequest;
        
        


    var hashMap: HashMap<Any, Any> = RequestParams(httpServletRequest).
                            toHashMap()!;
        
        


    var role: string = httpTransformInfoInterface!.getPropertiesHashMap()!.get(UserRoleData.NAME.toString()) as String;
        
        

put(UserRoleData.NAME.toString(), role)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CreateUserFactory.getInstance(hashMap);
    
}


                @Throws(Exception::class)
            
    public static getInstance(httpServletRequest: HttpServletRequest, propertiesHashMap: HashMap<Any, Any>): UserInterface{
var httpServletRequest = httpServletRequest
var propertiesHashMap = propertiesHashMap

    
                        if(propertiesHashMap != 
                                    null
                                )
                        
                                    {
                                    
    var requestHashMap: HashMap<Any, Any> = RequestParams(httpServletRequest).
                            toHashMap()!;
        
        


    var roleString: string = propertiesHashMap!.get(UserRoleData.NAME.toString()) as String;
        
        

put(UserRoleData.NAME.toString(), roleString)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CreateUserFactory.getInstance(requestHashMap);
    

                                    }
                                
                        else {
                            


                            throw Exception("Null HashMap")

                        }
                            
}

private constructor (){

            super();
            }


}
                
            

