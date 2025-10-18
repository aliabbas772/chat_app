import mongoose, { Model } from 'mongoose'

const messageSchema = new mongoose.Schema({

    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    text: {
        type: String,
        trim: true,
        maxLength: 5000,
    },
    image: {
        type: String,
    }

},
{ timestamps: true });

const Message = mongoose.model("Message", messageSchema)

export default Message;