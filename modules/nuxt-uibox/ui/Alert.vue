<script>
import { computed } from "@nuxtjs/composition-api"
import { CSSColor } from "../useCSS"
import useAlert from "../useAlert"

export default {
  setup(props){
    const { Alert } = useAlert()
    
    const bgToast = {
      error: 'red',
      info: 'blue',
      success: 'green',
      warn: 'yellow',
    }
    
    const colorToast = {
      error: 'white',
      info: 'white',
      success: 'white',
      warn: 'black',
    }
    
    const CSS = computed(() => {
      const box = {}
      const msg = {}
      box[CSSColor['bgColor_' + (bgToast[Alert.isToast] || 'white')]] = true
      msg.color = colorToast[Alert.isToast] || 'black'
      return { box, msg }
    })

    return {
      Alert,
      CSS
    }
  }
}

</script>

<template>
  <div :class="[$style.root, {[$style['root--visible']]: Alert.visible}]">
    <Content max-width="424">
      <div :color="CSS.box[0]" :class="[$style.root__box, CSS.box]">
        <Padding>
          <Grid align-items="center" columns="1fr_max">
            <Heading v-if="Alert.title" is-small level="4"><div v-html="Alert.title"></div></Heading>
            <Icon v-if="!Alert.isToast" @click="Alert.close()" bg-hover="black" br-radius="4" name="times" size="16"/>
          </Grid>
          <P :color="CSS.msg.color"><div v-html="Alert.message"></div></P>
          <Grid v-if="!Alert.isToast" auto-fill="144" gap="16">
            <Button v-if="Alert.buttons.secondary.text && Alert.buttons.secondary.visible" @click="Alert.close()" bg="white" br-color="accent" color="primary" is-fill margin-top="24">{{ Alert.buttons.secondary.text }}</Button>
            <div v-else></div>
            <Button v-if="Alert.buttons.primary.text && Alert.buttons.primary.visible" @click="Alert.accept()" is-fill margin-top="24">{{ Alert.buttons.primary.text }}</Button>
          </Grid>
        </Padding>
      </div>
    </Content>
  </div>
</template>

<style module>
.root {
  background-color: transparent;
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  transition: background .3s;
  z-index: 20;
} .root--visible {
  background-color: rgba(var(--primary-color), 80%);
} .root--visible .root__box {
  pointer-events: visible;
  transform: translateY(24px);
}

.root__box {
  border-radius: 3px;
  transform: translateY(-110%);
  transition: transform .3s;
}
</style>
