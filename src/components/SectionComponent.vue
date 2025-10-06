<template>
  <section class="section">
    <div id="week-1" class="week week-1">
      <div class="masthead">
        <h2>Week 1</h2>

        <p>
          In week 1 we will do some introductions, and I will ask some questions about what everyone wants to learn. I will also introduce the two areas that we can work on together:
        </p>
        <ul>
          <li>Computer Science Basics</li>
          <li>Website Development</li>
        </ul>
        <div id="week-1-jump" class="jump">
          <div class="jump__content">
            <div class="accordion">
              <input class="accordion__input" type="checkbox" name="accordion" id="acc1">
              <label class="accordion__label" for="acc1">What is Computer Science?</label>
              <div class="accordion__content">
                <div class="accordion__c-padding">
                  <p>Computer Science is like teaching a robot how to play with toys.</p>
                  <ul>
                    <li>You tell the robot what steps to take, like “pick up block → stack block → don’t knock it over.”</li>
                    <li>The robot doesn’t know why you want it to do things, it just follows your steps carefully.</li>
                    <li>If you forget a step, the robot gets confused or makes a mess.</li>
                  </ul>
                  <p>So computer science is the study of how to give robots (computers) clear, step-by-step instructions so they can help us with games, stories, math, or anything else.</p>
                  <a
                    href="https://studio.code.org/courses/coursec-2025/units/1/lessons/3/levels/1"
                    target="blank"
                  >
                    Angry Birds Block Coding
                  </a>
                </div>
              </div>
            </div>
            <div class="accordion">
              <input class="accordion__input" type="checkbox" name="accordion" id="acc2">
              <label class="accordion__label" for="acc2">What is Website Development?</label>
              <div class="accordion__content">
                <div class="accordion__c-padding">
                  <p>Website development (also called frontend web development) is like drawing and decorating a shop window.</p>
                  <ul>
                    <li>The shop is the website.</li>
                    <li>The window is what people see on their computer or phone screen.</li>
                    <li>You put up pictures, words, and buttons so people can look, read, or click.</li>
                    <li>The “frontend” part is everything you can see and touch — the colors and images, the buttons, the menus.</li>
                  </ul>
                  <p>So frontend web development is just making the parts of a website that people see and interact with.</p>
                  <a
                    href="https://jsbin.com/sunukupuvu/edit?html,output"
                    target="blank"
                  >
                    JSBin.com Demo Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="jump-container">
          <button class="button button--jump" data-id="week-1-jump" onclick="expand(this)">See more</button>
        </div>
      </div>
    </div>
    <aside-component />
  </section>
</template>

<script>
import AsideComponent from './AsideComponent.vue';
</script>
