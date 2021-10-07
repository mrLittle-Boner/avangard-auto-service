<template>
  <section class="services" id="services">
    <div class="container">
      <h2 class="heading">Наши услуги</h2>
      <ul class="list">
        <li class="item">
          <img
            class="item-img" 
            src="@/assets/images/1.jpeg"
            alt="car wahing">
          <span class="item-text">Мойка</span>
        </li>
        <li class="item">
          <img
            class="item-img"
            src="@/assets/images/2.jpg"
            alt="car polishing">
          <span class="item-text">Полировка</span>
        </li>
        <li class="item">
          <img
            class="item-img"
            src="@/assets/images/3.jpg"
            alt="dry fog">
          <span class="item-text">Сухой туман</span>
        </li>
        <li class="item">
          <img 
            class="item-img"
            src="@/assets/images/4.jpg"
            alt="dry cleaning">
          <span class="item-text">Химчистка</span>
        </li>
        <li class="item">
          <img 
            class="item-img"
            src="@/assets/images/5.jpg"
            alt="wax for cars">
          <span class="item-text">Нанесение защитных покрытий</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.list {
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.item {
  height: 260px;
  width: 300px;
  display: flex;
  flex-direction: column;
}
.item-img {
  object-fit: cover;
  width: 100%;
  height: 75%;
}
.item-text {
  font-size: 25px;
  flex-grow: 1;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 748px) {
  .item {
    width: 45%;
  }
}

@media screen and (max-width: 585px) {
  .item {
    width: 70%;
  }
}

@media screen and (max-width: 400px) {
  .item {
    width: 95%;
  }
}
</style>