<template>
  <div class="phone">
    <a class="phones">8 (965) 310-42-29</a>
    <a class="phones">8 (495) 777-30-89</a>
  </div>
</template>

<style scoped>
.phones {
  display: block;
  font-size: 20px;
}
@media screen and (max-width: 850px) {
  .phones {
    font-size: 16px;
  }
}
@media screen and (max-width:560px){
  .phone {
    margin-bottom: 10px;
  }
}
</style>