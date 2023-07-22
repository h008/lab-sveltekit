import type { RequestEvent } from "@sveltejs/kit";

export async function load(event: RequestEvent) {
    // hooks.server.tsでセットしたevent.locals.userを取得してフロントに返す
    // これでサーバー側の値をフロント側で使えるようになる

    return event.locals

}