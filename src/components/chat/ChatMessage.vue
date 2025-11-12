<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex-1 overflow-y-auto p-4">
      <ChatBubble v-for="msg in message" :key="msg.id" v-bind="msg" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { ChatMessages } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref } from 'vue';
interface Props {
  message: ChatMessages[];
}
defineProps<Props>();

const chatRef = ref<HTMLElement | null>(null);
</script>
