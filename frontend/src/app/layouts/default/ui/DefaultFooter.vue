<script setup lang="ts">
import { FOOTER_CONTACTS } from '../model/constants';
import { QTIM_EMAIL, QTIM_PHONE } from '~/shared/constants';
import { FooterLinks } from '~/features/navigation';
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div>
        <p class="question-text">
          Is&nbsp;there a&nbsp;project?
        </p>
        <div class="contacts">
          <p class="work-text">
            Let&rsquo;s work together
          </p>
          <address class="contacts-info" itemscope itemtype="https://schema.org/Organization">
            <p class="contacts-info-label">
              For all questions
            </p>
            <NuxtLink :to="QTIM_PHONE.to" itemprop="telephone" class="link">
              {{ QTIM_PHONE.label }}
            </NuxtLink>
            <NuxtLink :to="QTIM_EMAIL.to" itemprop="email" class="link">
              {{ QTIM_EMAIL.label }}
            </NuxtLink>
            <div
              v-for="(contact, i) in FOOTER_CONTACTS"
              :key="`contact-${i}`"
              itemprop="address"
              itemscope
              itemtype="https://schema.org/PostalAddress"
              class="contact-office"
            >
              <p class="title" v-html="contact.title" />
              <p class="address" v-html="contact.address" />
              <button class="icon-btn">
                <i-tg />
              </button>
            </div>
          </address>
        </div>
      </div>
      <FooterLinks />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $purple;
  color: $black;

  .container {
    display: flex;
    overflow: hidden;
    max-width: 1216px;
    min-height: 900px;
    flex-direction: column;
    justify-content: space-between;
    padding: 140px 20px 25px;
    margin: 0 auto;

    @include md {
      min-height: auto;
      padding: 25px;
    }

    .question-text {
      margin-bottom: 56px;
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 120%;

      @include md {
        margin-bottom: 20px;
      }
    }

    .contacts {
      display: flex;
      max-width: 984px;
      justify-content: space-between;

      @include md {
        flex-direction: column;
        gap: 60px;
      }

      .work-text {
        font-size: 112px;
        font-weight: 400;
        line-height: 100%;
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 15px;

        @include md {
          font-size: 29px;
        }
      }

      .contacts-info {
        max-width: 223px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;

        .contacts-info-label {
          margin-bottom: 12px;
        }

        .link {
          display: block;
          margin-bottom: 4px;
          color: inherit;
          transition: color 0.3s;

          &:hover {
            color: $blue;
          }
        }

        .contact-office {
          margin-top: 36px;

          .title {
            margin-bottom: 12px;
          }

          .address {
            margin-bottom: 8px;
          }

          .icon-btn {
            display: flex;
            width: 32px;
            height: 32px;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: $black;
            cursor: pointer;
            transition: background 0.3s;

            &:hover {
              background-color: $blue;
            }
          }
        }
      }
    }
  }
}
</style>