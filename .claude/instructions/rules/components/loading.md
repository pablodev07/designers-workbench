# Loading

## Loading

###**Show spinners when retrieving data or performing slow computations.**

Spinners are animated SVGs or GIFs. They reduce the use of awkward white screens and blank containers to communicate that the system is working. Use spinners when a component on a page is making an asynchronous update without refreshing the page.

| [image]*Card*  | Center the spinner horizontally and vertically within the container. Don’t place spinners directly over text or other visual elements on a page without first applying a light or dark mask. |
| :--- | --- |
| |   |
| [image]*List View*  | If necessary, you can use a text label to communicate what the system is doing, such as “Uploading data …” |

**Example Spinner Loading Process:**

| [image]*Card Loading*  | [image]*Lazy Loading*  | [image]*List Loading*  |
| --- | --- | --- |
| [image]*Modal Loading*  | [image]*Full Screen Loading*  |   |

###**Stencils are placeholders that visually communicate that content is in the process of loading.**

| | Stencils abstractly represent what the resulting content layout will look like. Use stencils for full page refreshes, not asynchronous updates. Stencils offer a more visually appealing experience than dozens of spinners animating at the same time or a blank white page. Use stencils when data takes longer than 300 ms to retrieve. For less than 300 ms, just show the data. If the data takes 301 ms to load, the stencil fades-in promptly and then cross-fades to the data. Do not have a “white flash” between stencils and data. If a component is only displayed when it has data, then don’t show a stencil. |
| --- | --- |

Keep stencils simple and lightweight, by using simple, subtle shapes to indicate content, but don’t include the placement of buttons and other UI elements. Keep the shape heights consistent to reduce visual noise.

Stencils should be responsive and stretch to fill the container that they are in.

Load stencils from the top left of the page to the bottom right.

| **Table Data Loading Stencil**  For table lists, don’t fill the screen up with stencils. Render a table data row stencil 20 times and reduce the opacity of each row by 5% to create a fade effect from 100% to 0% opacity, giving an infinite data effect. (see example below) | **Record Detail Stencil**  Feed fades out over five instances to indicate infinite scroll. Each related list shows one instance of the component-specific stencil.   |
| --- | --- |
| | [image] |

---
*Generated from SLDS Rules Generator*
