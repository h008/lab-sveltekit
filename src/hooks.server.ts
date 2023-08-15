import type { RequestEvent } from "@sveltejs/kit";
export async function handle({ event, resolve }: { event: RequestEvent, resolve: (arg: RequestEvent) => Promise<Response> }) {
    // ここでevent.locals.userをセット（ログイン情報を想定）
    event.locals.user = { name: "test" }
    const response = await resolve(event)
    return response
}
