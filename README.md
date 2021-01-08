# 🪝 use-ref-map

[![npm](https://img.shields.io/npm/v/react-contentful?style=flat-square)](https://www.pkgstats.com/pkg:react-contentful)
[![NPM](https://img.shields.io/npm/l/react-contentful?style=flat-square)](LICENSE)
[![npm](https://img.shields.io/npm/dt/react-contentful?style=flat-square)](https://www.pkgstats.com/pkg:react-contentful)

Dynamically generate and reference React reference instances with this handy hook.

## Install

Via [npm](https://npmjs.com/package/use-ref-map)

```sh
npm install use-ref-map
```

Via [Yarn](https://yarn.pm/use-ref-map)

```sh
yarn add use-ref-map
```

## How to use

```
import useRefMap from 'use-ref-map`

const ExampleComponent = ({ buttonData }) => {
  const { getRef, setRef } = useRefMap()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const email = getRef('email_input')?.current?.value
    const password = getRef('password_input')?.current?.value
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={setRef('email_input')} />
      <input type="password" ref={setRef('password_input')} />
    </form>
  )
}
```
_This is a silly example, but should give you an idea of how to use this hook. This is most useful when dealing with an array of components that require unique `ref` instance props passed to each, using an example key of something like, `dynamic-ref-${id}`._

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
