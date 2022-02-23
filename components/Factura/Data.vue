<template>
  <div :class="$style.root">
    <Heading color="white" level="4">{{ getDoc.bill.clientName || 'Jhon Doe' }}</Heading>
    <P color="white" margin="8">Estos son los datos de tu factura</P>
    <div :class="$style.root__fields" justify-content="center">
      <div :class="$style.root__fields__field">
        <Label color="white">N° Factura</Label>
        <P color="accent"><b>{{ getDoc.bill.billNumber }}</b></P>
      </div>
      <div :class="$style.root__fields__field">
        <Label color="white">Fecha emisión</Label>
        <P color="accent">{{ getDoc.bill.date }} {{ getDoc.bill.hour }}</P>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from '@nuxtjs/composition-api'

export default {
  name: 'ComponentFacturaData',
  setup() {
    // inject
    const getDoc = inject('getDoc')

    return {
      getDoc
    }
  }
}
</script>

<style module>
.root {
  margin: 24px auto;
  max-width: 264px;
  text-align: center;
}

.root__fields {
  margin-top: 8px;
}

.root__fields__field {
  border: 2px dashed rgb(var(--graylight));
  padding: 8px 12px;
}
</style>
