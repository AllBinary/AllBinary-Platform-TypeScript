
        /* Generated Code Do Not Modify */
        



import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class SqlTypeStrings
            extends Object
         {
        

    private static readonly instance: SqlTypeStrings = new SqlTypeStrings();
        
        

    public static getInstance(): SqlTypeStrings{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly CHAR_COLUMN: string = "VARCHAR";
        
        

    public readonly INT_COLUMN: string = "VARCHAR";
        
        

    public readonly MAX_SIZE: string = "(255)";
        
        

    public readonly SIXTY_SIZE: string = "(60)";
        
        

    public readonly NOT_NULL: string = "NOT NULL";
        
        

    public readonly ONE_SIZE: string = "(1)";
        
        

    public readonly TWO_SIZE: string = "(2)";
        
        

    public readonly THREE_SIZE: string = "(3)";
        
        

    public readonly SIX_SIZE: string = "(6)";
        
        

    public readonly ELEVEN_SIZE: string = "(11)";
        
        

    public readonly TWELVE_SIZE: string = "(12)";
        
        

    public readonly ONE_KB_CHAR_COLUMN: string = new StringBuilder().
                            append(CommonSeps.getInstance()!.SPACE)!.append(CHAR_COLUMN)!.append("(1024)")!.append(CommonSeps.getInstance()!.COMMA_SEP)!.toString()!;
        
        

    public readonly MAX_CHAR_COLUMN: string = new StringBuilder().
                            append(CommonSeps.getInstance()!.SPACE)!.append(CHAR_COLUMN)!.append(MAX_SIZE)!.append(CommonSeps.getInstance()!.COMMA_SEP)!.toString()!;
        
        

    public readonly MAX_CHAR_COLUMN_NOT_NULL: string = new StringBuilder().
                            append(CommonSeps.getInstance()!.SPACE)!.append(CHAR_COLUMN)!.append(MAX_SIZE)!.append(CommonSeps.getInstance()!.SPACE)!.append(NOT_NULL)!.append(CommonSeps.getInstance()!.COMMA_SEP)!.toString()!;
        
        

    public readonly SIXTY_CHAR_COLUMN_NOT_NULL: string = new StringBuilder().
                            append(CommonSeps.getInstance()!.SPACE)!.append(CHAR_COLUMN)!.append(SIXTY_SIZE)!.append(NOT_NULL)!.append(CommonSeps.getInstance()!.COMMA_SEP)!.toString()!;
        
        

    public readonly ONE_CHAR_COLUMN_NOT_NULL: string = new StringBuilder().
                            append(CommonSeps.getInstance()!.SPACE)!.append(CHAR_COLUMN)!.append(ONE_SIZE)!.append(NOT_NULL)!.append(CommonSeps.getInstance()!.COMMA_SEP)!.toString()!;
        
        

    public readonly SIX_CHAR_COLUMN_NOT_NULL: string = new StringBuilder().
                            append(CommonSeps.getInstance()!.SPACE)!.append(CHAR_COLUMN)!.append(SIX_SIZE)!.append(NOT_NULL)!.append(CommonSeps.getInstance()!.COMMA_SEP)!.toString()!;
        
        

    public readonly TWELVE_CHAR_COLUMN_NOT_NULL: string = new StringBuilder().
                            append(CommonSeps.getInstance()!.SPACE)!.append(CHAR_COLUMN)!.append(this.TWELVE_SIZE)!.append(NOT_NULL)!.append(CommonSeps.getInstance()!.COMMA_SEP)!.toString()!;
        
        

    public readonly TWO_INT_NOT_NULL: string = " INT(2) NOT NULL, ";
        
        

    public readonly THREE_INT_NOT_NULL: string = " INT(3) NOT NULL, ";
        
        

    public readonly FOUR_INT_NOT_NULL: string = " INT(4) NOT NULL, ";
        
        

    public readonly MAX_INT_NOT_NULL: string = " INT(11) NOT NULL, ";
        
        

    public readonly MAX_INT_UNSIGNED: string = " INT(11) UNSIGNED, ";
        
        

    public readonly MAX_INT_UNSIGNED_NOT_NULL: string = " INT(11) UNSIGNED NOT NULL, ";
        
        

    public readonly MAX_BIG_INT_NOT_NULL: string = " BIGINT(19) NOT NULL, ";
        
        

    public readonly MAX_BIG_INT_UNSIGNED: string = " BIGINT(19) UNSIGNED, ";
        
        

    public readonly MAX_BIG_INT_UNSIGNED_NOT_NULL: string = " BIGINT(19) UNSIGNED NOT NULL, ";
        
        

    public readonly MAX_BIG_INT_UNSIGNED_AUTO_INCREMENT_NOT_NULL: string = " BIGINT(19) UNSIGNED AUTO_INCREMENT NOT NULL,";
        
        

    public readonly LONG_BLOB: string = " LONGBLOB, ";
        
        

    public readonly BLOB: string = " BLOB, ";
        
        

    public readonly BLOB_NOT_NULL: string = " BLOB NOT NULL, ";
        
        

}
                
            

