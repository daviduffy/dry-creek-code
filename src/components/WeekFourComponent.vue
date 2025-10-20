<template>
  <div>
    <p>
      CSS, or Cascading Style Sheets, is the name we give to the rules and instructions that control the presentation and layout of elements on a web page. CSS defines how HTML elements should appear: things like fonts, colors, and sized and position of things.
    </p>
    <p>
      When you make a website, it starts out a lot like a plain doll or action figure — it has a shape, but no color, clothes, or accessories. That plain figure is what HTML does: it builds the basic parts, like the head, arms, and legs.
    </p>
    <p>
      Then comes CSS, which is like decorating your action figure. CSS lets you add clothes, choose colors, give them a hat, maybe even a sword, or a cape, or clothes and makeup. HTML makes sure the action figure exists, but CSS makes it look exciting and full of personality. Without CSS, the figure is still there — it just looks like a blank model waiting to be brought to life.
    </p>
  </div>
</template>

<script>
</script>

<style>
.accordion {
  border: 2px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
}
.accordion__label {
  display: block;
  padding: 0.8rem;
  background: #f0f0f0;
  cursor: pointer;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  transition: background-color 0.2s ease;
}
.accordion__label:hover, .accordion__label:focus, .accordion__label:active {
  background-color: #d7d7d7;
}

.accordion__input {
  display: none;
}
.accordion__content {
  max-height: 0;
  overflow: hidden;
  background: #fff;
  transition: max-height 0.4s ease-in-out;
}
.accordion__c-padding {
  padding: 0.8rem;
}

.accordion__input:checked ~ label ~ .accordion__content {
  max-height: 400px;
}
</style>