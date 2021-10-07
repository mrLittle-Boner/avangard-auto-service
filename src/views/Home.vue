<template>
  <div class="about">
    <div class="container">
      <section class="about__info">
        <h2 class="heading">Кто мы</h2>
        <p class="about__info-text">
          Мы - команда профессионалов своего дела. Наше упорство и опыт, накопленный годами, позволяют быстро добиваться качественного результата.
        </p>
      </section>

      <div class="map-wrapper">
        <img class="map" src="@/assets/images/ymap.jpg" alt="our location">
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
}
.about__info-text {
  font-size: 20px;
  max-width: 80%;
  margin: auto;
  text-align: center;
}
.map {
  margin: 0 auto;
  height: 100%;
  object-fit: scale-down;
  display: block;
}

.contacts {
  background-color: #e9e9e9a6;
}

.contacts__content {
  display: flex;
  justify-content: space-around;
}
@media screen and (max-width: 550px) {
  .map {
    width: 100%;
  }
}
</style>