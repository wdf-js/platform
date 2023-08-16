# Support Ukraine <img alt="ukraine" height="32" width="32" src="https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1e6.png">

While you're reading this text we're suffering from russia's bombs. Please help us to stand against russia's invasion and prevent World War III. It's pretty easy with **[UNITED24 fundraising platform](https://u24.gov.ua/)**. Thank you!

## WDF — WorkerD (Cloudflare Workers) Framework

> [![License][license-badge]][license-link] [![Runtime][runtime-badge]][runtime-link]  
> [![Build][build-badge]][build-link] [![GitHub release][release-badge]][release-link] [![NPM release][npm-badge]][npm-link]

Simple framework for writing your own apps on serverless platforms powered by [workerd][runtime-link].  
This framework intended to be as light as possible to start fast and designed to allow you to write your apps like you do with regular server systems. Heavily inspired by incredible [Nest.js][nest] framework.  
Builds itself using [tsup][tsup].

<!-- External links -->

<!-- Badges -->

[license-badge]: https://img.shields.io/badge/License-UCL%201.0-c7a800?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjRkZENzAwIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTMgNmwzIDFtMCAwbC0zIDlhNS4wMDIgNS4wMDIgMCAwMDYuMDAxIDBNNiA3bDMgOU02IDdsNi0ybTYgMmwzLTFtLTMgMWwtMyA5YTUuMDAyIDUuMDAyIDAgMDA2LjAwMSAwTTE4IDdsMyA5bS0zLTlsLTYtMm0wLTJ2Mm0wIDE2VjVtMCAxNkg5bTMgMGgzIi8%2BPC9zdmc%2BCg%3D%3D&label=License&style=flat-square

[runtime-badge]: https://img.shields.io/badge/Runtime-workerd-f38020?logo=data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHdpZHRoPSIxNTU2IiBoZWlnaHQ9IjE1NTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE0MTAuOCAxMTUzLjMtMTA0Mi0zLjJWNzQ5LjhsODI5LjEtNi41IDMyLjMgMTIuOSAxODAuNiA0MnoiIHN0eWxlPSJmaWxsOiNmZmYiLz48cGF0aCBkPSJNMTA2Mi40IDExNTAuMWMwIDYuNC02LjQgOS42LTEyLjkgOS42SDE0cS0xLjktLjEtMy43LS44LTEuNy0uOC0zLTIuMi0xLjQtMS4zLTIuMS0zLS44LTEuOC0uOS0zLjYtMS00LjQtMS43LTguOHQtMS4xLTguOXEtLjQtNC40LS41LTguOS0uMS00LjUuMS05YTIzNyAyMzcgMCAwIDEgNjYuNi0xNjQuMyAyMzQuOSAyMzQuOSAwIDAgMSAxNjIuNC03MS4zcS0xLjYtNy4xLTIuNi0xNC40LTEtNy4yLTEuNC0xNC41LS40LTcuMy0uMi0xNC42dDEtMTQuNmExNjkgMTY5IDAgMCAxIDQ4LjItMTAwLjMgMTY4IDE2OCAwIDAgMSAxMDAuMi00OC4yQTE3NC45IDE3NC45IDAgMCAxIDQ2NSA2ODljOS4yIDQuNCAxOC4xIDkuNiAyNi40IDE1LjZhMzY3LjggMzY3LjggMCAwIDEgNTg1LjMtMTYxLjUgMzY3LjQgMzY3LjQgMCAwIDEgMTIxLjIgMjAwLjJjMy4yIDMuMiAwIDYuNSAwIDkuN2wtMzIuMyA4My45YTIwMC40IDIwMC40IDAgMCAxLTY1LjYgODMuNyAyMDQuNSAyMDQuNSAwIDAgMS05OC45IDM5bC01NjQuNSA2LjVjLTYuNSAwLTkuNyAzLjItMTIuOSA5LjYtLjguNi0xLjQgMS4zLTEuOCAyLjJhNiA2IDAgMCAwLS43IDIuN2MwIC45LjMgMS44LjcgMi43LjQuOCAxIDEuNiAxLjggMi4xIDMuMiAwIDYuNCAzLjIgOS42IDMuMmw1NjEuNCA2LjVhOTcuMiA5Ny4yIDAgMCAxIDM3LjQgMTEgMTA1LjYgMTA1LjYgMCAwIDEgMzAuMyAyNC41IDk0LjUgOTQuNSAwIDAgMSAxNSA0MC44IDg5LjIgODkuMiAwIDAgMS01LjMgNDMuMXoiIHN0eWxlPSJmaWxsOiNmNDgxMjAiLz48cGF0aCBkPSJNMTM2Ni41IDc3Ni45YTMwOC41IDMwOC41IDAgMCAxIDE4OS41IDI4Mi44cS0uMyAxMC42LTEuMyAyMS4ydC0yLjYgMjEuMXEtMS42IDEwLjUtMy45IDIxLTIuMiAxMC40LTUuMSAyMC42Yy4yIDEuMy4xIDIuNy0uNCAzLjlhOSA5IDAgMCAxLTIgMy40IDkgOSAwIDAgMS0zLjQgMmMtMS4yLjUtMi42LjYtMy45LjRoLTQyNS44Yy02LjUgMC05LjctNi41LTYuNS05LjdsNi41LTI5LjFhMjA0LjcgMjA0LjcgMCAwIDEgNjUuNi04My42IDIwMS40IDIwMS40IDAgMCAxIDk4LjktMzlsMTIyLjYtNi41YzYuNCAwIDkuNy0zLjIgMTIuOS05LjcuNy0uNSAxLjQtMS4zIDEuOC0yLjFhNi4zIDYuMyAwIDAgMCAwLTUuNCA1LjMgNS4zIDAgMCAwLTEuOC0yLjFjLTMuMiAwLTYuNS0zLjMtOS43LTMuM2wtMTE5LjMtNi40YTk2LjggOTYuOCAwIDAgMS0zNy40LTExIDEwNS42IDEwNS42IDAgMCAxLTMwLjQtMjQuNSA5MS44IDkxLjggMCAwIDEtMTQuOS02Mi43IDkyIDkyIDAgMCAxIDUuMi0yMS4zbDIyLjYtNzcuNWMzLjItMy4yIDYuNS02LjQgOS43LTYuNGgxNi4xYzQwLjIuMiA3OS45IDguNCAxMTcgMjMuOXoiIHN0eWxlPSJmaWxsOiNmYWFkM2YiLz48L3N2Zz4K&logoColor=f38020&style=flat-square

[build-badge]: https://img.shields.io/github/actions/workflow/status/wdf-js/platform/package.yml?branch=main&style=flat-square&label=Build&logo=github

[release-badge]: https://img.shields.io/github/v/release/wdf-js/platform?label=GitHub%20release&logo=github&style=flat-square

[npm-badge]: https://img.shields.io/npm/v/@wdf/core?color=cb3837&label=NPM%20release&logo=npm&style=flat-square

<!-- Resource links -->

[license-link]: https://github.com/wdf-js/platform/blob/main/LICENSE

[runtime-link]: https://github.com/cloudflare/workerd

[build-link]: https://github.com/wdf-js/platform/actions/workflows/package.yml

[release-link]: https://github.com/wdf-js/platform/releases

[npm-link]: https://www.npmjs.com/package/@wdf/core

[nest]: https://nestjs.com

[tsup]: https://tsup.egoist.dev
