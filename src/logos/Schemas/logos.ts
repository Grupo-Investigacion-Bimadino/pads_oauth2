import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';
import * as mongoose from 'mongoose';
import { timestamp } from 'rxjs';

@Schema({

timestamps: true, })

export class logos extends Document {
@Prop()
id: String;

@Prop()
url_logo: String;

@Prop()
format: String;

@Prop()
id_logos: String;

}

export const tokensSchema = SchemaFactory.createForClass(logos)