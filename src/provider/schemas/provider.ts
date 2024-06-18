import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';
import * as mongoose from 'mongoose';
import { timestamp } from 'rxjs';

@Schema({

timestamps: true, })

export class provider extends Document {
@Prop()
Name: String;

@Prop()
Id: String;

@Prop()
runway: String;

@Prop()
clue_api: String;

@Prop()
text_secret: String;

@Prop()
id_users: String;

}

export const providerSchema = SchemaFactory.createForClass(provider)