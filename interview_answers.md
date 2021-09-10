# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
    API context is used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authenication...

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Action is an object that tells the reducer how to change the state, and it must contain a type property and optionally contain a pay load property. A reducer is a function that returns some state data, and is triggered by an action type. A store is an object that hold the application state data. 

    Single source of truth means that the only way to change your data in UI is to dispathc redux action which will change the state within redux reducer. And your react components will watch this reducer and if that reducer changes, then UI will changes itself too. But never other way around. 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
    "Reduc-thunk" allows you to wirte action creators that return a function instead of an action, The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives that store methods dispatch and getStore as parameters. 

4. What is your favorite state management system you've learned and this sprint? Please explain why!
    My favorite would be Redux. It has centrailized state management system which is more efficient for developing large, complex applications with many components. whenever a component is updated, React re-renders all components inside that part of the component tree, so we don't need to render unnecessary components.  