<p align="center">
  <a href="https://github.com/Celtian/ngx-if-platform" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">NgxIfPlatform</h1>
</p>

[![npm version](https://badge.fury.io/js/ngx-if-platform.svg)](https://badge.fury.io/js/ngx-if-platform)
[![Package License](https://img.shields.io/npm/l/ngx-if-platform.svg)](https://www.npmjs.com/ngx-if-platform)
[![NPM Downloads](https://img.shields.io/npm/dm/ngx-if-platform.svg)](https://www.npmjs.com/ngx-if-platform)
[![Snyk](https://snyk.io/advisor/npm-package/ngx-if-platform/badge.svg)](https://snyk.io/advisor/npm-package/ngx-if-platform)
[![codecov](https://codecov.io/gh/Celtian/ngx-if-platform/branch/master/graph/badge.svg?token=1IRUKIKM0D)](https://codecov.io/gh/celtian/ngx-if-platform/)
[![stars](https://badgen.net/github/stars/celtian/ngx-if-platform)](https://github.com/celtian/ngx-if-platform/)
[![forks](https://badgen.net/github/forks/celtian/ngx-if-platform)](https://github.com/celtian/ngx-if-platform/)
[![HitCount](http://hits.dwyl.com/celtian/ngx-if-platform.svg)](http://hits.dwyl.com/celtian/ngx-if-platform)

> Angular directive for conditional display based on platform

> ✓ _Angular 16, Ivy and SSR compatible_

Here's the [demo](http://celtian.github.io/ngx-if-platform/) or [stackblitz live preview](https://stackblitz.com/edit/ngx-if-platform) or [codesandbox live preview](https://codesandbox.io/s/ngx-if-platform-dgtck)

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

or

```typescript
import { NgxIfPlatformModule } from 'ngx-if-platform';

@Component({
  standalone: true,
  imports: [NgxIfPlatformModule /* , ... */],
  // ...
})
```

## Compatibility

| Angular   | ngx-if-platform | Install                      |
| --------- | --------------- | ---------------------------- |
| >= 12     | 1.x             | `yarn add ngx-if-platform`   |
| >= 5 < 13 | 0.x             | `yarn add ngx-if-platform@0` |

## Quick start

### Example code

```html
<!-- ngxIf -->
<div *ngxIfBrowser>Is browser</div>
<!-- ngxIf can be disabled  -->
<ng-template [ngxIfServer]="true">Is server (disabled)</ng-template>
<!-- ngxIf else statement  -->
<ng-template [ngxIfServer] [ngxIfNotServer]="notServer">Is server</ng-template>
<ng-template #notServer>Not server</ng-template>
```

### Result

```code
  Is browser
  Is server (disabled)
  Not server
```

## Options

There are these directives: ngxIfBrowser, ngxIfServer, ngxIfWorkerApp, ngxIfWorkerUi

### Directive & attributes

| Option                  | Type        | Default | Description                                |
| ----------------------- | ----------- | ------- | ------------------------------------------ |
| **[ngxIfBrowser]**      | boolean     | true    | Directive can be disabled                  |
| **[ngxIfNotBrowser]**   | templateRef | none    | TemplateRef used if confition do not match |
| **[ngxIfServer]**       | boolean     | true    | Directive can be disabled                  |
| **[ngxIfNotServer]**    | templateRef | none    | TemplateRef used if confition do not match |
| **[ngxIfWorkerApp]**    | boolean     | true    | Directive can be disabled                  |
| **[ngxIfNotWorkerApp]** | templateRef | none    | TemplateRef used if confition do not match |
| **[ngxIfWorkerUi]**     | boolean     | true    | Directive can be disabled                  |
| **[ngxIfNotWorkerUi]**  | templateRef | none    | TemplateRef used if confition do not match |

## Dependencies

_None_

## License

Copyright &copy; 2021 - 2023 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
