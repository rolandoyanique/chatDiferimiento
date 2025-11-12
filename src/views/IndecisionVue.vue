<script setup lang="ts">
import ChatMessage from '@/components/chat/ChatMessage.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessages } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';
const messages = ref<ChatMessages[]>([
  {
    id: new Date().getTime(),
    message: 'Hola mundo',
    isMine: true,
  },
  {
    id: new Date().getTime(),
    message: 'Quieres que te invite un cafe?',
    isMine: true,
  },
  {
    id: new Date().getTime(),
    message: 'Este es un mensaje de no',
    isMine: false,
    image: 'https://yesno.wtf/assets/no/31-cc391a4c0332a4ce5b4d4666f64a7b4a.gif',
  },
]);
</script>

<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessage :message="messages" />
    <MessageBox></MessageBox>
  </div>
</template>
