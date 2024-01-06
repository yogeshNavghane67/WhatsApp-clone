import Message from "../model/Message.js"
import conversation from "../model/Conversation.js";

export const newMessage =  async (request, response) => {

    try {
        const newMessage = new Message(request.body);

        await newMessage.save();
        await  conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text});

        return response.status(200).json('Message has been sent successfully');
    } catch (error) {
        return response.status(500).json(error.message);
        
    }
}