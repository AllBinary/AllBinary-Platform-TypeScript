
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
        



import { Connection } from "../../../../../../../java/sql/Connection.js";

    
import { DriverManager } from "../../../../../../../java/sql/DriverManager.js";

    
import { SQLException } from "../../../../../../../java/sql/SQLException.js";

    
import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SqlConnectionPool
            extends Object
         {
        

    private static readonly instance: SqlConnectionPool = new SqlConnectionPool();
        
        

    public static getInstance(): SqlConnectionPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private connectionHashMap: HashMap<any, any> = 
                null
            ;
        
        

    private readonly FIRST_NEW_CONNECTION_CREATED: string = "First New Connection Created: ";
        
        

    private readonly FIRST: string = "First ";
        
        

    private readonly NEW_CONNECTION_FOR: string = "New Connection For ";
        
        

    private readonly CREATED: string = " Created";
        
        

    private readonly NUMBER_OF_SQL_CONNECTIONS_FOR: string = "Number Of Sql Connections for: ";
        
        

    private readonly NUMBER_OF_SQL_CONNECTION_VECTORS: string = "Number Of Sql Connection Vectors: ";
        
        

    private readonly IS: string = " is ";
        
        

    private readonly CONNECTION_ALLREADY_CLOSED: string = "Connection AllReady Closed";
        
        

    private readonly METHOD_GET: string = "get()";
        
        

    private readonly METHOD_ADD: string = "add()";
        
        
private constructor (){

            super();
            }


                //@Throws(SQLException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public get(url: string): Connection{
var url = url

                        if(this.connectionHashMap == 
                                    null
                                )
                        
                                    {
                                    this.connectionHashMap= new HashMap<any, any>();
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGPOOL))
                        
                                    {
                                    this.logUtil!.putF(FIRST_NEW_CONNECTION_CREATED +url, this, METHOD_GET);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DriverManager.getConnection(url);

                        ;
    

                                    }
                                
                        else {
                            
    var connectionVector: Vector = this.connectionHashMap!.get(url as Object);

                         as Vector;
        
        
;
    

                        if(connectionVector == 
                                    null
                                )
                        
                                    {
                                    connectionVector= new Vector();
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGPOOL))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(FIRST);
    
stringBuffer!.append(NEW_CONNECTION_FOR);
    
stringBuffer!.append(url);
    
stringBuffer!.append(CREATED);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_GET);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DriverManager.getConnection(url);

                        ;
    

                                    }
                                
                             else 
                        if(connectionVector!.length == 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGPOOL))
                        
                                    {
                                    this.logUtil!.putF(new StringBuilder().
                            append(NEW_CONNECTION_FOR)!.append(url)!.append(CREATED)!.toString(), this, METHOD_GET);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DriverManager.getConnection(url);

                        ;
    

                                    }
                                
                        else {
                            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var size: number = connectionVector!.length!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var sqlConnection: Connection = connectionVector!.get(i);

                         as Connection;
        
        
;
    

                        if(!sqlConnection!.isClosed();

                        )
                        
                                    {
                                    connectionVector!.remove(sqlConnection);
    
this.connectionHashMap!.put(url, connectionVector);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGPOOL))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(NUMBER_OF_SQL_CONNECTIONS_FOR);
    
stringBuffer!.append(url);
    
stringBuffer!.append(IS);
    
stringBuffer!.appendint(connectionVector!.length);
    
this.logUtil!.putF(NUMBER_OF_SQL_CONNECTION_VECTORS +this.connectionHashMap!.size, this, METHOD_GET);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_GET);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return sqlConnection as Connection;
    

                                    }
                                
}


                        }
                            

                        }
                            

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGPOOL))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(NEW_CONNECTION_FOR);
    
stringBuffer!.append(url);
    
stringBuffer!.append(CREATED);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_GET);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DriverManager.getConnection(url);

                        ;
    
}


                //@Throws(SQLException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public add(url: string, sqlConnection: Connection){
var url = url
var sqlConnection = sqlConnection

                        if(!sqlConnection!.isClosed();

                        )
                        
                                    {
                                    
    var connectionVector: Vector
;
    

                        if(this.connectionHashMap == 
                                    null
                                )
                        
                                    {
                                    this.connectionHashMap= new HashMap<any, any>();
    
connectionVector= new Vector();
    
connectionVector!.add(sqlConnection);
    

                                    }
                                
                        else {
                            connectionVector= this.connectionHashMap!.get(url as Object);

                         as Vector;
    

                        if(connectionVector == 
                                    null
                                )
                        
                                    {
                                    connectionVector= new Vector();
    

                                    }
                                
connectionVector!.add(sqlConnection);
    
this.connectionHashMap!.put(url, connectionVector);
    

                        }
                            

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGPOOL))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(NUMBER_OF_SQL_CONNECTIONS_FOR);
    
stringBuffer!.append(url);
    
stringBuffer!.append(IS);
    
stringBuffer!.appendint(connectionVector!.length);
    
this.logUtil!.putF(NUMBER_OF_SQL_CONNECTION_VECTORS +this.connectionHashMap!.size, this, METHOD_ADD);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_ADD);
    

                                    }
                                

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGPOOL))
                        
                                    {
                                    this.logUtil!.putF(CONNECTION_ALLREADY_CLOSED, this, METHOD_ADD);
    

                                    }
                                
}


}
                
            

