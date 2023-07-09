<template>
  <table>
    <!-- Loop through array of headers titles -->
    <tr>
      <th v-for="(header, index) in headerTitles" :key="index">{{ header }}</th>
      <th>
        {{ actionsButtonsLabel || "Action Header" }}
      </th>
    </tr>
    <tr v-for="item in fieldsData" :key="item.id">
      <template v-for="(value, key) in item" :key="value">
        <td v-if="filedsToShow.includes(key)">
          {{ value }}
        </td>
      </template>

      <td v-if="actionsButtonsFn">
        <base-button
          @click="actionsButtonsFn(item.id)"
          :class="actionsButtonsClasses"
          >{{ actionsButtonsLabel || "Action Button" }}</base-button
        >
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "ListingTable",
  props: {
    // Array of titles for each column in the table.
    headerTitles: {
      type: Array,
      required: true,
    },
    // Array of Objects for each row in the table.
    fieldsData: {
      type: Array,
      required: true,
    },
    // Array of columns to show from fieldsData.
    filedsToShow: {
      type: Array,
      required: true,
    },
    /** Action column is optional */
    // label for the action button.
    actionsButtonsLabel: {
      type: String,
      required: false,
    },
    // function triggered when the button is clicked.
    actionsButtonsFn: {
      type: Function,
      required: false,
    },
    // classes added to the action button.
    actionsButtonsClasses: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
