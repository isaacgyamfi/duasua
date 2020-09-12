<template>
  <c-box m="5px" background="#ffffff" w="320px" shadow="sm" rounded="md">
    <c-flex direction="row">
      <c-box>
        <c-image
          w="160px"
          h="180px"
          objectFit="cover"
          roundedTopLeft="md"
          roundedBottomLeft="md"
          :src="plant.image_url"
        />
      </c-box>
      <c-box pl="10px">
        <c-text fontSize="xs">Common name</c-text>
        <c-text fontWeight="bold" m="0">{{ plant.common_name }}</c-text>
        <c-text fontSize="12px">Scientific name</c-text>
        <c-text fontSize="md">{{ plant.scientific_name }}</c-text>
      </c-box>
    </c-flex>
  </c-box>
</template>

<script>
export default {
  name: "PlantCard",
  props: {
    plant: Object,
  },
};
</script>

<style></style>
