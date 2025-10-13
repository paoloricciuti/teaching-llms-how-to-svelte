import { McpServer } from 'tmcp';
import { HttpTransport } from '@tmcp/transport-http';
import { ValibotJsonSchemaAdapter } from '@tmcp/adapter-valibot';
import { getRequestEvent } from '$app/server';
import { controllers } from '$lib/controllers';
import * as v from 'valibot';

const server = new McpServer(
	{
		name: 'svelte-mcp-slides',
		description: 'A slide deck for the talk about the svelte mcp',
		version: '0.1.0'
	},
	{
		adapter: new ValibotJsonSchemaAdapter(),
		capabilities: {
			tools: {}
		}
	}
);

const text_encoder = new TextEncoder();

server.tool(
	{
		name: 'get-slides-link',
		description: 'Get the slides link using the current session id',
		title: 'Get Slides Link'
	},
	async () => {
		const event = getRequestEvent();
		const url = new URL(event.request.url);
		return {
			content: [
				{
					type: 'text',
					text: `${url.origin}/?session=${server.ctx.sessionId}`
				}
			]
		};
	}
);

server.tool(
	{
		name: 'change-slide',
		description: 'Change slide wither next or previous',
		title: 'Change Slide',
		schema: v.object({
			direction: v.union([v.literal('next'), v.literal('previous')])
		})
	},
	async ({ direction }) => {
		const controller = controllers.get(server.ctx.sessionId!);
		if (controller) {
			controller.enqueue(text_encoder.encode(`event: ${direction}\ndata:\n\n`));
			return {
				content: []
			};
		}
		return {
			content: [
				{
					type: 'text',
					text: 'No session found'
				}
			],
			isError: true
		};
	}
);

export const http_transport = new HttpTransport(server, {
	cors: true
});
