import React from "react";
import { Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="my-5">
      <h2 className="fw-bold text-center">BLOGS</h2>
      <Container className="my-5">
        <div>
          <h2 className="fw-bold">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>Four (4) ways to manage a state in a React application</p>
          <p>
            <span className="fw-bold">Local (UI) state –</span>
            Local state is data we manage in one or another component. Local
            state is most often managed in React using the useState hook. For
            example, local state would be needed to show or hide a modal
            component or to track values for a form component, such as form
            submission, when the form is disabled and the values of a form’s
            inputs.
          </p>
          <p>
            <span className="fw-bold">Global (UI) state –</span>
            Global state is data we manage across multiple components. Global
            state is necessary when we want to get and update data anywhere in
            our app, or in multiple components at least. A common example of
            global state is authenticated user state. If a user is logged into
            our app, it is necessary to get and change their data throughout our
            application.
          </p>
          <p>
            <span className="fw-bold">Server state –</span>
            Data that comes from an external server that must be integrated with
            our UI state. Server state is a simple concept, but can be hard to
            manage alongside all of our local and global UI state.
          </p>
          <p>
            <span className="fw-bold">URL state –</span> Data that exists on our
            URLs, including the pathname and query parameters. URL state is
            often missing as a category of state, but it is an important one. In
            many cases, a lot of major parts of our application rely upon
            accessing URL state. Try to imagine building a blog without being
            able to fetch a post based off of its slug or id that is located in
            the URL!
          </p>
        </div>
        <div>
          <h2 className="fw-bold">How does prototypical inheritance work?</h2>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object.getPrototypeOf and Object.
          </p>
        </div>
        <div>
          <h2 className="fw-bold">
            What is a unit test? Why should we write unit tests?
          </h2>
          <p>
            Unit testing is a component of test-driven development (TDD), a
            pragmatic methodology that takes a meticulous approach to building a
            product by means of continual testing and revision. This testing
            method is also the first level of software testing, which is
            performed before other testing methods such as integration testing.
            Unit tests are typically isolated to ensure a unit does not rely on
            any external code or functions. Testing can be done manually but is
            often automated.The main objective of unit testing is to isolate
            written code to test and determine if it works as intended.
          </p>
          <p>
            Unit testing is an important step in the development process,
            because if done correctly, it can help detect early flaws in code
            which may be more difficult to find in later testing stages.
          </p>
        </div>
        <div>
          <h2 className="fw-bold">React vs. Angular vs. Vue?</h2>
          <p>
            <span className="fw-bold">React -</span> Facebook released React.js
            in March 2013 as a JavaScript library. Because React just provides
            one view, it is not appropriate for building an MVC architecture:
            one must solve the model and controller himself. Besides this, there
            are only advantages and lots of advantages. One of the biggest of
            them is that React.js uses a virtual DOM that only compares the
            previous HTML code differences and only loads the different parts.
            This significantly impacts the loading times. In a positive way, of
            course. With React.js, we handle the markup and the logic in the
            same file, which means we can output variables in a view component
            (JSX). React offers a type of mobile solutions for applications
            called React-Native.
          </p>
          <p>
            <span className="fw-bold">Angular -</span> AngularJS was developed
            in 2009 by Google. The first version was Angular.JS. Angular is
            currently known as a JavaScript framework. Obviously, all
            significant Google projects have been developed with Angular.
            Angular.js is an MVC framework. A major disadvantage of Angular is
            that it uses a regular DOM, and thus, the entire tree structure of
            the HTML tags is updated, which massively impacts the loading time.
            Angular.js has its Ionic framework for mobile applications.
          </p>

          <p>
            <span className="fw-bold">Vue -</span>Vue.js is a JavaScript-based
            progressive framework for creating single-page applications. It was
            created with scalability and incrementality in mind, as well as ease
            of integration with other view layer frameworks. Vue is built from
            the bottom up to be progressively adaptable, unlike other monolithic
            frameworks. The core library focuses solely on the view layer, and
            it’s simple to use and connect with other libraries or applications.
            This framework’s fast learning angle is almost a trademark. It’s a
            flexible framework that may be used as a library or a full-fledged
            framework for developing large web applications. Vue.js combines the
            useful principles of the Angular and React frameworks and presents
            them in a minimalistic modern style. Web developers use Vue.js to
            create frontend user interfaces for web-based and hybrid mobile
            applications.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
