import type { ChatMessages } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessages[]>([]);
  const onMessage = (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      isMine: true,
      message: text,
    });
  };
  return {
    //Propertis
    messages,
    //Methods
    onMessage,
  };
};
