# TypeScript Build

## tsconfig.json

```
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "build",
    "target": "ES6",
    "lib": ["ES6"],
    "strict": true,
    "esModuleInterop": true,
    "module": "CommonJS"
  }
}
```

### include property

어떤 폴더 안의 코드를 컴파일 할지

### outDir property

where to put the output code

### target property

컴파일 할 JS의 버전을 특정함

### lib property

It specifies what environment the code is goin to run on

##

### Type Definition

TS file with comments that explains to TS the types of JS code

### //@ts-check

to type check JS files

`하나의 프로젝트에서 ts와 js를 혼용하여 사용할 수 있음`

`모든 js file에서 JSDoc을 사용할 수 있음`
