
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { DebugFactory } from '../../../../org/allbinary/debug/DebugFactory.js';
//not GWT import const DebugFactory = globalThis.org.allbinary.debug.DebugFactory;

      
import { NoDebug } from '../../../../org/allbinary/debug/NoDebug.js';
//not GWT import const NoDebug = globalThis.org.allbinary.debug.NoDebug;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LicenseInitInfo
            extends Object
         {
        

    private id: string = StringUtil.getInstance()!.EMPTY_STRING;

    private serverList: BasicArrayList = new BasicArrayListD();

 constructor (){

            super();
        }


    public getLicenseId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


    public getServer(index: number): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.serverList!.get(index) as string;
    
}


    public getNumberOfServers(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.serverList!.size();;
    
}


    public setLicenseId(value: string){
this.id= value;
    
}


    public clearServers(){
this.serverList!.clear();
    
}


    public setServer(value: string, index: number){
this.serverList!.addAt(index, value);
    
}


    public addServer(value: string){
this.serverList!.add(value);
    
}


    public getServerList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.serverList;
    
}


    public setServerList(servers: BasicArrayList){

                        if(DebugFactory.getInstance() == NoDebug.getInstance())
                        
                                    {
                                    this.serverList= servers;
    

                                    }
                                
}


}



