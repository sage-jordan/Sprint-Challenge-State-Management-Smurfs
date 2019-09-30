1. What problem does the context API help solve?

    <!-- Context API: solves prop 'drilling', or having to pass props through every component down the 'tree'. -->

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each 
piece do? Why is the store known as a 'single source of truth' in a redux application?

    <!-- Actions: can use middleware, and lots of different things can go in there. They return objects that have a type and payload to dispatch in the reducer. -->
    <!-- Reducers: are used for the initial state of your application, and all the funtions you will use to manipulate that state. -->
    <!-- Store: is immutable storage. You usually put all reducers and middleware in here. -->

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    <!-- Application state: is data that can be used all around the code, while component state is specific data for one component or function. -->

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    <!-- Thunk: allows us to use asynchrinous calls or functions within redux. -->

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    <!-- Redux isn't too bad. It's still fresh in my mind so that's what I'll be using! I did love Context API, though and will be using it in future projects. -->

