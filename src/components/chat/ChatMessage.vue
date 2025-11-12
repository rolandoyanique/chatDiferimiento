<template>
  <div class="flex-1 overflow-y-auto p-4">
    <ChatBubble v-for="msg in message" :key="msg.id" v-bind="msg" />
  </div>
</template>
<script lang="ts" setup>
import type { ChatMessages } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
interface Props {
  message: ChatMessages[];
}
defineProps<Props>();
</script>
