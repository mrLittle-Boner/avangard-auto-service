<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__address">
          <h3 class="footer__heading">Адрес:</h3>
          <p>Малаховка, Касимовское шоссе 3а</p>
        </div>

        <div class="footer__hours">
          <h3 class="footer__heading">Часы работы:</h3>
          <p>C 10:00 до 19:00</p>
        </div>

        <ul class="footer__phones">
          <h3 class="footer__heading">Телефоны:</h3>
          <APhones />
        </ul>

        <div class="footer__social">
          <h3 class="footer__heading">Наш инстраграм:</h3>
          <p><a class="footer__social-link" href="https://vk.com/away.php?to=https%3A%2F%2Finstagram.com%2Favangard_auto__%3Futm_medium%3Dcopy_link&cc_key=" target="_blank">Avangard Service</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import APhones from '@/components/APhones.vue'

export default defineComponent({
  components: { APhones }
})
</script>


<style>
.footer {
  background-color: black;
  font-size: 20px;
}
.footer__content {
  color: whitesmoke;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  gap: 15px;
}
.footer__heading {
  margin-bottom: 10px;
}
.footer__social-link {
  text-decoration: underline;
}
.footer__address p {
  max-width: 241px;
  margin: 0 auto;
}
@media screen and (max-width: 850px) {
  .footer {
    font-size: 16px;
  }
}

@media screen and (max-width: 725px) {
  .footer__address p {
    max-width: 175px;
  }
}

@media screen and (max-width: 658px) {
  .footer__content {
    flex-direction: column;
  }
  .footer__address {
    max-width: 100%;
  }
  .footer {
    text-align: center;
  }
}
</style>