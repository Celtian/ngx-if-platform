<p align="center">
  <a href="https://github.com/Celtian/ngx-if-platform" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">NgxIfPlatform</h1>
</p>

[![npm version](https://badge.fury.io/js/ngx-if-platform.svg)](https://badge.fury.io/js/ngx-if-platform)
[![Package License](https://img.shields.io/npm/l/ngx-if-platform.svg)](https://www.npmjs.com/ngx-if-platform)
[![NPM Downloads](https://img.shields.io/npm/dm/ngx-if-platform.svg)](https://www.npmjs.com/ngx-if-platform)
[![Build & Publish](https://github.com/celtian/ngx-if-platform/workflows/Build%20&%20Publish/badge.svg)](https://github.com/celtian/ngx-if-platform/actions)
[![codecov](https://codecov.io/gh/Celtian/ngx-if-platform/branch/master/graph/badge.svg?token=1IRUKIKM0D)](https://codecov.io/gh/celtian/ngx-if-platform/)
[![stars](https://badgen.net/github/stars/celtian/ngx-if-platform)](https://github.com/celtian/ngx-if-platform/)
[![forks](https://badgen.net/github/forks/celtian/ngx-if-platform)](https://github.com/celtian/ngx-if-platform/)
[![HitCount](http://hits.dwyl.com/celtian/ngx-if-platform.svg)](http://hits.dwyl.com/celtian/ngx-if-platform)

> Angular directive for conditional display based on platform

> ✓ _Angular 12, Ivy and SSR compatible_

Here's the [demo](http://celtian.github.io/ngx-if-platform/) or ~~[stackblitz live preview](https://stackblitz.com/edit/ngx-if-platform)~~ or [codesandbox live preview](https://codesandbox.io/s/ngx-if-platform-dgtck)

- Lightweight
- No dependencies!
- Directive way

## Install

1. Use yarn (or npm) to install the package

```terminal
yarn add ngx-if-platform
```

2. Add NgxIfPlatformModule into your module `imports`

```typescript
  import { NgxIfPlatformModule } from 'ngx-if-platform';

  @NgModule({
   // ...
   imports: [
     // ...
     NgxIfPlatformModule
   ]
  })
```

## Quick start

### Example code

```html
<!-- ngIf -->
<div *ngIfBrowser>Is browser</div>
<!-- ngIf can be disabled  -->
<ng-template [ngIfServer]="true">Is server (disabled)</ng-template>
<!-- ngIf else statement  -->
<ng-template [ngIfServer] [ngIfNotServer]="notServer">Is server</ng-template>
<ng-template #notServer>Not server</ng-template>
```

### Result

```code
  Is browser
  Is server (disabled)
  Not server
```

## Options

There are these directives: ngIfBrowser, ngIfServer, ngIfWorkerApp, ngIfWorkerUi

### Directive & attributes

| Option                 | Type        | Default | Description                                |
| ---------------------- | ----------- | ------- | ------------------------------------------ |
| **[ngIfBrowser]**      | boolean     | true    | Directive can be disabled                  |
| **[ngIfNotBrowser]**   | templateRef | none    | TemplateRef used if confition do not match |
| **[ngIfServer]**       | boolean     | true    | Directive can be disabled                  |
| **[ngIfNotServer]**    | templateRef | none    | TemplateRef used if confition do not match |
| **[ngIfWorkerApp]**    | boolean     | true    | Directive can be disabled                  |
| **[ngIfNotWorkerApp]** | templateRef | none    | TemplateRef used if confition do not match |
| **[ngIfWorkerUi]**     | boolean     | true    | Directive can be disabled                  |
| **[ngIfNotWorkerUi]**  | templateRef | none    | TemplateRef used if confition do not match |

## Dependencies

_None_

## License

Copyright &copy; 2021 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
