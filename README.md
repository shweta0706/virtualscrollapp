
## Sample Component with Virtual Scroll
This Angular component demonstrates the implementation of virtual scrolling using the Angular CDK's cdk-virtual-scroll-viewport. The project is built with Angular 17.2.3 and node version is 17.2.3.

## Features
Virtual Scrolling: Efficiently renders a large list of items by only rendering the items currently visible in the viewport, reducing DOM load and improving performance.

## Installation
Clone the project from the repository and do the npm install and run the command ng serve.

## Code Explanation
sample.component.ts
Imports:

ScrollingModule: Imported from @angular/cdk/scrolling to enable virtual scrolling.

## Component:
SampleComponent: Defines the logic for the virtual scroll component.
items: An array holding the data to be displayed in the scrollable viewport.
ngOnInit(): Populates the items array with 1000 items labeled as Item #0, Item #1, ..., Item #999.

