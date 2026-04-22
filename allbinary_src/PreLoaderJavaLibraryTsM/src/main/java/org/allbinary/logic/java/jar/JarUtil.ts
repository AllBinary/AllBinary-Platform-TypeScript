
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
        



import { IOException } from "../../../../../java/io/IOException.js";

    
import { URL } from "../../../../../java/net/URL.js";

    
import { URLConnection } from "../../../../../java/net/URLConnection.js";

    
import { JarEntry } from "../../../../../java/util/jar/JarEntry.js";

    
import { JarInputStream } from "../../../../../java/util/jar/JarInputStream.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class JarUtil
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static main(args: string[]){
var args = args
new JarUtil(new URL("file:///G:/mnt/bc/mydev/working/j2me/MiniSpaceWars/MiniSpaceWars/dist/MiniSpaceWars.jar")).
                            show();
    
}


    private jarURL: URL
public constructor (jarURL: URL){

            super();
        var jarURL = jarURL
this.jarURL= jarURL;
    
}


    public show(){

    var cache: number[] = new Array(1024);
        
        
;
    

        try {
            
    var conn: URLConnection = this.jarURL!.openConnection()!;
        
        
;
    

    var jis: JarInputStream = new JarInputStream(conn.getInputStream());
        
        
;
    

        while(true)
        {

    var entry: JarEntry = jis.getNextJarEntry()!;
        
        
;
    

                        if(entry != 
                                    null
                                )
                        
                                    {
                                    
                        if(!entry.isDirectory();

                        )
                        
                                    {
                                    
    var offset: number = 0;
        
        
;
    

    var i: number = 0;
        
        
;
    

        while((i= jis.read(cache, offset, cache.length -offset)) !=  -1)
        {
offset += i;
    

                        if(offset >= cache.length)
                        
                                    {
                                    
    var newcache: number[] = new Array(cache.length +1024);
        
        
;
    



        for (let i = 0; i < ; i++) {
            newcache[0 + i] = cache[i]!;
        }
    ;
    
cache= newcache;
    

                                    }
                                
}


    var tmp: number[] = new Array(offset);
        
        
;
    



        for (let i = 0; i < offset; i++) {
            tmp[0 + i] = cache[i]!;
        }
    ;
    
console.log(entry.getName());
    

                                    }
                                

                                    }
                                
                        else {
                            break;

                    

                        }
                            
}


                //: 
} catch(ex) 
            {
System.err.println(ex);
    
ex.printStackTrace();
    
}

}


}
                
            

