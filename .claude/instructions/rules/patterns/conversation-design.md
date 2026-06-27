# Conversation Design

## Conversation Design

>## If we want Salesforce to be a **system of engagement,** we have to **start with user trust.** We build trust by designing **user-centered, natural conversations.**

###Demand for bots—especially customer service chatbots—has surged in recent years, both due to an increased need for asynchronous conversational experiences to handle customer needs at any time of day and because of increased digitization requiring workflow changes.

Conversation Design (CXD for short) is a field of user experience design focused on the design of interactions for conversational interfaces, including chatbots, voicebots and IVRs (Interactive Voice Response systems). But it's more than just stringing words together and throwing in emoji for personality. We’ve all had experiences with chatbots and digital assistants that have left us frustrated and nowhere near solving the issue we had. The experience was long, confusing, or its personality was trying too hard to be funny that it ended up being insulting.

>## "Conversation Design is the process of designing a natural*, two way interaction between a user and a system (via voice or text) based on the principles of human-to-human conversation."

These principles guide Conversation Designers in creating simple and easy-to-use conversational systems.

Conversation Designers pull knowledge from multiple fields and industries. They rely on knowledge of psychology, linguistics, and AI and combine it with technical expertise in UX design and UX writing, research, and the nuances of human to human conversation to deliver a good user experience.

**Though Conversation Design draws on real world conversational dynamics, we must remember that bot conversation is not meant to perfectly mirror human interaction. We want to design a natural, two-way conversation hat's expressive and comparable to a human-to-human conversation, but always making it clear to the user that they're interacting with a bot.*

###These guidelines are designed as a tool for everyone looking to write conversations or bots using Salesforce standards. For Conversation Designers, this serves as the blueprint for writing conversations that align with Salesforce values, which defines Salesforce's unique place in the market.

Conversation Design allows Salesforce to meet users where they are, building trust by creating inclusive experiences that allow users to feel and be heard, and driving customer success.

However, these guidelines are not only for dedicated Conversation Designers. Many other roles can benefit from the principles outlined here:

* **CCX, UX and Technical Writers** involved with conversational systems and searching for a way to level up their ability and understanding as a partner
* **UX Designers** who want to get a better idea of how conversation design might influence the text, personae, or systems used in their prototypes or wireframes
* **Product Managers** upskilling their knowledge of their team or determining if a conversational system is worth investing more time and resources in
* **Sales teams and Account Managers** looking for more context on why conversational experiences are a great relationship-building tool for Salesforce customers to use with their consumer audience
* **Customer Success Group members** editing an existing bot, or building a bot for a demo.
* **Anyone building a bot** or the “Conversation Curious”, such as Product Marketing Managers.

These guidelines can help anyone get an overview on how to write great conversational copy.

###Refer to this document when you are:

* Unsure about the voice and tone of your bot
* Creating any system where a bot and a user take turns providing input
* Looking for inspiration for your conversational system
* Writing dialogs for your bot and want to see if they match Salesforce guidelines
* Questioning whether your bot is context-appropriate
* Trying to make sure you have created a bot experience that is consistent

###[Image Description](https://v1.lightningdesignsystem.com/image-description/?desc=key_elements)

1. **Menu -** Vertical list of options that help guide the user through a dialog
    1. Horizontal lists, called buttons, are often used for quick actions
2. **User Utterance -** Anything typed by the user
3. **Bot Response -** Anything the bot says in response to the user input (typed text or menu choice)
4. **Entity -** A type of data that you want to collect from a customer
5. **Intent -** The customer's reasons for interacting with your bot

| **Component** | **Definition** | **Example Conversational Text** |
| --- | --- | --- |
| **Welcome** | The first interaction the bot has with the customer. The goal is to provide a warm welcome that transparently defines the bot as a bot and guides the customer to next steps. In Einstein Bots, the bot commonly moves from the Welcome Dialog to the Main Menu dialog, which cues up the main skills that the bot can deliver. This is not a requirement. | “Hi, (Preferred Name)! I'm the [bot name] automated assistant. I'm looking forward to helping you today.” |
| **Agent Transfer** | The message sent to the customer before they are transferred to a human agent. The goal here is to get any information needed to hand off to the agent and provide language to gracefully complete the transfer. | “Would you like me to connect you to an agent who can assist further?” |
| **Conversation Loopback** | Commonly referred to as “Anything Else?”, the loopback is a confirmation before the end of the bot conversation that the customer's needs are met (similar to “Is there anything else I can help you with today?”). If the customer wants to restart, they should be transferred to the dialog immediately following the Welcome dialog (as you’re mid-conversation, this avoids welcoming the user more than once). For many bots, this transfer will be to the Main Menu dialog. | “Can I help you with anything else?” |
| **Closing** | The end of the conversation. This dialog should include any calls to action (leaving a review, sending a survey) and gracefully wrap up. | “Thanks for taking the time to chat. Goodbye.” |
| **Error Handling** | A great bot conversation plans for errors such system errors, by including language to convey that an error occurred, and guiding the customer to the next step, usually a transfer to an agent. | “Unfortunately, no agents are available now. Would you like to create a ticket so an agent can follow up with you later?” |
| **Confused/****ConversationRepair** | The bot may not always understand the customer, so it should have text and a next step ready to go. This situation usually arises when the customer sends a message that the bot hasn't been trained to handle. | “I didn’t quite understand, could you please enter that again?” |
| **Bot Response Delay** | There needs to be a cadence to the conversation. To avoid overwhelming the user or sounding overly robotic, the [bot response delay](https://www.lightningdesignsystem.com/2e1ef8501/p/769bf8-best-practices/t/95ef300ca1) should always be activated and set to default or longer. |   |

---
*Generated from SLDS documentation. For complete details, visit [Lightning Design System](https://www.lightningdesignsystem.com)*
