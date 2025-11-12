import { sleep } from '@/helpers/sleep';
import type { ChatMessages } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessages[]>([]);
  const getHerResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponse;
    return data;
  };
  const onMessage = async (text: string) => {
    if (text.length === 0) return;
    messages.value.push({
      id: new Date().getTime(),
      isMine: true,
      message: text,
    });
    if (!text.endsWith('?')) return;
    await sleep(1.5);
    const { answer, image } = await getHerResponse();
    messages.value.push({
      id: new Date().getTime(),
      isMine: false,
      message: answer,
      image: image,
    });
  };
  return {
    //Propertis
    messages,
    //Methods
    onMessage,
  };
};
