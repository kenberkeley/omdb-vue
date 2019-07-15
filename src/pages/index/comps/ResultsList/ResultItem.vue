<template>
  <a class="-result-item" href="javascript:;">
    <div class="box">
      <div class="media">
        <div class="media-content">
          <p class="title is-5 -result-item-title">
            Movie name
          </p>
          <p class="subtitle is-7 is-pulled-right">
            2012
          </p>
        </div>
      </div>
    </div>
  </a>
</template>
<style lang="scss">
@import "@/assets/styles/bulma.scss";

.-result-item {
  display: block;
  margin-bottom: .5rem;

  &:hover {
    .-result-item-title {
      text-decoration: underline;
    }
  }

  .-result-item-title {
    color: $primary;
  }

  .box {
    padding: .5rem;
    margin-bottom: 0;
  }
}
</style>
