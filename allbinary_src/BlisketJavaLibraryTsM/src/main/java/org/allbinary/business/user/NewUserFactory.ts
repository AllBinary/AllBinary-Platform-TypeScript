
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
        

                //@Throws(Error::class)
            
    public static getInstance(): UserInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new User();
    
}


                //@Throws(Error::class)
            
    public static getInstance(transformInfoInterface: TransformInfoInterface): UserInterface{
var transformInfoInterface = transformInfoInterface

    var httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;
        
        
;
    

    var httpServletRequest: HttpServletRequest = httpTransformInfoInterface!.getPageContext()!.getRequest();

                         as HttpServletRequest;
        
        
;
    

    var hashMap: HashMap<any, any> = new RequestParams(httpServletRequest).
                            toHashMap()!;
        
        
;
    

    var role: string = httpTransformInfoInterface!.getPropertiesHashMap()!.get(UserRoleData.NAME.toString());

                         as String;
        
        
;
    
hashMap!.put(UserRoleData.NAME.toString(), role);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CreateUserFactory.getInstance(hashMap);

                        ;
    
}


                //@Throws(Error::class)
            
    public static getInstance(httpServletRequest: HttpServletRequest, propertiesHashMap: HashMap<any, any>): UserInterface{
var httpServletRequest = httpServletRequest
var propertiesHashMap = propertiesHashMap

                        if(propertiesHashMap != 
                                    null
                                )
                        
                                    {
                                    
    var requestHashMap: HashMap<any, any> = new RequestParams(httpServletRequest).
                            toHashMap()!;
        
        
;
    

    var roleString: string = propertiesHashMap!.get(UserRoleData.NAME.toString());

                         as String;
        
        
;
    
requestHashMap!.put(UserRoleData.NAME.toString(), roleString);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CreateUserFactory.getInstance(requestHashMap);

                        ;
    

                                    }
                                
                        else {
                            


                            throw new Error("Null HashMap")

                        }
                            
}

private constructor (){

            super();
            }


}
                
            

