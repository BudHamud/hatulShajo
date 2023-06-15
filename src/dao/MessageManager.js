import messageModel from "./models/message.model";

// todavia no lo voy a usar

class MessageManager {

    async getMessages() {
        return await messageModel.find()
    }

}

export default MessageManager