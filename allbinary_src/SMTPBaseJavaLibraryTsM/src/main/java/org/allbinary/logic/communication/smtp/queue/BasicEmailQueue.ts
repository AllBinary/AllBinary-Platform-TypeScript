
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { Transport } from '../../../../../../javax/mail/Transport.js';
      
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { EmailInterface } from '../../../../../../org/allbinary/logic/communication/smtp/EmailInterface.js';
      
import { BasicQueue } from '../../../../../../org/allbinary/logic/util/queue/BasicQueue.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EmailQueueInterface } from './EmailQueueInterface.js';

export class BasicEmailQueue extends BasicQueue implements EmailQueueInterface {
        

    private static readonly instance: BasicEmailQueue = new BasicEmailQueue();

    private static basicEmailQueue: BasicEmailQueue;
//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static getInstance(): BasicEmailQueue{

                        if(BasicEmailQueue.basicEmailQueue == 
                                    null
                                )
                        
                                    {
                                    BasicEmailQueue.basicEmailQueue= new BasicEmailQueue();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicEmailQueue.basicEmailQueue;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public offer(emailInterface: EmailInterface): boolean{
this.offer(emailInterface);
    
this.post(emailInterface);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    remove(emailInterface: EmailInterface){
this.remove(emailInterface);
    
}

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public remove(): EmailInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    post(emailInterface: EmailInterface){

                        if(this.send(emailInterface))
                        
                                    {
                                    this.remove(emailInterface);
    
this.processAllUnsent();
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    processAllUnsent(){

    var size: number = queueVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var emailInterface: EmailInterface = queueVector!.get(index) as EmailInterface;;
    

                        if(this.send(emailInterface))
                        
                                    {
                                    this.remove(emailInterface);
    
this.processAllUnsent();
    

                                    }
                                
}

}

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    send(emailInterface: EmailInterface): boolean{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Sending: " +emailInterface!.log(), this, "send");
    

                                    }
                                
Transport.send(emailInterface!.getMimeMessage());
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Email Send Debug: " +emailInterface!.getDebugInfo(), this, "send");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.put("Failed Email Send Debug: " +emailInterface!.getDebugInfo(), this, "send", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


}
                
            

