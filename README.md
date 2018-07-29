# Peak Design

## Components

- [SocialIcon](#SocialIcon)
- [WhiteSpace](#WhiteSpace)

## <a name="SocialIcon">SocialIcon:</a>

### Example

```
import React from 'react'
import { SocialIcon } from 'peak-design'

export default class Footer extends React.Component {
  renderSocialIcons() {
    const icons = [
      { name: 'twitter', url: 'https://twitter.com/LOUassistant?lang=en' },
      { name: 'linkedin', url: 'https://www.linkedin.com/company/lou-assistant' },
      { name: 'youtube', url: 'https://www.youtube.com/channel/UCCiCE0DwqFplf6SV2MhT4SA' }
    ]
    return icons.map(icon => {
      return (
        <SocialIcons
          key={icon.name}
          url={icon.url}
          color="#888"
          hovColor="rgb(59,200,200)"
          width={35}
          height={35}
          marginRight={5}
          marginLeft={5}
        />
      )
    })
  }

  render() {
    return <div>{this.renderSocialIcons()}</div>
  }
}
```

### Properties

| Property    |  Type  |
| ----------- | :----: |
| url         | string |
| color       | color  |
| hoverColor  | color  |
| width       |  int   |
| height      |  int   |
| marginLeft  |  int   |
| marginRight |  int   |

## <a name="WhiteSpace">WhiteSpace</a>

### Example

```
import React from 'react'
import { WhiteSpace } from 'peak-design'

export default class Heading extends React.Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <WhiteSpace height={20} />
        <p>Description</p>
      </div>
    )
  }
}
```

### Properties

| Property        | Type  |
| --------------- | :---: |
| height          |  int  |
| backgroundColor | color |
