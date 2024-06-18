import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';
import * as mongoose from 'mongoose';
import { timestamp } from 'rxjs';

@Schema({

timestamps: true, })

export class tokens extends Document {
@Prop()
Name: String;

@Prop()
Id: String;

@Prop()
Token: String;

@Prop()
Duration: String;

@Prop()
Encrypted_algorithm: String;

@Prop()
Data: String;

}

export const tokensSchema = SchemaFactory.createForClass(tokens)