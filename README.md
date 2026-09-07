# react-native-fieldops-ui

fieldops-ui: A composable, token-driven UI kit for React Native, shipping Button, Text, TextField, Select, and Badge.

## Installation


```sh
npm install react-native-fieldops-ui
```


## Usage


```Button
import { Button } from "fieldops-ui";

<Button
  label="Submit"
  variant="primary"
  size="md"
  onPress={() => console.log("Clicked")}
/>
```

```Text
import { Text } from "fieldops-ui";

<Text variant="heading">Hello World</Text>
```

```TextField
import { TextField } from "fieldops-ui";

<TextField
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChange={setEmail}
  helperText="We’ll never share your email."
/>
```

```Select
import { Select } from "fieldops-ui";

<Select
  options={[
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" }
  ]}
  value={selected}
  onChange={setSelected}
  placeholder="Choose one"
/>
```

```Badge
import { Badge } from "fieldops-ui";

<Badge status="in-progress" label="Working" />
```


## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
