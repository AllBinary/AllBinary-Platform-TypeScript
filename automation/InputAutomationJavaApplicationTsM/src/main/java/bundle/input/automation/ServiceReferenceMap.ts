
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
        



import { Collection } from "../../../java/util/Collection.js";

    
import { Map } from "../../../java/util/Map.js";

    
import { Set } from "../../../java/util/Set.js";

    
import { ServiceReference } from "../../../org/osgi/framework/ServiceReference.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ServiceReferenceMap
            extends Object
         implements Map {
        

    public static toString(map: Map): string{
var map = map

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    private serviceReference: ServiceReference
public constructor (serviceReference: ServiceReference){

            super();
        var serviceReference = serviceReference
this.serviceReference= serviceReference;
    
}


    public size(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public isEmpty(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public containsKey(key: any = {}): boolean{
var key = key



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public containsValue(value: any = {}): boolean{
var value = value



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public get(key: any = {}): any{
var key = key



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.serviceReference!.getProperty(key as String);;
    
}


    public put(key: any = {}, value: any = {}): any{
var key = key
var value = value



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public remove(key: any = {}): any{
var key = key



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public putAll(m: Map){
var m = m
}


    public clear(){
}


    public keySet(): Set{

    var keyStringArray: string[] = this.serviceReference!.getPropertyKeys()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public values(): Collection<any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public entrySet(): Set{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

