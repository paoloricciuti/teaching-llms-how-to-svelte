import { http_transport } from '$lib/mcp';

export async function fallback({ request }) {
	return (await http_transport.respond(request)) ?? new Response('Not found', { status: 404 });
}
