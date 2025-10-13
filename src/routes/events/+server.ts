import { controllers } from '$lib/controllers';
const text_encoder = new TextEncoder();
export function GET({ url: { searchParams } }) {
	const session_id = searchParams.get('session');
	if (!session_id) {
		return new Response('Session ID is required', { status: 400 });
	}
	return new Response(
		new ReadableStream({
			start(controller) {
				controllers.set(session_id, controller);
				controller.enqueue(text_encoder.encode(`event: init\ndata:\n\n`));
			},
			cancel() {
				controllers.delete(session_id);
			}
		}),
		{
			headers: {
				'Content-Type': 'text/event-stream',
				'Cache-Control': 'no-cache',
				Connection: 'keep-alive'
			}
		}
	);
}
