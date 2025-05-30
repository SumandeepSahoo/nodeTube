import mongoose, {Schema, schema} from "mongoose"

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId,
        ref: "USer"
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: "USer"
    }
},
{
    timestamps: true
})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)