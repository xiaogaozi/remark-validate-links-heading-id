# remark-validate-links-heading-id

The plugin for [remark-validate-links](https://github.com/remarkjs/remark-validate-links) to support custom heading ID (e.g. `# Heading {#custom-heading-id}`).

## Installation

```shell
# This step is optional if you have added
yarn add remark-validate-links

yarn add remark-validate-links-heading-id
```

## Usage

Edit `package.json`:

```json
{
  ...
  "remarkConfig": {
    "plugins": [
      "remark-validate-links-heading-id",
      "remark-validate-links"
    ]
  }
}
```
