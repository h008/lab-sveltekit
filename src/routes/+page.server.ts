import type { RequestEvent } from "@sveltejs/kit";

export async function load(event: RequestEvent) {
    // load関数でセットしたデータもフロント$page.dataで取得できる
    const posts = [{ title: "test", description: "test" }]
    return { posts, name: "test" }


}