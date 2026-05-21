
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Log } from './Log.js';

export class LogUtil
            extends Object
         {
        

    private static readonly instance: LogUtil = new LogUtil();

    public static getInstance(): LogUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LogUtil.instance;
    
}

private constructor (){

            super();
        }


    public putL(log: Log){

    var specialMessage: string = log.getSpecialMessage()!;
;
    

    var anyType: any = log.getObject()!;
;
    

    var functionName: string = log.getFunctionName()!;
;
    

    var exception: any = log.getThrowable()!;
;
    



                            throw new RuntimeException();
                    
}


    public putF(specialMessage: string, anyType: any = {}, functionName: string){



                            throw new RuntimeException();
                    
}


    public putF(specialMessage: string, className: string, functionName: string){



                            throw new RuntimeException();
                    
}


    public put(specialMessage: string, anyType: any = {}, functionName: string, exception: any = {}){



                            throw new RuntimeException();
                    
}


}
                
            

