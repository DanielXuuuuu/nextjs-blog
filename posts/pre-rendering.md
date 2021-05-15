---
title: 'Two Forms of Pre-rendering'
seoTitle: How I Built my Blog using MDX, Next.js, and React
abstract: An in-depth look at the technical structure for my blog.
isPublished: true
publishedOn: '2020-01-01'
---


# fuck

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.