
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { TableMappingInterface } from "../../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    

export class JvmStatisticsMapping extends JvmStatistics
                , TableMappingInterface {
        
public constructor ()                        

                            : super(){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


    public toHashMap(): HashMap<Any, Any>{

    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(JvmStatisticsData.FREE_MEMORY_BYTES, this.getFreeMemoryBytesString())
put(JvmStatisticsData.FREE_MEMORY_KILOBYTES, this.getFreeMemoryKilobytesString())
put(JvmStatisticsData.FREE_MEMORY_MEGABYTES, this.getFreeMemoryMegabytesString())
put(JvmStatisticsData.MAX_MEMORY_BYTES, this.getMaxMemoryBytesString())
put(JvmStatisticsData.MAX_MEMORY_KILOBYTES, this.getMaxMemoryKilobytesString())
put(JvmStatisticsData.MAX_MEMORY_MEGABYTES, this.getMaxMemoryMegabytesString())
put(JvmStatisticsData.NUMBER_OF_THREADS, this.getNumberOfThreadsString())
put(JvmStatisticsData.TOTAL_MEMORY_BYTES, this.getTotalMemoryBytesString())
put(JvmStatisticsData.TOTAL_MEMORY_KILOBYTES, this.getTotalMemoryKilobytesString())
put(JvmStatisticsData.TOTAL_MEMORY_MEGABYTES, this.getTotalMemoryMegabytesString())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                @Throws(Exception::class)
            
    public getKey(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return JvmStatisticsData.NAME;
    
}


                @Throws(Exception::class)
            
    public toVector(): Vector{

    var vector: Vector = new Vector();
        
        

add(this.getFreeMemoryBytesString())
add(this.getFreeMemoryKilobytesString())
add(this.getFreeMemoryMegabytesString())
add(this.getMaxMemoryBytesString())
add(this.getMaxMemoryKilobytesString())
add(this.getMaxMemoryMegabytesString())
add(this.getNumberOfThreadsString())
add(this.getTotalMemoryBytesString())
add(this.getTotalMemoryKilobytesString())
add(this.getTotalMemoryMegabytesString())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


}
                
            

