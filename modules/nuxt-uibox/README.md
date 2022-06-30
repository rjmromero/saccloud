# Nuxt UIBox
Vue components for personal use in production projects

<!-- ## Requirements -->
## \<Alert/>
```html
<!-- layouts/default.vue -->
<template>
  <div>
    <Alert/>
    <Nuxt/>
  </div>
</template>
```

```js
// pages/index.vue
<script>
  import { Alert } from "nuxt-uibox/useAlert"

  export default {
    mounted() {
      Alert.show({
        title: 'Alert',
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
      })
      // Or
      Alert.show({
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        isToast: 'success'
      })
    }
  }
</script>
```

## \<Grid>...\</Grid>

| Property     | Type              | Default
| ------------ | :---------------- | :------
| alignSelf    | String            | 
| alignItems   | String            | 
| autoFill     | String            | 
| bg           | String            | 
| columns      | String            | 
| gap          | String \| Number  | 
| justify      | String            | 
| spaceBetween | Boolean           | 
| tag          | String            | div
|

#### Grid > alignSelf
```html
<!-- center | end | normal -->
<Grid align-self="center">...<Grid/>
```

#### Grid > alignItems
```html
<!-- center | end | start -->
<Grid align-items="center">
  <div></div>
  <div></div>
<Grid/>
```

```html
<!--
128 | 136 | 144 | 152 | 160 | 168 | 176 | 184 |
192 | 200 | 208 | 216 | 224 | 232 | 240 | 248 |
256 | 264 | 272 | 280 | 288 | 296 | 304 | 312 |
320 | 328 | 336 | 344 | 352 | 360 | 368
-->
<Grid auto-fill="272">
  <div></div>
  <div></div>
<Grid/>
```


#### Grid > bg
```html
<!--
primary | secondary | accent | black | white | gray | graylight |
yellow | blue | red | green

bg = background
-->
<Grid bg="accent">...</Grid>
```

#### Grid > columns
```html
<!--
1fr_max               [........|....]
max_1fr               [....|........]
max_auto              [....|........]
max_1fr_max           [.....|.|.....]
min_1fr_min           [..|.......|..]
1fr_1fr               [......|......]
1fr_1fr_1fr           [....|....|....]
1fr_1fr_1fr_1fr       [...|...|...|...]
 -->
<Grid columns="1fr_1fr">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
<Grid/>
```

#### Grid > justify
```html
<!-- center | end -->
<Grid justify="center">
  <div></div>
<Grid/>
```

#### Grid > gap
```html
<!-- 4 | 8 | 16 | 24 | 32 | 40 | 48 -->
<Grid gap="24">
  <div></div>
  <div></div>
<Grid/>
```

#### Grid > spaceBetween
```html
<!-- [✌...|✌|...✌] -->
<Grid columns="1fr_1fr_1fr" space-between>
  <div>✌</div>
  <div>✌</div>
  <div>✌</div>
<Grid/>
```

#### Grid > tag
```html
<Grid tag="ul">
  <li></li>
<Grid/>
```

## \<Icon/>

| Property         | Type               | Default
| ---------------- | :----------------- | :------
| alignSelf        | String             |
| bg               | String             |
| bgHover          | String             |
| bsHover          | String             |
| brColor          | String             |
| brColorHover     | String             |
| brRadius         | String \| Number   |
| center           | Boolean            |
| color            | String             | black
| disabled         | Boolean            |
| hover            | String             |
| href             | String             |
| isRound          | Boolean            |
| justifySelf      | String             |
| name             | String             | times
| margin           | String \| Number   |
| marginBottom     | String \| Number   |
| marginLeft       | String \| Number   |
| marginRight      | String \| Number   |
| marginTop        | String \| Number   |
| padding          | String \| Number   |
| paddingBottom    | String \| Number   | 8
| paddingLeft      | String \| Number   | 8
| paddingRight     | String \| Number   | 8
| paddingTop       | String \| Number   | 8
| size             | String \| Number   | 24
| target           | String             | _blank
| to               | String             |
|

#### Icon > alignSelf
```html
<!-- center | end | normal -->
<Icon align-self="center" />
```

#### Icon > bg - bgHover - bsHover - brColor - brColorHover
```html
<!--
primary | secondary | accent | black | white | gray | graylight |
yellow | blue | red | green

bg = background
bs = box-shadow
br = border
-->
<Icon
  bg="accent"
  bg-hover="primary"
  bs-hover="primary"
  br-color="accent"
  br-color-hover="primary"
  color="primary"
/>
```

#### Icon > brRadius
```html
<!-- 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 -->
<Icon bg="red" br-radius="8"/>
```

#### Icon > center
```html
<Icon center/>
```

#### Icon > disabled
```html
<Icon bg="red" disabled/>
```

#### Icon > hover
```html
<Icon hover="red"/>
<!-- <Icon bs-hover="red" br-color-hover="red"/> -->
```

#### Icon > href - target
```html
<Icon href="https://nuxtjs.org" target="_self"/>
```

#### Icon > isRound
```html
<Icon bg="red" is-round/>
```
#### Icon > justifySelf
```html
<!-- center | end | normal -->
<Icon justify-self="end"/>
```

#### Icon > name
```html
<!--
angle-down | angle-left-b | angle-left | angle-right-b | angle-right |
angle-up | arrow-down | arrow-left | arrow-right | arrow-up | asterisk |
bars | bell-slash | bell | book-open | book | box | calendar-alt |
calendar-slash | camera-plus | camera | check-circle | check-square |
clipboard-notes | cloud-upload | comment-alt-message | confused | copy |
credit-card | envelope-alt | envelope-times | envelope-upload | envelope |
estate | exclamation-octagon | exclamation-triangle | eye-slash | eye |
facebook-f | facebook | file-edit-alt | filter-slash | filter |
grip-horizontal-line | hunting | image-plus | image-upload | image |
info-circle | instagram-alt | instagram | layers-slash | layers |
letter-english-a | link-alt | link-h | location-pin-alt | lock |
map-marker-slash | minus | outgoing-call | phone | plus | question-circle |
reddit-alien-alt | restaurant | search-minus | search-plus | search |
setting | share-alt | shopping-bag | shopping-cart | signout | square-full |
square | store-alt | suitcase | tablet | telegram-alt | times | trash-alt |
trash | twitter-alt | twitter | upload-alt | upload | user-check |
user-circle | user | whatsapp-alt | whatsapp | youtube
-->
<Icon name="bars"/>
```

#### Icon > margin - marginBottom - marginLeft - marginRight - marginTop
```html
<!-- 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 -->
<Icon margin="24"/>
<Icon margin-bottom="16"/>
```
#### Icon > padding - paddingBottom - paddingLeft - paddingRight - paddingTop
```html
<!-- 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 -->
<Icon padding="24"/>
<Icon padding-bottom="16"/>
```

#### Icon > size
```html
<!-- any -->
<Icon size="20"/>
```

#### Icon > to
```html
<Icon hover="accent" name="setting" to="/setting"/>
```

## \<Img/>

| Property         | Type               | Default
| ---------------- | :----------------- | :------
| alignSelf        | String             |
| brColor          | String             |
| brRadius         | String \| Number   |
| center           | Boolean            |
| fit              | String             |
| fitCss           | String             |
| height           | String \| Number   |
| href             | String             |
| inline           | Boolean            |
| isFill           | Boolean            |
| isRound          | Boolean            |
| justifySelf      | String             |
| margin           | String \| Number   |
| marginBottom     | String \| Number   |
| marginLeft       | String \| Number   |
| marginRight      | String \| Number   |
| marginTop        | String \| Number   |
| maxHeight        | String \| Number   |
| maxWidth         | String \| Number   |
| minHeight        | String \| Number   |
| minWidth         | String \| Number   |
| lazy             | Boolena            |
| padding          | String \| Number   |
| paddingBottom    | String \| Number   |
| paddingLeft      | String \| Number   |
| paddingRight     | String \| Number   |
| paddingTop       | String \| Number   |
| preset           | String             |
| sizes            | String             |
| src              | String             |
| target           | String             | _blank
| to               | String             |
| width            | String \| Number   |
| wh               | String \| Number   |
|

#### Img > alignSelf
```html
<!-- center | end | normal -->
<Img align-self="center" src="..." />
```

#### Img > brColor
```html
<!--
primary | secondary | accent | black | white | gray | graylight |
yellow | blue | red | green

br = border
-->
<Img br-color="graylight" src="..." />
```

#### Img > brRadius
```html
<!-- 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 -->
<Img bg="red" br-radius="8"src="..." />
```

#### Img > center
```html
<Img center src="..."/>
```

#### Img > fit
```html
<!-- cover | contain | fill | inside | outside -->
<Img fit="contain" src="..."/>
```

#### Img > fitCss
```html
<!-- cover -->
<Img fit-css="cover" src="..."/>
```

#### Img > height - width
```html
<Img height="200" src="..." width="400"/>
```

#### Img > href - target
```html
<Img href="https://nuxtjs.org" src="..." target="_self"/>
```

#### Img > inline
```html
<Img inline src="..."/>
```

#### Img > isFill
```html
<Img is-fill src="..."/>
```

#### Img > isRound
```html
<Img is-round src="..."/>
```

#### Img > justifySelf
```html
<!-- center | end | normal -->
<Img justify-self="end" src="..."/>
```

#### Img > margin - marginBottom - marginLeft - marginRight - marginTop
```html
<!-- 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 -->
<Img margin="24" src="..."/>
<Img margin-bottom="16" src="..."/>
```

#### Img > maxHeight - maxWidth - minHeight - minWidth
```html
<Img
  max-height="400"
  max-width="800"
  min-height="200"
  min-width="400"
  src="..."
/>
```

#### Img > lazy
```html
<Img lazy src="..."/>
```

#### Img > padding - paddingBottom - paddingLeft - paddingRight - paddingTop
```html
<!-- 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 -->
<Img padding="24" src="..."/>
<Img padding-bottom="16" src="..."/>
```

#### Img > preset
```html
<!-- nuxt.config.js
export default {
  presets: {
    ['avatar-small']: {
      modifiers: {
        fit: 'cover',
        height: 48,
        width: 48
      }
    }
  },
  ...
}
 -->
<Img preset="avatar-small" src="..."/>
```

#### Img > sizes
```html
<!-- xs 320 | sm 640 | md 768 | lg 1024 | xl 1280 | xxl 1536 | 2xl 1536 -->
<Img sizes="sm:100vw lg:400px" src="..."/>
```

#### Img > src
```html
<Img src="..."/>
```

#### Img > to
```html
<Img src="..." to="/profile"/>
```

#### Img > wh
```html
<Img src="..." wh="200"/>
<!-- <Img height="200" width="200"/> -->
```

## \<Margin>...\</Margin>

| Property    | Type                        | Default
| ----------- | :-------------------------- | :------
| all         | String \| Number            | 24
| bg          | String                      | 
| bottom      | String \| Number \| Boolean | 24
| left        | String \| Number \| Boolean | 24
| right       | String \| Number \| Boolean | 24
| tag         | String \| Number            | div
| top         | String \| Number \| Boolean | 24
|

#### Margin > all
```html
<Margin>...<Margin/>
<!--
.class-module-hash {
  margin-bottom: 24px;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 24px;
}
-->

<!--
 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96
-->
<Margin all="72">...<Margin/>
<!--
.class-module-hash {
  margin-bottom: 72px;
  margin-left: 72px;
  margin-right: 72px;
  margin-top: 72px;
}
-->
```

#### Margin > bg
```html
<!-- primary | secondary | accent | black | white | gray | graylight |
yellow | blue | red | green -->
<Margin bg="primary">...<Margin/>
```

#### Margin > bottom
```html
<Margin :bottom="false">...<Margin/>
<!--
.class-module-hash {
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 24px;
}
-->
```

#### Margin > left
```html
<Margin :left="8">...<Margin/>
<!--
.class-module-hash {
  margin-bottom: 24px;
  margin-left: 8px;
  margin-right: 24px;
  margin-top: 24px;
}
-->
```

#### Margin > right
```html
<Margin :right="32">...<Margin/>
<!--
.class-module-hash {
  margin-bottom: 24px;
  margin-left: 24px;
  margin-right: 32px;
  margin-top: 24px;
}
-->
```

#### Margin > tag
```html
<Margin tag="p">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
<Margin/>
```

## \<Padding>...\</Padding>

| Property    | Type                        | Default
| ----------- | :-------------------------- | :------
| all         | String \| Number            | 24
| bg          | String                      | 
| bottom      | String \| Number \| Boolean | 24
| left        | String \| Number \| Boolean | 24
| right       | String \| Number \| Boolean | 24
| tag         | String \| Number            | div
| top         | String \| Number \| Boolean | 24
|

#### Padding > all
```html
<Padding>...<Padding/>
<!--
.class-module-hash {
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}
-->

<!--
 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96
-->
<Padding all="72">...<Padding/>
<!--
.class-module-hash {
  padding-bottom: 72px;
  padding-left: 72px;
  padding-right: 72px;
  padding-top: 72px;
}
-->
```

#### Padding > bg
```html
<!-- primary | secondary | accent | black | white | gray | graylight |
yellow | blue | red | green -->
<Padding bg="primary">...<Padding/>
```

#### Padding > bottom
```html
<Padding :bottom="false">...<Padding/>
<!--
.class-module-hash {
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}
-->
```

#### Padding > left
```html
<Padding :left="8">...<Padding/>
<!--
.class-module-hash {
  padding-bottom: 24px;
  padding-left: 8px;
  padding-right: 24px;
  padding-top: 24px;
}
-->
```

#### Padding > right
```html
<Padding :right="32">...<Padding/>
<!--
.class-module-hash {
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 32px;
  padding-top: 24px;
}
-->
```
#### Padding > tag
```html
<Padding tag="p">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
<Padding/>
```
