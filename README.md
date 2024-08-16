HTML

- We have a basic HTML structure with a header, main content area, and footer.
- Inside the main content area, we have a div with class slideshow-container that holds the slideshow.
- The slideshow consists of multiple div`s with class `slide, each containing an image and a div with class slide-info for the image description.
- We also have two buttons with classes prev and next for navigating the slideshow.

CSS (in styles.css file)

- We style the slideshow container and slides to create a basic slideshow layout.
- We use flexbox to arrange the slides horizontally.
- We add transitions to smoothly move the slides when navigating.
- We style the slide-info div to appear on hover, with a background color and opacity.

JavaScript (in script.js file)

- We select all slides, prev button, and next button using document.querySelectorAll and document.querySelector.
- We set up an interval to automatically slide to the next image every 5 seconds (5000 ms).
- We define a showSlide function that translates the slides to the correct position based on the current slide index.
- We add event listeners to the prev and next buttons to navigate the slideshow and reset the interval.
- We add event listeners to each slide to pause the interval on mouseover and resume on mouseout.

How it works

1. The slideshow starts automatically, moving to the next slide every 5 seconds.
2. When you hover over a slide, the interval pauses, and the slide info appears.
3. When you move the mouse away, the interval resumes.
4. You can navigate the slideshow manually using the prev and next buttons.
5. When you click a button, the interval resets, and the slideshow moves to the next or previous slide.
