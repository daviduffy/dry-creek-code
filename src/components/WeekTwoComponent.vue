<template>
  <div>
    <h2>Hypertext Markup Language (HTML)</h2>

    <ul>
      <li>Hypertext: any text that can be displayed on a computer screen.</li>

      <li>Markup: a set of instructions that provide meaning to the text within a document. These instructions define how tech should be structured, formatted, and laid out.</li>

      <li>Language: The agreed-upon way that we present this information to the browser. CSS and Javascript are also languages.</li>
    </ul>

    <p>
      If you have ever used a word processing program like Microsoft Word or Google Docs, you've probably
applied formatting to blocks of text. HTML serves a similar purpose by offering text formatting
instructions to web browsers through tags. "Tags" (sometimes called elements) are the "markup" in Hypertext Markup Language.
    </p>

    <p>HTML tags are enclosed in angle brackets, and left angle bracket and a right angle bracket.  An HTML element includes both the opening and closing tags, and the content enclosed between them.</p>

    <pre>&lt;h1&gt;I am heading tag!&lt;/h1&gt;</pre>

    <p>Even though these tags serve as instructions for the browser, they often have user-friendly human-readable words like title, body, header, main, and footer. For example, the p element represents a paragraph on the page and then includes an opening p-tag, the content, and the closing p-tag.</p>

    <pre>&lt;p&gt;I am a paragraph tag. I usually contain a whole paragraph, or at least a few sentences.&lt;/p&gt;</pre>

    <p>An HTML element includes both the opening and closing tags, and the content enclosed between them. It represents a specific part of the webpage's structure or content. For example, the p-element represents a paragraph on the page and then includes an opening p-tag, the content, and the closing p-tag. HTML is understood by all browsers, whether on phones, tablets, or desktop computers. </p>

<!--         <div id="week-1-jump">
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
    </div> -->
  </div>
</template>

<script>
</script>

<style>
pre {
  max-width: 100%;
  text-wrap: balance;
  display: block;
  background-color: var(--grey);
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-family: monospace;
  margin: 1.6rem 4.8rem;
}
</style>