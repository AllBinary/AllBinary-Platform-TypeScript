
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
        



import { DebugFactory } from "../../../../org/allbinary/debug/DebugFactory.js";

    
import { NoDebug } from "../../../../org/allbinary/debug/NoDebug.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class LicenseInitInfo
            extends Object
         {
        

    private id: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private serverList: BasicArrayList = new BasicArrayList();
        
        
 constructor (){

            super();
            }


    public getLicenseId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


    public getServer(index: number): string{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.serverList!.get(index) as String;
    
}


    public getNumberOfServers(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.serverList!.size();
    
}


    public setLicenseId(value: string){
var value = value
this.id= value
}


    public clearServers(){
clear()
}


    public setServer(value: string, index: number){
var value = value
var index = index
add(index, value)
}


    public addServer(value: string){
var value = value
add(value)
}


    public getServerList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.serverList;
    
}


    public setServerList(servers: BasicArrayList){
var servers = servers

    
                        if(DebugFactory.getInstance() == NoDebug.getInstance())
                        
                                    {
                                    this.serverList= servers

                                    }
                                
}


}
                
            

