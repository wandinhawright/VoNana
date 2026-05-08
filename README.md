# 🍞🧀 Vó Naná — Site vonana.com.br

Site institucional e de apresentação dos produtos **Vó Naná**, com foco em:

- contar a história da marca 💛
- mostrar as linhas de produtos 🧀
- compartilhar dicas de consumo e preparo 🔥☕
- facilitar o contato e o interesse em revenda 📦🤝

O projeto é um **SPA** feito em **React + Vite**, com rotas para as páginas principais e suporte a múltiplos idiomas.

---

## ✨ Páginas e rotas

- `/` — Home (hero, destaques, instagram, etc.)
- `/produtos` — Produtos
- `/preparo` — Dicas de consumo / preparo
- `/institucional` — Sobre / história
- `/revendedor` — Seja um revendedor / onde encontrar

---

## 🧰 Tecnologias & ferramentas

- ⚛️ **React** — UI baseada em componentes
- ⚡ **Vite** — dev server rápido + build otimizado
- 🧭 **React Router DOM** — rotas do site
- 🌍 **i18next + react-i18next** — internacionalização (PT/EN/ES)
- 🕵️ **i18next-browser-languagedetector** — detecta idioma do navegador e salva preferência
- 🧩 **react-icons** — ícones (WhatsApp, Instagram, menu, etc.)
- ✅ **ESLint (flat config)** — qualidade de código

---

## 🌎 Idiomas (i18n)

Idiomas suportados:

- 🇧🇷 `pt`
- 🇺🇸 `en`
- 🇪🇸 `es`

Como funciona:

- o idioma é detectado por prioridade: **localStorage → navegador → tag HTML**
- a preferência é salva em `localStorage` com a chave `vonanaLng`
- o atributo `lang` do `<html>` é sincronizado automaticamente quando o idioma muda

Traduções ficam em `src/i18n/locales/`.

---


## 🗂️ Estrutura do projeto (resumo)

- `src/main.jsx` — entrada do app + rotas
- `src/base/` — componentes base (header/footer + css)
- `src/index/` — seções da home
- `src/produtos/` — componentes da página de produtos
- `src/preparo/` — componentes da página de preparo/dicas
- `src/institucional/` — componentes da página institucional
- `src/seja um revendedor/` — componentes da área de revendedor
- `src/i18n/` — configuração e arquivos de tradução

---


## 🤝 Contribuição

Sugestões e melhorias são bem-vindas!

1. Crie uma branch
2. Faça as alterações
3. Rode `npm run lint`
4. Abra um PR

---

Feito com carinho para levar o verdadeiro sabor de Minas pra todo mundo 💚🧀🔥
