export const initialContent = `
<h1>Unlocking Effortless Web Styling with Tailwind CSS</h1>
      <p>
        In the dynamic landscape of web development, crafting beautiful and
        responsive user interfaces is a cornerstone. However, the traditional
        approach to styling web applications often involves tedious tweaking of
        CSS properties, leading to cumbersome workflows and bloated codebases.
        Enter Tailwind CSS – a utility-first CSS framework that revolutionizes
        the way developers approach styling.
      </p>
      <h2>What is Tailwind CSS?</h2>
      <p>
        Tailwind CSS is not your typical CSS framework. Rather than providing
        pre-designed components like Bootstrap or Foundation, Tailwind offers a
        set of utility classes that you can use directly in your HTML markup.
        These classes cover a wide range of styling needs, from margin and
        padding to typography and color.
      </p>
      <div className="advantage">
        <h2>Advantages of Tailwind CSS:</h2>
        <ol>
          <li>
            <strong>Rapid Development:</strong>
            <p>
              With Tailwind, you can rapidly prototype and build UIs without
              writing custom CSS. The intuitive utility classes allow you to
              style elements on the fly, saving precious development time.
            </p>
            <pre>
              <code className="language-html">
                &lt;button class="bg-blue-500 hover:bg-blue-700 text-white
                font-bold py-2 px-4 rounded"&gt;Button&lt;/button&gt;
              </code>
            </pre>
          </li>
          <li>
            <strong>Customization:</strong>
            <p>
              While utility classes are provided out-of-the-box, Tailwind also
              allows for extensive customization. You can easily configure color
              palettes, spacing scales, and more to match your project's design
              system.
            </p>
            <pre>
              <code className="language-html">
                &lt;div class="bg-gray-200 p-4"&gt; &lt;p
                class="text-red-500"&gt;Error message&lt;/p&gt; &lt;/div&gt;
              </code>
            </pre>
          </li>
          <li>
            <strong>Scalability:</strong>
            <p>
              Tailwind scales effortlessly from small projects to large
              codebases. The modular nature of utility classes promotes
              consistency and reusability across your application.
            </p>
            <pre>
              <code className="language-html">
                &lt;div class="grid grid-cols-1 md:grid-cols-2 gap-4"&gt;
                &lt;div&gt;Column 1&lt;/div&gt; &lt;div&gt;Column 2&lt;/div&gt;
                &lt;/div&gt;
              </code>
            </pre>
          </li>
          <li>
            <strong>Responsive Design:</strong>
            <p>
              Responsive design is a breeze with Tailwind. The framework
              provides utilities for creating responsive layouts and modifying
              styles based on screen size, ensuring a seamless user experience
              across devices.
            </p>
            <pre>
              <code className="language-html">
                &lt;div class="md:flex md:justify-between md:items-center"&gt;
                &lt;p class="text-center md:text-left"&gt;Responsive
                Text&lt;/p&gt; &lt;/div&gt;
              </code>
            </pre>
          </li>
          <li>
            <strong>Developer Experience:</strong>
            <p>
              Tailwind enhances the developer experience by promoting a clear
              separation of concerns. Since styles are defined directly in the
              HTML markup, it's easier to understand and maintain the codebase,
              especially for teams collaborating on projects.
            </p>
            <pre>
              <code className="language-html">
                &lt;div class="container mx-auto"&gt; &lt;p
                class="text-lg"&gt;Responsive Text&lt;/p&gt; &lt;/div&gt;
              </code>
            </pre>
          </li>
        </ol>
      </div>
      <blockquote className="bg-gray-100 border-l-4 border-gray-500 italic my-8 p-4">
        <p>
          “Using Tailwind CSS has truly streamlined our development process. We
          can now focus more on building features rather than writing and
          maintaining custom CSS.”
        </p>
        <cite>- John Doe, Lead Developer at ABC Corp</cite>
      </blockquote>
      `
