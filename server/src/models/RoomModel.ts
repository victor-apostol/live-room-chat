import { Schema, model } from 'mongoose';
import { IRoom, DocumentResult } from '../../interfaces';

interface IRoomModel extends IRoom, Document, DocumentResult<IRoom> {}

const RoomModel = new Schema({
    name: {type: String, unique: true, require: true},
    owner: {type: Schema.Types.ObjectId, ref: 'User', require: true},
    password: {type: String, require: true},
    participants: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {versionKey: false});

export default model<IRoomModel>("Room", RoomModel);