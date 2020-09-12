<template>
  <c-flex justify="center" align="center">
    <c-flex direction="row" wrap="wrap">
      <PlantCard v-bind:plant="plant" v-for="plant in plants" v-bind:key="plant.id" />
    </c-flex>
  </c-flex>
</template>

<script>
import PlantCard from "@/components/PlantCard.vue";
export default {
  name: "Plants",
  components: {
    PlantCard,
  },
  data: function () {
    return {
      plants: [
        {
          id: 678281,
          common_name: "Evergreen Oak",
          slug: "quercus-rotundifolia",
          scientific_name: "Quercus rotundifolia",
          year: 1785,
          bibliography: "Encycl. 1: 723 (1785)",
          author: "Lam.",
          status: "accepted",
          rank: "species",
          family_common_name: null,
          genus_id: 5778,
          image_url:
            "https://bs.floristic.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30",
          synonyms: [
            "Quercus rotundifolia var. macrocarpa",
            "Quercus rotundifolia f. brevicupulata",
            "Quercus rotundifolia subsp. maghrebiana",
          ],
          genus: "Quercus",
          family: "Fagaceae",
        },
        {
          id: 190500,
          common_name: "stinging nettle",
          slug: "urtica-dioica",
          scientific_name: "Urtica dioica",
          year: 1753,
          bibliography: "Sp. Pl.: 984 (1753)",
          author: "L.",
          status: "accepted",
          rank: "species",
          family_common_name: "Nettle family",
          genus_id: 1028,
          image_url:
            "https://bs.floristic.org/image/o/85256a1c2c098e254fefe05040626a4df49ce248",
          synonyms: [
            "Urtica submitis",
            "Urtica haussknechtii",
            "Urtica eckloniana",
          ],
          genus: "Urtica",
          family: "Urticaceae",
        },
        {
          id: 126957,
          common_name: "orchardgrass",
          slug: "dactylis-glomerata",
          scientific_name: "Dactylis glomerata",
          year: 1753,
          bibliography: "Sp. Pl.: 71 (1753)",
          author: "L.",
          status: "accepted",
          rank: "species",
          family_common_name: "Grass family",
          genus_id: 2284,
          image_url:
            "https://bs.floristic.org/image/o/05c2f3cf28a921235daece7b31806741c7251784",
          synonyms: [
            "Dactylis glomerata var. vivipara",
            "Phalaris glomerata",
            "Trachypoa vulgaris",
          ],
          genus: "Dactylis",
          family: "Poaceae",
        },
        {
          id: 167888,
          common_name: "narrowleaf plantain",
          slug: "plantago-lanceolata",
          scientific_name: "Plantago lanceolata",
          year: 1753,
          bibliography: "Sp. Pl.: 113 (1753)",
          author: "L.",
          status: "accepted",
          rank: "species",
          family_common_name: "Plantain family",
          genus_id: 5418,
          image_url:
            "https://bs.floristic.org/image/o/78a8374f009e6ed2dc71ca17d18e4271ea0a2a7b",
          synonyms: [
            "Plantago trinervis",
            "Plantago lanceolata var. lanuginosa",
            "Plantago glareosa",
          ],
          genus: "Plantago",
          family: "Plantaginaceae",
        },
      ],
    };
  },
};
</script>

<style></style>
