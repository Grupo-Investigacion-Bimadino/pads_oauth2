import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';
import * as mongoose from 'mongoose';
import { timestamp } from 'rxjs';



@Schema({

    timestamps: true, })
    
    export class provider extends Document {
        _id: mongoose.Types.ObjectId;
    
    @Prop({type: String, default: true})
    Name: String;
    
    @Prop({type: String, default: true})
    Id: String;
    
    @Prop({type: String, default: true})
    Runway: String;
    
    @Prop({type: String, default: true})
    Clue_api: String;
    
    @Prop({type: String, default: true})
    text_secret: String;
    
    @Prop({type: String, default: true})
    id_users: String;
    
    }
    
    export const providerSchema = SchemaFactory.createForClass(provider)

