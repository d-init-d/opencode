export const modelsBuiltin = {
  cliproxyapi: {
    id: "cliproxyapi",
    name: "CLIProxyAPI",
    env: ["CLIPROXYAPI_API_KEY"],
    npm: "@ai-sdk/openai",
    api: "http://127.0.0.1:8320/v1",
    models: {
      "gpt-5": model("gpt-5", "GPT-5", { context: 400000, output: 128000 }),
      "gpt-5-codex": model("gpt-5-codex", "GPT-5 Codex", { context: 200000, output: 64000 }),
      "gpt-5-codex-mini": model("gpt-5-codex-mini", "GPT-5 Codex Mini", { context: 200000, output: 64000 }),
      "gpt-5.1": model("gpt-5.1", "GPT-5.1", { context: 400000, output: 128000 }),
      "gpt-5.1-codex": model("gpt-5.1-codex", "GPT-5.1 Codex", { context: 200000, output: 64000 }),
      "gpt-5.1-codex-max": model("gpt-5.1-codex-max", "GPT-5.1 Codex Max", { context: 200000, output: 64000 }),
      "gpt-5.1-codex-mini": model("gpt-5.1-codex-mini", "GPT-5.1 Codex Mini", { context: 200000, output: 64000 }),
      "gpt-5.2": model("gpt-5.2", "GPT-5.2", { context: 400000, output: 128000 }),
      "gpt-5.2-codex": model("gpt-5.2-codex", "GPT-5.2 Codex", { context: 200000, output: 64000 }),
      "gpt-5.3-codex": model("gpt-5.3-codex", "GPT-5.3 Codex", { context: 200000, output: 64000 }),
      "gpt-5.4": model("gpt-5.4", "GPT-5.4", { context: 400000, output: 128000 }),
    },
  },
}

function model(id: string, name: string, limit: { context: number; output: number }) {
  return {
    id,
    name,
    family: id.includes("codex") ? "gpt-codex" : "gpt",
    release_date: releaseDate(id),
    attachment: true,
    reasoning: true,
    temperature: false,
    tool_call: true,
    modalities: {
      input: ["text", "image"],
      output: ["text"],
    },
    limit,
    options: {},
  }
}

function releaseDate(id: string) {
  if (id === "gpt-5") return "2025-08-07"
  if (id === "gpt-5-codex" || id === "gpt-5-codex-mini") return "2025-08-07"
  if (id.startsWith("gpt-5.1")) return "2025-11-14"
  if (id.startsWith("gpt-5.2")) return "2025-12-12"
  if (id.startsWith("gpt-5.3")) return "2025-12-18"
  if (id === "gpt-5.4") return "2026-02-01"
  return "2025-08-07"
}
