import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';
import * as mongoose from 'mongoose';
import { timestamp } from 'rxjs';


@Schema({

    timestamps: true, })
    
    export class logos extends Document {
        _id: mongoose.Types.ObjectId;
    
    @Prop({type: String, default: true})
    Id: String;
    
    @Prop({type: String, default: true})
    Url_logo: String;
    
    @Prop({type: String, default: true})
    Format: String;
    
    @Prop({type: String, default: true})
    Id_logos: String;
    
    
    }
    
    export const logosSchema = SchemaFactory.createForClass(logos)

