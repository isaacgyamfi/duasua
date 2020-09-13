<template>
  <c-box p="20px" height="90vh">
    <c-flex direction="row" justify="center">
      <c-flex direction="column" justify="space-between" maxW="48vw" p="20px">
        <c-text fontSize="30px"
          >“A passionate look, touch or a hug on a plant is enough to open your
          inner eyes than going for a serious yoga and other therapies”</c-text
        >
        <c-button-group :spacing="4">
          <c-button
            color="#ffffff"
            border="none"
            shadow="sm"
            backgroundColor="green.500"
            >Explore plants</c-button
          >
          <c-button
            color="green.500"
            border="none"
            shadow="sm"
            backgroundColor="#ffffff"
            >Learn new plants</c-button
          >
        </c-button-group>
      </c-flex>
      <c-flex justify="center" align="center">
        <c-box rounded="md" backgroundColor="#ffffff" shadow="md" p="15px">
          <c-text mt="0" mb="5px">How good are you with plants?</c-text>
          <c-image
            objectFit="cover"
            h="170px"
            w="300px"
            rounded="md"
            src="https://bs.floristic.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30"
          />
          <c-box>
            <c-form-control>
              <c-form-label>Favorite Naruto Character</c-form-label>
              <c-radio-group default-value="Itachi">
                <c-radio value="Sasuke">Sasuke</c-radio>
                <c-radio value="Nagato">Nagato</c-radio>
                <c-radio value="Itachi">Itachi</c-radio>
                <c-radio value="Sage of the six Paths"
                  >Sage of the six Paths</c-radio
                >
              </c-radio-group>
            </c-form-control>
            <c-button variantColor="green" border="none" mt="10px" size="sm"
              >Submit</c-button
            >
          </c-box>
        </c-box>
      </c-flex>
    </c-flex>
  </c-box>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
};
</script>
