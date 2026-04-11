import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY || '',
  dangerouslyAllowBrowser: true, // For client-side usage in demo
});

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function sendMessage(
  messages: Message[],
  systemPrompt: string,
  onStream?: (text: string) => void
): Promise<string> {
  try {
    const stream = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2048,
      system: systemPrompt,
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      })),
      stream: true,
    });

    let fullResponse = '';

    for await (const event of stream) {
      if (
        event.type === 'content_block_delta' &&
        event.delta.type === 'text_delta'
      ) {
        const text = event.delta.text;
        fullResponse += text;
        if (onStream) {
          onStream(fullResponse);
        }
      }
    }

    return fullResponse;
  } catch (error) {
    console.error('Claude API error:', error);
    throw new Error('Failed to get response from AI');
  }
}

export function buildSystemPrompt(topic: string, selectedResource?: { title: string; creator: string }): string {
  let prompt = `You are a learning assistant helping users study ${topic}. `;
  
  if (selectedResource) {
    prompt += `The user is currently viewing "${selectedResource.title}" by ${selectedResource.creator}. `;
    prompt += `Answer questions about this resource's content, explain concepts from it, and provide helpful context. `;
  }
  
  prompt += `If the user asks something outside the current resource, you can search for and cite additional references. `;
  prompt += `Be concise, clear, and educational. Use markdown formatting for better readability.`;
  
  return prompt;
}
