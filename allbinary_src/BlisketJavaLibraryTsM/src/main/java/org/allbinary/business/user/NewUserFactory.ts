
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
      
import { HttpServletRequest } from '../../../../javax/servlet/http/HttpServletRequest.js';
      
import { User } from '../../../../org/allbinary/business/user/modules/User.js';
      
import { UserRoleData } from '../../../../org/allbinary/business/user/role/UserRoleData.js';
      
import { RequestParams } from '../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
      
import { TransformInfoHttpInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserInterface } from './UserInterface.js';
import { CreateUserFactory } from './CreateUserFactory.js';

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

    var httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;
;
    

    var httpServletRequest: HttpServletRequest = httpTransformInfoInterface!.getPageContext()!.getRequest() as HttpServletRequest;
;
    

    var hashMap: HashMap<any, any> = new RequestParams(httpServletRequest).
                            toHashMap()!;
;
    

    var role: string = httpTransformInfoInterface!.getPropertiesHashMap()!.get(UserRoleData.NAME.toString()) as string;
;
    
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
                                    
    var requestHashMap: HashMap<any, any> = new RequestParams(httpServletRequest).
                            toHashMap()!;
;
    

    var roleString: string = propertiesHashMap!.get(UserRoleData.NAME.toString()) as string;
;
    
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
                
            

