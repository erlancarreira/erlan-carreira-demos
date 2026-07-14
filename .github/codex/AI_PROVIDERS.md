# Provedores de IA

Configure `AI_PROVIDER` e `AI_MODEL` em **Settings > Secrets and variables > Actions > Variables**.

| `AI_PROVIDER` | Chave em Actions Secrets | Modelo |
| --- | --- | --- |
| `gemini` | `GEMINI_API_KEY` | Gerenciado pela Gemini CLI |
| `openai` | `OPENAI_API_KEY` | Gerenciado pelo Codex Action |
| `anthropic` | `AI_API_KEY` | Obrigatório em `AI_MODEL` |
| `openrouter` | `AI_API_KEY` | Obrigatório em `AI_MODEL` |
| `groq` | `AI_API_KEY` | Obrigatório em `AI_MODEL` |
| `mistral` | `AI_API_KEY` | Obrigatório em `AI_MODEL` |
| `deepseek` | `AI_API_KEY` | Obrigatório em `AI_MODEL` |
| `xai` | `AI_API_KEY` | Obrigatório em `AI_MODEL` |
| `together` | `AI_API_KEY` | Obrigatório em `AI_MODEL` |
| `perplexity` | `AI_API_KEY` | Obrigatório em `AI_MODEL` |
| `none` | Nenhuma | Usa somente o fallback local |

Se a chave, o modelo, a quota ou a resposta do provedor falhar, o workflow valida e publica o fallback local automaticamente.
