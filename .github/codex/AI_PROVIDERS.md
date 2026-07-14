# Provedores de IA

Configure `DEFAULT_AI_PROVIDER` e `DEFAULT_AI_MODEL` em **Settings > Secrets and variables > Actions > Variables**. Cadastre a chave selecionada como `DEFAULT_API_KEY` em **Actions > Secrets**.

| `DEFAULT_AI_PROVIDER` | Chave em Actions Secrets | Modelo |
| --- | --- | --- |
| `gemini` | `DEFAULT_API_KEY` | Gerenciado pela Gemini CLI |
| `openai` | `DEFAULT_API_KEY` | Gerenciado pelo Codex Action |
| `anthropic` | `DEFAULT_API_KEY` | Obrigatório em `DEFAULT_AI_MODEL` |
| `openrouter` | `DEFAULT_API_KEY` | Obrigatório em `DEFAULT_AI_MODEL` |
| `groq` | `DEFAULT_API_KEY` | Obrigatório em `DEFAULT_AI_MODEL` |
| `mistral` | `DEFAULT_API_KEY` | Obrigatório em `DEFAULT_AI_MODEL` |
| `deepseek` | `DEFAULT_API_KEY` | Obrigatório em `DEFAULT_AI_MODEL` |
| `xai` | `DEFAULT_API_KEY` | Obrigatório em `DEFAULT_AI_MODEL` |
| `together` | `DEFAULT_API_KEY` | Obrigatório em `DEFAULT_AI_MODEL` |
| `perplexity` | `DEFAULT_API_KEY` | Obrigatório em `DEFAULT_AI_MODEL` |
| `none` | Nenhuma | Usa somente o fallback local |

Se a chave, o modelo, a quota ou a resposta do provedor falhar, o workflow valida e publica o fallback local automaticamente.

Os nomes antigos `AI_PROVIDER`, `AI_MODEL`, `AI_API_KEY`, `GEMINI_API_KEY` e `OPENAI_API_KEY` continuam aceitos como fallback para não quebrar configurações existentes.
