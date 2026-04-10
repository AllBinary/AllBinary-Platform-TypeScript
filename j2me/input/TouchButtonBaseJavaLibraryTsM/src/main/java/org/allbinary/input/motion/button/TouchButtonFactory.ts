
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
        



import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class TouchButtonFactory
            extends Object
         {
        

    private static readonly SINGLETON: TouchButtonFactory = new TouchButtonFactory();
        
        

    public static getInstance(): TouchButtonFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    private LIST: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;
        
        

    private list: BasicArrayList = LIST;
        
        

    private savedList: BasicArrayList = LIST;
        
        
private constructor (){

            super();
            }


    public defaultList(){
this.list= LIST
this.toggle(false, LIST)
}


    private saved: boolean = false;
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public toggle(save: boolean, list: BasicArrayList){
var save = save
var list = list

    
                        if(list != BasicArrayListUtil.getInstance()!.getImmutableInstance())
                        
                                    {
                                    this.savedList= list

    
                        if(!this.saved)
                        
                                    {
                                    this.list= this.savedList

                                    }
                                

                                    }
                                
                        else {
                            
    
                        if(save)
                        
                                    {
                                    
    
                        if(!this.saved)
                        
                                    {
                                    this.saved= true
this.savedList= this.list
this.list= LIST

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                
                        else {
                            this.list= this.savedList
this.saved= false

                        }
                            

                        }
                            
}


                @Throws(Exception::class)
            
    public setList(list: BasicArrayList){
var list = list

    
                        if(list == 
                                    null
                                )
                        
                                    {
                                    


                            throw Exception("Null List")

                                    }
                                
this.list= list
}


    getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

