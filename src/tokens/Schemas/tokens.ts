import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';
import * as mongoose from 'mongoose';
import { timestamp } from 'rxjs';

@Schema({

timestamps: true, })

export class tokens extends Document {
    _id: mongoose.Types.ObjectId;

@Prop({type: String, default: true})
Name: String;

@Prop({type: String, default: true})
Id: String;

@Prop({type: String, default: true})
Token: String;

@Prop({type: String, default: true})
Duration: String;

@Prop({type: String, default: true})
Encrypted_algorithm: String;

@Prop({type: String, default: true})
Data: String;

}

export const tokensSchema = SchemaFactory.createForClass(tokens)