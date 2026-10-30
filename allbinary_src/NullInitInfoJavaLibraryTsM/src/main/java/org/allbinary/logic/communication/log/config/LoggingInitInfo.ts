
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LogConfig } from './LogConfig.js';
//sameFolderImports - not GWT import - same folder const LogConfig

export class LoggingInitInfo
            extends Object
         {
        

    private static logConfigInfoList: BasicArrayList = 
                null
            ;

    private static hasRead: boolean = false;

                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static write(){

 try { LoggingInitInfo.hasRead= false;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    static read(){

 try {  }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static setHasRead(value: boolean){
LoggingInitInfo.hasRead= value;
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    static updateIfNeeded(){

                        if(!LoggingInitInfo.hasRead)
                        
                                    {
                                    LoggingInitInfo.read();
    
LoggingInitInfo.hasRead= true;
    

                        if(LoggingInitInfo.logConfigInfoList == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("Read Failed");
                    

                                    }
                                

                                    }
                                
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static set(logConfigInfoList: BasicArrayList){
LoggingInitInfo.logConfigInfoList= logConfigInfoList;
    
}


                //@Throws(Exception.constructor)
            
    public static get(): BasicArrayList{
LoggingInitInfo.updateIfNeeded();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LoggingInitInfo.logConfigInfoList;
    
}


                //@Throws(Exception.constructor)
            
    public static getTypeList(): BasicArrayList{
LoggingInitInfo.updateIfNeeded();
    

    let allLogTypeVector: BasicArrayList = new BasicArrayListD();;
    

    let size: number = LoggingInitInfo.logConfigInfoList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let logConfigInfo: LogConfig = LoggingInitInfo.logConfigInfoList!.objectArray[index]! as LogConfig;;
    

    let logTypeVector: BasicArrayList = logConfigInfo!.getTypeVector()!;;
    

                        if(logConfigInfo!.isEnabled())
                        
                                    {
                                    allLogTypeVector!.addAllList(logTypeVector);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return allLogTypeVector;
    
}


public constructor (){

            super();
        }


    public isValid(): boolean{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public getNumberOfLogConfigs(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LoggingInitInfo.logConfigInfoList!.size();;
    
}


    public toString(): string{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error";
    

 }
   }
 
}


}

